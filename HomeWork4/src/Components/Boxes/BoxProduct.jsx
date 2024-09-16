import classNames from "classnames";
import s from "./Box.module.css";

export const BoxProduct = ({ children }) => (
  <div className={classNames(s.product)} >
    {children}
  </div>
);