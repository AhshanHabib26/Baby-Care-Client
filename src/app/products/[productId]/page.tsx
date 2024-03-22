import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductImageSlide from "@/components/ProductDetails/ProductImageSlide";
import ProductSideInfo from "@/components/ProductDetails/ProductSideInfo";
import { Container } from "@mui/material";
import React from "react";

interface IParams {
  productId: string;
}

interface IProps {
  params: IParams;
}

const FlashSaleDetailsPage: React.FC<IProps> = ({ params }) => {
  const { productId } = params;

  return (
    <div className=" my-12 mb-96">
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ProductImageSlide />
          <ProductSideInfo />
        </div>
        <div className="mt-12">
          <ProductDescription />
        </div>
      </Container>
    </div>
  );
};

export default FlashSaleDetailsPage;
