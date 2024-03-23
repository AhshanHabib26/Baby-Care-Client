import BabyCarrier from "../assets/images/BabyCarrier.jpg";
import BabyMonitor from "../assets/images/BabyMonitor.jpg";
import BabyNail from "../assets/images/BabyNail.jpg";
import BabySunscreen from "../assets/images/BabySunscreen.jpg";
import BabySwaddle from "../assets/images/BabySwaddle.jpg";
import BabyThermometer from "../assets/images/BabyThermometer.jpg";
import BabyWash from "../assets/images/BabyWash.jpg";
import BabyWipes from "../assets/images/BabyWipes.jpg";
import BootleSet from "../assets/images/BootleSet.jpg";
import DiapersOne from "../assets/images/DaipersOne.jpg";
import NasalAspirator from "../assets/images/NasalAspirator.jpg";
import TeethingToys from "../assets/images/TeethingToys.jpg";

const productData = [
  {
    id: "1",
    title: "Baby Diapers Pack",
    price: "15.99",
    flashSaleOffer: "12.99",
    ratings: "4.5",
    brand: "Pampers",
    discount: "20%",
    category: "Diapers",
    image: DiapersOne,
    description:
      "Keep your baby comfortable and dry with these high-quality diapers from Pampers. Designed with soft materials and excellent absorption, ensuring a peaceful sleep for your little one.",
  },
  {
    id: "2",
    title: "Baby Bottle Set",
    price: "19.99",
    flashSaleOffer: "15.99",
    ratings: "4.7",
    brand: "Philips Avent",
    discount: "15%",
    image: BootleSet,
    category: "Feeding",
    description:
      "This set includes everything you need for feeding your baby. Made with BPA-free materials and an anti-colic system, these bottles are gentle on your baby's delicate tummy.",
  },
  {
    id: "3",
    title: "Baby Shampoo & Body Wash",
    price: "8.49",
    flashSaleOffer: "6.99",
    ratings: "4.3",
    image: BabyWash,
    brand: "Johnson's Baby",
    discount: "25%",
    category: "Bath & Skincare",
    description:
      "Johnson's Baby Shampoo & Body Wash is gentle on your baby's sensitive skin and eyes. With a tear-free formula, it cleanses and nourishes your baby's delicate skin without drying it out.",
  },
  {
    id: "4",
    title: "Baby Wipes",
    price: "12.99",
    flashSaleOffer: "9.99",
    ratings: "4.6",
    brand: "Huggies",
    discount: "10%",
    image: BabyWipes,
    category: "Wipes",
    description:
      "Huggies Baby Wipes are thick, soft, and absorbent. They are fragrance-free, hypoallergenic, and dermatologically tested, making them safe for your baby's delicate skin.",
  },
  {
    id: "5",
    title: "Baby Nasal Aspirator",
    price: "9.99",
    flashSaleOffer: "7.99",
    ratings: "4.8",
    image: NasalAspirator,
    brand: "FridaBaby",
    discount: "30%",
    category: "Health & Safety",
    description:
      "Clear your baby's stuffy nose quickly and effectively with the FridaBaby Nasal Aspirator. It's gentle, safe, and easy to use, providing instant relief for your little one.",
  },
  {
    id: "6",
    title: "Baby Nail Clippers Set",
    price: "6.99",
    flashSaleOffer: "4.99",
    ratings: "4.4",
    brand: "Safety 1st",
    image: BabyNail,
    category: "Grooming",
    discount: "35%",
    description:
      "Trim your baby's nails safely and precisely with the Safety 1st Nail Clippers Set. Designed with curved cutting edges and a comfortable grip, it ensures a stress-free grooming experience.",
  },
  {
    id: "7",
    title: "Baby Teething Toys",
    price: "10.49",
    flashSaleOffer: "8.49",
    ratings: "4.6",
    brand: "Nuby",
    image: TeethingToys,
    discount: "18%",
    category: "Teething",
    description:
      "Relieve your baby's teething discomfort with these colorful and textured teething toys from Nuby. Made from soft, BPA-free materials, they massage and soothe sore gums.",
  },
  {
    id: "8",
    title: "Baby Sunscreen Lotion",
    price: "14.99",
    flashSaleOffer: "11.99",
    ratings: "4.5",
    brand: "Coppertone",
    image: BabySunscreen,
    discount: "8%",
    category: "Sun Protection",
    description:
      "Protect your baby's delicate skin from harmful UV rays with Coppertone Baby Sunscreen Lotion. Formulated with gentle, hypoallergenic ingredients, it provides broad-spectrum SPF 50 protection.",
  },
  {
    id: "9",
    title: "Baby Thermometer",
    price: "19.99",
    flashSaleOffer: "16.99",
    ratings: "4.7",
    brand: "Braun",
    discount: "11%",
    image: BabyThermometer,
    category: "Health & Safety",
    description:
      "Monitor your baby's temperature accurately and comfortably with the Braun Baby Thermometer. It offers precise readings in seconds, ensuring you can quickly detect any changes in your baby's health.",
  },
  {
    id: "10",
    title: "Baby Carrier",
    price: "29.99",
    flashSaleOffer: "24.99",
    ratings: "4.8",
    brand: "Ergobaby",
    discount: "35%",
    image: BabyCarrier,
    category: "Travel & Gear",
    description:
      "Keep your baby close and secure while on the move with the Ergobaby Baby Carrier. Ergonomically designed with padded straps and lumbar support, it ensures both you and your baby stay comfortable.",
  },
  {
    id: "11",
    title: "Baby Swaddle Blankets",
    price: "17.99",
    flashSaleOffer: "14.99",
    ratings: "4.6",
    brand: "Aden + Anais",
    discount: "40%",
    image: BabySwaddle,
    category: "Bedding",
    description:
      "Wrap your baby in comfort and warmth with these soft and breathable swaddle blankets from Aden + Anais. Versatile and stylish, they are perfect for swaddling, nursing, and cuddling.",
  },
  {
    id: "12",
    title: "Baby Monitor",
    price: "79.99",
    flashSaleOffer: "69.99",
    ratings: "4.9",
    discount: "15%",
    brand: "Infant Optics",
    image: BabyMonitor,
    category: "Safety",
    description:
      "Stay connected to your baby day and night with the Infant Optics Baby Monitor. Featuring a long-range transmission and a crystal-clear display, it provides peace of mind for parents.",
  },
];

export const getAllFlashProductData = () => {
  return productData;
};
