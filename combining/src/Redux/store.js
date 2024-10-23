import { rootReducer } from "../Components/RootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;