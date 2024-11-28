/* eslint-disable @typescript-eslint/naming-convention */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserInfoProps } from "~/modules/user/interfaces/user.interface";
import { capitalizeFirstLetter } from "~/modules/user/utils/helper";

export default function UserInfo({ name, jobTitle, bio }: UserInfoProps) {
  return (
    <Box flexDirection="column">
      <Box flexDirection="column">
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: { xs: 40, md: 60 },
            fontWeight: 700,
            lineHeight: "40px",
            color: "primary.headingText",
          }}
        >
          {capitalizeFirstLetter(name)}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: { xs: 30, md: 40 },
            fontWeight: 400,
            lineHeight: "60px",
            color: "primary.darkBlueText",
          }}
        >
          {jobTitle}
        </Typography>
      </Box>
      <Typography
        sx={{
          whiteSpace: "pre-line",
          fontFamily: "Roboto",
          fontSize: "18px",
          fontWeight: 400,
          color: "primary.darkBlueText",
          paddingTop: { xs: 2, md: 4 },
        }}
      >
        {bio}
      </Typography>
    </Box>
  );
}
