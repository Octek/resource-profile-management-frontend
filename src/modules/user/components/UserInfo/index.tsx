/* eslint-disable @typescript-eslint/naming-convention */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserInfoProps } from "~/modules/user/interfaces/user.interface";

export default function UserInfo({ name, job_title, bio }: UserInfoProps) {
  return (
    <Box flexDirection="column" padding={2}>
      <Box flexDirection="column">
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "56px",
            color: "primary.headingText",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "40px",
            color: "primary.generalText",
          }}
        >
          {job_title}
        </Typography>
      </Box>
      <Typography
        paddingTop={4}
        sx={{
          whiteSpace: "pre-line",
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: 300,
          color: "primary.generalText",
        }}
      >
        {bio}
      </Typography>
    </Box>
  );
}
