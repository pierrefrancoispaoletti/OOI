import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectUserObject = createSelector(
  [selectUser],
  (user) => user?.user?.user
);
