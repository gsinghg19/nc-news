import React from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function Homepage() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton
        variant="rectangular"
        width={1430}
        height={520}
        sx={{ bgcolor: "lightcoral" }}
      />
    </Stack>
  );
}

export default Homepage;
