export type MarketIconConfig = {
  src: string;
  alt: string;
  className: string;
  delay: number;
  floatX: number[];
  floatY: number[];
  duration: number;
};

export type ProductOrbConfig = {
  key: string;
  label: string;
  image: string;
  alt: string;
  className: string;
  imageClassName?: string;
  marketIcons?: MarketIconConfig[];
  floatX: number[];
  floatY: number[];
  duration: number;
};