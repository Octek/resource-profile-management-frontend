import { Fragment, useState } from "react";
import { Grid, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import UserAvatar from "~/modules/user/components/UserAvatar";
import UserEducation from "~/modules/user/components/UserEducation";
import UserExperience from "~/modules/user/components/UserExperience";
import UserInfo from "~/modules/user/components/UserInfo";
import UserSkills from "~/modules/user/components/UserSkills";

import AppToolBar from "~/core/components/AppToolbar";
import Footer from "~/core/components/Footer";
import { useBreakpoint } from "~/core/hooks/useBreakpoints";
// import Latest from "~/core/components/Latest";
// import MainContent from "~/core/components/MainContent";
import { userJsonResponse } from "~/modules/user/utils/helper";

export default function User() {
  const theme = useTheme();
  const [breakpoint, setBreakpoint] = useState<string>("xs");
  useBreakpoint(theme, setBreakpoint);

  const userResponse = userJsonResponse.data;
  const userData = {
    full_name: `${userResponse.first_name} ${userResponse.last_name}`,
    job_title: userResponse.job_title,
    avatar: "https://i.ibb.co/jbxvktF/avatar.webp",
    bio: userResponse.bio,
  };
  const experiences = userResponse.experiences;
  const educations = userResponse.educations;
  const skills = userResponse.skills;


  console.log("breakpoint : ", breakpoint);
  return (
    <Fragment>
      <CssBaseline enableColorScheme />

      <AppToolBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 16,
          gap: 4,
          backgroundColor: "primary.greyBg",
        }}
      >
        <Grid
          container
          xs={12}
          direction="row"
          display="flex"
          justifyContent="center"
          columnSpacing={4}
        >
          <Grid item container xs={12} md={8}>
            <Grid item>
              <UserInfo
                name={userData.full_name}
                job_title={userData.job_title}
                bio={userData.bio}
              />
            </Grid>
            {(breakpoint === "md" ||
              breakpoint === "lg" ||
              breakpoint === "xl") && (
              <Grid item xs={0} md={12}>
                <UserSkills
                  skills={skills}
                />
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <UserAvatar
                name={userData.full_name}
                avatar={userData.avatar}
             />
          </Grid>
        </Grid>
        {(breakpoint === "sm" || breakpoint === "xs") && (
          <Grid xs={12}>
            <UserSkills
              skills={skills}
            />
          </Grid>
        )}
        <Grid
          container
          xs={12}
          direction="row"
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "primary.greyBg" }}
        >
          <Grid item container xs={12} md={8}>
            <UserExperience
              experiences={experiences} 
            />
          </Grid>
          <Grid item xs={12} md={4} />
        </Grid>
        <Grid
          container
          xs={12}
          direction="row"
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "primary.greyBg" }}
        >
          <Grid item container xs={12} md={8}>
            <UserEducation
              educations={educations} />
          </Grid>
          <Grid item xs={12} md={4} />
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
