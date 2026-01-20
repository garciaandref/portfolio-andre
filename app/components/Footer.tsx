import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-white">André Garcia</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Desenvolvedor Front-end focado em criar experiências digitais
              modernas, performáticas e visualmente impactantes.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  Quem sou eu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              Conecte-se
            </h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/SEU_GITHUB"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 text-white/70 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/garciaandref"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 text-white/70 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:seuemail@email.com"
                className="rounded-xl border border-white/10 p-3 text-white/70 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} André Garcia. Todos os direitos
          reservados.
        </p>
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cyan-500/10 to-transparent" />
    </footer>
  );
}
