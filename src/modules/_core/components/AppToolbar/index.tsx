import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

import logo from "~/public/assets/octeklogo.png";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  height: "115px",
}));

export default function AppToolBar() {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar disableGutters sx={{ paddingX: "48px" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image src={logo} alt="" style={{ height: "49px", width: "152px" }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, paddingRight: 10 }}>
            <Button
              variant="text"
              sx={{ color: "black", paddingRight: 4, textTransform: "none" }}
            >
              Home
            </Button>
            <Button
              variant="text"
              sx={{ color: "black", paddingRight: 4, textTransform: "none" }}
            >
              Services
            </Button>
            <Button
              variant="text"
              sx={{ color: "black", paddingRight: 4, textTransform: "none" }}
            >
              Career
            </Button>
            <Button
              variant="text"
              sx={{ color: "black", paddingRight: 4, textTransform: "none" }}
            >
              About us
            </Button>
            <Button
              variant="text"
              sx={{ color: "black", paddingRight: 5, textTransform: "none" }}
            >
              Contact us
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { sm: "flex", md: "none" } }}>
          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ padding: 2, backgroundColor: "background.default" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
              <Divider sx={{ my: 3 }} />
              <MenuItem>Home</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Career</MenuItem>
              <MenuItem>About us</MenuItem>
              <MenuItem>Contact us</MenuItem>
            </Box>
          </Drawer>
        </Box>
        <Box
          sx={{
            // display: { xs: "none", md: "flex" },
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Button color="primary" variant="contained" size="small">
            Get a Quote
          </Button>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
