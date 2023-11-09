import { forwardRef } from "react";
import styles from "./input.module.css";
import { InputProps } from "./types";

const Email = forwardRef<HTMLInputElement, InputProps>(
  ({ ...emailAttributes }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={`${styles.input}`}
        {...emailAttributes}
      />
    );
  }
);

Email.displayName = "Email";

export default Email;
