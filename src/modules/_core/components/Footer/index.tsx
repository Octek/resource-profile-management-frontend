/* eslint-disable func-style */
/* eslint-disable react/no-multi-comp */
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import facebook from "~/public/assets/facebook.png";
import logo from "~/public/assets/octeklogo.png";
import linkedIn from "~/public/assets/social.png";
import twitter from "~/public/assets/twitter.png";
import youtube from "~/public/assets/youtube.png";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", marginY: 1 }}>
      © 2022 Octek. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Fragment>
      <Divider />
      <Box sx={{ backgroundColor: "black" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 4, sm: 8 },
            paddingY: { xs: 8, sm: 10 },
            textAlign: { sm: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: { xs: "100%", sm: "40%" },
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "40%" } }}>
                <Image
                  src={logo}
                  alt=""
                  style={{ height: "49px", width: "152px" }}
                />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: "primary.greenText",
                  }}
                >
                  Innovate . Integrate . Elevate
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", marginBottom: 2 }}
                >
                  Octek is an award-winning digital development company, helping
                  businesses with product design, development, and technology
                  acceleration.
                </Typography>
                <Stack direction="row" spacing={2} useFlexGap>
                  <Image
                    src={facebook}
                    alt=""
                    style={{ height: "40px", width: "40px" }}
                  />
                  <Image
                    src={twitter}
                    alt=""
                    style={{ height: "40px", width: "40px" }}
                  />
                  <Image
                    src={linkedIn}
                    alt=""
                    style={{ height: "40px", width: "40px" }}
                  />
                  <Image
                    src={youtube}
                    alt=""
                    style={{ height: "40px", width: "40px" }}
                  />
                </Stack>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                minWidth: "15%",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "medium", color: "primary.greenText" }}
              >
                Useful Links
              </Typography>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Services
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Careers
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Blogs
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                About Us
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Our Team
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                minWidth: "20%",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "medium", color: "primary.greenText" }}
              >
                Services
              </Typography>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                IT Consulting
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Migration & Cloud Services
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Software Development
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Game Development
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                IT Support and Maintenance
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Resource Outsourcing
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                minWidth: "15%",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "medium", color: "primary.greenText" }}
              >
                Contact
              </Typography>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                info@octek.co
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                +92 (42) 32085440
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "primary.greenText" }}
              >
                Others
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                href="#"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Support
              </Link>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Copyright />
        </Box>
      </Box>
    </Fragment>
  );
}
