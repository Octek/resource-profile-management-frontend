/* eslint-disable @typescript-eslint/naming-convention */
import { Fragment, useEffect, useState } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import UserAvatar from "~/modules/user/components/UserAvatar";
import UserEducation from "~/modules/user/components/UserEducation";
import UserExperience from "~/modules/user/components/UserExperience";
import UserInfo from "~/modules/user/components/UserInfo";
import UserSkills from "~/modules/user/components/UserSkills";
import AppToolBar from "~/core/components/AppToolbar";
import Footer from "~/core/components/Footer";
import { useBreakpoint } from "~/core/hooks/useBreakpoints";
import { useGetProfile } from "~/rest/apiHooks/profile/useProfile";


export default function User() {
  const theme = useTheme();
  const [breakpoint, setBreakpoint] = useState<string>("xs");
  const [userData, setUserData] = useState<any>(null); // State to store user data
  useBreakpoint(theme, setBreakpoint);

  const {
    mutateAsync: fetchProfile,
    data,
    isLoading: isProfileLoading,
  } = useGetProfile();

  useEffect(() => {
    fetchProfile({ id: 1 });
  }, []);

  useEffect(() => {
    if (data) {
      setUserData(data)
    }
  }, [data]);

  return (
    <Fragment>
      {isProfileLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <CircularProgress color="inherit" size={50} />
        </Box>
      ) : (
        <>
          {userData && 
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
                        name={`${userData.first_name} ${userData.last_name}`}
                        jobTitle={userData.job_title}
                        bio={userData.bio}
                      />
                    </Grid>
                    {(breakpoint === "md" ||
                      breakpoint === "lg" ||
                      breakpoint === "xl") && (
                      <Grid item xs={0} md={12}>
                        <UserSkills skills={userData.skills} />
                      </Grid>
                    )}
                  </Grid>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <UserAvatar
                      name={userData.full_name}
                      avatar={userData.profile_picture}
                      location={userData.location}
                    />
                  </Grid>
                </Grid>
                {(breakpoint === "sm" || breakpoint === "xs") && (
                  <Grid xs={12}>
                    <UserSkills skills={userData.skills} />
                  </Grid>
                )}
              </Container>

              <Box sx={{ width: "100%", backgroundColor: "primary.greyBg" }}>
                <Container
                  maxWidth="lg"
                  component="main"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 16,
                    paddingBottom: 10,
                    gap: 4,
                  }}
                >
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    display="flex"
                    justifyContent="center"
                  >
                    <Grid item container xs={12} md={8}>
                      <UserExperience experiences={userData.experiences} />
                    </Grid>
                    <Grid item xs={12} md={4} />
                  </Grid>
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    display="flex"
                    justifyContent="center"
                  >
                    <Grid item container xs={12} md={8}>
                      <UserEducation educations={userData.educations} />
                    </Grid>
                    <Grid item xs={12} md={4} />
                  </Grid>
                </Container>
              </Box>

              <Footer />
            </Fragment>
          }
        </>
      )}
    </Fragment>
  );
}
