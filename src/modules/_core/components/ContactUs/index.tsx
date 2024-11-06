/* eslint-disable func-style */
/* eslint-disable react/no-multi-comp */
import { Fragment } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

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
              backgroundImage:
                'url("https://s3-alpha-sig.figma.com/img/8d2f/c3f5/5be77a7402f50c564252ddfff835da57?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nhess4rRlYK9rGda2-I81VJSAJaaddb7nPseP86SMVOGdpG70Bv3ccq6LcOpZQA0olhgvfk4KmJBCR8bsrk6CPO9y1KRslh6icLvNLHe9wP~VhFKd7oNv3FeN4ORemGutKGcoeaqKJueL8sunIPoeJn5P4EK2hP~1jT8fEksUy8c3MjJwdnqKRpZ2M9JMsO7nHccXzTjWoDnsLnpo8qY0S~o6QN3PMIINzPq5ik-3czK5ktU22TZV~w8bjlmWypFl2pG6GfXrMoH4cOvZFvsXBlk7u2bPbvPTKZ38C4Nxx398D2BNaOCFZa-H~7ThjNB5CgjAVPwT9uaMQxDYMPHng__")', // Replace with your background image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
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
                  Pakistan Office
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
                  info@octek.co +92 (42) 32085440
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
                  Canada Office
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
                  Calgary, Canada.
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
                  raheel@octek.co +1 (647) 7865119
                </Typography>

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
                  Sweden Office
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
                  182 32, Danderyd Vendevägen 87, Sweden
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
                  raheel@octek.uk +46(0)7049414 87
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
                        backgroundColor: "darkblue",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "blue",
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
