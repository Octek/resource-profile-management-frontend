import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import avatar from "~/public/assets/avatar.jpeg";

export default function UserAvatar() {
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
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nurullah A.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Watch Video
        </Typography>
        <Chip
          label="GET STARTED"
          onClick={handleClick}
          variant="outlined"
          sx={{
            marginTop: 2,
            backgroundColor: "purple",
            color: "white",
            border: "none",
          }}
        />
      </CardContent>
    </Card>
  );
}
