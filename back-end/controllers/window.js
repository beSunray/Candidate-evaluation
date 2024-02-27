import Window from "../models/WindowModel.js";

/**
 * Retrieve list of windows
 */
async function getWindows(req, res) {
  try {
    const windows = await Window.find();
    res.json(windows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

/**
 * Add item to specific window
 */
async function addItem(req, res) {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const window = await Window.findById(id);
    if (!window) {
      return res.status(404).json({ error: "Window not found" });
    }

    window.items.push({ text });
    window.count += 1;

    await window.save();

    res.json(window);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}


/**
 * Edit item of specific window
 */
async function editItem(req, res) {
  const { id, itemId } = req.params;
  const { text } = req.body;

  try {
    const window = await Window.findById(id);
    if (!window) {
      return res.status(404).json({ error: "Window not found" });
    }

    const item = window.items.id(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    item.text = text;
    window.count += 1;

    await window.save();

    res.json(window);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

export { getWindows, addItem, editItem };
