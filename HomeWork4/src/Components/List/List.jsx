import { BoxList } from "../Boxes/BoxList";

export const List = ({ items, renderItem }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <BoxList>
          <li key={i}>{renderItem(item, i)} </li>
        </BoxList>
      ))}
    </ul>
  );
};