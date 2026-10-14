// Central contact configuration. Update WHATSAPP_NUMBER once the real business
// number is confirmed (digits only, international format, e.g. "628123456789").
// While empty, WhatsApp buttons display a "number coming soon" state instead of a fake link.
export const WHATSAPP_NUMBER = "";
export const BUSINESS_EMAIL = "salestropivaraindo@gmail.com";

export const hasWhatsApp = () => /^\d{8,15}$/.test(WHATSAPP_NUMBER);

export function whatsappLink(message: string) {
  if (!hasWhatsApp()) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body = "") {
  const q = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
  return `mailto:${BUSINESS_EMAIL}?${q}`;
}
