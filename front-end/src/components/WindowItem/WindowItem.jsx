import { useState } from "react";
import { useDispatch } from "react-redux";
import { editItem } from "../../redux/windowActions";

function WindowItem({ windowId, item }) {
  const dispatch = useDispatch();
  const [itemText, setItemText] = useState(item.text);

  const onEditItem = async (e) => {
    e.preventDefault();
    if (!itemText) return;
    try {
      await dispatch(
        editItem({ id: windowId, itemId: item._id, text: itemText })
      );
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  return (
    <form onSubmit={onEditItem}>
      <input
        className="non-draggable"
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        placeholder="Enter text"
      />
      <button className="non-draggable" type="submit">
        Edit Item
      </button>
    </form>
  );
}

export default WindowItem;
