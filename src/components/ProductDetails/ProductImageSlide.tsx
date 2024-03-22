"use client";
import React from "react";
import DaipersOne from "../../assets/images/DaipersOne.jpg";
import DaipersTwo from "../../assets/images/DaipersTwo.jpg";
import DaipersThree from "../../assets/images/DaipersThree.jpg";
import DaipersFour from "../../assets/images/DaipersFour.jpg";
import Image from "next/image";

const ProductImageSlide = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image src={DaipersOne} width={100} height={100} alt="Daipers Image" />
        <Image src={DaipersTwo} width={100} height={100} alt="Daipers Image" />
        <Image
          src={DaipersThree}
          width={100}
          height={100}
          alt="Daipers Image"
        />
        <Image src={DaipersFour} width={100} height={100} alt="Daipers Image" />
      </div>
      <div>
        <Image src={DaipersOne} width={400} height={400} alt="Daipers Image" />
      </div>
    </div>
  );
};

export default ProductImageSlide;
