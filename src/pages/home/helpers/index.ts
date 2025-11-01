import {
  publicationLogo1,
  publicationLogo2,
  publicationLogo3,
  publicationLogo4,
  publicationLogo5,
  publicationLogo6,
  publicationLogo7,
  publicationLogo8,
  publicationLogo9,
  publicationLogo10,
  publicationLogo11,
  publicationLogo12,
} from "@/assets/images";

export type Publication = {
  id: number;
  src: string; // path to image (imported)
  alt: string;
  name?: string;
};

export const publications: Publication[] = [
  { id: 1, src: publicationLogo1, alt: "Publication 1" },
  { id: 2, src: publicationLogo2, alt: "Publication 2" },
  { id: 3, src: publicationLogo3, alt: "Publication 3" },
  { id: 4, src: publicationLogo4, alt: "Publication 4" },
  { id: 5, src: publicationLogo5, alt: "Publication 5" },
  { id: 6, src: publicationLogo6, alt: "Publication 6" },
  { id: 7, src: publicationLogo7, alt: "Publication 7" },
  { id: 8, src: publicationLogo8, alt: "Publication 8" },
  { id: 9, src: publicationLogo9, alt: "Publication 9" },
  { id: 10, src: publicationLogo10, alt: "Publication 10" },
  { id: 11, src: publicationLogo11, alt: "Publication 11" },
  { id: 12, src: publicationLogo12, alt: "Publication 12" },
];
