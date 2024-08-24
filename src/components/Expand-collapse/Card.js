import { useState } from "react";

const Card = ({ details }) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggle = () => {
    setIsExpand(!isExpand);
  };

  const { name, items } = details;

  return (
    <div className="flex flex-col mb-1">
      <div className="bg-gray-400 px-1 py-2" onClick={toggle}>
        {name}
      </div>
      <div>
        {isExpand &&
          items.map((item) => (
            <div key={item} className="bg-gray-300 px-1 py-2">
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
