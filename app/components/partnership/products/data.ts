import type { ProductOrbConfig } from "./types";

type ProductItem = {
  title?: string;
};

export function buildProductOrbs(
  items: readonly ProductItem[],
): ProductOrbConfig[] {
  return [
    {
      key: "sports",
      label: items[0]?.title ?? "Sports",
      image: "/products/football.png",
      alt: "Sports product",
      className:
        "left-[8%] top-[12%] sm:left-[10%] sm:top-[10%] lg:left-[12%] lg:top-[8%]",
      imageClassName: "w-[76%]",
      floatX: [0, -1.5, 0, 1.5, 0],
      floatY: [0, -4, 0, 3, 0],
      duration: 18,
      marketIcons: [
        {
          src: "/products/sports/laliga.png",
          alt: "LaLiga",
          className: "left-[4%] top-[14%] sm:left-[7%] sm:top-[14%]",
          delay: 0.16,
          floatX: [0, -1.5, 0, 1.5, 0],
          floatY: [0, -3, 0, 2, 0],
          duration: 15.5,
        },
        {
          src: "/products/sports/ligue1.png",
          alt: "Ligue 1",
          className: "right-[4%] top-[14%] sm:right-[7%] sm:top-[14%]",
          delay: 0.22,
          floatX: [0, 1.5, 0, -1.5, 0],
          floatY: [0, -3, 0, 2, 0],
          duration: 16.2,
        },
        {
          src: "/products/sports/nba.png",
          alt: "NPA",
          className: "left-[10%] bottom-[14%] sm:left-[12%] sm:bottom-[14%]",
          delay: 0.28,
          floatX: [0, -1.2, 0, 1.2, 0],
          floatY: [0, 2.5, 0, -2.5, 0],
          duration: 15.8,
        },
        {
          src: "/products/sports/uefa.png",
          alt: "UEFA",
          className: "right-[8%] bottom-[10%] sm:right-[10%] sm:bottom-[12%]",
          delay: 0.34,
          floatX: [0, 1.2, 0, -1.2, 0],
          floatY: [0, 2.5, 0, -2.5, 0],
          duration: 16.6,
        },
      ],
    },
    {
      key: "esports",
      label: items[1]?.title ?? "Esports",
      image: "/products/controller.png",
      alt: "Esports product",
      className:
        "right-[-3%] top-[7%] sm:right-[2%] sm:top-[7%] lg:right-[5%] lg:top-[6%]",
      imageClassName: "w-[82%]",
      floatX: [0, 1.8, 0, -1.8, 0],
      floatY: [0, -3.5, 0, 3, 0],
      duration: 19,
      marketIcons: [
        {
          src: "/products/esports/cs2.png",
          alt: "CS2",
          className: "left-[4%] top-[12%] sm:left-[7%] sm:top-[12%]",
          delay: 0.22,
          floatX: [0, -1.5, 0, 1.5, 0],
          floatY: [0, -3.2, 0, 2.2, 0],
          duration: 15.2,
        },
        {
          src: "/products/esports/valorant.png",
          alt: "Valorant",
          className: "right-[4%] top-[14%] sm:right-[7%] sm:top-[14%]",
          delay: 0.28,
          floatX: [0, 1.5, 0, -1.5, 0],
          floatY: [0, -3.1, 0, 2.1, 0],
          duration: 15.9,
        },
        {
          src: "/products/esports/dota.png",
          alt: "Dota",
          className: "left-[10%] bottom-[14%] sm:left-[12%] sm:bottom-[14%]",
          delay: 0.34,
          floatX: [0, -1.2, 0, 1.2, 0],
          floatY: [0, 2.8, 0, -2.8, 0],
          duration: 16.4,
        },
        {
          src: "/products/esports/lol.png",
          alt: "League of Legends",
          className: "right-[8%] bottom-[10%] sm:right-[10%] sm:bottom-[12%]",
          delay: 0.4,
          floatX: [0, 1.2, 0, -1.2, 0],
          floatY: [0, 2.6, 0, -2.6, 0],
          duration: 16.9,
        },
      ],
    },
    {
      key: "casino",
      label: items[2]?.title ?? "Casino",
      image: "/products/casino.png",
      alt: "Casino product",
      className:
        "left-[12%] bottom-[10%] sm:left-[14%] sm:bottom-[9%] lg:left-[16%] lg:bottom-[8%]",
      imageClassName: "w-[68%]",
      floatX: [0, 1.5, 0, -1.5, 0],
      floatY: [0, 3.5, 0, -3, 0],
      duration: 18.6,
    },
    {
      key: "games",
      label: items[3]?.title ?? "Games",
      image: "/products/joystick.png",
      alt: "Games product",
      className:
        "right-[10%] bottom-[12%] sm:right-[12%] sm:bottom-[10%] lg:right-[14%] lg:bottom-[9%]",
      imageClassName: "w-[66%]",
      floatX: [0, -1.6, 0, 1.6, 0],
      floatY: [0, 3.2, 0, -3.2, 0],
      duration: 18.2,
    },
  ];
}