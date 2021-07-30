import { Fragment } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Schedule } from "./Schedule";

import Context from "../context/index";
import { useInitialState } from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <Context.Provider value={initialState}>
      <GlobalStyles />
      <Schedule />
    </Context.Provider>
  );
};

export default App;
