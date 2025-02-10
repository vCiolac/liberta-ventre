/* eslint-disable prettier/prettier */
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line consistent-return
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    return res.status(405).json({ error: `Method not allowed` });
  }

  const { eventName, event_id, ...eventData } = req.body;
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

  const userData = {
    client_ip_address: ipAddress,
    client_user_agent,
  };

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        user_data: userData,
        ...eventData,
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
