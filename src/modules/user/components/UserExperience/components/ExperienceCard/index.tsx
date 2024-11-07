/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/naming-convention */
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
  responsibilities,
}: UserExperienceCardProps) {
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
      <Box width="100%" flexDirection="column" paddingBottom={2}>
        <Box flexDirection="column">
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "25px",
              fontWeight: 400,
              lineHeight: "30px",
              color: "primary.greenText",
            }}
          >
            {position}
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
            {company} -{" "}
            {calculateDuration(start_date, is_currently_working, end_date)}
          </Typography>
        </Box>
        <Typography
          paddingTop={1.5}
          sx={{
            fontFamily: "Roboto",
            fontSize: "20px",
            lineHeight: "20px",
            fontWeight: 300,
            color: "primary.darkBlueText",
          }}
        >
          {description}
        </Typography>
        <List
          disablePadding
          sx={{ width: "100%", marginTop: 2, paddingLeft: 2 }}
        >
          {responsibilities &&
            responsibilities.map((value: string) => (
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
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        fontFamily: "Roboto",
                        fontSize: "18px",
                        lineHeight: "18px",
                        fontWeight: 300,
                        color: "primary.darkBlueText",
                      }}
                    >
                      {value}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
        </List>

        {skills && skills.length > 0 && (
          <Stack
            direction="row"
            width="100%"
            paddingTop={4}
            paddingBottom={6}
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "primary.darkBlueText",
              }}
            >
              {labels.technologies}
            </Typography>
            <Grid
              container
              item
              xs={12}
              direction="row"
              rowGap={1}
              columnGap={1}
            >
              {skills.map((skill, index) => (
                <TechnologiesCard key={index} skill={skill} bgColor="#f2f2f2" />
              ))}
            </Grid>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}
