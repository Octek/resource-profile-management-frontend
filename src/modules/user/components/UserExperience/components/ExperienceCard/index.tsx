import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TechnologiesCard from "~/modules/user/components/UserExperience/components/TechnologiesCards";
import { UserExperienceCardProps } from "~/modules/user/interfaces/user.interface";
import {
  experienceKeyPoints,
  userTechnologies,
} from "~/modules/user/utils/helper";
import { calculateDuration } from "~/modules/user/utils/helper";
import { labels } from "~/modules/user/utils/labels";

export default function ExperienceCard({
  position,
  company,
  description,
  start_date,
  end_date,
  is_currently_working,
  isFirstElement,
  isLastElement,
  skills,
  responsibilities
}: UserExperienceCardProps) {
  return (
    <Stack  direction="row" spacing={2}>
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
      <Box width={'100%'} flexDirection="column" paddingBottom={2}>
        <Box flexDirection="column">
          <Typography variant="h1" color="secondary.purple">
            {position}
          </Typography>
          <Typography variant="h3" paddingTop={0.5}>
            {company} - {calculateDuration(start_date,is_currently_working,end_date)}
          </Typography>
        </Box>
        <Typography paddingTop={2} variant="h3">
          {description}
        </Typography>
        <List
          disablePadding
          sx={{ width: "100%", marginTop: 2, paddingLeft: 2 }}
        >
          {responsibilities && responsibilities.map((value: string) => (
            <ListItem
              key={value}
              disableGutters
              alignItems="flex-start"
              disablePadding
            >
              <ListItemIcon sx={{ minWidth: 15 }}>
                <FiberManualRecordIcon
                  sx={{ color: "black", width: 10, height: 10 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h3" component="div" paddingTop={0.2}>
                    {value}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Grid direction="row" container xs={12} paddingTop={2} rowGap={2} >
          <Grid item xs={4}>
            <Typography variant="h1" color="secondary.purple">
              {labels.technologies}
            </Typography>
          </Grid>
          <Grid container item xs={8} direction="row" rowGap={1} columnGap={1}>
            {skills && skills.map((skill,index) => (
              <TechnologiesCard key={index} skill={skill} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
