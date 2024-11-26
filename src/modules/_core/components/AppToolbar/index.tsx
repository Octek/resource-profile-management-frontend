import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

import logo from "~/public/assets/sourceIt.png";

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
          <Image
            src={logo}
            alt=""
            style={{ height: "76.45px", width: "180.13px" }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" }, paddingRight: 10 }}>
            <Button
              variant="text"
              href="https://octek.se/#"
              sx={{
                color: "black",
                paddingRight: 4,
                textTransform: "none",
                fontFamily: "sans-serif",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Home
            </Button>
            <Button
              variant="text"
              href="https://octek.se/#find_a_developer"
              sx={{
                color: "black",
                paddingRight: 4,
                textTransform: "none",
                fontFamily: "sans-serif",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Find A Developer
            </Button>
            <Button
              variant="text"
              href="https://octek.se/#contact"
              sx={{
                color: "black",
                paddingRight: 4,
                textTransform: "none",
                fontFamily: "sans-serif",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Contact us
            </Button>
            <Button
              variant="text"
              href="https://octek.se/#faq"
              sx={{
                color: "black",
                paddingRight: 4,
                textTransform: "none",
                fontFamily: "sans-serif",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Faq’s
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
              <MenuItem component={Link} href="https://octek.se/#">
                Home
              </MenuItem>
              <MenuItem
                component={Link}
                href="https://octek.se/#find_a_developer"
              >
                Find A Developer
              </MenuItem>
              <MenuItem component={Link} href="hhttps://octek.se/#contact">
                Contact us
              </MenuItem>
              <MenuItem component={Link} href="https://octek.se/#faq">
                Faq’s
              </MenuItem>
            </Box>
          </Drawer>
        </Box>
        {/* <Box
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
        </Box> */}
      </StyledToolbar>
    </AppBar>
  );
}
