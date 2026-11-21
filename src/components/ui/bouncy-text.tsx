import { Fragment } from "react";
import styles from "./bouncy-text.module.css";

// Supply an accessible name on the containing link or button.
export function BouncyText({ text }: { text: string }) {
  const words = Array.from(text.matchAll(/\S+/g));

  return (
    <span aria-hidden="true">
      {words.map((word, wordIndex) => (
        <Fragment key={word.index}>
          {wordIndex > 0 ? " " : null}
          <span className={styles.word}>
            {Array.from(word[0]).map((letter, letterIndex) => (
              <span
                key={letterIndex}
                data-bounce-letter
                className={styles.letter}
                style={{ animationDelay: `${(word.index + letterIndex) * 18}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
