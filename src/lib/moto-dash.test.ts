import { describe, expect, it } from 'vitest';
import { playStoreLink, product, whatsappLink } from './moto-dash';
describe('Condiciones de Moto Dash', () => {
  it('identifica al responsable del tratamiento de datos', () => {
    expect(product.legal).toMatchObject({
      responsible: 'Krisbel Rosas',
      idNumber: '1127918438',
      city: 'Medellín',
      email: 'motodashoficial@gmail.com',
    });
  });
  it('la licencia es para la misma moto', () => expect(product.license.sameMotorcycleOnly).toBe(true));
  it('requiere un pago único', () => expect(product.license.oneTimePayment).toBe(true));
  it('incluye actualizaciones sin otro pago', () => expect(product.license.paidUpdates).toBe(false));
  it('requiere Android 10 o superior', () => expect(product.minimumAndroid).toBe(10));
  it('requiere Android Auto 17.4 o superior', () => expect(product.minimumAndroidAuto).toBe('17.4'));
  it('solo admite la SYM ADXTG 175', () => expect(product.motorcycle).toBe('SYM ADXTG 175'));
  it('muestra las notificaciones de las llamadas, pero no permite contestarlas', () => {
    expect(product.capabilities.callsOnDashboard).toBe(true);
    expect(product.capabilities.replyFromDashboard).toBe(false);
  });
  it('no muestra las notificaciones de los mensajes de WhatsApp', () => expect(product.capabilities.whatsappMessageAlertsOnDashboard).toBe(false));
  it('no muestra otros mapas en el tablero', () => expect(product.capabilities.otherDashboardMaps).toBe(false));
  it('no modifica la moto', () => expect(product.capabilities.modifiesMotorcycle).toBe(false));
  it('funciona con el teléfono bloqueado', () => expect(product.capabilities.lockedPhone).toBe(true));
  it('muestra solo los datos confirmados de la moto', () => {
    expect(product.dashboardInfo).toEqual(['Odómetro', 'Voltaje de batería', 'Trip A', 'TCS', 'RPM', 'Gato lateral']);
  });
  it('usa el número de WhatsApp de soporte', () => {
    expect(product.whatsapp.number).toBe('573137044065');
    expect(product.whatsapp.display).toBe('+57 313 7044065');
  });
  it('abre el chat de WhatsApp con el mensaje escrito', () => {
    expect(whatsappLink('Hola Moto Dash')).toBe('https://wa.me/573137044065?text=Hola%20Moto%20Dash');
  });
  it('mientras la app no esté publicada en Google Play, no hay enlace a la tienda', () => {
    expect(product.playStoreUrl).toBe('');
    expect(playStoreLink()).toBeNull();
  });
  it('usa el mismo usuario en Instagram y TikTok', () => {
    expect(product.social.handle).toBe('moto.dash.oficial');
    expect(product.social.instagram).toBe('https://www.instagram.com/moto.dash.oficial?utm_source=qr&psln=MW5qbG4xYWFrZTU0bw==');
    expect(product.social.tiktok).toBe('https://www.tiktok.com/@moto.dash.oficial');
  });
});
