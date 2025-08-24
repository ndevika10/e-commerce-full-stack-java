
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

// Single Filter (Price) with checked
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399", checked: false },
      { value: "399-999", label: "₹399 To ₹999", checked: false },
      { value: "999-1999", label: "₹999 To ₹1999", checked: false },
      { value: "1999-2999", label: "₹1999 To ₹2999", checked: false },
      { value: "3999-4999", label: "₹3999 To ₹4999", checked: false },
    ],
  },
  {
  id: "disccout",
  name: "Disccount Range",
  options: [
    {
      value: "10",
      label: "10% And Above",
    },
    { value: "20", label: "20% And Above" },
    { value: "30", label: "30% And Above" },
    { value: "40", label: "40% And Above" },
    { value: "50", label: "50% And Above" },
    { value: "60", label: "60% And Above" },
    { value: "70", label: "70% And Above" },
    { value: "80", label: "80% And Above" },
  ],
},
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock", checked: false },
      { value: "out_of_stock", label: "Out Of Stock", checked: false },
    ],
  },
];
