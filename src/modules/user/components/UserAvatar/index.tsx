// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { UserAvatarProps } from "~/modules/user/interfaces/user.interface";

export default function UserAvatar({
  name,
  avatar,
}: // location,
UserAvatarProps) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 350,
        maxHeight: 580,
        minWidth: { xs: "80%", sm: 250, md: 250, large: 300 },
        backgroundColor: "primary.greyBg",
        borderRadius: "10px",
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={avatar}
        alt="No Uploaded Logo"
        width={300}
        height={400}
        style={{
          width: "100%",
          height: "auto",
          // objectFit: "cover",
          borderRadius: "10px",
        }}
        sizes="100vw"
      />

      <CardContent
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 0,
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontFamily: "sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "32px",
            color: "black",
          }}
        >
          {name}
        </Typography>

        <Stack direction="row" spacing={1}>
          {/* <LocationOnOutlinedIcon /> */}
          {/* <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontFamily: "sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {location}
          </Typography> */}
        </Stack>
        <Chip
          label="GET STARTED"
          onClick={handleClick}
          variant="outlined"
          sx={{
            backgroundColor: "primary.greenText",
            color: "white",
            border: "none",
          }}
        />
      </CardContent>
    </Card>
  );
}
