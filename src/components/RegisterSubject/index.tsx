import { FaRegPlusSquare } from "react-icons/fa";

import { DropDownMenu } from "../DropDownMenu";

export const RegisterSubject = (props: { cb: Function }) => {
  return <DropDownMenu callback={props.cb} Cover={FaRegPlusSquare} />;
};
