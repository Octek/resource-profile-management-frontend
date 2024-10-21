import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// import avatar from "~/public/assets/avatar.jpeg";
import { UserAvatarProps } from "~/modules/user/interfaces/user.interface";
import { labels } from "~/modules/user/utils/labels";

export default function UserAvatar({name, avatar}:UserAvatarProps) {
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

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
         {labels.watchVideo}
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
