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
  const [isLocked, setIsLocked] = useState(true);
  // publications animation here
  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setCards((prev) => shuffleArray(prev));
    }, 4000);
    return () => clearInterval(shuffleInterval);
  }, []);
  // hero section animation heree
  useEffect(() => {
    let animationProgress = 0
    let animationTimeout: NodeJS.Timeout | null = null
  
    const updateStage = (deltaY: number) => {
      animationProgress += deltaY * 0.002
      animationProgress = Math.max(0, Math.min(1, animationProgress))
  
      let stage = 0
      if (animationProgress >= 0.7) stage = 3
      else if (animationProgress >= 0.5) stage = 2
      else if (animationProgress >= 0.15) stage = 1
      else stage = 0
  
      setClickCount(stage)
  
      // wait scroll until animation finishing
      if (stage === 3 && !animationTimeout) {
        animationTimeout = setTimeout(() => {
          setIsLocked(false)
          animationTimeout = null
        }, 1500)
      }
    }
  
    const onWheel = (e: WheelEvent) => {
      if (isLocked) {
        e.preventDefault()
        updateStage(e.deltaY)
      } else {
        if (window.scrollY === 0 && e.deltaY < 0) setIsLocked(true)
      }
    }
  
    const onScroll = () => {
      if (isLocked) {
        const scrollTop = window.scrollY
        updateStage(scrollTop / 10)
        window.scrollTo(0, 0)
      }
    }
  
    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("scroll", onScroll, { passive: false })
  
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onScroll)
      if (animationTimeout) clearTimeout(animationTimeout)
    }
  }, [isLocked])
  
  

  return (
    <div className="bg-[#E0D1BE] overflow-hidden">
      <Navigation />
      <section className="pt-20 pb-20 px-6 relative min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Hero clickCount={clickCount} />
        </div>
      </section>

      <section
        className={
          clickCount === 3
            ? "mt-20 max-w-[1200px] mx-auto"
            : "mt-72 max-w-[1200px] mx-auto"
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
