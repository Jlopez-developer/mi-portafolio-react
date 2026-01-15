import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { TProjectn } from "../../constants";
import { fadeIn } from "../../utils/motion";

import { TProjectnew } from "../../types";

const ProjectCardnew: React.FC<{ index: number } & TProjectnew> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[300px]"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        {/* fija tamaño y estructura para que todas las cards sean iguales */}
        <div className="bg-tertiary w-full rounded-2xl p-5 h-[420px] flex flex-col justify-between">
          <div className="relative h-[180px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-3 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] font-bold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[14px] line-clamp-4">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(tags ?? []).map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-7">
        {TProjectn.map((TProjectn, index) => (
          <ProjectCardnew
            key={`project-${TProjectn.name ?? index}`}
            index={index}
            {...TProjectn}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
