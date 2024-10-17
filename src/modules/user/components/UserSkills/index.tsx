import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SkillCard from "~/modules/user/components/UserSkills/components/SkillCard";
import { mainSkills, otherSkills } from "~/modules/user/utils/helper";

export default function UserSkills() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "secondary.skillBg",
        borderRadius: "10px",
        padding: 3,
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Grid direction="row" container xs={12} spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1" paddingY={2}>
              Main expertise
            </Typography>
            <Grid
              container
              item
              xs={12}
              direction="column"
              rowGap={1}
              columnGap={1}
            >
              {mainSkills.map((value: string) => (
                <SkillCard key={value} data={value} />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h1" paddingY={2}>
              Other skills
            </Typography>
            <Grid
              container
              item
              xs={12}
              direction="column"
              rowGap={1}
              columnGap={1}
            >
              {otherSkills.map((value: string) => (
                <SkillCard key={value} data={value} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="text" onClick={handleClick}>
          See more
        </Button>
      </CardActions>
    </Card>
  );
}
