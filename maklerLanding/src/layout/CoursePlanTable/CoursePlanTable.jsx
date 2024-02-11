import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./styles.module.css";

export const CoursePlanTable = ({ steps }) => {
  const wrapperRef = useRef(null);

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [lineHeight, setLineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["end end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const choseRef = (index) => {
    if (index === 0) {
      return topRef;
    }
    if (index === steps.length - 1) {
      return bottomRef;
    }
    return null;
  };

  useEffect(() => {
    const topCords = topRef.current.getBoundingClientRect();
    const bottomCords = bottomRef.current.getBoundingClientRect();
    setLineHeight(Math.floor(bottomCords.bottom - topCords.top));
    const dots = document.querySelectorAll("." + styles.dot);
    const line = document.querySelector("#animateLine");
    const onResize = () => {
      const topCords = topRef.current.getBoundingClientRect();
      const bottomCords = bottomRef.current.getBoundingClientRect();
      setLineHeight(Math.floor(bottomCords.bottom - topCords.top));
    };
    const onScroll = () => {
      const lineCords = line.getBoundingClientRect();
      for (let i = 0; i < dots.length; i++) {
        const cords = dots[i].getBoundingClientRect();
        if (cords.top < lineCords.bottom) {
          dots[i].classList.add(styles.animate);
        }
        if (cords.top >= lineCords.bottom) {
          dots[i].classList.remove(styles.animate);
        }
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={styles.tableWrapper}>
      {steps.map((step, index) => (
        <article ref={wrapperRef} key={step.id} className={styles.table}>
          <div className={styles.name}>
            <p>{step.name}</p>
          </div>
          <div className={styles.dotContainer}>
            <div ref={choseRef(index)} className={styles.dot}>
              {Boolean(index === 0) && (
                <div
                  style={{ height: `${lineHeight}px` }}
                  className={styles.top}
                >
                  <motion.div id="animateLine" style={{ scaleY: scale }} />
                </div>
              )}
            </div>
          </div>
          <div className={styles.textContent}>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
