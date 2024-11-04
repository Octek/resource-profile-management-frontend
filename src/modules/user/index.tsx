/* eslint-disable @typescript-eslint/naming-convention */
import { Fragment, useEffect, useState } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import router from "next/router";

import { ParsedUrlQuery } from "querystring";

import { useGetProfile } from "~/rest/apiHooks/profile/useProfile";

import UserAvatar from "~/modules/user/components/UserAvatar";
import UserEducation from "~/modules/user/components/UserEducation";
import UserExperience from "~/modules/user/components/UserExperience";
import UserInfo from "~/modules/user/components/UserInfo";
import UserSkills from "~/modules/user/components/UserSkills";

import AppToolBar from "~/core/components/AppToolbar";
import Footer from "~/core/components/Footer";
import NotFoundPage from "~/core/components/PageNotFound";
import { useBreakpoint } from "~/core/hooks/useBreakpoints";

export default function User() {
  const theme = useTheme();
  const [isShowErrorMessage, setShowErrorMessage] = useState(false);
  const [breakpoint, setBreakpoint] = useState<string>("xs");
  const [userData, setUserData] = useState<any>(null); // State to store user data
  useBreakpoint(theme, setBreakpoint);
  const { id } = router.query as ParsedUrlQuery & { id?: string };

  const {
    mutateAsync: fetchProfile,
    data,
    isError,
    isLoading: isProfileLoading,
  } = useGetProfile();

  useEffect(() => {
    if (id) {
      if (/^\d+$/.test(id)) {
        setShowErrorMessage(false);
        fetchProfile({ id: Number(id) });
      } else {
        setShowErrorMessage(true);
      }
    } else {
      setShowErrorMessage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, router]);

  useEffect(() => {
    if (data) {
      setShowErrorMessage(false);
      setUserData(data);
    }
    if (isError) {
      setShowErrorMessage(true);
    }
  }, [data, isError]);

  return (
    <Fragment>
      {isShowErrorMessage ? (
        <NotFoundPage />
      ) : (
        <Fragment>
          {isProfileLoading ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100vh"
            >
              <CircularProgress color="inherit" size={50} />
            </Box>
          ) : (
            <>
              {userData && (
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
                      <Grid
                        item
                        xs={12}
                        md={4}
                        display="flex"
                        justifyContent="center"
                      >
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

                  <Box
                    sx={{ width: "100%", backgroundColor: "primary.greyBg" }}
                  >
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
              )}
            </>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
