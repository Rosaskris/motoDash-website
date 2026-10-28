import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection, LegalTable } from "@/components/legal-layout";
import { product } from "@/lib/moto-dash";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Moto Dash" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales de la app Moto Dash." },
    ],
  }),
  component: Privacidad,
});

const { legal, whatsapp } = product;
const mail = `mailto:${legal.email}`;
const chat = `https://wa.me/${whatsapp.number}`;

function Privacidad() {
  return (
    <LegalLayout
      title="Política de privacidad y tratamiento de datos personales"
      lead={`App Moto Dash para Android · Vigente desde el ${legal.policyDate}`}
    >
      <div className="mt-6 rounded-lg border border-border bg-surface p-4">
        <p>
          Moto Dash muestra Google Maps y los datos de tu moto en el tablero. Casi todo ocurre solo en tu teléfono: a
          nuestro servidor llegan tu nombre y tu teléfono, los datos de tu compra y lo necesario para validar tu
          licencia. Nunca llegan tu ubicación, tus rutas ni tus notificaciones. No vendemos datos, no mostramos
          publicidad y no usamos herramientas de analítica de terceros.
        </p>
      </div>
      <p>
        Esta política cumple la Ley 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y las
        demás normas colombianas de protección de datos personales, así como las políticas de Google Play.
      </p>

      <LegalSection title="1. Responsable del tratamiento">
        <ul>
          <li><strong>Responsable:</strong> {legal.responsible}, cédula de ciudadanía {legal.idNumber}</li>
          <li><strong>Domicilio:</strong> {legal.city}, Colombia</li>
          <li><strong>Correo:</strong> <a href={mail}>{legal.email}</a></li>
          <li><strong>WhatsApp de soporte:</strong> <a href={chat}>{whatsapp.display}</a></li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Datos que se envían a nuestro servidor">
        <LegalTable
          head={["Dato", "Cuándo se recoge", "Para qué"]}
          rows={[
            [
              "Nombre y número de celular",
              "Cuando te registras en la app",
              "Personalizar la app, identificarte como cliente, darte soporte y, solo si lo autorizas, enviarte novedades de Moto Dash",
            ],
            [
              "Datos de la compra en Google Play",
              "Cuando compras la licencia",
              "Activar tu licencia y comprobar que la compra es válida. Recibimos el producto comprado, la fecha, el estado y el identificador de la compra; nunca los datos de tu tarjeta ni de tu medio de pago",
            ],
            [
              "Identificador del teléfono",
              "Al activar y validar la licencia",
              "Limitar la licencia a tus teléfonos. Es un valor cifrado (SHA-256) derivado del identificador de Android: no permite saber quién eres ni conocer el identificador original",
            ],
            [
              "Fabricante y modelo del teléfono, versión de Android y de Moto Dash",
              "Al activar y validar la licencia",
              "Soporte técnico y compatibilidad",
            ],
            [
              "Identificador del tablero de la moto y dirección MAC de su Wi-Fi",
              "Al conectar una moto nueva",
              "Limitar la licencia a la moto acordada",
            ],
            [
              "Historial de uso de la licencia (activaciones, validaciones, motos liberadas) y sus fechas",
              "En cada uno de esos eventos",
              "Seguridad de la licencia y soporte",
            ],
            [
              "Dirección IP",
              "En cada conexión con el servidor",
              "Queda en los registros técnicos de nuestro proveedor de servidores, para su funcionamiento y seguridad",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Datos que se quedan solo en tu teléfono">
        <p>Moto Dash usa lo siguiente para funcionar, pero no lo guarda en ningún servidor ni lo comparte:</p>
        <ul>
          <li>
            <strong>Ubicación:</strong> Android exige el permiso de ubicación para que una app se conecte al Wi-Fi del
            tablero. Android Auto y Google Maps usan la ubicación del teléfono para navegar, según sus propias
            políticas. Moto Dash no registra ni envía tu ubicación.
          </li>
          <li>
            <strong>Notificaciones de Google Maps:</strong> Moto Dash lee únicamente las notificaciones de Google Maps
            para saber cuándo empieza y termina una ruta. No lee las de otras apps ni las guarda.
          </li>
          <li>
            <strong>Datos de la moto:</strong> velocidad, revoluciones, batería, odómetro, viajes, estado de la pata
            lateral y del control de tracción.
          </li>
          <li>
            <strong>La imagen del mapa:</strong> se envía directamente al tablero por la red Wi-Fi de la moto.
          </li>
          <li>
            <strong>El código QR del tablero:</strong> lo lee en el teléfono el escáner de Google Play Services, que abre
            la cámara por su cuenta y a Moto Dash solo le entrega el texto del código. Moto Dash no tiene permiso de
            cámara. Si eliges una foto del QR, se procesa en el teléfono.
          </li>
          <li><strong>Los ajustes y el registro técnico (log)</strong> de la app.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Autorización">
        <p>
          Al registrarte en la app aceptas esta política y autorizas el tratamiento de tus datos para las finalidades
          descritas. El envío de novedades y promociones de Moto Dash es opcional: solo te escribiremos con ese fin si lo
          autorizas por separado, y puedes retirar esa autorización en cualquier momento.
        </p>
      </LegalSection>

      <LegalSection title="5. Reportes de error">
        <p>
          Si usas "Reportar un error", la app crea un archivo con tu descripción del problema, el modelo y la versión de
          tu teléfono, la configuración del tablero (nombre y MAC de su Wi-Fi), los últimos datos de la moto y el
          registro técnico de los últimos 15 minutos. El archivo solo sale de tu teléfono si tú decides enviarlo, por la
          app que elijas (WhatsApp o Telegram), y lo usamos únicamente para resolver el problema que reportas.
        </p>
      </LegalSection>

      <LegalSection title="6. Permisos que pide la app">
        <LegalTable
          head={["Permiso", "Para qué"]}
          rows={[
            ["Ubicación y dispositivos Wi-Fi cercanos", "Buscar el Wi-Fi del tablero y conectarse a él"],
            ["Notificaciones", "Mostrar el estado de la conexión con la moto"],
            ["Acceso a notificaciones", "Detectar el inicio y el fin de las rutas de Google Maps"],
            ["Mostrar sobre otras apps", "Iniciar Android Auto en segundo plano para enviar el mapa al tablero"],
            ["Internet", "Registrarte, activar y validar la licencia"],
            ["Iniciar al encender el teléfono", "Avisarte si hay que activar Android Auto después de reiniciar"],
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Con quién se comparten los datos">
        <p>No vendemos ni alquilamos tus datos. Solo los tratan, por cuenta nuestra, estos proveedores:</p>
        <ul>
          <li><strong>Supabase:</strong> servidor y base de datos de clientes y licencias.</li>
          <li><strong>Google Play:</strong> procesa el pago de la licencia según su propia política de privacidad.</li>
          <li><strong>Google:</strong> Android Auto, Google Maps y Google Play Services, cada uno según su propia política.</li>
          <li><strong>Vercel:</strong> alojamiento de este sitio web.</li>
          <li><strong>WhatsApp o Telegram:</strong> solo si nos escribes o nos envías un reporte por ahí.</li>
        </ul>
        <p>
          Los servidores de estos proveedores pueden estar fuera de Colombia. Al usar Moto Dash autorizas esa
          transferencia, que se hace con proveedores que ofrecen medidas de seguridad adecuadas. También entregaremos
          datos si una autoridad competente lo exige conforme a la ley.
        </p>
      </LegalSection>

      <LegalSection title="8. Seguridad">
        <ul>
          <li>Toda la comunicación con el servidor viaja cifrada (HTTPS).</li>
          <li>Los datos de la licencia se guardan cifrados en tu teléfono, con una clave que no sale del dispositivo.</li>
          <li>Solo las personas autorizadas del equipo de Moto Dash acceden a la base de datos, con usuario y contraseña.</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Cuánto tiempo se conservan">
        <p>
          Los datos del servidor se conservan mientras tengas una licencia de Moto Dash. Puedes pedir que los eliminemos
          en cualquier momento (ver <Link to="/eliminar-datos">Eliminar mis datos</Link>). Los datos que están solo en
          tu teléfono se borran al desinstalar la app o al borrar sus datos desde los ajustes de Android.
        </p>
      </LegalSection>

      <LegalSection title="10. Tus derechos">
        <p>Como titular de los datos, puedes:</p>
        <ul>
          <li>Conocer, actualizar y rectificar tus datos.</li>
          <li>Pedir prueba de la autorización que nos diste.</li>
          <li>Saber cómo hemos usado tus datos.</li>
          <li>Revocar la autorización o pedir que eliminemos tus datos, cuando no exista un deber legal de conservarlos.</li>
          <li>
            Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), después de haber hecho tu consulta o
            reclamo ante nosotros.
          </li>
          <li>Acceder gratis a tus datos personales.</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Cómo hacer una consulta o un reclamo">
        <p>
          Escríbenos al correo <a href={mail}>{legal.email}</a> o por <a href={chat}>WhatsApp</a>, con tu nombre, el
          celular con el que te registraste en la app y tu solicitud.
        </p>
        <ul>
          <li>
            <strong>Consultas:</strong> respondemos en máximo 10 días hábiles. Si no es posible, te avisamos el motivo y
            respondemos en máximo 5 días hábiles más.
          </li>
          <li>
            <strong>Reclamos</strong> (corrección, actualización, eliminación o incumplimiento): respondemos en máximo 15
            días hábiles. Si no es posible, te avisamos el motivo y respondemos en máximo 8 días hábiles más.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Menores de edad">
        <p>
          Moto Dash es una herramienta para conductores de moto y no está dirigida a menores de 18 años. No recogemos a
          sabiendas datos de menores.
        </p>
      </LegalSection>

      <LegalSection title="13. Cambios a esta política">
        <p>
          Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de vigencia. Si el cambio
          afecta la forma en que tratamos tus datos, te avisaremos en la app.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
