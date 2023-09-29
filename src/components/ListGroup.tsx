import { useState } from "react";

interface ListGroupProps {
  item: String[];
  heading: string;
}

function ListGroup({ item, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
