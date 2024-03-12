import { useState } from "react";
import AccordeonData from "./AccordeonData";
import "./Accordeon.css";

const Accordion = ({}) => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multipleSelection];
    const findIndexOfMultipleId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfMultipleId);
    if (findIndexOfMultipleId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfMultipleId, 1);

    setMultipleSelection(cpyMultiple);
  }

  console.log(selected, multipleSelection);
  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        <button
          className="selection-button"
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        >
          Activate/Deactivate Multiple Skills View
        </button>

        {AccordeonData && AccordeonData.length > 0 ? (
          AccordeonData.map((dataItem) => (
            <div
              key={dataItem.id}
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="item"
            >
              <div className="title">
                <h3 className="item-title">{dataItem.title}</h3>
              </div>
              {selected === dataItem.id ||
              multipleSelection.indexOf(dataItem.id) !== -1 ? (
                <ul className="data-content">
                  {dataItem.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <span className="span-weight">+</span>
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
