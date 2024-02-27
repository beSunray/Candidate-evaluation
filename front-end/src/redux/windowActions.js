import { createAsyncThunk } from "@reduxjs/toolkit";
const SERVER_URL = "http://localhost:3000";

export const fetchWindows = createAsyncThunk(
  "windows/fetchWindows",
  async () => {
    const response = await fetch(`${SERVER_URL}/api/windows`);
    return response.json();
  }
);

export const addItem = createAsyncThunk(
  "windows/addItem",
  async ({ id, text }) => {
    const response = await fetch(`${SERVER_URL}/api/window/${id}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    return response.json();
  }
);

export const editItem = createAsyncThunk(
  "windows/editItem",
  async ({ id, itemId, text }) => {
    const response = await fetch(
      `${SERVER_URL}/api/window/${id}/edit/${itemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );
    return response.json();
  }
);
