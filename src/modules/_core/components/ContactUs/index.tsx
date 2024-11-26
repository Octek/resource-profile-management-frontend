/* eslint-disable func-style */
/* eslint-disable react/no-multi-comp */
import { Fragment } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

import officeImage from "~/public/assets/officeImage.jpg";

export default function ContactUs() {
  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: "40px 40px 0 0", // Rounded top-left and top-right corners
          overflow: "hidden", // Ensure the content respects the rounded corners
          width: "100%",
          marginX: "auto",
          height: "auto",
        }}
      >
        <Grid container>
          {/* Left Side (4 columns) with Background Image */}
          <Grid
            item
            xs={12}
            md={2.5}
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${officeImage.src})`,
            }}
          />

          {/* Right Side (8 columns) */}
          <Grid
            item
            xs={12}
            md={9.5}
            sx={{ backgroundColor: "#2BB673", padding: 3 }}
          >
            <Grid container>
              {/* Office Location Section */}
              <Grid item xs={12} md={6} sx={{ padding: 6 }}>
                <Typography
                  variant="h6"
                  color="black"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "26px",
                    fontWeight: 400,
                    lineHeight: "45.7px",
                    textAlign: "left",
                  }}
                >
                  Office in Sweden
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                >
                  Vendevägen 87, 182 32, Danderyd, Sweden
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                    paddingTop: 2,
                  }}
                  color="white"
                  gutterBottom
                  style={{ wordWrap: "break-word" }}
                >
                  Client Manager: Nicklas Rydberg
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                  style={{ wordWrap: "break-word" }}
                >
                  Email: nicklas.rydberg@sourceit.se
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                  style={{ wordWrap: "break-word" }}
                >
                  Phone: +46 70-774 30 76
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                    paddingTop: 2,
                  }}
                  color="white"
                  gutterBottom
                  style={{ wordWrap: "break-word" }}
                >
                  Client Manager: Aladdin Kader
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                  style={{ wordWrap: "break-word" }}
                >
                  Email: aladdin.kader@sourceit.se
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "26px",
                    fontWeight: 400,
                    lineHeight: "45.7px",
                    textAlign: "left",
                  }}
                  color="black"
                  fontWeight="bold"
                  gutterBottom
                >
                  Office in Asia
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                >
                  5th Floor, 85 J1-Block J1 Phase 2 Johar Town, Lahore,
                  Pakistan.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                >
                  Email: hej@sourceit.se
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "29.3px",
                  }}
                  color="white"
                  gutterBottom
                >
                  Phone: +92 (42) 32085440
                </Typography>
              </Grid>

              {/* Form Section */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{ padding: 3, borderRadius: 8, backgroundColor: "white" }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "30.47px",
                    }}
                    color="green"
                    gutterBottom
                  >
                    Instant solutions at your fingertips – just a text away!
                  </Typography>

                  <form>
                    <TextField
                      fullWidth
                      label="Your Name (required)"
                      variant="outlined"
                      margin="normal"
                      required
                      sx={{ borderRadius: 1, fontFamily: "Roboto" }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email (required)"
                      variant="outlined"
                      margin="normal"
                      required
                      sx={{ borderRadius: 1, fontFamily: "Roboto" }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      margin="normal"
                      sx={{ borderRadius: 1, fontFamily: "Roboto" }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      margin="normal"
                      multiline
                      rows={4}
                      sx={{ borderRadius: 1, fontFamily: "Roboto" }}
                    />

                    <Button
                      type="submit"
                      // fullWidth
                      variant="contained"
                      sx={{
                        marginTop: 2,
                        borderRadius: 8,
                        backgroundColor: "#2BB673",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#2BB673",
                        },
                      }}
                    >
                      Send us a Message
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
