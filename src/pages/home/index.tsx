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
    let scrollAccumulator = 0
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    let animationTimeout: NodeJS.Timeout | null = null
    const SCROLL_THRESHOLD = 100
  
    const changeStage = (direction: "up" | "down") => {
      setClickCount((prev) => {
        let nextStage = prev
        if (direction === "down") nextStage = Math.min(prev + 1, 3)
        else nextStage = Math.max(prev - 1, 0)
  
        // Unlock scrolling if we reach last stage
        if (nextStage === 3 && isLocked) {
          animationTimeout = setTimeout(() => {
            setIsLocked(false)
            animationTimeout = null
          }, 1500)
        }
  
        // Lock again if scrolling back to first stage
        if (nextStage < 3 && !isLocked) {
          setIsLocked(true)
        }
  
        return nextStage
      })
    }
  
    const onWheel = (e: WheelEvent) => {
      if (!isLocked && e.deltaY < 0 && window.scrollY <= 10) {
        e.preventDefault()
        changeStage("up")
        return
      }
      
      if (!isLocked) return
      
      e.preventDefault()
  
      if (!isScrolling) {
        isScrolling = true
        scrollAccumulator = 0
      }
  
      scrollAccumulator += Math.abs(e.deltaY)
  
      if (scrollTimeout) clearTimeout(scrollTimeout)
  
      scrollTimeout = setTimeout(() => {
        if (scrollAccumulator >= SCROLL_THRESHOLD) {
          if (e.deltaY > 0) changeStage("down")
          else changeStage("up")
        }
        isScrolling = false
        scrollAccumulator = 0
        scrollTimeout = null
      }, 150)
    }
  
    window.addEventListener("wheel", onWheel, { passive: false })
  
    return () => {
      window.removeEventListener("wheel", onWheel)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      if (animationTimeout) clearTimeout(animationTimeout)
    }
  }, [isLocked])
  
  

  return (
    <div className="bg-[#E0D1BE] overflow-hidden">
      <Navigation />
      <section className="pt-14 pb-20 px-6 relative min-h-screen">
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
