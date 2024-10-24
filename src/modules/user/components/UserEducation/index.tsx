import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import EducationCard from "~/modules/user/components/UserEducation/components/EducationCard";
import { Education } from "~/modules/user/interfaces/user.interface";
import { labels } from "~/modules/user/utils/labels";

interface UserEducationsProps {
  educations: Array<Education>;
}
export default function UserEducation({ educations }: UserEducationsProps) {
  return (
    <Fragment>
      <Grid container direction="row" xs={12} spacing={3}>
        <Grid item xs={4}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "black",
            }}
          >
            {labels.education}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box>
            {educations &&
              educations.map((education, index) => (
                <EducationCard
                  key={education.id} // Use unique id for key
                  institution_name={education.institution_name}
                  degree={education.degree}
                  field_of_study={education.field_of_study}
                  achievements={education.achievements}
                  start_date={education.start_date}
                  end_date={education.end_date}
                  isFirstElement={index !== 0} // Check if it's the first element
                  isLastElement={index !== educations.length - 1} // Check if it's the last element
                />
              ))}
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}
