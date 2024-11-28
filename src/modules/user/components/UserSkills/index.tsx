import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SkillCard from "~/modules/user/components/UserSkills/components/SkillCard";
import { Skill } from "~/modules/user/interfaces/user.interface";
import { groupSkillsByCategory } from "~/modules/user/utils/helper";

interface UserSkillsProps {
  skills: Array<Skill>;
}

export default function UserSkills({ skills }: UserSkillsProps) {
  const groupedSkills = groupSkillsByCategory(skills);

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "secondary.skillBg",
        borderRadius: "10px",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {Object.entries(groupedSkills).map(([categoryName, skills]) => (
            <Grid item xs={12} sm={6} md={4} key={categoryName}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "16px", md: "18px" }, // Responsive font size
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "text.primary", // Uses theme color
                }}
                paddingY={1.5}
              >
                {categoryName}
              </Typography>
              <Grid container spacing={1}>
                {skills.map((skill: Skill, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Grid item xs={12} key={index}>
                    <SkillCard key={skill.id} skill={skill} bgColor="white" />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
