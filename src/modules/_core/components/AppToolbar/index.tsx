import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

import english from "~/public/assets/en.png";
import logo from "~/public/assets/sourceIt.png";
import swedish from "~/public/assets/sv.png";

import { style } from "~/core/components/style";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  height: "66px", // Default height
  [theme.breakpoints.up("lg")]: {
    height: "91.13px",
  },
}));

const LogoImage = styled(Image)(({ theme }) => ({
  width: "auto",
  height: "44px",
  [theme.breakpoints.up("lg")]: {
    height: "64px", // Height for xs screens
  },
}));

const LanguageImage = styled(Image)(() => ({
  width: "24px",
  height: "24px",
  marginLeft: 7,
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
    cursor: "pointer",
  },
}));

export default function AppToolBar() {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLanguageChange = (lang: string) => {
    // handle language translation here
    console.log(lang);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "3px 4px 10px 0px rgba(0,0,0,0.5)" }}
    >
      <StyledToolbar disableGutters sx={{ paddingLeft: 11, paddingRight: 1 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LogoImage src={logo} alt="Source It" />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              // eslint-disable-next-line id-length
              paddingRight: { xs: 2, lg: 10 },
            }}
          >
            <Link sx={style.navLink} href="https://sourceit.se/#">
              <Typography sx={style.navText}> Home</Typography>
            </Link>
            <Link
              sx={style.navLink}
              href="https://sourceit.se/#find_a_developer"
            >
              <Typography sx={style.navText}>
                Looking for senior developers
              </Typography>
            </Link>
            <Link sx={style.navLink} href="https://sourceit.se/#contact">
              <Typography sx={style.navText}>Contact us</Typography>
            </Link>
            <Link sx={style.navLink} href="https://sourceit.se/#faq">
              <Typography sx={style.navText}>FAQ’s</Typography>
            </Link>
            <Box sx={{ marginLeft: 7.25 }}>
              <LanguageImage src={english} alt="English" />
              <LanguageImage src={swedish} alt="Swedish" />
            </Box>
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
              <MenuItem component={Link} href="https://sourceit.se/#">
                Home
              </MenuItem>
              <MenuItem
                component={Link}
                href="https://sourceit.se/#find_a_developer"
              >
                Looking for senior developers
              </MenuItem>
              <MenuItem component={Link} href="hhttps://sourceit.se/#contact">
                Contact us
              </MenuItem>
              <MenuItem component={Link} href="https://sourceit.se/#faq">
                Faq’s
              </MenuItem>
              <MenuItem>
                <LanguageImage
                  src={english}
                  alt="English"
                  onClick={() => handleLanguageChange("en")}
                />
                <LanguageImage
                  src={swedish}
                  alt="Swedish"
                  onClick={() => handleLanguageChange("sv")}
                />
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
