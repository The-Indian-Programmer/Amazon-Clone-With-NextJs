import basket from "./basketReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  basket,
});

export default rootReducer;
