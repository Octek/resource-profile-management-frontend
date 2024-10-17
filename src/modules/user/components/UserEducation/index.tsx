import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import EducationCard from "~/modules/user/components/UserEducation/components/EducationCard";

export default function UserEducation() {
  return (
    <Fragment>
      <Grid container direction="row" xs={12} spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h1" color="secondary.purple">
            Education
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Box>
            {Array.from({ length: 3 }).map(
              (value: any, index: number, array: any[]) => (
                <EducationCard
                  key={value}
                  isFirstElement={index !== 0}
                  isLastElement={index !== array.length - 1}
                />
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}
