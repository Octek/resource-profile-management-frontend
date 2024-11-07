import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { UserSkillDataProps } from "~/modules/user/interfaces/user.interface";

export default function SkillCard({ skill }: UserSkillDataProps) {
  return (
    <Box
      sx={{
        padding: 0,
        borderRadius: "40px",
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" paddingX={2} alignItems="center">
        <Image src={skill.icon} alt="No Uploaded Logo" width={35} height={32} />
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "black",
          }}
          paddingLeft={1.5}
          paddingY={1}
        >
          {skill.name}
        </Typography>
      </Stack>
    </Box>
  );
}
