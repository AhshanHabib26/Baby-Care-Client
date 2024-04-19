import { getAllCategories } from "@/data/CategoriesData";
import CategoriesCard from "@/utils/CategoriesCard";
import { Button, Container } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Categories = () => {
  const categories = getAllCategories();

  return (
    <div className="my-20">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0C1734]">
            Top Categories
          </h1>
          <p className=" text-lg font-light">
            Discover top baby care essentials for every stage of parenthood.
          </p>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto mt-8">
          {categories.slice(0, 8).map((category: any) => (
            <CategoriesCard category={category} key={category.id} />
          ))}
        </div>
        <div className=" flex items-center justify-center mx-auto mt-10">
          <Button component={Link} href="/products" size="large">
            View All <ChevronRight size={20} />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
