import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router"; // Use Next.js router for client-side navigation

import { labels } from "~/core/utils/labels";

const { text404, pageNotFound, pageNotExist, goToHomepage } = labels;

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Use Next.js router to navigate
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      padding={2} // Optional: adds padding to avoid edges being too close
    >
      <Box marginBottom={3}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: 100,
            color: "rgba(43, 182, 115, 0.7)",
            fontWeight: "500",
          }}
        >
          {text404}
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom>
        {pageNotFound}
      </Typography>

      <Typography variant="body1" color="textSecondary" marginBottom={2}>
        {pageNotExist}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleGoHome}
        sx={{ width: "auto" }} // Optional: ensures the button doesn't stretch too much
      >
        {goToHomepage}
      </Button>
    </Box>
  );
}
