import { v4 as uuidv4 } from "uuid";
import MuradBuilding from "../../assets/image/muradBulding.png";
import TemUniversity from "../../assets/image/teamUniversity.png";
import Pearson from "../../assets/image/P.png";
import AkfaUniversity from "../../assets/image/U.png";
//
const list = [
  { id: uuidv4(), img: MuradBuilding, company: "Murad Buildings" },
  { id: uuidv4(), img: Pearson, company: "Pearson" },
  { id: uuidv4(), img: AkfaUniversity, company: "Akfa University" },
  { id: uuidv4(), img: TemUniversity, company: "Team University" },
  { id: uuidv4(), img: TemUniversity, company: "Team University" },
  { id: uuidv4(), img: MuradBuilding, company: "Murad Buildings" },
  { id: uuidv4(), img: TemUniversity, company: "Team University" },
  { id: uuidv4(), img: TemUniversity, company: "Team University" },
];

export default list;
