import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Collections", "Men", "Women", "About", "Contact"];

const navLinks = createSlice({
  name: "navLinks",
  initialState,
});

export default navLinks;
