import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { UserEducationCardProps } from "~/modules/user/interfaces/user.interface";
import { getYearRange } from "~/modules/user/utils/helper";

export default function EducationCard({
  institution_name,
  degree,
  field_of_study,
  achievements,
  start_date,
  end_date,
  isFirstElement,
  isLastElement,
}: UserEducationCardProps) {
  return (
    <Stack direction="row" spacing={2}>
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
                backgroundColor: "secondary.purple",
              }}
            />
          )}

          {isLastElement && (
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{
                marginTop: 1,
                overflow: "hidden",
                backgroundColor: "secondary.purple",
              }}
            />
          )}
        </Stack>

        <Box
          sx={{
            position: "absolute",
            width: "10px",
            height: "10px",
            marginTop: 0.8,
            borderRadius: "50%",
            backgroundColor: "secondary.purple",
          }}
        />
      </Box>
      <Box flexDirection="column" paddingBottom={5}>
        <Box flexDirection="column">
          <Typography variant="h1" color="secondary.purple">
            {degree} of {field_of_study}
          </Typography>
          <Typography variant="h3" paddingTop={0.5}>
           {institution_name} · {getYearRange(start_date, end_date)}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
