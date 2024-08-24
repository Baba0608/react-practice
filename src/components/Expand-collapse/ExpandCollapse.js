const arr = [
  { name: "Non-Veg", items: ["Chicken", "Mutton", "Fish", "Egg"] },
  { name: "Veg", items: ["Paneer", "Mushrum", "Baby Corn"] },
];

import Card from "./Card";

const ExpandCollapse = () => {
  return (
    <div className="mt-3">
      {arr.map((item) => (
        <Card key={item.name} details={item} />
      ))}
    </div>
  );
};

export default ExpandCollapse;
