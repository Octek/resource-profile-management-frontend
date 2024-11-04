import { Box, Button, Typography } from "@mui/material";

import { labels } from "~/core/utils/labels";

export default function NotFoundPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Box marginBottom={3}>
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="10" y="70" fontSize="80" fontWeight="bold" fill="#FF6B6B">
            {labels.text404}
          </text>
        </svg>
      </Box>

      <Typography variant="h4" gutterBottom>
        {labels.pageNotFound}
      </Typography>

      <Typography variant="body1" color="textSecondary" marginBottom={2}>
        {labels.pageNotExist}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => (window.location.href = "/")}
      >
        {labels.goToHomepage}
      </Button>
    </Box>
  );
}
