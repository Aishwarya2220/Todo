import { useState } from "react";

function CountChange() {
  const [items, addItems] = useState([]);
  const [textdata, addText] = useState("");
  function OnChangeoftext(event) {
    const newvalue = event.target.value;
    addText(newvalue);
  }
  function Handle() {
    addItems([...items, { value: textdata }]);
  }
  return (
    <>
      <input type="text" name="textbox" onChange={OnChangeoftext} />
      <button onClick={Handle}>Add</button>
      <ul>
        {items.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul>
    </>
  );
}
export default CountChange;
