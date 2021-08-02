import { useState } from "react";

export const useActiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState<Function>();
  // const [banish, setBanish] = useState(false);

  const cb = (setActive: Function, active: boolean) => {
    if (activeMenu) activeMenu(false);
    // setBanish(active);
    setActiveMenu(() => setActive);
  };
  return { activeMenu, cb };
};
