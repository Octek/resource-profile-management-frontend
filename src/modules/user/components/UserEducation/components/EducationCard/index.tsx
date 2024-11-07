/* eslint-disable @typescript-eslint/naming-convention */
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { UserEducationCardProps } from "~/modules/user/interfaces/user.interface";
import { getYearRange } from "~/modules/user/utils/helper";

export default function EducationCard({
  institution_name,
  degree,
  // field_of_study,
  start_date,
  end_date,
  isFirstElement,
  isLastElement,
}: UserEducationCardProps) {
  return (
    <Stack direction="row" spacing={3}>
      <Box
        position="relative"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          position="relative"
          direction="column"
          sx={{ overflow: "hidden" }}
        >
          {isFirstElement && (
            <Divider
              orientation="vertical"
              sx={{
                height: 8,
                borderRightWidth: 2,
                backgroundColor: "primary.greenText",
              }}
            />
          )}

          {isLastElement ? (
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{
                marginTop: 1,
                overflow: "hidden",
                borderRightWidth: 2,
                backgroundColor: "primary.greenText",
              }}
            />
          ) : (
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{
                marginTop: 1,
                overflow: "hidden",
                borderRightWidth: 2,
                borderStyle: "dashed",
                borderColor: "primary.greenText",
              }}
            />
          )}
        </Stack>

        <Box
          sx={{
            position: "absolute",
            width: "18px",
            height: "18px",
            marginTop: 0.8,
            borderRadius: "50%",
            backgroundColor: "primary.greenText",
          }}
        />
      </Box>
      <Box flexDirection="column" paddingBottom={5}>
        <Box flexDirection="column">
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Roboto",
              fontSize: "25px",
              fontWeight: 400,
              lineHeight: "30px",
              color: "primary.greenText",
            }}
          >
            {degree}
            {/* - {field_of_study} */}
          </Typography>
          <Typography
            variant="h3"
            paddingTop={1.5}
            sx={{
              fontFamily: "Roboto",
              fontSize: "20px",
              lineHeight: "20px",
              fontWeight: 300,
              color: "primary.darkBlueText",
            }}
          >
            {institution_name} · {getYearRange(start_date, end_date)}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
