import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PeopleType, peopleObj } from "../../constants/peopleData";

type PersonState = {
  persons: PeopleType[];
};

//initialValue of the people slice
const initialState: PersonState = {
  persons: peopleObj,
};
export const PersonSlice = createSlice({
  name: "persons",
  initialState: initialState,
  reducers: {},
});

export default PersonSlice.reducer;
