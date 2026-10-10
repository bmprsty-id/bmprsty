export const WHATSAPP_PHONE_DISPLAY = '+62 851-5076-2029';
export const WHATSAPP_PHONE_NUMBER = '6285150762029';
export const DEFAULT_WHATSAPP_MESSAGE = 'Hi BMPRSTY, saya ingin konsultasi mengenai project web.';

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage ? encodeURIComponent(customMessage.trim()) : encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${text}`;
}

export function getProjectWhatsAppUrl(projectName: string, category: string): string {
  const message = `Hi BMPRSTY, saya tertarik dengan project ${projectName} (${category}) dan ingin mendiskusikan kebutuhan project web saya.`;
  return getWhatsAppUrl(message);
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hi BMPRSTY, saya ingin konsultasi mengenai layanan ${serviceTitle} untuk project saya.`;
  return getWhatsAppUrl(message);
}
