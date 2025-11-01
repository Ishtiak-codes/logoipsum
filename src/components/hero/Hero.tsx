import type React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { image1, image2, image3, image4, image5 } from "@/assets/images";
import { animationVariants } from "@/components/hero/helper";

type Props = {
  clickCount: number;
};

const Hero: React.FC<Props> = ({ clickCount }) => {
  return (
    <div className="relative max-w-[1200px] mx-auto min-h-screen flex items-center justify-center">
      <motion.h2
        className="absolute text-[4.8rem] uppercase leading-[5rem] z-50 pointer-events-none top-64 lg:left-32 antic-didone-regular tracking-tighter"
        animate={animationVariants.text[clickCount]}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ willChange: "transform, color" }}
      >
        <span className="-ml-24">Results You</span> <br />
        Can See PR <br />
        <span className="-ml-32">You Can Trust.</span>
      </motion.h2>

      <motion.img
        src={image1}
        className="absolute right-60 z-20"
        alt="Main product showcase"
        animate={{
          ...animationVariants.image1[clickCount],
          // Smoothly expand at step 3
          scale:
            clickCount === 3 ? 2 : animationVariants.image1[clickCount].scale,
          x: clickCount === 3 ? "-50%" : animationVariants.image1[clickCount].x,
          y: clickCount === 3 ? "-50%" : animationVariants.image1[clickCount].y,
          top: clickCount === 3 ? "50%" : undefined,
          left: clickCount === 3 ? "50%" : undefined,
          width: clickCount === 3 ? "100vw" : undefined,
          height: clickCount === 3 ? "50vh" : undefined,
          objectFit: clickCount === 3 ? "cover" : undefined,
          filter:
            clickCount === 3
              ? "brightness(0.5)"
              : animationVariants.image1[clickCount].filter,
        }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: "transform, width, height, filter" }}
      />

      {clickCount === 3 && (
        <motion.div
          className="absolute inset-x-0 bottom-[25%] z-50 text-center flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: "opacity, transform" }}
        >
          <p className="mb-8 text-gray-300">
            OUR SET OF EXPERIENCES IS BASED ON TRUST, SELL AND <br /> A
            COMMITMENT TO GREATNESS
          </p>
          <button className="flex items-center justify-between w-60 px-4 py-3 bg-[#122620] rounded-full text-white pointer-events-auto">
            Explore Our Services <ArrowUpRight />
          </button>
        </motion.div>
      )}

      <motion.img
        src={image2}
        className="absolute right-[500px] top-[500px] z-10"
        alt="Interior design showcase"
        animate={animationVariants.image2[clickCount]}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: "transform, opacity" }}
      />

      <motion.img
        src={image3}
        className="absolute right-12 top-[650px] z-20"
        alt="Furniture detail"
        animate={animationVariants.image3[clickCount]}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: "transform, opacity" }}
      />

      <motion.div
        className="absolute right-0 top-80 z-50"
        animate={animationVariants.logo[clickCount]}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: "transform" }}
      >
        <div className="relative z-50">
          <img
            src={image4}
            alt="logo"
            className="w-72 h-72 absolute -left-2 -top-6"
          />
          <img
            src={image5}
            alt="object"
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
