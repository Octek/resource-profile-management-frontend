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
    if (
      !(router.isReady && router.query && Object.keys(router.query).length > 0)
    ) {
      return;
    }
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
  }, [id, router.isReady]);

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
                    maxWidth="lg" // Adjusts container width for responsiveness
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      // my: { xs: 16, md: 2 }, // Dynamic spacing
                      marginTop: 12,
                      gap: 4,
                      boxSizing: "border-box",
                      padding: { xs: 2, md: 4 }, // Padding for smaller screens
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Grid item xs={12} md={8} lg={8}>
                        <UserInfo
                          name={`${userData.first_name} ${userData.last_name}`}
                          jobTitle={userData.job_title}
                          bio={userData.bio}
                        />
                        {["md", "sm", "xs"].includes(breakpoint) && (
                          <Box sx={{ paddingTop: 4 }}>
                            <UserSkills skills={userData.skills} />
                          </Box>
                        )}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={4}
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
                    {["lg", "xl"].includes(breakpoint) && (
                      <Grid container spacing={2} sx={{ paddingTop: 4 }}>
                        <UserSkills skills={userData.skills} />
                      </Grid>
                    )}
                  </Container>

                  <Container
                    maxWidth="lg"
                    sx={{
                      width: "100%",
                      // marginTop: 8,
                      padding: { xs: 2, md: 4 },
                      gap: 4,
                    }}
                  >
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={10}>
                        <UserExperience experiences={userData.experiences} />
                      </Grid>
                      <Grid item xs={12} lg={10}>
                        <UserEducation educations={userData.educations} />
                      </Grid>
                    </Grid>
                  </Container>

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
