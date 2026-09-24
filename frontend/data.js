const phones = {
  iphone16promax: {
    name: "iphone 16 pro max",        
    image: "iphone16promax.png",                
    price: "8000-9000",
    display: "6.9-inch (163 x 77.6 x 8.3 mm) LTPO Super Retina XDR OLED, 120Hz, 2000 nits (HBM) ",
    weight : "227g",
    chip: "Apple A18 Pro (3 nm)",
    camera: "48 MP/48MP/12MP",
    battery: "20 hours",
    storage: "128 GB",
  
  },

  iphone17promax: {
    name: "iphone 17 pro max",
    image: "iphone17promax.png",              
    price: "11500-12500",
    display: "6.3-inch",
    weight: "188 g",
    chip: "N1 Pro",
    camera: "48 MP triple",
    battery: "24 hours",
    storage: "256 GB",
   },

  // ADD A NEW PHONE: copy one block, give it a new key, and change the values.
  // I left the specs blank on purpose. Copy the real numbers from Apple's tech specs page.
  iphone18ProMax: {
    name: "iPhone 18 Pro Max",
    color: "#c9c9ce",
    image: "",                 
    price: null,               
    display: "", 
    weight :"" ,              
    chip: "",
    camera: "",
    battery: "",
    storage: "",
  }
};

// Which rows appear, in this order: [field name in the phones above, label shown to the user]
// To add a row, add a line here AND add that field to each phone.
const specs = [
  ["display", "Display"],
  ["weight", "Weight"],
  ["chip", "Chip"],
  ["camera", "Camera"],
  ["battery", "Battery life"],
  ["storage", "Storage"],
];