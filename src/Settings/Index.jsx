import React from "react";
import {Drawer, Button} from '@mui/material';

function SettingsSideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <div>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Open Settings
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div style={{ width: "300px", padding: "20px" }}>
          <h2>Settings</h2>
          <p>Your settings content goes here...</p>
        </div>
      </Drawer>
    </div>
  );
}

export default SettingsSideBar;
