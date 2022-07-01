import { v4 as uuidv4 } from "uuid";

import ImgDesign1 from "../../../../../assets/image/category1.png";
import ImgDesign2 from "../../../../../assets/image/category2.png";
import ImgDesign3 from "../../../../../assets/image/category3.png";
import ImgDesign4 from "../../../../../assets/image/category4.png";
import ImgDesign5 from "../../../../../assets/image/category5.png";
import ImgDesign6 from "../../../../../assets/image/category6.png";
import ImgDesign7 from "../../../../../assets/image/category7.png";
import ImgDesign8 from "../../../../../assets/image/category8.png";
import ImgDesign9 from "../../../../../assets/image/category9.png";

export const list = [
  {
    id: 1,
    type: "Dizayn xizmatlari",
    count: 28,
    isActive: true,
    images: [
      { id: uuidv4(), photo: ImgDesign1 },
      { id: uuidv4(), photo: ImgDesign2 },
      { id: uuidv4(), photo: ImgDesign3 },
      { id: uuidv4(), photo: ImgDesign4 },
      { id: uuidv4(), photo: ImgDesign5 },
      { id: uuidv4(), photo: ImgDesign6 },
      { id: uuidv4(), photo: ImgDesign7 },
      { id: uuidv4(), photo: ImgDesign8 },
      { id: uuidv4(), photo: ImgDesign9 },
    ],
  },
  {
    id: 2,
    type: "Arxitektura",
    count: 14,
    isActive: false,
    images: [
      { id: uuidv4(), photo: ImgDesign1 },
      { id: uuidv4(), photo: ImgDesign2 },
      { id: uuidv4(), photo: ImgDesign3 },
      { id: uuidv4(), photo: ImgDesign4 },
      { id: uuidv4(), photo: ImgDesign5 },
    ],
  },
  {
    id: 3,
    type: "Ekspertiza va texnik taftish xizmati",
    count: 8,
    isActive: false,
    images: [
      { id: uuidv4(), photo: ImgDesign7 },
      { id: uuidv4(), photo: ImgDesign8 },
      { id: uuidv4(), photo: ImgDesign9 },
      { id: uuidv4(), photo: ImgDesign1 },
    ],
  },
  {
    id: 4,
    type: "Toposurat va Geologiya",
    count: 0,
    isActive: false,
    images: [],
  },
  { id: 5, type: "Maket yasash", count: 10, isActive: false, images: [] },
];

export default list;
