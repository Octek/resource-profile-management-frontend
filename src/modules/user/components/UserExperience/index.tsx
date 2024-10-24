import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ExperienceCard from "~/modules/user/components/UserExperience/components/ExperienceCard";
import { Experience } from "~/modules/user/interfaces/user.interface";
import { labels } from "~/modules/user/utils/labels";

interface UserExperienceProps {
  experiences: Array<Experience>;
}
export default function UserExperience({ experiences }: UserExperienceProps) {
  return (
    <Fragment>
      <Box sx={{ width: "100%" }} flexDirection="column">
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: 1.3,
            color: "black",
            paddingY: 8,
          }}
        >
          {labels.selectedExperience}
        </Typography>

        <Grid container direction="row" xs={12} spacing={3}>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "black",
              }}
            >
              {labels.employment}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Box>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id} // Use unique id for key
                  position={experience.position}
                  company={experience.company}
                  description={experience.description}
                  start_date={experience.start_date}
                  end_date={experience.end_date}
                  is_currently_working={experience.is_currently_working}
                  isFirstElement={index !== 0} // Check if it's the first element
                  isLastElement={index !== experiences.length - 1} // Check if it's the last element
                  skills={experience.skills}
                  responsibilities={experience.responsibilities}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
