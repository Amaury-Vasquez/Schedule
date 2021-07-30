import { FaRegSave } from "react-icons/fa";
import { DropDownMenu } from "../DropDownMenu";

export const SaveChanges = (props: { cb: Function }) => {
  return <DropDownMenu callback={props.cb} cover={FaRegSave} />;
};
