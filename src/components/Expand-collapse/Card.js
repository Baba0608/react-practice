import { useState } from "react";

const Card = ({ details }) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggle = () => {
    setIsExpand(!isExpand);
  };

  const { name, items } = details;

  return (
    <div className="items">
      <div className="title" onClick={toggle}>
        {name}
      </div>
      <div className={`items-list ${isExpand ? "collapse" : "expand"}`}>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
