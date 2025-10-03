// PRODUCTS is an array of product objects used to render the product grid on the website.
// Each product object has the following structure:
// {
//   id: string,         // Unique identifier for the product
//   name: string,       // Product name
//   desc: string,       // Product description
//   img: string,        // Image path or URL
//   sizes: string[],    // Array of available sizes or variants
//   category: string    // Product category (e.g., "PPR", "CPVC", "UPVC", etc.)
// }
const PRODUCTS = [
  {
    id: "cpvc-1",
    name: "CPVC Pipe - Heat Resistant",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcpipe.webp",
    sizes: ["20mm", "25mm", "32mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-2",
    name: "CPVC Socket (Cuppler)",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcsocket.jpg",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-3",
    name: "CPVC Elbow 90°",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcelbow90.png",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-4",
    name: "CPVC Elbow 45°",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcelbow45.jpeg",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-5",
    name: "CPVC Equal Tee",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcequaltee.png",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-6",
    name: "CPVC End Cap",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcendcap.png",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-7",
    name: "CPVC Union",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcunion.png",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-8",
    name: "CPVC Tank Connector",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvctankconnector.png",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-9",
    name: "CPVC Cross Tee",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvccrosstee.png",
    sizes: ["15mm", "20mm", "25mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-10",
    name: "CPVC Cross Over",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvccrossover.jpg",
    sizes: ["15mm", "20mm", "25mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-11",
    name: "CPVC ABS Pipe Clip",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcabspipeclip.jpeg",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-12",
    name: "CPVC Metal Pipe Clip",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcmetalpipeclip.jpg",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-13",
    name: "CPVC Female Threaded Elbow",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcfemalethreadedelbow.jpeg",
    sizes: ["15x15", "20x15", "20x20", "25x15", "25x25"],
    category: "CPVC",
  },
  {
    id: "cpvc-14",
    name: "CPVC Female Threaded Tee",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcfemalethreadedtee.png",
    sizes: ["15x15", "20x15", "20x20", "25x15", "25x25"],
    category: "CPVC",
  },
  {
    id: "cpvc-15",
    name: "CPVC Female Threaded Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcfemalethreadedsocket.jpeg",
    sizes: [
      "20x15",
      "20x20",
      "25x15",
      "25x20",
      "25x25",
      "32x32",
      "40x40",
      "50x50",
    ],
    category: "CPVC",
  },
  {
    id: "cpvc-16",
    name: "CPVC Male Threaded Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcmalethreadedsocket.webp",
    sizes: [
      "20x15",
      "20x20",
      "25x15",
      "25x20",
      "25x25",
      "32x32",
      "40x40",
      "50x50",
    ],
    category: "CPVC",
  },
  {
    id: "cpvc-17",
    name: "CPVC Hexa Male Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvchexamalesocket.webp",
    sizes: [
      "20x15",
      "20x20",
      "25x15",
      "25x20",
      "25x25",
      "32x32",
      "40x40",
      "50x50",
    ],
    category: "CPVC",
  },
  {
    id: "cpvc-18",
    name: "CPVC Hexa Female Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvchexafemalesocket.webp",
    sizes: [
      "20x15",
      "20x20",
      "25x15",
      "25x20",
      "25x25",
      "32x32",
      "40x40",
      "50x50",
    ],
    category: "CPVC",
  },
  {
    id: "cpvc-19",
    name: "CPVC Reducer Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcrsocket.webp",
    sizes: ["20x15 - 50x40"],
    category: "CPVC",
  },
  {
    id: "cpvc-20",
    name: "CPVC Reducer Tee",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcrtee.webp",
    sizes: ["20x15 - 50x40"],
    category: "CPVC",
  },
  {
    id: "cpvc-21",
    name: "CPVC Reducer Bush",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcrbush.webp",
    sizes: ["20x15 - 50x40"],
    category: "CPVC",
  },
  {
    id: "cpvc-22",
    name: "CPVC Hanging Clamp",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvchangingclamp.jpeg",
    sizes: ["20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-23",
    name: "CPVC Reducer Elbow",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcrelbow.png",
    sizes: ["20x15", "25x20"],
    category: "CPVC",
  },
  {
    id: "cpvc-24",
    name: "CPVC Long Plug",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvclongplug.webp",
    sizes: ["15mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-25",
    name: "CPVC Plain Male Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcplainmalesocket.jpeg",
    sizes: ["15x15", "20x15", "20x20", "25x25", "32x32", "40x40"],
    category: "CPVC",
  },
  {
    id: "cpvc-26",
    name: "CPVC Plain Female Socket",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcplainfemalesocket.jpeg",
    sizes: ["15x15", "20x15", "20x20", "25x25", "32x32", "40x40"],
    category: "CPVC",
  },
  {
    id: "cpvc-27",
    name: "CPVC Ball Valve",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcballvalve.jpg",
    sizes: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "CPVC",
  },
  {
    id: "cpvc-28",
    name: "CPVC Triple Female Elbow",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvctriplefemaleelbow.webp",
    sizes: ["20x15"],
    category: "CPVC",
  },
  {
    id: "cpvc-29",
    name: "CPVC Double Female Elbow",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcdoublefemaleelbow.avif",
    sizes: ["20x15"],
    category: "CPVC",
  },
  {
    id: "cpvc-30",
    name: "CPVC Solvent Cement",
    desc: "CPVC for hot water lines with excellent thermal performance.",
    img: "/assets/imgs/cpvc/cpvcsolventcement.jpeg",
    sizes: ["59ml", "118ml", "237ml"],
    category: "CPVC",
  },
  {
    id: "upvc-1",
    name: "UPVC Pipe - NS Grade",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcpipens.jpeg",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-2",
    name: "UPVC Pipe - Commercial Grade",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcpipecommercial.png",
    sizes: ["50mm", "75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-3",
    name: "UPVC Cuppler (Socket)",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcsocket.webp",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-4",
    name: "UPVC Bend 90°",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcbend90.png",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-5",
    name: "UPVC Bend 45°",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcbend45.jpg",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-6",
    name: "UPVC Door Bend",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcdbend.webp",
    sizes: ["75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-7",
    name: "UPVC Single Tee",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvctee.jpeg",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-8",
    name: "UPVC Door Tee",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcdtee.webp",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-9",
    name: "UPVC Reducer Socket",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcrsocket.jpeg",
    sizes: ["75x50", "110x75", "160x110"],
    category: "UPVC",
  },
  {
    id: "upvc-10",
    name: "UPVC Reducer Tee",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcrtee.webp",
    sizes: ["110x75", "160x110"],
    category: "UPVC",
  },
  {
    id: "upvc-11",
    name: "UPVC Multi Floor Trap",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcmftrap.jpeg",
    sizes: ["110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-12",
    name: "UPVC P Trap",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcptrap.jpeg",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-13",
    name: "UPVC Hanging Clamp",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvchangingclamp.avif",
    sizes: ["75mm", "110mm", "160mm", "200mm"],
    category: "UPVC",
  },
  {
    id: "upvc-14",
    name: "UPVC Single Y (Plain)",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcsingley.png",
    sizes: ["75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-15",
    name: "UPVC Metal Pipe Clip",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcmetalpipeclip.jpeg",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-16",
    name: "UPVC Door Single Y",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcdy.webp",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-17",
    name: "UPVC Double Y (Plain)",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcdoubley.png",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-18",
    name: "UPVC Cross Tee Plain",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvccrosstee.webp",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-19",
    name: "UPVC Double Y with Door",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcdoory.jpeg",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-20",
    name: "UPVC Vent Cowl",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcventcowl.jpeg",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-21",
    name: "UPVC Cross Tee Plain With Door",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvccrossteewithdoor.jpeg",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-22",
    name: "UPVC Square Jali",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcsquarejali.jpeg",
    sizes: ["110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-23",
    name: "UPVC Round Jali",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcroundjali.jpeg",
    sizes: ["110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-24",
    name: "UPVC Socket Plug",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcsocketplug.png",
    sizes: ["50mm", "75mm", "110mm", "160mm"],
    category: "UPVC",
  },
  {
    id: "upvc-25",
    name: "UPVC Nahani Trap",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcntrap.png",
    sizes: ["110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-26",
    name: "UPVC Washer Lubricant",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcwasherlubricant.webp",
    sizes: ["100ML", "250ML"],
    category: "UPVC",
  },
  {
    id: "upvc-27",
    name: "UPVC Cleansing Pipe",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvccleansingpipe.jpg",
    sizes: ["75mm", "110mm"],
    category: "UPVC",
  },
  {
    id: "upvc-28",
    name: "UPVC Metal Grip",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcmetalpipeclip.jpeg",
    sizes: ["N/A"],
    category: "UPVC",
  },
  {
    id: "upvc-29",
    name: "UPVC Solvent Cement",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcsolventcement.jpg",
    sizes: ["100ML", "250ML", "500ML", "1000ML"],
    category: "UPVC",
  },
  {
    id: "upvc-30",
    name: "UPVC Threaded Rod",
    desc: "UV-stable UPVC for drainage and outdoor use.",
    img: "/assets/imgs/upvc/pvcthreadedrod.webp",
    sizes: ["10mm"],
    category: "UPVC",
  },
  {
    id: "ppr-1",
    name: "PPR Pipes",
    desc: "High-quality PPR pipe suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprpipe.jpeg",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-1a",
    name: "PPR Roll Pipes",
    desc: "High-quality PPR pipe suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprrollpipe.png",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-2",
    name: "PPR Elbow 90°",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprelbow90.jpeg",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-3",
    name: "PPR Elbow 45°",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprelbow45.png",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-4",
    name: "PPR Socket (Cuppler)",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprsocket.webp",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-5",
    name: "PPR Equal Tee",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprtee.webp",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-6",
    name: "PPR Cross Tee",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprcrosstee.jpg",
    sizes: ["20mm", "25mm", "32mm", "40mm"],
    category: "PPR",
  },
  {
    id: "ppr-7",
    name: "PPR Crossover",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprcrossover.webp",
    sizes: ["20mm", "25mm", "32mm"],
    category: "PPR",
  },
  {
    id: "ppr-8",
    name: "PPR Wall Clamp",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprwallclamp.webp",
    sizes: ["20mm", "25mm", "32mm", "40mm", "50mm", "63mm"],
    category: "PPR",
  },
  {
    id: "ppr-9",
    name: "PPR End Cap",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprendcap.jpg",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-10",
    name: "PPR Union",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprunion.webp",
    sizes: ["20mm", "25mm", "32mm", "40mm", "50mm", "63mm"],
    category: "PPR",
  },
  {
    id: "ppr-11",
    name: "PPR Short Plug",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprshortplug.avif",
    sizes: ["20mm", "25mm", "32mm"],
    category: "PPR",
  },
  {
    id: "ppr-12",
    name: "PPR Tank Nipple",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprtanknipple.webp",
    sizes: ["20mm", "25mm", "32mm", "40mm", "50mm"],
    category: "PPR",
  },
  {
    id: "ppr-13",
    name: "PPR Brass Ball Valve",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprballvalve.png",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-14",
    name: "Stop Valve",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprstopvalve.webp",
    sizes: ["20mm", "25mm", "32mm", "40mm", "50mm", "63mm"],
    category: "PPR",
  },
  {
    id: "ppr-15",
    name: "PPR Consealed Valve",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprconcealed.jpg",
    sizes: ["20mm", "25mm", "32mm"],
    category: "PPR",
  },
  {
    id: "ppr-16",
    name: "PPR Plastic Ball Valve",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprballvalve.png",
    sizes: [
      "20mm",
      "25mm",
      "32mm",
      "40mm",
      "50mm",
      "63mm",
      "75mm",
      "90mm",
      "110mm",
    ],
    category: "PPR",
  },
  {
    id: "ppr-17",
    name: "PPR Ball Valve Metal Body",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprballvalvemetalbody.jpg",
    sizes: ["20mm", "25mm", "32mm"],
    category: "PPR",
  },
  {
    id: "ppr-18",
    name: "PPR Long Plug",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprlongplug.jpeg",
    sizes: ["20mm"],
    category: "PPR",
  },
  {
    id: "ppr-19",
    name: "PPR Female Socket",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprfemalesocket.jpg",
    sizes: [
      '20mmx1/2"',
      '25mmx1/2"',
      '25mmx3/4"',
      '32mmx1/2"',
      '32mmx3/4"',
      '32mmx1"',
      '40mmx5/4"',
      '50mmx3/4"',
      '63mmx2"',
      '75mmx2.5"',
      '90mmx3"',
      '101mmx4"',
    ],
    category: "PPR",
  },
  {
    id: "ppr-20",
    name: "PPR Male Socket",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprmalesocket.jpg",
    sizes: [
      '20mmx1/2"',
      '25mmx1/2"',
      '25mmx3/4"',
      '32mmx1/2"',
      '32mmx3/4"',
      '32mmx1"',
      '40mmx5/4"',
      '50mmx3/4"',
      '63mmx2"',
      '75mmx2.5"',
      '90mmx3"',
      '101mmx4"',
    ],
    category: "PPR",
  },
  {
    id: "ppr-21",
    name: "PPR Female Elbow",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprfemaleelbow.webp",
    sizes: [
      '20mmx1/2"',
      '25mmx1/2"',
      '25mmx3/4"',
      '32mmx1/2"',
      '32mmx3/4"',
      '32mmx1"',
      '40mmx5/4"',
    ],
    category: "PPR",
  },
  {
    id: "ppr-22",
    name: "PPR Male Elbow",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprmaleelbow.png",
    sizes: [
      '20mmx1/2"',
      '25mmx1/2"',
      '25mmx3/4"',
      '32mmx1/2"',
      '32mmx3/4"',
      '32mmx1"',
      '40mmx5/4"',
    ],
    category: "PPR",
  },
  {
    id: "ppr-23",
    name: "PPR Male Tee",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprmaletee.jpg",
    sizes: [
      '20mmx1/2"',
      '25mmx1/2"',
      '25mmx3/4"',
      '32mmx1/2"',
      '32mmx3/4"',
      '32mmx1"',
      '40mmx5/4"',
    ],
    category: "PPR",
  },
  {
    id: "ppr-24",
    name: "PPR Female Tee",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprfemaletee.png",
    sizes: [
      '20mmx1/2"',
      '25mmx1/2"',
      '25mmx3/4"',
      '32mmx1/2"',
      '32mmx3/4"',
      '32mmx1"',
      '40mmx5/4"',
    ],
    category: "PPR",
  },
  {
    id: "ppr-25",
    name: "PPR Male Elbow with Disk",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprmaleseatedelbow.jpeg",
    sizes: ['20mmx1/2"', '25mmx1/2"', '25mmx3/4"'],
    category: "PPR",
  },
  {
    id: "ppr-26",
    name: "PPR Female Elbow with Disk",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprfemaleelbowwithdisk.webp",
    sizes: ['20mmx1/2"', '25mmx1/2"', '25mmx3/4"'],
    category: "PPR",
  },
  {
    id: "ppr-27",
    name: "PPR Male Union",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprmaleunion.jpg",
    sizes: ['20mmx1/2"', '25mmx3/4"', '32mmx1"', '40mmx5/4"'],
    category: "PPR",
  },
  {
    id: "ppr-28",
    name: "PPR Female Union",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprfemaleunion.webp",
    sizes: ['20mmx1/2"', '25mmx3/4"', '32mmx1"', '40mmx5/4"'],
    category: "PPR",
  },
  {
    id: "ppr-29",
    name: "PPR Double Female Elbow",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprdoublefemaleelbow.png",
    sizes: ['20mmx1/2"', '25mmx1/2"'],
    category: "PPR",
  },
  {
    id: "ppr-30",
    name: "PPR Reducer Socket",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprrsocket.jpg",
    sizes: ["25x20-110x63"],
    category: "PPR",
  },
  {
    id: "ppr-31",
    name: "PPR Reducer Tee",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprrtee.avif",
    sizes: ["25x20x25 - 110x63x110"],
    category: "PPR",
  },
  {
    id: "ppr-32",
    name: "PPR Reducer Elbow",
    desc: "High-quality PPR Fitting suitable for potable water and plumbing applications.",
    img: "/assets/imgs/ppr/pprrelbow.jpg",
    sizes: ["25x20,32x20,32x25,40x32,50x40"],
    category: "PPR",
  },
  {
    id: "ppr-33",
    name: "PPR Welding Kit",
    desc: "An essential toolset for plumbers and installers working with PPR pipes and fittings.",
    img: "/assets/imgs/ppr/pprweldingmachine.webp",
    sizes: ["20-40", "50-120"],
    category: "PPR",
  },
  {
    id: "ppr-34",
    name: "PPR Wireless Heating Machine",
    desc: "Modern version of the PPR welding kit — battery-powered heating so installers can weld pipes anywhere without needing a power outlet.",
    img: "/assets/imgs/ppr/pprwirelessheatingmachine.jpg",
    sizes: ["4AH", "6AH"],
    category: "PPR",
  },

  {
    id: "hdpe-1",
    name: "HDPE Pipes",
    desc: "High-density polyethylene pipe for borewell and irrigation.",
    img: "/assets/imgs/hdpe.webp",
    sizes: ["16mm - 200mm"],
    category: "HDPE",
  },
  {
    id: "hdpe-2",
    name: "HDPE Pipe - NS Grade",
    desc: "High-density polyethylene pipe for borewell and irrigation.",
    img: "/assets/imgs/hdpe.webp",
    sizes: ["16mm - 200mm"],
    category: "HDPE",
  },
  {
    id: "hdpe-3",
    name: "HDPE Pipe - NSQ Grade",
    desc: "High-density polyethylene pipe for borewell and irrigation.",
    img: "/assets/imgs/hdpe.webp",
    sizes: ["16mm - 200mm"],
    category: "HDPE",
  },

  {
    id: "TPZebra-1",
    name: "TP - Zebra Pipe",
    desc: "High-density polyethylene pipe for borewell and irrigation.",
    img: "https://5.imimg.com/data5/XG/MP/NZ/SELLER-2925562/pvc-zebra-garden-pipe.jpg",
    sizes: ["63mm", "90mm", "110mm"],
    category: "TPZebra",
  },

  {
    id: "Borewell-1",
    name: "Blue Pipes - Borewell",
    desc: "High-density polyethylene pipe for borewell and irrigation.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/6/427221603/WT/VL/PI/5212377/pvc-casing-pipes-500x500.jpg",
    sizes: [
      "5kgx110mm",
      "6kgx110mm",
      "6kgx110mm NS",
      "7kgx114mm",
      "8kgx114mm",
      "12kgx160mm",
    ],
    category: "Borewell",
  },
  {
    id: "Tripal-1",
    name: "Heavy Duty Tripals",
    desc: "High-density polyethylene pipe for borewell and irrigation.",
    img: "https://static-01.daraz.com.np/p/424b26852defcebd0fd4ee45b0423b94.jpg",
    sizes: ["63mm", "90mm", "110mm"],
    category: "Tripal",
  },
  {
    id: "WaterTanks-1",
    name: "Hilltake",
    desc: "Durable fittings for secure pipe connections.",
    img: "https://static-01.daraz.com.np/p/4da363028a944828a62b8b8fe01f07b7.jpg",
    sizes: ["500 Liter - 10,000 Liter"],
    category: "WaterTanks",
  },
  {
    id: "WaterTanks-2",
    name: "Future - Blow",
    desc: "Durable fittings for secure pipe connections.",
    img: "/assets/imgs/tanks/future.jpg",
    sizes: ["500 Liter - 10,000 Liter"],
    category: "WaterTanks",
  },
];

//navbar product link
document.addEventListener("DOMContentLoaded", function () {
  const navbarProducts = document.getElementById("navbarProducts");
  if (navbarProducts) {
    navbarProducts.addEventListener("click", function (e) {
      // Go to products section and set filter to all categories
      e.preventDefault();
      document.getElementById("categoryFilter").value = "all";
      renderProducts("all");
      updateBreadcrumb("all");
      // Scroll to products section
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
});

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";
  PRODUCTS.filter((p) => {
    if (filter === "all") {
      // Only show products whose id contains the number 1 (e.g. "cpvc-1", "ppr-1", "hdpe-1", etc.)
      return /\d-1$/.test(p.id) || /-1$/.test(p.id);
    }
    return p.category === filter;
  }).forEach((p) => {
    const card = document.createElement("article");
    card.className =
      "bg-white rounded-lg p-4 card-hover transition-transform duration-200 cursor-pointer";
    card.innerHTML = `
      <div class="w-full h-48 flex items-center justify-center bg-white rounded mb-2 p-4">
        <img src="${p.img}" alt="${
      p.name
    }" class="max-h-full max-w-full object-contain" />
      </div>
      <h3 class="mt-3 font-semibold text-lg">${p.name}</h3>
      <p class="mt-1 text-sm text-gray-500">${p.desc}</p>
      <div class="mt-2 text-sm text-gray-700">
        <strong>Available Sizes:</strong> ${p.sizes.join(", ")}
      </div>
    `;
    // Removed individual click listeners on cards to centralize click handling
    // if (filter === "all") {
    //   card.addEventListener("click", () => {
    //     categoryFilter.value = p.category;
    //     renderProducts(p.category);
    //   });
    // }
    productGrid.appendChild(card);
  });
}

function updateBreadcrumb(filter) {
  const breadcrumbProduct = document.getElementById("breadcrumbProduct");
  if (!breadcrumbProduct) return;

  // Only show the category if not "all"
  if (filter !== "all") {
    breadcrumbProduct.innerHTML = `<span>&gt;</span> <span class="text-emerald-700 font-semibold">${filter}</span>`;
  } else {
    breadcrumbProduct.innerHTML = ""; // Don't show "All Categories"
  }
}

// Update this in your renderProducts/filter change logic:
categoryFilter.addEventListener("change", (e) => {
  renderProducts(e.target.value);
  updateBreadcrumb(e.target.value);
});

// Make "Products" in breadcrumb clickable to show all categories
document
  .querySelector('#breadcrumb a[href="#products"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    categoryFilter.value = "all";
    renderProducts("all");
    updateBreadcrumb("all");
  });

// Initial render
renderProducts();
updateBreadcrumb(categoryFilter.value);

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileProductDropdownBtn = document.getElementById(
  "mobileProductDropdownBtn"
);
const mobileProductDropdown = document.getElementById("mobileProductDropdown");
const dropdownIcon = document.getElementById("dropdownIcon");

function openMobileMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  mobileMenuOverlay.classList.remove("hidden");
}

function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  mobileMenuOverlay.classList.add("hidden");
}

mobileProductDropdownBtn.addEventListener("click", () => {
  mobileProductDropdown.classList.toggle("hidden");
  dropdownIcon.classList.toggle("rotate-180");
});

// Handle category selection from mobile dropdown
mobileProductDropdown.querySelectorAll("a[data-category]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.getAttribute("data-category");
    categoryFilter.value = category;
    renderProducts(category);
    updateBreadcrumb(category);
    closeMobileMenu();
  });
});

mobileMenuBtn.addEventListener("click", openMobileMenu);

// Close menu when clicking overlay
mobileMenuOverlay.addEventListener("click", closeMobileMenu);

// Optional: Close menu when clicking a link inside the menu
mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMobileMenu();
  }
});

// Optional: Close menu when clicking outside or on a link
mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
  }
});

// Check URL for category parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

if (selectedCategory) {
  categoryFilter.value = selectedCategory; // set dropdown
  renderProducts(selectedCategory); // render filtered products

  // Scroll to products section
  const productsSection = document.getElementById("products");
  productsSection.scrollIntoView({ behavior: "smooth", block: "start" });

  // Highlight filtered products briefly
  setTimeout(() => {
    document.querySelectorAll("#productGrid article").forEach((card) => {
      card.classList.add("ring-2", "ring-emerald-500");
      setTimeout(
        () => card.classList.remove("ring-2", "ring-emerald-500"),
        2000
      );
    });
  }, 500);
}

// Create popup HTML structure and append to body (only once)
function createProductPopup() {
  if (document.getElementById("productPopupOverlay")) return; // Already exists

  const overlay = document.createElement("div");
  overlay.id = "productPopupOverlay";
  overlay.className =
    "fixed inset-0 bg-transparent z-[100] flex items-center justify-center px-4 sm:px-0 hidden";

  overlay.innerHTML = `
    <div id="productPopup" class="bg-white rounded-lg shadow-lg max-w-md w-full flex p-2 sm:p-4 gap-2 sm:gap-4 relative animate-fade-in">
      <button id="closeProductPopup" class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold">&times;</button>
      <img id="popupImg" src="" alt="" class="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded bg-gray-50 flex-shrink-0" />
      <div class="flex flex-col justify-between">
        <h3 id="popupName" class="text-lg sm:text-xl font-bold mb-1"></h3>
        <p id="popupDesc" class="text-gray-600 text-sm mb-2"></p>
        <p id="popupUsecase" class="text-gray-700 text-xs mb-2"></p>
        <div class="mb-2">
          <span class="font-semibold text-gray-700">Sizes:</span>
          <span id="popupSizes" class="text-gray-800 text-sm"></span>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close logic
  document.getElementById("closeProductPopup").onclick = () => {
    overlay.classList.add("hidden");
  };
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  };
}

// Helper to get usecase based on category (customize as needed)
function getUsecase(product) {
  switch (product.category) {
    case "CPVC":
      return "Use Case: Hot and cold water plumbing, residential and commercial buildings.";
    case "UPVC":
      return "Use Case: Drainage, outdoor plumbing, and UV-exposed installations.";
    case "PPR":
      return "Use Case: Potable water supply, heating systems, and industrial piping.";
    case "HDPE":
      return "Use Case: Drainage, irrigation, and water supply lines.";
    case "Borewell":
      return "Use Case: Borewell casing and deep tube wells.";
    case "TPZebra":
      return "Use Case: Garden and flexible water pipes.";
    case "Tripal":
      return "Use Case: Heavy-duty covering and protection.";
    case "WaterTanks":
      return "Use Case: Water storage for homes and industries.";
    default:
      return "";
  }
}

function enableProductPopups() {
  createProductPopup();
  document
    .getElementById("productGrid")
    .addEventListener("click", function (e) {
      let card = e.target.closest("article");
      if (!card) return;

      // Find product by name (assuming h3 is unique per card)
      const name = card.querySelector("h3")?.textContent?.trim();
      const product = PRODUCTS.find((p) => p.name === name);
      if (!product) return;

      if (categoryFilter.value === "all") {
        // In "all" category, clicking a product card switches category filter and re-renders products
        categoryFilter.value = product.category;
        renderProducts(product.category);
        updateBreadcrumb(product.category);
        return;
      }

      // Show popup for other categories
      document.getElementById("popupImg").src = product.img;
      document.getElementById("popupImg").alt = product.name;
      document.getElementById("popupName").textContent = product.name;
      document.getElementById("popupDesc").textContent = product.desc;
      document.getElementById("popupUsecase").textContent = getUsecase(product);
      document.getElementById("popupSizes").textContent =
        product.sizes.join(", ");

      // Show popup
      document.getElementById("productPopupOverlay").classList.remove("hidden");
    });

  // Add ESC key support to close popup
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      !document
        .getElementById("productPopupOverlay")
        .classList.contains("hidden")
    ) {
      document.getElementById("productPopupOverlay").classList.add("hidden");
    }
  });
}

// Call this after DOMContentLoaded and after renderProducts()
document.addEventListener("DOMContentLoaded", enableProductPopups);
// If you re-render productGrid, call enableProductPopups() again if needed.
