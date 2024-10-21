import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserInfoProps } from "~/modules/user/interfaces/user.interface";


export default function UserInfo({ name, job_title, bio }: UserInfoProps) {
  return (
    <Box flexDirection="column" padding={2}>
      <Box flexDirection="column">
        <Typography variant="h1">{name}</Typography>
        <Typography variant="h2">{job_title}</Typography>
      </Box>
      <Typography paddingTop={4} variant="h3">
        {bio}
      </Typography>
    </Box>
  );
}
