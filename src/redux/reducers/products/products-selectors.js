import { createSelector } from "reselect";

const selectCategory = (state) => state.category;

export const selectCatObject = createSelector(
  [selectCategory],
  (category) => category.category
);
