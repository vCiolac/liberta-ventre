/* eslint-disable prettier/prettier */
import { generateUUID } from './uuid';

function handleError(message: string, error: any) {
  // eslint-disable-next-line no-console
  console.error(message, error);
}

interface EventData extends Record<string, any> {
  event_label?: string;
}

export function trackEvent(eventName: string, eventData: EventData) {
  const eventId = generateUUID();

  const defaultData = {
    action_source: `website`,
    event_source_url: typeof window !== `undefined` ? window.location.href : ``,
  };

  const mergedData = {
    ...defaultData,
    ...eventData,
    event_id: eventId,
  };

  // Envia para o pixel do Meta (client-side)
  if (typeof window !== `undefined` && window.fbq) {
    window.fbq(`track`, eventName, mergedData);
  }

  // Ajusta o payload para a API: se houver event_label, mova-o para custom_data
  const { event_label, ...otherData } = mergedData;
  const serverPayload: Record<string, any> = {
    eventName,
    ...otherData,
  };

  if (event_label) {
    serverPayload.custom_data = { event_label };
  }

  fetch(`/api/conversions`, {
    method: `POST`,
    headers: { 'Content-Type': `application/json` },
    body: JSON.stringify(serverPayload),
  }).catch((err) => handleError(`Erro ao enviar evento para Conversions API:`, err));
}
