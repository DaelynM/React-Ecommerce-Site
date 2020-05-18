import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";

export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);
// export default { store, persistor };
