import { useState } from "react";
import AccordeonData from "./AccordeonData";
import "./Accordeon.css";

const Accordion = ({}) => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected);
  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {AccordeonData && AccordeonData.length > 0 ? (
          AccordeonData.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.title}</h3>
              </div>
              {selected === dataItem.id ? (
                <ul className="data-content">
                  {dataItem.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <span>+</span>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
