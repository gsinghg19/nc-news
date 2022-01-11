import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function ArticleCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Article
        </Typography>
        <Typography variant="h5" component="div">
          Article Title
        </Typography>
        <Typography variant="body2">
          Article Text first few lines
          <br />
          {'"NEWS, NEWS, NEWS, NEWS"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Expand</Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
