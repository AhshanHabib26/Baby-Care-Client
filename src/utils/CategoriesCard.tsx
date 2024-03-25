import Image from "next/image";
import React from "react";
import Styles from "../styles/Global.module.css";
import Link from "next/link";

const CategoriesCard = ({ category }: any) => {
  const categoryUrl = encodeURIComponent(
    category.title.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <div
      className={`bg-gray-50 p-3 rounded-md cursor-pointer relative ${Styles.CCContainer}`}
    >
      <Image
        className="w-full h-[120px] object-cover"
        src={category.image}
        width={300}
        height={300}
        alt="Category Name"
      />
      <div
        className={`text-center text-lg font-medium text-[#474747] my-2 ${Styles.CCTitle}`}
      >
        <Link href={`/products?category=${categoryUrl}`}>{category.title}</Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
