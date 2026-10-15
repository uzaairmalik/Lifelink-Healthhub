// Central site configuration for LifeLink HealthHub.
//
// WHATSAPP_NUMBER: the clinic's WhatsApp number in international format WITHOUT
// the leading '+', e.g. "923001234567".
// Leave it as an empty string ("") until a real clinic number is configured.
// When empty, all forms show an honest "not configured yet" note instead of
// pretending a message was sent — never a fake success state.
export const WHATSAPP_NUMBER = "";

// Build a wa.me link with a prefilled message. Returns null when no number
// is configured.
export function whatsappLink(message) {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "LifeLink HealthHub",
  city: "Abbottabad, Pakistan",
  email: "info@lifelinkhealthhub.com",
};
