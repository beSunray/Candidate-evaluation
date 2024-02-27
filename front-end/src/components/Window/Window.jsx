import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/windowActions";
import WindowItem from "../WindowItem";
import { StyledWrapper, StyledTitle, StyledFormWrapper } from "./styles";

function Window({ window }) {
  const dispatch = useDispatch();
  const [newItemText, setNewItemText] = useState("");

  const onAddNewItem = async (e) => {
    e.preventDefault();
    if (!newItemText) return;
    try {
      await dispatch(addItem({ id: window._id, text: newItemText }));
      setNewItemText("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>
        {window.name}
        <div>Operations count: {window.count}</div>
      </StyledTitle>
      <div>
        {!!window.items.length &&
          window.items.map((item, idx) => (
            <WindowItem key={idx} windowId={window._id} item={item} />
          ))}
      </div>
      <StyledFormWrapper>
        <div>Add new item:</div>
        <form onSubmit={onAddNewItem}>
          <input
            className="non-draggable"
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder="Enter text"
          />
          <button className="non-draggable" type="submit">
            Add Item
          </button>
        </form>
      </StyledFormWrapper>
    </StyledWrapper>
  );
}

export default Window;
