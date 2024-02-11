import avatar1 from "../../assets/avatars/avatar1.jpg";
import avatar2 from "../../assets/avatars/avatar2.jpg";
import avatar3 from "../../assets/avatars/avatar3.jpg";
import avatar4 from "../../assets/avatars/avatar4.jpg";

export const COMMENTS = [
  {
    id: String(Math.random()),
    img: avatar1,
    author: "Сергей Куляшов",
    text: "Спасибо! Ну когда Вы говорили, что это\nпереворачивает сознание, я не мог представить,\nчто на столько. Подумайте дважды, готовы ли\nвы к этому, ведь познав- стереть из памяти не\nполучится!",
    rate: [
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
    ],
  },
  {
    id: String(Math.random()),
    img: avatar2,
    author: "Валерия Крамар",
    text: "Беседы помогли систематизировать знания.\nСобрать крупицы воедино и прозреть.\nОтдельное спасибо за возможность\nпродолжать беседы!",
    rate: [
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
    ],
  },
  {
    id: String(Math.random()),
    img: avatar4,
    author: "Алексей Зинкин",
    text: 'Это тоо что я искал, теперь наконец-то я понимаю как найти свой путь',
    rate: [
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
    ],
  },
  {
    id: String(Math.random()),
    img: avatar3,
    author: "Роман Аршинов",
    text: "Было доступно и интересно. Здорово, что\nрассказывали о причинах жизни и смыслах\nсмерти.",
    rate: [
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()) },
      { id: String(Math.random()), disabled: true },
    ],
  },
];
