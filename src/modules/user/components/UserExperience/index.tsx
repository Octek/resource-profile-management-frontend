import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ExperienceCard from "~/modules/user/components/UserExperience/components/ExperienceCard";

export default function UserExperience() {
  return (
    <Fragment>
      <Box flexDirection="column">
        <Typography variant="h1" color="secondary.purple" paddingY={3}>
          Selected experience
        </Typography>

        <Grid container direction="row" xs={12} spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h1" color="secondary.purple">
              Employment
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Box>
              {Array.from({ length: 4 }).map(
                (value: any, index: number, array: any[]) => (
                  <ExperienceCard
                    key={value}
                    isFirstElement={index !== 0}
                    isLastElement={index !== array.length - 1}
                  />
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
