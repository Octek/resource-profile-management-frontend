import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { UserSkillDataProps } from "~/modules/user/interfaces/user.interface";
import { getSKillLogo } from "~/modules/user/utils/helper";

export default function TechnologiesCard({ skill }: UserSkillDataProps) {
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
        paddingX={1.5}
        alignItems="center"
      >
        <Image
          src={getSKillLogo(skill.name)}
          alt="No Uploaded Logo"
          width={35}
          height={32}
        />
        <Typography
          paddingY={1.2}
          sx={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
            color: "black",
          }}
        >
          {skill.name}
        </Typography>
      </Stack>
    </Box>
  );
}
