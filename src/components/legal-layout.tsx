import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoMark from "@/assets/moto-dash-logo.png";

// Marco de las páginas legales: cabecera con regreso al inicio y texto legible a una columna.
export function LegalLayout({ title, lead, children }: { title: string; lead: string; children: ReactNode }) {
  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5">
          <Link to="/" aria-label="Moto Dash, inicio" className="flex items-center gap-2 text-xl font-extrabold">
            <img src={logoMark} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <span>
              Moto <span className="text-primary">Dash</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Inicio
          </Link>
        </div>
      </header>
      <main>
        <article className="legal mx-auto max-w-3xl px-5 py-12">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-muted-foreground">{lead}</p>
          {children}
        </article>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs leading-relaxed text-muted-foreground">
          <nav aria-label="Páginas legales" className="mb-3 flex flex-wrap gap-4">
            <Link to="/privacidad" className="hover:text-primary">Política de privacidad</Link>
            <Link to="/eliminar-datos" className="hover:text-primary">Eliminar mis datos</Link>
          </nav>
          Moto Dash es un proyecto independiente. No está afiliado, patrocinado ni aprobado por SYM, Sanyang Motor,
          Google ni Android Auto.
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h2 className="mt-10 text-xl font-bold">{title}</h2>
      {children}
    </>
  );
}

// Tablas de dos o tres columnas; en el teléfono se desplazan dentro de su caja, no la página.
export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead className="bg-surface">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? "px-3 py-2 font-medium" : "px-3 py-2 text-muted-foreground"}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
