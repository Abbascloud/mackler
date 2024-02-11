import { Form } from "./Form";
import { Button } from "./Button/Button";
import { Logo } from "./Logo/Logo";
import { AboutCard } from "./AboutCard/AboutCard";
import { Card } from "./Card/Card";
import { CoursePlanTable } from "./CoursePlanTable/CoursePlanTable";
import { Comment } from "./Comment/Comment";

import { COMMENTS } from "./resources/comments";
import { ABOUT } from "./resources/about";
import { CARDS } from "./resources/cards";
import { COURSE_STEPS } from "./resources/courseSteps";
import { CARDS_WITH_NUM } from "./resources/cardsWithNumber";

import styles from "./styles.module.css";
import { useState } from "react";

export const Layout = () => {
  const [steps, setSteps] = useState(COURSE_STEPS);
  return (
    <>
      <div className={styles.topBG}>
        <header className={`${styles.header} container`}>
          <Logo />
          <a href="#form">
            <Button variant={"secondary"} text={"Купить курс"} />
          </a>
        </header>
        <main>
          <div className={`${styles.title} container`}>
            <ul>
              <li>
                <span></span>Онлайн - беседа:
              </li>
            </ul>
            <h1>Постигший Истину</h1>
            <p>
              Беседы помогут ответить на такие вопросы как:
              <br /> &quot;кто Я? &quot;, &quot;где Бог? &quot;, &quot;в чем
              смысл?&quot; ; и раскрыть свой потенциал на полную, вплетая в своё
              сознание понимание Бытия и Истинной картины мира. Посади в себе
              семя Истины и она прорастает в тебе.
            </p>
            <a href="#form">
              <Button variant={"primary"} text={"Постичь истину"} />
            </a>
          </div>

          <section className={`${styles.warning} container`}>
            <h3>Предупреждение!!!</h3>
            <p>
              Отсутствие готовности к глубинным знаниям - ОПАСНО ДЛЯ ВАШЕГО
              ПСИХИЧЕСКОГО ЗДОРОВЬЯ!!!
              <br />
              Если Вы наслаждаетесь жизнью, получаете от нее удовольствие и
              действующая картина мира Вас устраивает - рекомендуем продолжить
              ей наслаждаться!!! Если Вам все таки интересно и вы решились
              взглянуть Истине в лицо - подумайте ещё раз, трижды. Понимание
              мира меняется, именно, в корне. И помните - мы никогда не знаем,
              что в черном ящике, а когда открываем, видим не всегда то, что
              искали в нем.
            </p>
            <p style={{ color: "red" }}>
              * Духовный наставник не несёт ответственности за психические
              изменения соискателя.
            </p>
          </section>
        </main>
      </div>
      <main>
        <section className={`${styles.about} container`}>
          <h3>О беседе</h3>
          <div className={styles.aboutGrid}>
            {ABOUT.map(({ description, img, title, id }) => (
              <AboutCard
                key={id}
                description={description}
                title={title}
                img={img}
              />
            ))}
          </div>
        </section>
        <section className={`${styles.cards} container`}>
          <h3>
            Ты то что тебя наполняет. Узри Истину. <br /> Наполнись Истиной.
            Погрузись в нее.
          </h3>
          <div className={styles.cardsGrid}>
            {CARDS.map(({ description, img, title, id }) => (
              <Card
                key={id}
                description={description}
                title={title}
                img={img}
              />
            ))}
          </div>
        </section>
        <section className={`${styles.plan} container`}>
          <h3>План онлайн бесед</h3>
          <CoursePlanTable steps={steps} setSteps={setSteps} />
        </section>
        <section className={`${styles.frame} container`}>
          <p>
            Онлайн-курс для профессионалов и новичков,
            <br /> мы всегда знаем куда окунуть мысли
          </p>
          <h3>Познай Истину</h3>
          <p>а если Вы познавший - наша беседа будет ещё интереснее</p>
          <a href="#form">
            <Button
              variant={"primary"}
              text={"Записаться на беседу от 11 100 ₽"}
            />
          </a>
        </section>
        <div className={`${styles.numericCards} container`}>
          <h3>
            Беседы для новичков в познание <br />и высоко продвинутых
          </h3>
          <section className={styles.cardsGrid}>
            {CARDS_WITH_NUM.map(({ description, img, title, id }, index) => (
              <Card
                numPosition={index + 1}
                key={id}
                description={description}
                title={title}
                img={img}
              />
            ))}
          </section>
        </div>
        <section className={`${styles.comments} container`}>
          <h3>
            Курс для новичков в познание
            <br /> и высоко продвинутых
          </h3>
          <div className={styles.commentGrid}>
            {COMMENTS.map(({ id, text, author, rate, img }) => (
              <Comment
                author={author}
                text={text}
                rate={rate}
                img={img}
                key={id}
              />
            ))}
          </div>
        </section>
      </main>
      <div className={`${styles.footerBG}`}>
        <div className={`${styles.formWrapper} container`}>
          <h3>Хотите узнать подробнее?</h3>
          <section className={styles.formFlex}>
            <div className={styles.formTitle}>
              <h4>Оставьте контактные данные</h4>
              <p>
                Мы свяжемся с вами, обсудим ваши потребности
                <br /> и сформируем индивидуальное предложение <br /> под ваши
                задачи
              </p>
            </div>
            <div id="form" className={styles.form}>
              <h4>Оставьте заявку</h4>
              <Form />
            </div>
          </section>
        </div>
        <hr className={`container`} />

        <footer className={`${styles.footer} container`}>
          <div>
            <Logo />
            <h3>Школа логики «Истина»</h3>
          </div>
          <p className={styles.copyright}>
            Гарантируем конфиденциальность ваших персональных данных 2015-2023 ©
            Все права защищены.
          </p>
        </footer>
      </div>
    </>
  );
};
