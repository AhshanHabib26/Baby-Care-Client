const ordersData = [
  {
    product: "Baby Diapers Pack",
    orderId: "102938",
    price: "899",
    quantity: 1,
    status: "Pending",
  },
  {
    product: "Baby Bottle Set",
    orderId: "203847",
    price: "599",
    quantity: 2,
    status: "Delivered",
  },
  {
    product: "Baby Shampoo",
    orderId: "304756",
    price: "149",
    quantity: 3,
    status: "Pending",
  },
  {
    product: "Baby Wash",
    orderId: "405675",
    price: "449",
    quantity: 1,
    status: "Delivered",
  },
  {
    product: "Baby Wipes",
    orderId: "506584",
    price: "299",
    quantity: 1,
    status: "Pending",
  },
  {
    product: "Baby Nasal Aspirator",
    orderId: "607493",
    price: "799",
    quantity: 1,
    status: "Delivered",
  },
  {
    product: "Baby Nail Clippers Set",
    orderId: "708302",
    price: "199",
    quantity: 2,
    status: "Pending",
  },
];

export const getMyOrderData = () => {
  return ordersData;
};
