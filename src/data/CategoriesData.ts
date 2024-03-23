import MilkPowder from "../assets/icons/milk-powders.png";
import Diapers from "../assets/icons/diapers.png";
import FreshMilk from "../assets/icons/fresh-milks.png";
import Nutrition from "../assets/icons/nutritions.png";
import VitaminsHelath from "../assets/icons/vitamins.png";
import FamilyCare from "../assets/icons/family-care.png";
import Accessories from "../assets/icons/Accessories.png";
import Toys from "../assets/icons/toys.png";

const categoriesData = [
  {
    id: "1",
    title: "Diapers",
    image: Diapers,
  },
  {
    id: "2",
    title: "Fresh Milk",
    image: FreshMilk,
  },
  {
    id: "3",
    title: "Milk Powders",
    image: MilkPowder,
  },
  {
    id: "4",
    title: "Nutritions",
    image: Nutrition,
  },
  {
    id: "5",
    title: "Vitamins & Health",
    image: VitaminsHelath,
  },
  {
    id: "6",
    title: "Family Care",
    image: FamilyCare,
  },
  {
    id: "7",
    title: "Accessories",
    image: Accessories,
  },
  {
    id: "8",
    title: "Toys",
    image: Toys,
  },
];

export const getAllCategories = () => {
    return categoriesData
}
