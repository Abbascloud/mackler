import hand from "../../assets/cards/hand.jpeg";
import eye from "../../assets/cards/eye.jpeg";
import ent from "../../assets/cards/ention.png";
import godHand from "../../assets/cards/godHand.jpeg";
export const CARDS = [
  {
    id: String(Math.random()),
    img: hand,
    title: "Пойми как относиться к окружающему миру",
    description:
      "Весь мир становиться понятен, и с пониманием\nИстины ты начинаешь расти",
  },
  {
    id: String(Math.random()),
    img: eye,
    title: "Пойми как относиться к окружающему миру",
    description:
      "Начните быстро определять, к чему ведёт символизм\nорганизаций и их высшие знания",
  },
  {
    id: String(Math.random()),
    img: ent,
    title: "Дай волю потенциалу жизни",
    description:
      "Запустите глубинный анализ и начните\nчитать свою жизнь и творить ее",
  },
  {
    id: String(Math.random()),
    img: godHand,
    title: "Стань на вдох ближе к Богу",
    description: "Ведь понимание, есть знакомство",
  },
];
