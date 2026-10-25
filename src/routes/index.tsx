import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Navigation,
  Smartphone,
  ShieldCheck,
  RefreshCw,
  QrCode,
  Check,
  X,
  Menu,
  Download,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageCircle,
  Instagram,
} from "lucide-react";
import logoMark from "@/assets/moto-dash-logo.png.asset.json";
import appHome from "@/assets/moto-dash-inicio.jpg.asset.json";
import appDrive from "@/assets/moto-dash-conducir.jpg.asset.json";
import appSettings from "@/assets/moto-dash-ajustes.jpg.asset.json";
import heroShot from "@/assets/moto-dash-tablero-noche-v2.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { apkDownloadUrl, product, whatsappLink } from "@/lib/moto-dash";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moto Dash — Google Maps en tu SYM ADXTG 175" },
      {
        name: "description",
        content:
          "Google Maps en el tablero de tu SYM ADXTG 175, sin modificar la moto. Conoce las funciones, requisitos y licencia de Moto Dash para Android.",
      },
      { property: "og:title", content: "Moto Dash — Smart Moto Navigation" },
      {
        property: "og:description",
        content:
          "Google Maps en tu SYM ADXTG 175. Solo Android, instalación por APK y un solo pago para tres dispositivos en la misma moto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  { label: "La app", href: "#la-app" },
  { label: "Funciones", href: "#features" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Requisitos", href: "#requisitos" },
];
function Logo() {
  return (
    <a href="#inicio" aria-label="Moto Dash, inicio" className="flex items-center gap-2 text-xl font-extrabold">
      <img src={logoMark.url} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
      <span>
        Moto <span className="text-primary">Dash</span>
      </span>
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Navegación principal" className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <a href="#cta">
            <Download /> Obtener APK
          </a>
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 bg-background">
            <SheetTitle>Moto Dash</SheetTitle>
            <SheetDescription>Smart Moto Navigation</SheetDescription>
            <nav aria-label="Menú móvil" className="mt-8 flex flex-col gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-semibold">
                  {l.label}
                </a>
              ))}
              <Button asChild>
                <a href="#cta" onClick={() => setOpen(false)}>
                  <Download /> Obtener App
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden border-b border-border bg-hero md:min-h-[660px]"
    >
      {/* Celular: la foto va abajo, nítida, y sus bordes se funden con el fondo de la página */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] md:hidden">
        <div
          className="absolute inset-0"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 13%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 13%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 7%, black 91%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 7%, black 91%, transparent 100%)",
            }}
          >
            <img
              src={heroShot.url}
              alt=""
              width={1917}
              height={1832}
              className="h-full w-full object-cover object-[center_46%]"
            />
          </div>
        </div>
      </div>

      {/* Computador: la foto a la derecha, nítida, corrida hacia la izquierda para que el tablero no se corte */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-[62%] max-w-[700px] md:block lg:right-[5%]"
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 93%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 93%, transparent 100%)",
            }}
          >
            <img
              src={heroShot.url}
              alt=""
              width={1917}
              height={1832}
              className="h-full w-full object-cover object-[62%_center]"
            />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-[320px] md:py-16 md:pb-16">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase">
          <span className="text-accent">Smart Moto Navigation</span>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold sm:text-6xl">
              Moto <span className="text-primary">Dash</span>
            </h1>
            <h2 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Google Maps en el tablero de tu {product.motorcycle}.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Conecta tu teléfono al Wi-Fi del tablero y guarda el celular: el mapa sigue visible aunque bloquees la
              pantalla. Sin modificar la moto, ni su software.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="whitespace-nowrap rounded-full border-2 border-primary bg-card px-4 py-2 text-sm font-extrabold sm:text-base">
                Un solo pago
              </span>
              <span className="whitespace-nowrap rounded-full border-2 border-primary bg-card px-4 py-2 text-sm font-extrabold text-primary sm:text-base">
                {product.license.devices} dispositivos
              </span>
              <span className="whitespace-nowrap rounded-full border-2 border-primary bg-card px-4 py-2 text-sm font-extrabold sm:text-base">
                La misma moto
              </span>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#cta">
              Quiero Moto Dash <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#como-funciona">
              Cómo funciona <ChevronDown />
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Solo Android · Instalación por APK · Sin suscripción</p>
      </div>
    </section>
  );
}
function AppPreview() {
  const captures = [
    {
      src: appHome,
      w: 591,
      h: 1280,
      alt: "Pantalla de inicio real de Moto Dash con la moto conectada: el estado del enlace y las tarjetas de combustible, batería, odómetro y seguridad",
      title: "Inicio, con la moto conectada",
      text: "Al encender la moto, la app confirma el enlace con el tablero y te deja a la vista combustible, batería, odómetro y el estado de TCS y pata lateral.",
    },
    {
      src: appDrive,
      w: 591,
      h: 1280,
      alt: "Pantalla de conducir real de Moto Dash transmitiendo Google Maps al tablero TFT, con el campo de destino y el botón para terminar la conexión",
      title: "Conducir, con Google Maps",
      text: "Escribes la dirección, tocas «Navegar en moto» y el mapa se transmite al tablero; mientras avanzas, la pantalla sigue mostrando batería, odómetro y parcial.",
    },
    {
      src: appSettings,
      w: 591,
      h: 1280,
      alt: "Pantalla de ajustes real de Moto Dash para personalizar la pantalla TFT: alertas críticas, control de tracción, voltaje de batería, odómetro y parcial A, con el aviso de tablero actualizado",
      title: "Ajustes, tú eliges qué se ve",
      text: "Activas o apagas lo que aparece en el recuadro del tablero —alertas críticas, TCS, voltaje, odómetro y parcial A— y el aviso «Tablero actualizado» te confirma que el cambio llegó a la moto.",
    },
  ];
  const [index, setIndex] = useState(0);
  const capture = captures[index] ?? captures[0]!;
  const go = (step: number) => setIndex((i) => (i + step + captures.length) % captures.length);
  return (
    <section id="la-app" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-xs font-semibold uppercase text-accent">Capturas reales de la app</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Así se ve Moto Dash en la vida real</h2>
        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-2 sm:gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Ver la captura anterior"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground transition hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="app-capture relative mx-auto aspect-[591/1280] w-full max-w-[300px] overflow-hidden rounded-2xl border border-border bg-background sm:max-w-[340px]">
              {captures.map((item, i) => (
                <img
                  key={item.title}
                  src={item.src.url}
                  alt={i === index ? item.alt : ""}
                  aria-hidden={i !== index}
                  width={item.w}
                  height={item.h}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <figcaption
              key={capture.title}
              aria-live="polite"
              className="capture-swap mx-auto mt-6 min-h-[180px] max-w-md text-center sm:min-h-[104px]"
            >
              <h3 className="text-lg font-bold">{capture.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capture.text}</p>
            </figcaption>
            <div className="mt-4 flex items-center justify-center gap-2">
              {captures.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver la captura ${i + 1}: ${item.title}`}
                  aria-current={i === index}
                  className={
                    i === index
                      ? "h-2 w-8 rounded-full bg-primary"
                      : "h-2 w-2 rounded-full bg-muted-foreground/40 transition hover:bg-muted-foreground"
                  }
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Ver la siguiente captura"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground transition hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Descarga e instala la app",
      text: "Te damos el archivo APK y las instrucciones para instalarlo en tu Android: lo descargas desde esta página o te lo enviamos por WhatsApp, sin pasar por ninguna tienda.",
    },
    {
      icon: QrCode,
      title: "Conecta tu moto",
      text: "Escanea el QR del tablero con la cámara o desde una foto y activa tu código de licencia.",
    },
    {
      icon: Navigation,
      title: "Inicia el viaje",
      text: "Enciende la moto y toca «Iniciar conexión». Elige el destino en Moto Dash o inicia la ruta en Google Maps.",
    },
    {
      icon: Smartphone,
      title: "Guarda el teléfono",
      text: "Google Maps aparece en el tablero y sigue visible con el teléfono bloqueado y en el bolsillo.",
    },
  ];
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-xs font-semibold uppercase text-accent">Cómo funciona</p>
        <h2 className="mt-3 text-3xl font-extrabold">Tu mapa, donde lo necesitas</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const does = [
  {
    n: 1,
    title: "Crea rutas desde Google Maps o desde Moto Dash",
    text: "Elige el destino en Google Maps o en la app Moto Dash, con modo Moto o Carro. También muestra rutas iniciadas en apps que abren Google Maps.",
  },
  {
    n: 2,
    title: "Usa los datos móviles con la moto conectada",
    text: "Navegas con los datos del teléfono mientras sigue conectado al Wi-Fi del tablero.",
  },
  {
    n: 3,
    title: "Funciona con la pantalla apagada",
    text: "Guarda el celular: el mapa sigue visible en el tablero con el teléfono bloqueado y en el bolsillo.",
  },
  {
    n: 4,
    title: "No modifica la moto ni su software",
    text: "Se conecta al Wi-Fi que el tablero ya trae, sin instalar nada en la moto ni cambiar su sistema. Las condiciones de garantía las define el fabricante.",
  },
  {
    n: 5,
    title: "Te avisa cuando hace falta actualizar",
    text: "Recibes un aviso automático cuando hay una versión nueva y se instala dentro de la app, sin otro pago.",
  },
  {
    n: 6,
    title: "Información adicional en pantalla",
    text: "Odómetro, Voltaje de batería, Trip A, TCS, RPM y Gato lateral.",
  },
];
const alsoIncludes = [
  "Te muestra las notificaciones de las llamadas en el tablero.",
  "Abre en el tablero las ubicaciones que te comparten por WhatsApp.",
  "Inicia y termina el viaje con un botón.",
  "Al encender la moto el mapa vuelve solo; al apagarla, el viaje se cierra.",
  "Se reconecta si se pierde el Wi-Fi o haces una parada.",
  "El mapa permanece visible con o sin ruta. Al llegar al destino, vuelve al mapa con tu ubicación.",
  "Guarda el Wi-Fi de la moto al escanear su QR, sin escribir claves.",
  "Te indica qué permiso o ajuste falta y te ayuda a resolverlo.",
  "Envía un diagnóstico a soporte por WhatsApp, con la clave del Wi-Fi oculta.",
];
function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-xs font-semibold uppercase text-accent">Lo que sí hace</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Funciones de Moto Dash</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Google Maps y sus alertas en la zona de mapas. La franja original del tablero sigue visible debajo, con la
          velocidad, la gasolina, la temperatura, la hora y el estado de la conexión inalámbrica.
        </p>
        <ol className="mt-9 grid gap-5 md:grid-cols-2">
          {does.map((item) => (
            <li key={item.n} className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                {item.n}
              </span>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-lg border border-border bg-card/50 p-6">
          <h3 className="text-sm font-bold uppercase text-accent">También incluye</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {alsoIncludes.map((text) => (
              <li key={text} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
const limitations = [
  "No muestra las notificaciones de los mensajes de WhatsApp en el tablero.",
  "Solo compatible con la SYM ADXTG 175 con tablero TFT y Wi-Fi.",
  "No reproduce música ni ofrece controles multimedia.",
  "No tiene navegación propia ni mapas offline independientes de Google Maps.",
];
const comingSoon = [
  {
    title: "Otros mapas",
    text: "El tablero muestra únicamente Google Maps. Estamos trabajando para que también funcione con otras apps de navegación, como Waze.",
  },
  {
    title: "Botones del tablero",
    text: "Estamos desarrollando que los dos botones del tablero controlen algunas funciones de la app, sin que tengas que tocar el teléfono.",
  },
  {
    title: "Más sistemas operativos",
    text: "Estamos explorando una versión para iOS, el sistema de los teléfonos Apple.",
  },
];
function Limitations() {
  return (
    <section className="bg-surface-strong">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-xs font-semibold uppercase text-primary">Lo que no hace</p>
        <h2 className="mt-3 text-3xl font-extrabold">Sin sorpresas antes de empezar</h2>
        <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {limitations.map((text) => (
            <li key={text} className="flex gap-3 text-sm leading-relaxed">
              <X className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
function ComingSoon() {
  return (
    <section id="proximamente" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-3xl font-extrabold">Próximamente</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Estas mejoras aún no están disponibles, pero están en desarrollo y llegarán con las actualizaciones de la app.
        </p>
        <ul className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-3">
          {comingSoon.map((item) => (
            <li key={item.title} className="flex gap-3 text-sm leading-relaxed">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong className="mb-1 block font-semibold">{item.title}</strong>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Sin modificar tu moto",
      text: "Se conecta al Wi-Fi que el tablero ya trae. No instala nada en la moto ni cambia su sistema operativo.",
    },
    {
      icon: Smartphone,
      title: "Celular guardado, mapa visible",
      text: "Funciona con la pantalla apagada. No necesitas mantener el teléfono desbloqueado para ver el mapa en el tablero.",
    },
    {
      icon: RefreshCw,
      title: "Actualizaciones incluidas",
      text: "Recibes un aviso automático cuando hay una versión nueva. La app comprueba el archivo antes de instalarlo, sin otro pago.",
    },
  ];
  return (
    <section id="beneficios" className="scroll-mt-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-xs font-semibold uppercase text-accent">Beneficios</p>
        <h2 className="mt-3 text-3xl font-extrabold">Tu tablero, sin cambiar tu moto</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Requirements() {
  const rows = [
    ["Moto compatible", `${product.motorcycle} con tablero TFT y Wi-Fi.`],
    ["Teléfono", `Android ${product.minimumAndroid} o superior, con datos móviles para navegar.`],
    ["Apps instaladas", `Google Maps y Android Auto ${product.minimumAndroidAuto} o superior.`],
    [
      "Configuración inicial",
      "Activa una vez el modo desarrollador de Android Auto tocando «Versión» diez veces. Completa los permisos y ajustes que te indique Moto Dash.",
    ],
    [
      "Después de reiniciar el teléfono",
      "En Android Auto, abre el menú ⋮ y toca «Iniciar servidor de unidad principal». Es el único paso manual recurrente; Moto Dash te avisa cuando falta.",
    ],
  ];
  return (
    <section id="requisitos" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-xs font-semibold uppercase text-accent">Antes de instalar</p>
        <h2 className="mt-3 text-3xl font-extrabold">Requisitos de la app</h2>
        <dl className="mt-8 divide-y divide-border">
          {rows.map(([title, text]) => (
            <div key={title} className="grid gap-2 py-5 md:grid-cols-[260px_1fr]">
              <dt className="font-bold">{title}</dt>
              <dd className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
function License() {
  const apk = apkDownloadUrl();
  return (
    <section id="cta" className="scroll-mt-20 bg-surface-strong">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-xs font-semibold uppercase text-accent">Obtener App</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Un solo pago. La misma moto.</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <div className="rounded-xl border-2 border-primary bg-card p-6">
              <p className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Un solo pago.
                <span className="mt-1 block text-primary">{product.license.devices} dispositivos.</span>
                <span className="mt-1 block">La misma moto.</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Hasta {product.license.devices} personas pueden tener Moto Dash en teléfonos distintos sin pagar otra
                licencia. La única condición: que las tres usen la misma {product.motorcycle}.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                No se paga por cada persona ni cada mes: la licencia es una sola, sin suscripción y con las
                actualizaciones incluidas. La activación se hace con un código de licencia.
              </p>
            </div>
          </div>
          <div className="border-l-2 border-primary pl-5">
            <h3 className="font-bold">Instalación directa por APK</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              El APK es el archivo de la app. Lo abres en tu Android, sigues las instrucciones que lo acompañan y queda
              instalado, sin pasar por ninguna tienda. Te lo damos de dos formas: lo descargas aquí o te lo enviamos por
              WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {apk ? (
                <Button asChild size="lg">
                  <a href={apk} download>
                    <Download /> Descargar la app
                  </a>
                </Button>
              ) : null}
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={whatsappLink("Hola, quiero el archivo APK de Moto Dash y su código de licencia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Pedirla por WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {apk
                ? "El archivo es el mismo en los dos canales: bájalo aquí o te lo pasamos al chat."
                : "El enlace de descarga directa se activa cuando el archivo esté publicado en la página. Mientras tanto, te lo enviamos por WhatsApp."}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              El código de licencia se entrega por WhatsApp al{" "}
              <span className="font-semibold text-foreground">{product.whatsapp.display}</span>
              <br />
              Precio: <span className="font-semibold text-foreground">por definir</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.62 2.79-1.53.19-.27.4-.52.54-.82.18-.42.29-.87.32-1.33.04-3.36.03-6.72.02-10.08z" />
    </svg>
  );
}
function TikTokMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex ${className}`} aria-hidden="true">
      <TikTokGlyph className="absolute inset-0 h-full w-full translate-x-[8%] translate-y-[8%] text-tiktok-pink" />
      <TikTokGlyph className="absolute inset-0 h-full w-full -translate-x-[8%] -translate-y-[8%] text-tiktok-cyan" />
      <TikTokGlyph className="relative h-full w-full text-tiktok-foreground" />
    </span>
  );
}
function Social() {
  return (
    <section id="redes" className="scroll-mt-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-xs font-semibold uppercase text-accent">Redes sociales</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Sigue a Moto Dash</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Estamos en Instagram y TikTok como @{product.social.handle}.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-instagram-brand text-instagram-foreground">
                <Instagram className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold">Instagram</h3>
                <p className="text-sm text-muted-foreground">@{product.social.handle}</p>
              </div>
            </div>
            <Button asChild size="lg" variant="instagram" className="mt-6 w-full sm:w-auto">
              <a href={product.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram /> Ver Instagram
              </a>
            </Button>
          </article>
          <article className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tiktok text-tiktok-foreground">
                <TikTokMark className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold">TikTok</h3>
                <p className="text-sm text-muted-foreground">@{product.social.handle}</p>
              </div>
            </div>
            <Button asChild size="lg" variant="tiktok" className="mt-6 w-full sm:w-auto">
              <a href={product.social.tiktok} target="_blank" rel="noopener noreferrer">
                <TikTokMark className="h-4 w-4" /> Ver TikTok
              </a>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["¿Funciona con el teléfono bloqueado?", "Sí. El mapa sigue en el tablero con la pantalla del teléfono apagada."],
  [
    "¿Tengo que modificar la moto?",
    "No. Moto Dash usa el Wi-Fi del tablero sin cambiar la moto ni su software. Las condiciones de garantía corresponden al fabricante.",
  ],
  [
    "¿Necesito internet?",
    "Google Maps usa los datos móviles del teléfono para navegar, aunque esté conectado al Wi-Fi de la moto. La licencia permite un periodo sin validación por internet; esto no equivale a navegación offline.",
  ],
  [
    "¿Puedo ver o contestar llamadas desde el tablero?",
    "Ves la notificación de la llamada en el tablero, pero no puedes contestarla desde allí: se responde desde el teléfono.",
  ],
  [
    "¿Por qué hay un paso después de reiniciar el teléfono?",
    "Es un requisito de Android Auto. Después de cada reinicio, abre su menú y toca «Iniciar servidor de unidad principal». Moto Dash te avisa y te guía cuando falta.",
  ],
  [
    "¿Cómo recibo la app y las actualizaciones?",
    "La primera instalación se hace con un archivo APK enviado directamente y sus instrucciones. Después, Moto Dash te notifica las nuevas versiones dentro de la app; las actualizaciones no tienen un costo adicional.",
  ],
  [
    "¿Qué pasa si cambio de teléfono?",
    `Contacta a soporte por WhatsApp al ${product.whatsapp.display} para revisar la activación de tu licencia.`,
  ],
  [
    "¿Se siguen viendo la velocidad y la gasolina?",
    "Sí. En la franja original del tablero se ven siempre la velocidad, la gasolina, la temperatura, la hora y el estado de la conexión inalámbrica. Desde la app activas la visualización del odómetro, trip A, el gato lateral y TCS.",
  ],
];
function Faq() {
  return (
    <section id="preguntas" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-3xl font-extrabold">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map(([question, answer], i) => (
            <AccordionItem key={question} value={String(i)}>
              <AccordionTrigger className="gap-4 py-5 text-base font-semibold">{question}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Logo />
        </div>
        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">
          Moto Dash es un proyecto independiente. No está afiliado, patrocinado ni aprobado por SYM, Sanyang Motor,
          Google ni Android Auto.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">Smart Moto Navigation</p>
      </div>
    </footer>
  );
}
function Index() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <AppPreview />
        <HowItWorks />
        <Features />
        <Limitations />
        <ComingSoon />
        <Benefits />
        <License />
        <Requirements />
        <Social />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
