import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert(t("contact.success"));
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(t("contact.error"));
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} p={t("contact.intro")} h2={t("contact.title")} />

        {/* Contact info: email & phone */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${config.html.email}`}
            className="flex items-center gap-3 bg-[#0a1628] border border-[#0057FF]/30 rounded-xl px-5 py-3 hover:border-[#0057FF] transition-colors group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0057FF]/10 group-hover:bg-[#0057FF]/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0057FF]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-[#aaa8b3] uppercase tracking-widest">{t("contact.emailLabel")}</p>
              <p className="text-white text-[13px] font-medium">{config.html.email}</p>
            </div>
          </a>

          <a
            href={`tel:${config.html.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-3 bg-[#0a1628] border border-[#0057FF]/30 rounded-xl px-5 py-3 hover:border-[#0057FF] transition-colors group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0057FF]/10 group-hover:bg-[#0057FF]/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0057FF]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-[#aaa8b3] uppercase tracking-widest">{t("contact.phoneLabel")}</p>
              <p className="text-white text-[13px] font-medium">{config.html.phone}</p>
            </div>
          </a>
        </div>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">
                  {t(`contact.${input}.label`)}
                </span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={t(`contact.${input}.placeholder`)}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

