import { IconButton, Menu } from "@mui/material";
import { ReactComponent as ActionIco } from "../../files/icons/Action.svg";
import { useState } from "react";

const Action = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState();

  return (
    <>
      <IconButton
        onClick={(e) =>
          setAnchorEl((p) => (Boolean(p) ? null : e.currentTarget))
        }
      >
        <ActionIco />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl()}
        MenuListProps={{ onMouseLeave: () => setAnchorEl() }}
      >
        {children}
      </Menu>
    </>
  );
};

export default Action;
