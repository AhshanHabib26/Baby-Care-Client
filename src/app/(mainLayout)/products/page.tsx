import FilterByBrand from "@/components/Products/FilterByBrand";
import FilterByCategories from "@/components/Products/FilterByCategories";
import FilterByPrice from "@/components/Products/FilterByPrice";
import FilterByRating from "@/components/Products/FilterByRating";
import AllProducts from "@/components/Products/Products";
import { Container, Divider } from "@mui/material";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-11 my-8">
          <div className="lg:col-span-3">
            <div className="w-full border p-3 rounded-md mt-8 lg:mt-0">
              <FilterByPrice />
              <Divider sx={{ margin: "25px 0" }} />
              <FilterByCategories />
              <Divider sx={{ margin: "25px 0" }} />
              <FilterByBrand />
              <Divider sx={{ margin: "25px 0" }} />
              <FilterByRating />
            </div>
          </div>
          <div className="lg:col-span-8 ">
            <div className="w-full lg:w-12/12 ">
              <AllProducts />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
