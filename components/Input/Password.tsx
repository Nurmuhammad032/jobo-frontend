import { forwardRef, useState } from "react";
import styles from "./input.module.css";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { InputProps } from "./types";

const Password = forwardRef<HTMLInputElement, InputProps>(
  ({ ...emailAttributes }, ref) => {
    const [showPassword, setshowPassword] = useState(false);
    const toggle = () => {
      setshowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={`${styles.input} !pr-12`}
          {...emailAttributes}
        />
        <span
          onClick={toggle}
          className="absolute right-4 top-3 z-10 cursor-pointer"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </span>
      </div>
    );
  }
);

Password.displayName = "Password";

export default Password;
