import classNames from "classnames";
import s from "./Box.module.css";

export const Box = ({ children }) => (
  <div className={classNames(s.text)} >
    {children}
  </div>
);