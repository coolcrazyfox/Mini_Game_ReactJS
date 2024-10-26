import img1 from "../assets/images/cards/14.png";
import img2 from "../assets/images/cards/20.png";
import img3 from "../assets/images/cards/6.png";
import img4 from "../assets/images/cards/18.png";
import img5 from "../assets/images/cards/8.png";
import img6 from "../assets/images/cards/9.png";
import img7 from "../assets/images/cards/10.png";
import img8 from "../assets/images/cards/19.png";

interface Card {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
  found: boolean;
}

const cards: Card[] = [
  {
    id: 1,
    name: "1",
    image: img1,
    flipped: false,
    found: false,
  },
  {
    id: 2,
    name: "1",
    image: img1,
    flipped: false,
    found: false,
  },
  {
    id: 3,
    name: "2",
    image: img2,
    flipped: false,
    found: false,
  },
  {
    id: 4,
    name: "2",
    image: img2,
    flipped: false,
    found: false,
  },
  {
    id: 5,
    name: "3",
    image: img3,
    flipped: false,
    found: false,
  },
  {
    id: 6,
    name: "3",
    image: img3,
    flipped: false,
    found: false,
  },
  {
    id: 7,
    name: "4",
    image: img4,
    flipped: false,
    found: false,
  },
  {
    id: 8,
    name: "4",
    image: img4,
    flipped: false,
    found: false,
  },
  {
    id: 9,
    name: "5",
    image: img5,
    flipped: false,
    found: false,
  },
  {
    id: 10,
    name: "5",
    image: img5,
    flipped: false,
    found: false,
  },
  {
    id: 11,
    name: "6",
    image: img6,
    flipped: false,
    found: false,
  },
  {
    id: 12,
    name: "6",
    image: img6,
    flipped: false,
    found: false,
  },
  {
    id: 13,
    name: "7",
    image: img7,
    flipped: false,
    found: false,
  },
  {
    id: 14,
    name: "7",
    image: img7,
    flipped: false,
    found: false,
  },
  {
    id: 15,
    name: "8",
    image: img8,
    flipped: false,
    found: false,
  },
  {
    id: 16,
    name: "8",
    image: img8,
    flipped: false,
    found: false,
  },
];

export default cards;
