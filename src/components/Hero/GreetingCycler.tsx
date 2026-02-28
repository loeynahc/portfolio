"use client";

import { useState, useEffect } from "react";
import styles from "./GreetingCycler.module.css";

const greetings = [
  { word: "Hello" },
  { word: "こんにちは" },
  { word: "안녕" },
  { word: "你好" },
];

export default function GreetingCycler() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        // swap word
        setIndex((i) => (i + 1) % greetings.length);
        // fade back in
        setVisible(true);
      }, 400); // matches CSS transition duration
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const { word } = greetings[index];

  return (
    <span className={styles.wrapper}>
      <span
        className={`${styles.greeting} ${visible ? styles.visible : styles.hidden}`}
      >
        {word}
      </span>
    </span>
  );
}
