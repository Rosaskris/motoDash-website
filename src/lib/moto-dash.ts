export const product = {
  motorcycle: 'SYM ADXTG 175',
  minimumAndroid: 10,
  minimumAndroidAuto: '17.4',
  // App de pago en Google Play: un solo pago, actualizaciones incluidas.
  license: { oneTimePayment: true, paidUpdates: false },
  capabilities: { callsOnDashboard: true, whatsappMessageAlertsOnDashboard: false, replyFromDashboard: false, otherDashboardMaps: false, modifiesMotorcycle: false, lockedPhone: true },
  dashboardInfo: ['Odómetro', 'Voltaje de batería', 'Trip A', 'TCS', 'RPM', 'Gato lateral'],
  // Soporte: la app se compra en Google Play, no por este chat.
  whatsapp: { display: '+57 313 7044065', number: '573137044065' },
  // Redes oficiales: mismo usuario en las dos plataformas.
  social: {
    handle: 'moto.dash.oficial',
    instagram: 'https://www.instagram.com/moto.dash.oficial?utm_source=qr&psln=MW5qbG4xYWFrZTU0bw==',
    tiktok: 'https://www.tiktok.com/@moto.dash.oficial',
  },
  // Ficha de Google Play. Vacía mientras la app no esté publicada; al publicarla será
  // https://play.google.com/store/apps/details?id=com.motodash.app
  playStoreUrl: '',
  // Responsable del tratamiento de datos (Ley 1581 de 2012), para /privacidad y /eliminar-datos.
  legal: {
    responsible: 'Krisbel Rosas',
    idNumber: '1127918438',
    city: 'Medellín',
    email: 'motodashoficial@gmail.com',
    policyDate: '28 de octubre de 2026',
  },
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${product.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// Enlace a Google Play: solo existe cuando la app ya está publicada.
export function playStoreLink(): string | null {
  return product.playStoreUrl || null;
}
