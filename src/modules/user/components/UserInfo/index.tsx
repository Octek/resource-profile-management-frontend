/* eslint-disable @typescript-eslint/naming-convention */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserInfoProps } from "~/modules/user/interfaces/user.interface";

export default function UserInfo({ name, jobTitle, bio }: UserInfoProps) {
  return (
    <Box flexDirection="column" padding={2}>
      <Box flexDirection="column">
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: "60px",
            color: "primary.headingText",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "60px",
            color: "primary.darkBlueText",
          }}
        >
          {jobTitle}
        </Typography>
      </Box>
      <Typography
        paddingTop={4}
        sx={{
          whiteSpace: "pre-line",
          fontFamily: "Roboto",
          fontSize: "20px",
          fontWeight: 400,
          color: "primary.darkBlueText",
        }}
      >
        {bio}
      </Typography>
    </Box>
  );
}
