"use client"; // This is necessary to indicate the file is a client-side component
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  InputAdornment,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email"; // Import the email icon
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {FormData} from "./interfaces/contactUs.interface.d"
import { contactUsSchema } from "./utils/validation";
import {labels} from "./utils/labels"

export default function ContactUs(){
  // Use the useForm hook with yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm<FormData>({
    resolver: yupResolver(contactUsSchema), // Integrate Yup validation
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (API call or state update)
  };
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={(theme) => ({
        mx: "auto",
        mt: 5,
        bgcolor: "#5258fb",
        maxWidth: "1440px !important",
        borderRadius: "24px",
        color: "white",
        px: "86px",
        py: "96px",
        // Adjust padding for medium screens (tablets)
        [theme.breakpoints.down("lg")]: {
          px: "86px",
          // py: "58px",
          borderRadius: "0px",
        },
        [theme.breakpoints.down("md")]: {
          px: "24px",
          // py: "48px",
          borderRadius: "0px",
        },

        // Adjust padding for small screens (mobile)
        [theme.breakpoints.down("sm")]: {
          px: "24px",
          py: "64px",
          borderRadius: "0px",
        },

        // You can even go lower for extra small screens if needed (e.g., very small phones)
        [theme.breakpoints.down("xs")]: {
          paddingLeft: "8px",
          py: "16px",
          borderRadius: "0px",
        },
      })}
    >
      <Grid container spacing={4}>
        <Grid
          item
          md={7}
          sm={12}
          sx={{
            pr: "20px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              "font-family": " Poppins, sans-serif",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            {labels.heading}
            
          </Typography>
          <Typography>{labels.shortCall}</Typography>
          {labels.detailsArray.map((detail, index) => (
            <Typography key={index}>
              <CheckIcon sx={{ color: "#00b67a" }} />
              {detail}
            </Typography>
          ))}
          <Typography mt={4} sx={{ display: "flex", gap: 2,fontSize:"18px" }}>
            <Typography>{labels.excellent}</Typography>
            <Rating
              name="read-only"
              value={2}
              readOnly
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#00b67a", // Change the filled stars to white
                },
                "& .MuiRating-iconEmpty": {
                  color: "rgba(255, 255, 255, 0.5)", // Optional: lighter color for empty stars
                },
              }}
            />
          </Typography>
        </Grid>
        <Grid item md={5} sm={12}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: " 16px",
              padding: "32px",
            }}
          >
            <Typography
              sx={{
                color: "#475467",
                fontSize: "16px",
                fontWeight: "500",
                lineGHeight: " 24px",
                marginBottom: "24px",
              }}
            >
              {labels.letsChat}
            </Typography>
            <Typography
              htmlFor="name"
              component="label"
              sx={{
                mb: 1,
                color: errors.name?.message ? "#d32f2f" : "#475467",
              }}
            >
              {labels.fullName}
            </Typography>
            <TextField
              id="name"
              variant="outlined"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              margin="normal"
              sx={{
                marginBottom: "25px",
                // padding: "11.5px 12px",
                fontSize: "16px",
                "& .MuiInputBase-root": {
                  height: "50px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d0d5dd", // Set the default border color
                    borderRadius: "8px",
                  },

                },
              }}
            />

            <Typography
              htmlFor="email"
              component="label"
              sx={{ color: errors.email?.message ? "#d32f2f" : "#475467" }}
            >
              {labels.companyEmail}
            </Typography>
            <TextField
              id="email"
              // label="Email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              margin="normal"
              // Set custom border color and styles
              sx={{
                
                fontSize: "16px",
                "& .MuiInputBase-root": {
                  height: "50px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d0d5dd", // Set the default border color
                    borderRadius: "8px",
                  },

                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#d0d5dd" }} />
                  </InputAdornment>
                ),
                endAdornment: errors.email ? ( // Show error icon if there's an error
                  <InputAdornment position="end">
                    <ErrorOutlineIcon sx={{ color: "#d32f2f" }} />
                  </InputAdornment>
                ) : null,
              }}
            />
            

            <Button
              type="submit"
              disabled={!isValid || !Object.keys(dirtyFields).length}
              variant="contained"
              sx={{
                borderRadius: "35px",
                cursor: "pointer",
                display: "inline-flex",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: 1.5,
                minWidth: "150px",
                outline: "none",
                padding: "12px 32px",
                textAlign: "center",
                textTransform: "uppercase",
                mt: 2,
                alignItems: "center", // Align text and icon in the center
                justifyContent: "space-between", // Space between text and icon
                paddingRight: "16px", // Ensure there's space for the icon on the right
                "&:hover .icon": {
                  display: "inline-flex", // Show icon on hover
                },
                "&.Mui-disabled": {
                  backgroundColor: "#f9fafb", // Set background color for disabled state
                  color: "#d0d5dd", // Set text color for disabled state
                  cursor: "not-allowed", // Disable cursor for disabled state
                },
              }}
            >
              {labels.bookCall}
              <ArrowForwardIcon
                className="icon"
                sx={{
                  display: "none", // Hide icon by default
                  transition: "0.3s", // Smooth transition when showing the icon
                }}
              />
            </Button>
            <Typography
              sx={{
                color: "#475467",
                fontSize: "12px",
                fontWeight: "300",
                lineHeight: "18px",
                marginTop: "16px",
                textAlign: "left",
                width: "100%",
              }}
            >
              {labels.firstDeveloperStart}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

