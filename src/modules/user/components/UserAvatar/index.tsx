import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { UserAvatarProps } from "~/modules/user/interfaces/user.interface";
import { labels } from "~/modules/user/utils/labels";

export default function UserAvatar({ name, avatar }: UserAvatarProps) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        maxHeight: "450px",
        backgroundColor: "primary.greyBg",
        borderRadius: "10px",
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={avatar}
        alt="No Uploaded Logo"
        width={200}
        height={200}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
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
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          {labels.watchVideo}
        </Typography>

        <Stack direction="row" spacing={1} paddingY={1.5}>
          <LocationOnOutlinedIcon />
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontFamily: "sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {labels.location}
          </Typography>
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
