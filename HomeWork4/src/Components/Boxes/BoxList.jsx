import classNames from "classnames";
import s from "./Box.module.css";

export const BoxList = ({ children }) => (
  <div className={classNames(s.list)} >
    {children}
  </div>
);