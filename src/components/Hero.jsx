import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} inset-0 sm:top-[70px] top-[90px] absolute max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915eff]">Mubashar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop 3D visuals, user <br className="sm:block hidden" />{" "}
            intuitive user interfaces, and modern web applications.
          </p>
        </div>
      </div>
      <div
        style={{ paddingTop: "110px", width: "100%", height: "115%" }}
        className="absolute top-0 left-0"
      >
        <ComputersCanvas />
      </div>
      {/* <div className="absolute inset-0 pt-[110px] w-full h-full">
  <ComputersCanvas />
</div> */}

      <div className="absolute sm:bottom-24 bottom-36 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
