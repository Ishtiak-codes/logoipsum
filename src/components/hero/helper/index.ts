
  export const animationVariants = {
      image1: [
        { scale: 1, x: 0, y: 0, width: "auto", height: "auto", filter: "brightness(1)" },
        { scale: 1.15, x: -150, y: 40, filter: "brightness(1)" },
        { scale: 1.5, x: -150, y: 40, filter: "brightness(1)" },
        {
          scale: 1,
          x: 0,
          y: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          top: 0,
          left: 0,
          right: 0,
          filter: "brightness(0.5)",
        },
      ],
      image2: [
        { scale: 1, opacity: 1 },
        { scale: 0.85, opacity: 1 },
        { scale: 0.7, opacity: 0 },
        { scale: 0.7, opacity: 0 },
      ],
      image3: [
        { scale: 1, opacity: 1 },
        { scale: 0.85, opacity: 1 },
        { scale: 0.5, opacity: 0 },
        { scale: 0.7, opacity: 0 },
      ],
      text: [
        { x: 0, translateX: "0%", color: "#000000" },
        { x: 60 },
        { x: "50vw", translateX: "-160%" },
        { x: "50vw", translateX: "-160%", color: "#ffffff" },
      ],
      logo: [{ x: 0 }, { x: -90 }, { x: -90 }, { x: -90 }],
      bottomSection: [
        { opacity: 0, y: 100 },
        { opacity: 0, y: 100 },
        { opacity: 0.5, y: 50 },
        { opacity: 1, y: 0 },
      ],
    }