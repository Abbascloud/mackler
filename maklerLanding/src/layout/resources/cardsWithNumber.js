import fresco from "../../assets/cards/fresco.jpeg";
import biology from "../../assets/cards/biology.png";
import chess from "../../assets/cards/chess.jpeg";
import philosophy from "../../assets/cards/philosophy.jpeg";

export const CARDS_WITH_NUM = [
  {
    id: String(Math.random()),
    img: fresco,
    title:
      "Новичкам, которые хотят разобраться\nв духовном мире и мире Логики Истины",
    description:
      "Получите базовые знания, которые помогут\nпонять и полюбить жизнь с Истиной",
  },
  {
    id: String(Math.random()),
    img: biology,
    title: "Специалистам в области физики\nи духовных деятелей",
    description:
      "Без правильного взгляда на суть, даже самый\nэкспертный алгоритм не даёт полной отдачи",
  },
  {
    id: String(Math.random()),
    img: chess,
    title: "Гуру логики",
    description:
      "Проверите свои знания, систематизируете\nих и восполните пробелы",
  },
  {
    id: String(Math.random()),
    img: philosophy,
    title: "Любителям философии",
    description: "Провести качественный диалог, с приятным послевкусием",
  },
];
