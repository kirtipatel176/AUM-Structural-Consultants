import { Project, ProjectCategory, TeamMember, Service } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Hardik Patel",
    role: "Structural Lead",
    education: "Master's degree in Structural Design",
    description: "With a Master’s degree in Structural Design from Charusat University, Hardik brings over 10 years of experience specializing in innovative structural solutions for high-rise buildings, industrial plants, and steel structures. His expertise in structural analysis and optimization ensures safe, cost-effective, and efficient designs. At Aum Consultants, he leads multidisciplinary teams with a strong commitment to technical excellence, practical problem-solving, and client satisfaction.",
    imageUrl: "assets/hardik.webp"
  },
  {
    name: "Jaydeep Raghwani",
    role: "Structural Consultant",
    education: "Postgraduate in Structural Design",
    description: "A postgraduate in Structural Design from Charusat University, Jaydeep offers a balanced approach combining structural engineering expertise with extensive on-site execution experience. His hands-on involvement bridges design intentions and practical construction realities, ensuring smooth coordination, timely project completion, and superior quality control. His meticulous attention to detail and efficient on-site management make him a critical asset to the team.",
    imageUrl: "assets/jaydeep.webp"
  },
  {
    name: "Meet Choksi",
    role: "Senior Consultant",
    education: "12+ Years Experience",
    description: "Meet Choksi brings over 12 years of extensive structural design experience, including managing overseas projects with excellence. His expertise spans advanced structural design software, BIM modeling, and detailed technical coordination, enabling him to manage complex projects effectively. Meet’s capability to seamlessly integrate global standards and deliver precise, high-quality solutions makes him instrumental in fulfilling Aum Consultants' vision of innovation and quality.",
    imageUrl: "assets/meet.webp"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Comprehensive Structural Design",
    description: "Providing innovative and efficient structural solutions for industrial, commercial, and residential projects, ensuring safety, durability, and cost-effectiveness.",
    points: []
  },
  {
    title: "Structural Analysis & Optimization",
    description: "Performing detailed structural analysis to enhance efficiency, stability, and load-bearing capacity, ensuring compliance with industry standards and best practices.",
    points: []
  },
  {
    title: "Industrial Steel Structure Design",
    description: "Expertise in pre-engineered buildings (PEB), steel-framed structures, and heavy industrial frameworks.",
    points: [
      "Design of warehouse structures, factories, process plants, and large-span steel buildings with optimized material usage.",
      "Seismic and wind load analysis for robust and resilient industrial steel structures."
    ]
  },
  {
    title: "Detailing & Documentation (BIM Integration)",
    description: "We utilize advanced tools for precision and clarity.",
    points: [
      "3D structural modeling for visualization and coordination.",
      "Clash detection and resolution to avoid design conflicts.",
      "Accurate shop drawings and fabrication detailing for streamlined construction.",
      "Digital documentation to improve project management and reduce errors."
    ]
  },
  {
    title: "Project-Specific Consultancy",
    description: "We offer customized consultancy services for complex structural projects, ensuring optimal design, risk mitigation, and efficient construction methodologies.",
    points: []
  },
  {
    title: "Retrofitting & Rehabilitation",
    description: "We assess and upgrade existing structures to enhance their lifespan and performance. Our expertise in seismic retrofitting, strengthening techniques, and rehabilitation solutions ensures that older buildings remain safe and functional.",
    points: []
  }
];

export const PROJECTS: Project[] = [
  // --- RESIDENTIAL ---
  {
    id: 'r1',
    name: "MADHAV HOUSING SCHEME",
    location: "Godhara",
    area: "7,15,000 Sq. Ft.",
    structure: "70 Unit Duplex Bungalow Scheme",
    architect: "U A Design",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/assets/Madhav_image.webp",
    description: "A large-scale residential township offering modern living spaces with integrated community facilities."
  },
  {
    id: 'r2',
    name: "GANESH RESIDENCY",
    location: "Kapadwanj",
    area: "1,50,000 Sq. Ft.",
    structure: "54 Unit Duplex Bungalow Scheme",
    architect: "AR. Nilesh Patel",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/assets/Ganesh_residency.webp",
    description: "Premium duplex bungalows designed for luxury and comfort."
  },
  {
    id: 'r3',
    name: "DPR RESIDENCE",
    location: "Ahmedabad",
    area: "35,000 Sq. Ft.",
    structure: "Basement + Ground + 5 Private Residential Building",
    architect: "Axis Studio Architects",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/assets/dpr_residency.webp",
    description: "A private mid-rise residence focusing on vertical luxury living."
  },
  {
    id: 'r4',
    name: "SAISWADWSH",
    location: "Prantij",
    area: "1,80,000 Sq. Ft.",
    structure: "64 Unit Duplex Bungalow Scheme",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/SAISWADWSH.jpeg",
    description: "Expansive residential society designed for community living."
  },
  {
    id: 'r5',
    name: "IOCL COLONY",
    location: "Vadinar",
    area: "50,000 Sq. Ft.",
    structure: "Ground + 5 Residential Project",
    architect: "Vasundhra Architects",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/IOCL.webp",
    description: "Staff housing colony designed for efficiency and durability."
  },
  {
    id: 'r6',
    name: "SKYLINE",
    location: "Khedbrahma",
    area: "1,80,000 Sq. Ft.",
    structure: "Ground + 7 Residential Project",
    architect: "Key Stone Architects",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/skyline.jpeg",
    description: "Mid-rise apartment complex offering modern amenities."
  },
  {
    id: 'r7',
    name: "AKSHATAM LUXURIA",
    location: "Palanpur",
    area: "1,45,000 Sq. Ft.",
    structure: "Basement + Podium + Ground + 14 Stories",
    architect: "Kekul Mistry",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/AKSHATAM LUXURIA.jpeg",
    description: "High-rise luxury apartments with a podium level for recreational activities."
  },
  {
    id: 'r8',
    name: "DEVKUVAR – 7",
    location: "Ahmedabad",
    area: "50,000 Sq. Ft.",
    structure: "Basement + Ground + 7 Residential Project",
    architect: "A & M Design Studio",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/DEVKUVAR – 7.webp",
    description: "Contemporary urban housing with structural efficiency."
  },
  {
    id: 'r9',
    name: "DEVKUVAR – 8",
    location: "Ahmedabad",
    area: "60,000 Sq. Ft.",
    structure: "Basement + Ground + 7 Residential Project",
    architect: "A & M Design Studio",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/DEVKUVAR–8.webp",
    description: "Extension of the Devkuvar series featuring modern structural design."
  },
  {
    id: 'r10',
    name: "RESIDENTIAL QUARTERS (INCOMTEX)",
    location: "Jamnagar",
    area: "1,50,000 Sq. Ft.",
    structure: "6 Units (G+8, G+6, G+1)",
    architect: "CPWD",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "assets/RESIDENTIALQUARTERS.webp",
    description: "Government residential quarters built to CPWD standards."
  },
  {
    id: 'r11',
    name: "RANPARA HOUSE",
    location: "Mombasa, Kenya",
    area: "50,000 Sq. Ft.",
    structure: "Residential Unit (Cost Optimization)",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-2a429b08e695?q=90&w=1200&auto=format&fit=crop",
    description: "International residential project focused on re-analysis and detailing for cost optimization."
  },
  {
    id: 'r12',
    name: "GOKULDHAM BUNGALOW",
    location: "Ahmedabad",
    area: "13,000 Sq. Ft.",
    structure: "Ground + 2 Bungalow",
    architect: "U A Design",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1200&auto=format&fit=crop",
    description: "Luxury private bungalow with spacious structural layout."
  },
  {
    id: 'r13',
    name: "MR. ANKIT PATEL RESIDENCE",
    location: "Gandhinagar",
    area: "5,000 Sq. Ft.",
    structure: "Ground + 1 Bungalow",
    architect: "Hexagon Design Studio",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=90&w=1200&auto=format&fit=crop",
    description: "Modern private residence designed for aesthetics and comfort."
  },
  {
    id: 'r14',
    name: "MR. RAJANI SONI RESIDENCE",
    location: "Ahmedabad",
    area: "10,000 Sq. Ft.",
    structure: "Ground + 2 Bungalow",
    architect: "Axis Studio Architects",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=90&w=1200&auto=format&fit=crop",
    description: "Elegant private home with robust structural detailing."
  },
  {
    id: 'r15',
    name: "MR. ANIL LUNIA RESIDENCE",
    location: "Ahmedabad",
    area: "8,000 Sq. Ft.",
    structure: "Ground + 2 Bungalow",
    architect: "Axis Corporation - Mumbai",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=90&w=1200&auto=format&fit=crop",
    description: "Architecturally driven private residence."
  },
  {
    id: 'r16',
    name: "JODHPUR BUNGALOW",
    location: "Jodhpur, Rajasthan",
    area: "8,000 Sq. Ft.",
    structure: "Ground + 3 Bungalow",
    architect: "Studio 376 - Jodhpur",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=90&w=1200&auto=format&fit=crop",
    description: "Multi-story private bungalow integrating traditional and modern elements."
  },

  // --- COMMERCIAL ---
  {
    id: 'c1',
    name: "THE HIVE",
    location: "Himmatnagar",
    area: "1,45,000 Sq. Ft.",
    structure: "Basement + Ground + 7 Stories",
    architect: "U A Design",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=1200&auto=format&fit=crop",
    // Adding a 3D model URL for demonstration (using a placeholder GLB for now as requested)
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    description: "A modern commercial hub comprising retail spaces and corporate offices. (3D Model Available for Demo)"
  },
  {
    id: 'c2',
    name: "PLUSE PRIME",
    location: "Himmatnagar",
    area: "50,000 Sq. Ft.",
    structure: "Basement + Ground + 4 Commercial Project",
    architect: "Raw Form Architects",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=90&w=1200&auto=format&fit=crop",
    description: "Boutique commercial complex designed for high visibility."
  },
  {
    id: 'c3',
    name: "ADINATH COMMERCIAL PARK",
    location: "Moraiya, Ahmedabad",
    area: "50,000 Sq. Ft.",
    structure: "G + 3 Commercial Building & Industrial Sheds",
    architect: "Akshat The Priority",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1524813686514-a5756c97759e?q=90&w=1200&auto=format&fit=crop",
    description: "Mixed-use development combining commercial and industrial utility."
  },
  {
    id: 'c4',
    name: "SHIVAM SQUARE",
    location: "Kamalpur, Prantij",
    area: "50,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    architect: "Nirman Associates",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1582037928769-181f2422677e?q=90&w=1200&auto=format&fit=crop",
    description: "Low-rise commercial complex."
  },
  {
    id: 'c5',
    name: "SHREEJI ARCADE",
    location: "Shamlaji",
    area: "25,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=90&w=1200&auto=format&fit=crop",
    description: "Shopping arcade designed for accessibility and flow."
  },
  {
    id: 'c6',
    name: "COPPER STONE",
    location: "Himmatnagar",
    area: "1,10,000 Sq. Ft.",
    structure: "Ground + 4 Mixed Use",
    architect: "EDIFICE Consultants",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=90&w=1200&auto=format&fit=crop",
    description: "Prominent mixed-use building in Himmatnagar."
  },
  {
    id: 'c7',
    name: "SEVEN PLAZA",
    location: "Himmatnagar",
    area: "25,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    architect: "EDIFICE Consultants",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=90&w=1200&auto=format&fit=crop",
    description: "Modern retail plaza."
  },
  {
    id: 'c8',
    name: "YOGI SUDARSHAN PLAZA",
    location: "Himmatnagar",
    area: "30,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    architect: "EDIFICE Consultants",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=1200&auto=format&fit=crop",
    description: "Commercial space optimized for retail businesses."
  },
  {
    id: 'c9',
    name: "SEVEN ICONE",
    location: "Himmatnagar",
    area: "25,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    architect: "EDIFICE Consultants",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=90&w=1200&auto=format&fit=crop",
    description: "Stylish commercial complex."
  },
  {
    id: 'c10',
    name: "MADHAV HEIGHTS",
    location: "Himmatnagar",
    area: "30,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    architect: "EDIFICE Consultants",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?q=90&w=1200&auto=format&fit=crop",
    description: "Heightened commercial visibility project."
  },
  {
    id: 'c11',
    name: "SEVEN SKY",
    location: "Himmatnagar",
    area: "36,000 Sq. Ft.",
    structure: "Ground + 2 Commercial Project",
    architect: "EDIFICE Consultants",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1565514020176-dbf2277e9833?q=90&w=1200&auto=format&fit=crop",
    description: "Commercial complex with modern elevation."
  },

  // --- INDUSTRIAL ---
  {
    id: 'i1',
    name: "GREEN GLOBE AAC BLOCKS",
    location: "Oran, Prantij",
    area: "1,00,000 Sq. Ft.",
    structure: "Steel Structure with Machine Foundations",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=90&w=1200&auto=format&fit=crop",
    description: "Heavy industrial facility for AAC block manufacturing."
  },
  {
    id: 'i2',
    name: "VIJAY ALUMINIUM",
    location: "Vadasar, Ahmedabad",
    area: "15,000 Sq. Ft.",
    structure: "Steel Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1565610222536-ef125c59da3e?q=90&w=1200&auto=format&fit=crop",
    description: "Industrial shed for aluminium processing."
  },
  {
    id: 'i3',
    name: "MAHALAXMI PLY INDUSTRIES",
    location: "Harsol",
    area: "80,000 Sq. Ft.",
    structure: "Steel Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=90&w=1200&auto=format&fit=crop",
    description: "Large-span steel structure for plywood manufacturing."
  },
  {
    id: 'i4',
    name: "MAHALAXMI DOOR TECH",
    location: "Vavadi Chokadi",
    area: "1,00,000 Sq. Ft.",
    structure: "Steel Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1513828583688-6edbbbd4db3c?q=90&w=1200&auto=format&fit=crop",
    description: "Expansive industrial facility for door manufacturing."
  },
  {
    id: 'i5',
    name: "HELI CANS",
    location: "Bavala, Ahmedabad",
    area: "40,000 Sq. Ft.",
    structure: "Steel Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=90&w=1200&auto=format&fit=crop",
    description: "Manufacturing unit with optimized steel framing."
  },
  {
    id: 'i6',
    name: "JM PLASTOPACK",
    location: "Sanand, Veraval",
    area: "10,000 Sq. Ft.",
    structure: "RCC Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=90&w=1200&auto=format&fit=crop",
    description: "Compact industrial unit using RCC."
  },
  {
    id: 'i7',
    name: "COLD STORAGE AT VERAVAL",
    location: "Veraval",
    area: "20,000 Sq. Ft.",
    structure: "Cold Storage Design for Fish Storage",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=90&w=1200&auto=format&fit=crop",
    description: "Specialized temperature-controlled storage facility."
  },
  {
    id: 'i8',
    name: "RVNL SURAT METRO – GIS UNIT",
    location: "Surat",
    area: "12,000 Sq. Ft.",
    structure: "RCC Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=90&w=1200&auto=format&fit=crop",
    description: "Infrastructure support building for Surat Metro."
  },
  {
    id: 'i9',
    name: "GLOBE STAR ENGINEERS",
    location: "Ahmedabad",
    area: "16,300 Sq. Ft.",
    structure: "Steel Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=90&w=1200&auto=format&fit=crop",
    description: "Engineering workshop and office."
  },
  {
    id: 'i10',
    name: "ORBIT GRAVURES PVT. LTD.",
    location: "Kadi",
    area: "12,000 Sq. Ft.",
    structure: "RCC Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=90&w=1200&auto=format&fit=crop",
    description: "Industrial printing facility."
  },
  {
    id: 'i11',
    name: "SHYAM GLASS",
    location: "Santej, Ahmedabad",
    area: "14,000 Sq. Ft.",
    structure: "Steel Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=90&w=1200&auto=format&fit=crop",
    description: "Glass processing unit with modern facade."
  },
  {
    id: 'i12',
    name: "MY AGRIMONY",
    location: "Nadiad",
    area: "15,000 Sq. Ft.",
    structure: "RCC Structure",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=90&w=1200&auto=format&fit=crop",
    description: "Agro-industrial facility."
  },
  {
    id: 'i13',
    name: "EIA LABORATORY",
    location: "Veraval",
    area: "20,000 Sq. Ft.",
    structure: "RCC Structure",
    architect: "CPWD",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=90&w=1200&auto=format&fit=crop",
    description: "Government laboratory building."
  },
  {
    id: 'i14',
    name: "ICAR GODOWN",
    location: "Junagadh",
    area: "10,000 Sq. Ft.",
    structure: "Proflex Roof + RCC Frame (Rat Proof)",
    architect: "CPWD",
    category: ProjectCategory.INDUSTRIAL,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=90&w=1200&auto=format&fit=crop",
    description: "Grain storage facility designed to be rat-proof."
  },

  // --- HOTEL ---
  {
    id: 'h1',
    name: "KING'S KRAFT TREMEZZO RESORT",
    location: "Sasan Gir",
    area: "1,40,000 Sq. Ft.",
    structure: "Resort - 17 Cottages, 10 Villas",
    architect: "Axis Studio Architects",
    category: ProjectCategory.HOTEL,
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=90&w=1200&auto=format&fit=crop",
    description: "Luxury resort blended with nature in Sasan Gir."
  },
  {
    id: 'h2',
    name: "INOVIX FACILITY",
    location: "Dholera",
    area: "4,20,000 Sq. Ft.",
    structure: "G + 4 to 3 Hotel Units (522 Rooms)",
    architect: "Axis Studio Architects",
    category: ProjectCategory.HOTEL,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=90&w=1200&auto=format&fit=crop",
    description: "Large scale residence facility for TATA Semiconductor Plant."
  },
  {
    id: 'h3',
    name: "SOM CASTLE HOTEL",
    location: "Veraval",
    area: "85,000 Sq. Ft.",
    structure: "Ground + 6 Hotel Project (100 rooms)",
    architect: "Axis Studio Architects",
    category: ProjectCategory.HOTEL,
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=90&w=1200&auto=format&fit=crop",
    description: "Grand hotel structure in Veraval."
  },
  {
    id: 'h4',
    name: "THE GRAND TORAN HOTEL",
    location: "Porbandar",
    area: "1,50,000 Sq. Ft.",
    structure: "Ground + 3 Hotel Project (120 rooms)",
    architect: "Axis Studio Architects",
    category: ProjectCategory.HOTEL,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=90&w=1200&auto=format&fit=crop",
    description: "Expansive hospitality project in Porbandar."
  },

  // --- HOSPITAL ---
  {
    id: 'hp1',
    name: "GOVERNMENT HOSPITAL",
    location: "Jamnagar",
    area: "50,000 Sq. Ft.",
    structure: "Ground + 5 Hospital Project",
    architect: "CPWD",
    category: ProjectCategory.HOSPITAL,
    imageUrl: "https://images.unsplash.com/photo-1587351021759-3e566b9af923?q=90&w=1200&auto=format&fit=crop",
    description: "Public healthcare facility."
  },
  {
    id: 'hp2',
    name: "COMMUNITY HEALTH CENTER",
    location: "Jaisalmer, Rajasthan",
    area: "30,000 Sq. Ft.",
    structure: "Ground + 1 Hospital Project",
    category: ProjectCategory.HOSPITAL,
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=90&w=1200&auto=format&fit=crop",
    description: "Community focused medical center."
  },
  {
    id: 'hp3',
    name: "DEVARSH HOSPITAL",
    location: "Idar",
    area: "25,000 Sq. Ft.",
    structure: "Ground + 3 Hospital Project",
    architect: "Chintan Patel",
    category: ProjectCategory.HOSPITAL,
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0929519?q=90&w=1200&auto=format&fit=crop",
    description: "Multispecialty hospital building."
  },
  {
    id: 'hp4',
    name: "AYUSHMAN HOSPITAL",
    location: "Mehsana, Gujarat",
    area: "25,000 Sq. Ft.",
    structure: "Ground + 1 Hospital Project",
    architect: "Rushabh Prajapati",
    category: ProjectCategory.HOSPITAL,
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=90&w=1200&auto=format&fit=crop",
    description: "Modern medical facility in Mehsana."
  },

  // --- PARTY PLOT ---
  {
    id: 'pp1',
    name: "AVSAR RESORT & PARTY PLOT",
    location: "Veraval",
    area: "25,000 Sq. Ft.",
    structure: "Resort - 20 Weekend Villas & Banquet Hall",
    architect: "Axis Studio Architects",
    category: ProjectCategory.PARTY_PLOT,
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=90&w=1200&auto=format&fit=crop",
    description: "Leisure and events destination."
  },
  {
    id: 'pp2',
    name: "DARSHIV PARTY PLOT",
    location: "Prantij",
    area: "15,000 Sq. Ft.",
    structure: "Party Lawn with Banquet Hall",
    category: ProjectCategory.PARTY_PLOT,
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af0bc3?q=90&w=1200&auto=format&fit=crop",
    description: "Open air event venue."
  },

  // --- INSTITUTIONAL ---
  {
    id: 'ins1',
    name: "SRI CAMPUS",
    location: "Vadasma",
    area: "20,000 Sq. Ft.",
    structure: "Ground + 2 Pharmacy College",
    architect: "ZP Architect",
    category: ProjectCategory.INSTITUTIONAL,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=90&w=1200&auto=format&fit=crop",
    description: "Educational campus building."
  },
  {
    id: 'ins2',
    name: "AMRITADEVI NURSING COLLEGE",
    location: "Balotra, Rajasthan",
    area: "1,40,000 Sq. Ft.",
    structure: "Ground + 2 Nursing College",
    architect: "AR. Ashok Ghohil",
    category: ProjectCategory.INSTITUTIONAL,
    imageUrl: "https://images.unsplash.com/photo-1592280771801-e6504226f976?q=90&w=1200&auto=format&fit=crop",
    description: "Large scale nursing college campus."
  },

  // --- PUBLIC PARK ---
  {
    id: 'pk1',
    name: "NAMO VAN",
    location: "Bapunagar, Ahmedabad",
    area: "Lake Garden",
    structure: "RCC Solutions for Landscape",
    category: ProjectCategory.PUBLIC_PARK,
    imageUrl: "/assets/namo.webp",
    description: "Public lakefront redevelopment project."
  },

  // --- CHIMNEY ---
  {
    id: 'ch1',
    name: "MS CHIMNEY",
    location: "Ras Al Khaimah, Dubai",
    area: "60-Meter High",
    structure: "Self-Supported Double-Wall",
    category: ProjectCategory.CHIMNEY,
    imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=90&w=1200&auto=format&fit=crop",
    description: "Industrial chimney designed for high wind loads."
  }
];

export const VISION_POINTS = [
  "Continuously innovate and integrate the latest advancements in structural design and analysis.",
  "Promote sustainability by incorporating eco-friendly and energy-efficient solutions in our designs.",
  "Expand our expertise to serve global markets while maintaining high-quality standards.",
  "Foster a culture of learning and growth to stay at the forefront of engineering advancements."
];

export const MISSION_POINTS = [
  { title: "Safe & Reliable", desc: "Ensuring structural integrity through meticulous analysis and adherence to industry standards." },
  { title: "Cost-Effective & Efficient", desc: "Providing value-driven solutions without compromising on quality or durability." },
  { title: "Client-Centric", desc: "Understanding the unique needs of each project and delivering tailored engineering solutions." },
  { title: "Sustainable & Future-Ready", desc: "Designing with a long-term perspective, minimizing environmental impact, and optimizing resource utilization." },
  { title: "Technology-Driven", desc: "Leveraging cutting-edge design software, BIM technology, and advanced structural analysis tools to enhance project efficiency." }
];