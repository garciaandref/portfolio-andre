"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-32">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={item}
          className="mb-6 text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
        >
          Vamos conversar?
        </motion.h2>

        <motion.p variants={item} className="mb-14 text-white/70">
          Estou aberto a novas oportunidades, projetos e conexões. Fique à
          vontade para entrar em contato.
        </motion.p>

        <motion.div
          variants={item}
          className="relative rounded-2xl border border-white/10 bg-black/40 p-10 backdrop-blur overflow-hidden"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.15), transparent 60%)",
                "radial-gradient(circle at 80% 80%, rgba(168,85,247,0.15), transparent 60%)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-wrap justify-center gap-6">
            <a
              href="mailto:andrefgarcia094@gmail.com"
              className="group flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/garciaandref"
              target="_blank"
              className="group flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/garciaandref"
              target="_blank"
              className="group flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>

            <a
              href="https://wa.me/5516992143319"
              target="_blank"
              className="group flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
