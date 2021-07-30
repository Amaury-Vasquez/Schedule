import { createContext } from "react";

import { ContextValues } from "../interfaces";

const Context = createContext<ContextValues>({});

export default Context;
