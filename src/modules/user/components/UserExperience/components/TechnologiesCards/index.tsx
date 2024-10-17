import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { UserSkillDataProps } from "~/modules/user/interfaces/user.interface";

import reactIcon from "~/public/assets/reactjs.webp";

export default function TechnologiesCard({ data }: UserSkillDataProps) {
  return (
    <Box
      sx={{
        borderRadius: "40px",
        backgroundColor: "white",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingX={1}
        alignItems="center"
      >
        <Image
          src={reactIcon}
          alt="No Uploaded Logo"
          style={{
            width: "40px",
            height: "30px",
          }}
        />
        <Typography variant="h3" paddingY={2}>
          {data}
        </Typography>
      </Stack>
    </Box>
  );
}
