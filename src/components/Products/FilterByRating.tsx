import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ratings = ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"];

const FilterByRating = () => {
  return (
    <Stack>
      <Typography sx={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
        Shop by Rating
      </Typography>
      <Box>
        {ratings.map((rating, index) => (
          <Box key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#363636",
                    "&.Mui-checked": {
                      color: "#0C1734",
                    },
                  }}
                />
              }
              label={rating}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default FilterByRating;
