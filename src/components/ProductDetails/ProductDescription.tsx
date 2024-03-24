"use client";

import { Box, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PDescription from "./PDescription";
import PSpecification from "./PSpecification";
import PReviews from "./PReviews";

const ProductDescription = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Box sx={{ width: "100%", bgcolor: "#0C1734", borderRadius: "5px" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab sx={{ color: "#fff" }} label="Description" />
          <Tab sx={{ color: "#fff" }} label="Specification" />
          <Tab sx={{ color: "#fff" }} label="Reviews (0) " />
        </Tabs>
      </Box>
      <Box>
        {value === 0 && <PDescription />}
        {value === 1 && <PSpecification />}
        {value === 2 && <PReviews />}
      </Box>
    </Stack>
  );
};

export default ProductDescription;
