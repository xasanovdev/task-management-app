const fs = require("fs");

const filePath = "../database/data.json";

export function readData() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error.message);
    return null;
  }
}

export function writeData(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing data:", error.message);
  }
}

export function createItem(newItem) {
  const data = readData();
  if (data) {
    data.items.push(newItem);
    writeData(data);
    console.log("Item created:", newItem);
  }
}

export function readItems() {
  const data = readData();
  if (data) {
    console.log("Items:", data.items);
  }
}

export function updateItem(itemId, updatedItem) {
  const data = readData();
  if (data) {
    const index = data.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      data.items[index] = { ...data.items[index], ...updatedItem };
      writeData(data);
      console.log("Item updated:", data.items[index]);
    } else {
      console.error("Item not found with ID:", itemId);
    }
  }
}

export function deleteItem(itemId) {
  const data = readData();
  if (data) {
    const index = data.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const deletedItem = data.items.splice(index, 1)[0];
      writeData(data);
      console.log("Item deleted:", deletedItem);
    } else {
      console.error("Item not found with ID:", itemId);
    }
  }
}

// Example Usage:
// createItem({ id: 3, name: 'Item 3' });
// readItems();
// updateItem(2, { name: 'Updated Item 2' });
// deleteItem(1);
// readItems();