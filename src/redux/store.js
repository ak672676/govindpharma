import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { medicineReducer } from "./reducers/medicine.reducer";
import { globalReducer } from "./reducers/global.reducer";
import { customerReducer } from "./reducers/customer.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  medicine: medicineReducer,
  globalData: globalReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
