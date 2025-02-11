/* eslint-disable prettier/prettier */
import type { NextApiRequest, NextApiResponse } from 'next';
import { createHash } from 'crypto';

function hashData(data: string): string {
  return createHash(`sha256`).update(data.trim().toLowerCase()).digest(`hex`);
}

// eslint-disable-next-line consistent-return
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    return res.status(405).json({ error: `Method not allowed` });
  }

  const { eventName, event_id, custom_data, user_data, ...otherData } = req.body;
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  // const testEventCode = `TEST57247`;

  if (!pixelId || !accessToken) {
    return res.status(500).json({ error: `Pixel ID ou Access Token não definidos.` });
  }

  const client_ip_address = req.headers[`x-forwarded-for`] || req.socket.remoteAddress || ``;
  const client_user_agent = req.headers[`user-agent`] || ``;

  // Normaliza, caso seja array, usamos o primeiro valor
  let ipAddress = ``;
  if (typeof client_ip_address === `string`) {
    ipAddress = client_ip_address;
  } else if (Array.isArray(client_ip_address)) {
    [ipAddress] = client_ip_address;
  }

  // Monta o objeto user_data mesclando o que foi enviado e os dados do cliente.
  // Os campos que devem ser enviados em hash (SHA256) são: em, ph, fn, ln, ge, db, ct, st, zp, country, external_id.
  const keysToHash = [`em`, `ph`, `fn`, `ln`, `ge`, `db`, `ct`, `st`, `zp`, `country`, `external_id`];
  const keysNoHash = [`fbc`, `fbp`, `ig_account_id`, `ig_sid`];

  const cookies = req.headers.cookie || ``;
  const fbcMatch = cookies.match(/(?:^|; )_fbc=([^;]*)/);
  const fbc = fbcMatch ? decodeURIComponent(fbcMatch[1]) : undefined;

  const mergedUserData: Record<string, any> = {
    client_ip_address: ipAddress,
    client_user_agent,
    fbc,
  };

  if (user_data && typeof user_data === `object`) {
    keysToHash.forEach((key) => {
      if (user_data[key]) {
        mergedUserData[key] = hashData(user_data[key]);
      }
    });
    keysNoHash.forEach((key) => {
      if (user_data[key]) {
        mergedUserData[key] = user_data[key];
      }
    });
  }

  // Parâmetros obrigatórios para eventos do site:
  // action_source deve ser "website" e event_source_url é a URL da página
  const action_source = otherData.action_source || `website`;
  const event_source_url = otherData.event_source_url || req.headers.referer || ``;

  // Monta o payload conforme a estrutura recomendada pela Meta
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        action_source,
        event_source_url,
        user_data: mergedUserData,
        custom_data: {
          ...custom_data,
          ...otherData,
        },
      },
    ],
  };

  // const testUrl = `https://graph.facebook.com/v15.0/${pixelId}/events?access_token=${accessToken}&test_event_code=${testEventCode}`;

  const url = `https://graph.facebook.com/v15.0/${pixelId}/events?access_token=${accessToken}`;

  try {
    const response = await fetch(url, {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: result });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ error: `Erro ao enviar evento para a Conversions API`, details: error });
  }
}
