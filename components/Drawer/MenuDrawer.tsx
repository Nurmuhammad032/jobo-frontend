import React, { FC, useEffect } from "react";
import { X } from "lucide-react";

type CloseFunc = () => void;

type ComponentProps = {
  close: CloseFunc;
};

interface Props {
  component: FC<ComponentProps>;
  isVisible: boolean;
  close: CloseFunc;
}

const MenuDrawer = ({ component: Component, isVisible, close }: Props) => {
  const open = () => {
    document.body.classList.add("overlay-open");
  };

  const drawerClose = () => {
    close();
    document.body.classList.remove("overlay-open");
  };

  useEffect(() => {
    if (isVisible) {
      open();
    } else {
      drawerClose();
    }
  });

  return (
    <header className="navbar-drawer">
      <div className="grid grid-cols-[1fr_auto] items-center border-b border-gray-300">
        <div></div>
        <button onClick={drawerClose} className="p-4">
          <X />
        </button>
      </div>
      <div className="p-6">
        <Component close={close} />
      </div>
    </header>
  );
};

export default MenuDrawer;
