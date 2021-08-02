import { FaRegTrashAlt } from "react-icons/fa";

import { Button, Menu } from "./styles";
import { DropDownMenu } from "../DropDownMenu";
import { useActiveMenu } from "../../hooks/useActiveMenu";

export const Delete = (props: { onConfirm: Function }) => {
  const { onConfirm } = props;
  const { activeMenu, cb } = useActiveMenu();

  const Content = () => {
    return (
      <Menu>
        <p> {"Are you sure you want to delete this subject?"} </p>
        <div>
          <Button confirm={true} onClick={() => onConfirm()}>
            {"Confirm"}
          </Button>
          <Button
            confirm={false}
            onClick={() => (activeMenu ? activeMenu(false) : null)}
          >
            {"Cancel"}
          </Button>
        </div>
      </Menu>
    );
  };

  return (
    <DropDownMenu
      // banish={false}
      callback={cb}
      Content={Content}
      Cover={FaRegTrashAlt}
    />
  );
};
