const phones = {
  iphone16promax: {
    name: "iphone 16 pro max",
    color: "#7aa2f7",          // colour of the phone shape on the page
    image: "iphone16promax.png",                 // picture path, e.g. "images/nova.png" (empty = use the coloured shape)
    price: 599,
    display: "6.1-inch",
    chip: "N1",
    camera: "12 MP dual",
    battery: "20 hours",
    storage: "128 GB",
    weight: "170 g"
  },

  novaPro: {
    name: "Nova Pro",
    color: "#2d2d30",
    image: "",                 // picture path, e.g. "images/nova.png" (empty = use the coloured shape)
    price: 799,
    display: "6.3-inch",
    chip: "N1 Pro",
    camera: "48 MP triple",
    battery: "24 hours",
    storage: "256 GB",
    weight: "188 g"
  },

  // ADD A NEW PHONE: copy one block, give it a new key, and change the values.
  // I left the specs blank on purpose. Copy the real numbers from Apple's tech specs page.
  iphone18ProMax: {
    name: "iPhone 18 Pro Max",
    color: "#c9c9ce",
    image: "",                 // picture path, e.g. "images/nova.png" (empty = use the coloured shape)
    price: null,               // null shows as empty
    display: "",               // empty values show as "—" on the page
    chip: "",
    camera: "",
    battery: "",
    storage: "",
    weight: ""
  }
};

// Which rows appear, in this order: [field name in the phones above, label shown to the user]
// To add a row, add a line here AND add that field to each phone.
const specs = [
  ["display", "Display"],
  ["chip", "Chip"],
  ["camera", "Camera"],
  ["battery", "Battery life"],
  ["storage", "Storage"],
  ["weight", "Weight"]
];