/* eslint-disable func-style */
/* eslint-disable react/no-multi-comp */
import React from "react";
import { Fragment } from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";

export default function ContactUs() {
  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: "40px 40px 0 0", // Rounded top-left and top-right corners
          overflow: "hidden", // Ensure the content respects the rounded corners
          width: "80%",
          marginX: "auto",
          height: "auto",
        }}
        mt={6}
      >
        <Grid container>
          {/* Left Side (4 columns) with Background Image */}
          <Grid
            item
            xs={12}
            md={4}
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
            md={8}
            sx={{ backgroundColor: "#2BB673", padding: 3 }}
          >
            <Grid container spacing={2}>
              {/* Office Location Section */}
              <Grid item xs={12} md={6} sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "39px",
                    fontWeight: "400",
                    lineHeight: "45.7px",
                    textAlign: "left",
                  }}
                  color="black"
                  fontWeight="bold"
                  gutterBottom
                >
                  Pakistan Office
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  5th Floor, 85 J1-Block J1 Phase 2 Johar Town, Lahore,
                  Pakistan.
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  info@octek.co +92 (42) 32085440
                </Typography>

                <Typography
                  variant="h6"
                  color="black"
                  fontWeight="bold"
                  gutterBottom
                >
                  Canada Office
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  Calgary, Canada.
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  raheel@octek.co +1 (647) 7865119
                </Typography>

                <Typography
                  variant="h6"
                  color="black"
                  fontWeight="bold"
                  gutterBottom
                >
                  Sweden Office
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  182 32, Danderyd Vendevägen 87, Sweden
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  raheel@octek.uk +46(0)7049414 87
                </Typography>
              </Grid>

              {/* Form Section */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{ padding: 3, borderRadius: 8, backgroundColor: "white" }}
                >
                  <Typography variant="h5" color="green" gutterBottom>
                    Instant solutions at your fingertips – just a text away!
                  </Typography>

                  <form>
                    <TextField
                      fullWidth
                      label="Your Name (required)"
                      variant="outlined"
                      margin="normal"
                      required
                      sx={{ borderRadius: 1 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email (required)"
                      variant="outlined"
                      margin="normal"
                      required
                      sx={{ borderRadius: 1 }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      margin="normal"
                      sx={{ borderRadius: 1 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      margin="normal"
                      multiline
                      rows={4}
                      sx={{ borderRadius: 1 }}
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
