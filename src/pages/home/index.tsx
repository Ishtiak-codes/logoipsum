import React, { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero.tsx";
import PublicationsGrid from "@/components/publication/PublicationsGrid";
import FooterSection from "@/components/footer/FooterSection";
import { publications } from "@/pages/home/helpers/index.ts";
import Navigation from "@/components/navbar";

type Card = { id: number; content: string; alt: string };

const initialCards: Card[] = publications.map((p) => ({
  id: p.id,
  content: p.src,
  alt: p.alt,
}));

function shuffleArray<T>(array: T[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Home: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>(initialCards);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setCards((prev) => shuffleArray(prev));
    }, 4000);
    return () => clearInterval(shuffleInterval);
  }, []);

  // Update animation stage based on scroll position.
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!isLocked) {
          const scrollY = window.scrollY || window.pageYOffset;
          const vh =
            window.innerHeight || document.documentElement.clientHeight;
          // Use first 60% of viewport for animations
          const progress = Math.min(1, scrollY / (vh * 0.4));
          // Map progress to stages with earlier triggers: 15%, 35%, 60%
          let stage = 0;
          if (progress >= 0.4) {
            stage = 3;
            setIsLocked(true); // Lock at stage 3
          } else if (progress >= 0.35) {
            stage = 2;
          } else if (progress >= 0.15) {
            stage = 1;
          }
          setClickCount(stage);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#E0D1BE] overflow-hidden">
      <Navigation />
      <section className="pt-32 pb-20 px-6 relative min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Hero clickCount={clickCount} />
        </div>
      </section>

      <section
        className={
          clickCount === 3
            ? "mt-20 max-w-[1215px] mx-auto"
            : "mt-72 max-w-[1215px] mx-auto"
        }
      >
        <h2 className="text-[4rem] antic-didone-regular w-[70%] uppercase leading-[4rem] mb-14">
          We're proud to be industry leader, with features in several top
          publications
        </h2>
        <PublicationsGrid cards={cards} clickCount={clickCount} />
      </section>

      <FooterSection clickCount={clickCount} />
    </div>
  );
};

export default Home;
