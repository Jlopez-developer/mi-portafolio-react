import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../../constants/styles";
import { ExperienceSCard } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { TMExperienceCard } from "../../types";

/* ── Card individual ── */
const ExperienceCard: React.FC<{ index: number } & TMExperienceCard> = ({
  index,
  title,
  companyName,
  icon,
  image,
  iconBg,
  date,
  points,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="relative bg-[#0a1628] border border-[#0057FF]/20 rounded-2xl overflow-hidden
               hover:border-[#0057FF]/60 transition-all duration-300 group"
  >
    {/* Banner superior con imagen de fondo */}
    <div className="relative h-36 overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1628]" />

      {/* Logo + nombre empresa */}
      <div className="absolute bottom-4 left-5 flex items-center gap-3">
        <div
          className="h-12 w-12 rounded-xl flex items-center justify-center border border-[#0057FF]/30 overflow-hidden flex-shrink-0"
          style={{ background: iconBg }}
        >
          <img src={icon} alt={title} className="h-9 w-9 object-contain" />
        </div>
        <div>
          <h3 className="text-white text-[20px] font-bold leading-tight">{title}</h3>
          <p className="text-[#0057FF] text-[12px] font-medium tracking-widest uppercase">{date}</p>
        </div>
      </div>
    </div>

    {/* Stack de tecnologías */}
    <div className="px-5 pt-3 flex flex-wrap gap-2">
      {companyName.map((tech, i) => (
        <span
          key={i}
          className="text-[11px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap"
          style={{ color: tech.color, borderColor: `${tech.color}55` }}
        >
          {tech.name}
        </span>
      ))}
    </div>

    {/* Puntos */}
    <ul className="px-5 pt-4 pb-5 space-y-2">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2 text-[13px] text-[#aaa8b3] leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0057FF] flex-shrink-0" />
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

/* ── Sección principal ── */
const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{t("experience.intro")}</p>
        <h2 className={styles.sectionHeadText}>{t("experience.title")}</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {ExperienceSCard.map((card, index) => (
          <ExperienceCard key={index} index={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

