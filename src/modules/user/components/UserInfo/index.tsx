import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function UserInfo() {
  return (
    <Box flexDirection="column" padding={2}>
      <Box flexDirection="column">
        <Typography variant="h1">Nurullah A.</Typography>
        <Typography variant="h2">Frontend Developer</Typography>
      </Box>
      <Typography paddingTop={4} variant="h3">
        Nurullah is a frontend developer with expertise in React.js and Angular.
        Overall, he has 7+ years of commercial experience. He has experience
        working with ERP, banks, e-commerce, telecommunication, and gift
        platforms. In addition, Nurullah has also developed a Virtual Reality
        module to monitor and visualize indoor temperature. Nurullah has
        excellent coding skills and can use and implement different frameworks
        well. He gained most of his experience working at agencies with European
        clients. Working on such engagements has made him gain work experience
        within European enterprises, such as Apollo.de.
      </Typography>
    </Box>
  );
}
