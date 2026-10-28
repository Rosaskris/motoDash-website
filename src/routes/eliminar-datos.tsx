import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/legal-layout";
import { product } from "@/lib/moto-dash";

export const Route = createFileRoute("/eliminar-datos")({
  head: () => ({
    meta: [
      { title: "Eliminar mis datos — Moto Dash" },
      { name: "description", content: "Cómo pedir la eliminación de tu cuenta y tus datos de la app Moto Dash." },
    ],
  }),
  component: EliminarDatos,
});

const { legal, whatsapp } = product;

function EliminarDatos() {
  return (
    <LegalLayout
      title="Eliminar mi cuenta y mis datos"
      lead={`App Moto Dash para Android · Desarrollada por ${legal.responsible}`}
    >
      <LegalSection title="Cómo pedirlo">
        <ol>
          <li>
            Escríbenos al correo <a href={`mailto:${legal.email}`}>{legal.email}</a> o por{" "}
            <a href={`https://wa.me/${whatsapp.number}`}>WhatsApp al {whatsapp.display}</a>.
          </li>
          <li>Indica tu nombre, el celular con el que te registraste en la app y que quieres eliminar tus datos.</li>
          <li>
            Comprobamos que la solicitud la haces tú y eliminamos los datos en máximo 15 días hábiles. Te confirmamos por
            el mismo medio cuando esté hecho.
          </li>
        </ol>
      </LegalSection>

      <LegalSection title="Qué se elimina">
        <ul>
          <li>Tu nombre, tu número de celular y tus autorizaciones.</li>
          <li>El identificador cifrado y el modelo de tu teléfono.</li>
          <li>
            Si usas la versión con licencia de soporte: la licencia, sus teléfonos y motos vinculados (identificador del
            tablero y MAC de su Wi-Fi) y su historial de uso.
          </li>
        </ul>
        <p>
          No conservamos ningún dato tuyo después de eliminarlo. Los registros técnicos de nuestro proveedor de servidores
          (por ejemplo, direcciones IP) se borran solos según sus plazos. Tu compra de la app la conserva Google Play según
          su propia política: puedes seguir usando Moto Dash después de eliminar tus datos.
        </p>
      </LegalSection>

      <LegalSection title="Borrar los datos guardados en el teléfono">
        <p>
          Los ajustes y el registro técnico solo están en tu teléfono. Se borran al desinstalar Moto Dash, o desde{" "}
          <strong>Ajustes de Android → Apps → Moto Dash → Almacenamiento → Borrar datos</strong>.
        </p>
        <div className="mt-4 rounded-lg border border-border bg-surface p-4">
          <p>Si solo quieres actualizar tu nombre o tu teléfono, escríbenos por el mismo medio.</p>
        </div>
      </LegalSection>

      <p className="text-sm text-muted-foreground">
        Más información en la <Link to="/privacidad">política de privacidad</Link>.
      </p>
    </LegalLayout>
  );
}
