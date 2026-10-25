export const product = {
  motorcycle: 'SYM ADXTG 175',
  minimumAndroid: 10,
  minimumAndroidAuto: '17.4',
  // Un solo pago: la licencia cubre 3 dispositivos distintos, siempre que la moto sea la misma.
  license: { devices: 3, sameMotorcycleOnly: true, oneTimePayment: true, paidUpdates: false },
  capabilities: { callsOnDashboard: true, whatsappMessageAlertsOnDashboard: false, replyFromDashboard: false, otherDashboardMaps: false, modifiesMotorcycle: false, lockedPhone: true },
  dashboardInfo: ['Odómetro', 'Voltaje de batería', 'Trip A', 'TCS', 'RPM', 'Gato lateral'],
  // Contacto único: por este número se entrega el código (token) que activa la app.
  whatsapp: { display: '+57 313 7044065', number: '573137044065' },
  // Redes oficiales: mismo usuario en las dos plataformas.
  social: {
    handle: 'moto.dash.oficial',
    instagram: 'https://www.instagram.com/moto.dash.oficial?utm_source=qr&psln=MW5qbG4xYWFrZTU0bw==',
    tiktok: 'https://www.tiktok.com/@moto.dash.oficial',
  },
  // Enlace del archivo publicado en la página. Vacío mientras no esté publicado.
  apkUrl: '',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${product.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// Descarga directa desde la página: solo existe cuando ya hay archivo publicado.
export function apkDownloadUrl(): string | null {
  return product.apkUrl || null;
}
