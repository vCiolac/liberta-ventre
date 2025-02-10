/* eslint-disable prettier/prettier */
import { generateUUID } from './uuid';

function handleError(message: string, error: any) {
  // eslint-disable-next-line no-console
  console.error(message, error);
}

export function trackEvent(eventName: string, eventData: Record<string, any>) {
  const eventId = generateUUID();

  // Envia para o pixel do Meta (client-side) com o mesmo payload original
  if (typeof window !== `undefined` && window.fbq) {
    window.fbq(`track`, eventName, { ...eventData, event_id: eventId });
  }

  // Remove "event_label" do payload e insere-o em "custom_data" para o envio via API
  const { event_label, ...otherData } = eventData;
  const serverPayload: Record<string, any> = {
    eventName,
    event_id: eventId,
    ...otherData,
  };

  // Se "event_label" estiver definido, adiciona-o dentro de "custom_data"
  if (event_label) {
    serverPayload.custom_data = { event_label };
  }

  fetch(`/api/conversions`, {
    method: `POST`,
    headers: { 'Content-Type': `application/json` },
    body: JSON.stringify(serverPayload),
  }).catch((err) => handleError(`Erro ao enviar evento para Conversions API:`, err));
}
