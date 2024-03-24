import React from "react";
import BrandImgOne from "../../assets/icons/BrandOne.png";
import BrandImgTwo from "../../assets/icons/BrandTwo.png";
import BrandImgThree from "../../assets/icons/BrandThree.png";
import BrandImgFour from "../../assets/icons/BrandFour.png";
import BrandImgFive from "../../assets/icons/BrandFive.png";
import BrandImgSix from "../../assets/icons/BrandSix.png";
import BrandImgSeven from "../../assets/icons/BrandSeven.png";
import BrandImgEight from "../../assets/icons/BrandEight.png";
import Image from "next/image";

const imgData = [
  BrandImgOne,
  BrandImgTwo,
  BrandImgThree,
  BrandImgFour,
  BrandImgFive,
  BrandImgSix,
  BrandImgSeven,
  BrandImgEight,
];

const BrandIcons = () => {
  return (
    <div>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-5">
        {imgData.map((image, index) => (
          <div key={index}>
            <Image
              className="w-full h-[30px] object-cover"
              src={image}
              width={150}
              height={100}
              alt="Brand Image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandIcons;
