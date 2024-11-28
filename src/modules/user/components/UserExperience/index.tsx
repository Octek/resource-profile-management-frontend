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
            fontFamily: "Roboto",
            fontSize: { xs: 40, md: 60 },
            fontWeight: 700,
            lineHeight: "40px",
            color: "primary.headingText",
            paddingY: 3,
          }}
        >
          {labels.selectedExperience}
        </Typography>

        <Grid container direction="row" xs={12} spacing={3}>
          <Grid item sm={12} lg={4}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: { xs: 25, md: 35 },
                fontWeight: 400,
                lineHeight: "40px",
                color: "primary.darkBlueText",
              }}
            >
              {labels.employment}
            </Typography>
          </Grid>
          <Grid item sm={12} lg={8}>
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
