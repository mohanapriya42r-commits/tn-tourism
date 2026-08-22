/* ==========================================================================
   Tamil Nadu Tourism & Smart Trip Planner - Comprehensive Master Dataset
   ========================================================================== */

const TN_DATA = {
  categories: [
    { id: 'temples', name: 'Temples & Religious Places', icon: '🛕', desc: 'Dravidian architecture, ancient temples, sacred shrines' },
    { id: 'beaches', name: 'Beaches & Oceans', icon: '🏖️', desc: 'Golden sands, vibrant sunsets, coastal heritage' },
    { id: 'hillstations', name: 'Hill Stations', icon: '⛰️', desc: 'Mist-covered peaks, tea plantations, cool mountain breeze' },
    { id: 'waterfalls', name: 'Cascading Waterfalls', icon: '💧', desc: 'Refreshing mineral falls, natural herbal spa waters' },
    { id: 'historical', name: 'Historical Sites', icon: '🏛️', desc: 'UNESCO world heritage, ancient monuments, stone carvings' },
    { id: 'wildlife', name: 'Wildlife & Reserves', icon: '🦁', desc: 'Tiger reserves, elephant sanctuaries, marine biosphires' },
    { id: 'forts', name: 'Forts & Royal Palaces', icon: '🏰', desc: 'Majestic forts, royal courtrooms, architectural marvels' },
    { id: 'museums', name: 'Museums & Galleries', icon: '🏛️', desc: 'Bronze sculptures, royal artifacts, rich archaeology' },
    { id: 'parks', name: 'Parks & Gardens', icon: '🌳', desc: 'Botanical collections, exotic floral displays, quiet greenery' },
    { id: 'lakes', name: 'Lakes & Dams', icon: '🌊', desc: 'Serene boating spots, reservoirs, picturesque valleys' },
    { id: 'shopping', name: 'Shopping & Malls', icon: '🛍️', desc: 'Kanchipuram silk sarees, handicraft bazaars, modern malls' },
    { id: 'cultural', name: 'Cultural & Heritage', icon: '🎭', desc: 'Bharatanatyam arts, living heritage villages, festivals' },
    { id: 'adventure', name: 'Adventure & Theme Parks', icon: '🎢', desc: 'Trekking routes, water theme parks, forest safaris' }
  ],

  districts: [
    'Madurai', 'Chennai', 'The Nilgiris (Ooty)', 'Dindigul (Kodaikanal)', 'Thanjavur',
    'Ramanathapuram (Rameswaram)', 'Chengalpattu (Mahabalipuram)', 'Kanyakumari', 'Tenkasi (Courtallam)',
    'Dharmapuri (Hogenakkal)', 'Salem (Yercaud)', 'Coimbatore (Valparai)', 'Villupuram (Gingee)',
    'Kanchipuram', 'Tirunelveli', 'Namakkal','Ariyalur','Cuddalore','Erode','Kallakurichi',,'Karur','Krishnagiri','Mayiladuthurai','Nagapattinam','Perambalur','Pudukottai','Ranipet','Sivaganga','Theni','Thoothukudi','Tiruchirappalli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Virudhunagar'
   ],
  places: [
    {
      id: 'tn_meenakshi',
      name: 'Meenakshi Amman Temple',
      district: 'Madurai',
      category: 'temples',
      categoryName: 'Temples & Religious Places',
      rating: 4.9,
      ratingCount: 14200,
      entryFee: 'Free (Special Darshan ₹50 - ₹100)',
      openTime: '05:00 AM',
      closeTime: '09:30 PM',
      holiday: 'None (Open daily)',
      bestTime: 'October to March',
      shortDesc: 'A historic Dravidian masterpiece with 14 colorful gopurams and 33,000 intricate sculptures.',
      longDesc: 'The Meenakshi Sundareshwarar Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai. It is dedicated to Goddess Meenakshi (a form of Parvati) and her consort Sundareshwarar (a form of Shiva). Renowned worldwide for its staggering 14 towers ranging from 45 to 50 meters, the Hall of 1000 Pillars, and golden lotus pond.',
      attractions: ['Hall of 1000 Pillars', 'Golden Lotus Tank (Pottramarai Kulam)', 'Musical Pillars', 'Night Temple Procession'],
      history: 'Built originally by Kulasekara Pandya, rebuilt extensively by Nayak rulers in 16th–17th century. It forms the center and lifeline of the 2,500-year-old city of Madurai.',
      lat: 9.9195,
      lng: 78.1193,
      image: 'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Frequent City & Intercity Buses', station: 'Madurai Periyar Bus Stand', distance: '1.5 km' },
        train: { station: 'Madurai Junction Railway Station (MDU)', distance: '1.8 km', frequency: 'Direct trains daily from Chennai, Bangalore, Mumbai' },
        taxi: { options: 'Ola, Uber, Auto Rickshaws, Pre-paid Taxis at station' }
      },
      emergency: {
        hospitals: [
          { name: 'Apollo Speciality Hospitals Madurai', distance: '4.2 km', phone: '0452-2580000', address: 'KK Nagar, Madurai' },
          { name: 'Government Rajaji Hospital', distance: '2.5 km', phone: '0452-2532535', address: 'Panagal Road, Madurai' }
        ],
        police: [
          { name: 'Temple Police Station (B1)', distance: '0.3 km', phone: '0452-2338300', address: 'West Chitrai St, Madurai' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy 24x7', distance: '0.4 km', location: 'East Veli Street' }
        ]
      },
      hotels: [
        { name: 'Heritage Madurai', price: '₹4,500/night', rating: 4.7, dist: '3.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 452 2388500' },
        { name: 'Hotel Supreme', price: '₹1,800/night', rating: 4.2, dist: '1.1 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 452 2343151' }
      ],
      restaurants: [
        { name: 'Murugan Idli Shop', foodType: 'South Indian Veg', price: '₹150 for two', rating: 4.6, dist: '0.5 km', address: 'West Tower St' },
        { name: 'Amma Mess', foodType: 'Traditional Non-Veg Chettinad', price: '₹400 for two', rating: 4.5, dist: '2.0 km', address: 'Alagar Kovil Main Rd' }
      ]
    },
    {
  id: 'tn_gandhi_memorial_museum_madurai',
  name: 'Gandhi Memorial Museum',
  district: 'Madurai',
  category: 'museums',
  categoryName: 'Museums',

  rating: 4.5,
  ratingCount: 11500,

  entryFee: 'Free',
  openTime: '10:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'A historic museum dedicated to Mahatma Gandhi, showcasing India’s freedom struggle, Gandhi’s life, photographs, documents and personal belongings.',

  longDesc:
    'The Gandhi Memorial Museum in Madurai is one of the important Gandhi museums in India. Established in 1959, the museum is located in the historic Tamukkam Palace. It preserves photographs, letters, documents, paintings and exhibits related to Mahatma Gandhi and the Indian freedom movement. One of its notable exhibits is associated with the blood-stained cloth worn by Mahatma Gandhi at the time of his assassination.',

  attractions: [
    'Blood-stained cloth associated with Mahatma Gandhi',
    'Freedom Struggle Gallery',
    'Photographs and Historical Documents',
    'Gandhi Life and Philosophy Exhibits',
    'Historic Tamukkam Palace Building',
    'Library and Research Collections'
  ],

  history:
    'The museum was established in 1959 as a memorial to Mahatma Gandhi. It is housed in the historic Tamukkam Palace, a palace associated with the Nayak period. The museum was developed to preserve and present the history of Mahatma Gandhi and India’s freedom struggle.',

  lat: 9.9417,
  lng: 78.1380,

  image:
    'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent City Buses and Auto Rickshaws',
      station: 'Mattuthavani Bus Stand / Periyar Bus Stand',
      distance: 'Approximately 4 km from Periyar Bus Stand'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 4 km',
      frequency:
        'Direct trains available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available throughout Madurai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 3 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 5 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'Tallakulam Police Station',
        distance: 'Approximately 1 km',
        phone: '100',
        address: 'Tallakulam, Madurai'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 1 km',
        location: 'Tallakulam, Madurai'
      }
    ]
  },

  hotels: [
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 2388500'
    },
    {
      name: 'Fortune Pandiyan Hotel',
      price: '₹4,000/night',
      rating: 4.4,
      dist: 'Approximately 2 km',
      image:
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 4356789'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 3 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 2 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
{
  id: 'tn_vandiyur_mariamman_teppakulam',
  name: 'Vandiyur Mariamman Teppakulam',
  district: 'Madurai',
  category: 'lakes',
  categoryName: 'Dams & Lakes',

  rating: 4.5,
  ratingCount: 8500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'A विशाल historic temple tank in Madurai, famous for its central island temple and the grand annual Teppam Float Festival.',

  longDesc:
    'Vandiyur Mariamman Teppakulam is one of the largest temple tanks in Tamil Nadu and a popular attraction in Madurai. The tank is located near the Vandiyur Mariamman Temple and has a small temple dedicated to Lord Vinayagar at its center. It is especially famous for the annual Teppam Float Festival, during which decorated temple idols are placed on illuminated floats and taken around the tank, attracting thousands of devotees and visitors.',

  attractions: [
    'Historic Temple Tank',
    'Central Island with Vinayagar Temple',
    'Annual Teppam Float Festival',
    'Beautiful Evening Views',
    'Illuminated Festival Decorations',
    'Photography and Scenic Surroundings'
  ],

  history:
    'Vandiyur Mariamman Teppakulam was constructed during the reign of King Thirumalai Nayak in the 17th century. According to local tradition, soil excavated from this area was used for the construction of the nearby Thirumalai Nayakkar Palace. The tank later became an important religious and cultural landmark of Madurai and is closely associated with the annual Teppam festival.',

  lat: 9.9095,
  lng: 78.1399,

  image:
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent City Buses, Auto Rickshaws and Local Transport',
      station: 'Madurai Periyar Bus Stand',
      distance: 'Approximately 4 km'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 5 km',
      frequency:
        'Direct trains are available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available throughout Madurai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 5 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 4 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'B2 Jaihindpuram Police Station',
        distance: 'Approximately 3 km',
        phone: '100',
        address: 'Madurai City, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 1 km',
        location: 'Vandiyur, Madurai'
      }
    ]
  },

  hotels: [
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 4 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 2388500'
    },
    {
      name: 'Fortune Pandiyan Hotel',
      price: '₹4,000/night',
      rating: 4.4,
      dist: 'Approximately 3 km',
      image:
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 4356789'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 4 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 3 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
{
  id: 'tn_samanar_hills',
  name: 'Samanar Hills',
  district: 'Madurai',
  category: 'historical',
  categoryName: 'Historical & Cultural Places',

  rating: 4.5,
  ratingCount: 6200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'An ancient Jain heritage site near Madurai, famous for its rock-cut sculptures, Tamil-Brahmi inscriptions, Jain caves and scenic hill views.',

  longDesc:
    'Samanar Hills, located at Keelakuyilkudi near Madurai, is an important Jain heritage and archaeological site. The hills contain ancient Jain beds, rock-cut sculptures, caves and inscriptions dating back many centuries. The site reflects the presence and influence of Jainism in the Madurai region. Visitors can explore the historic carvings while enjoying panoramic views of the surrounding countryside.',

  attractions: [
    'Ancient Jain Rock-Cut Sculptures',
    'Jain Caves and Stone Beds',
    'Tamil-Brahmi Inscriptions',
    'Settipodavu Jain Sculptures',
    'Ancient Archaeological Remains',
    'Panoramic Hill Views',
    'Photography and Trekking'
  ],

  history:
    'Samanar Hills is associated with the ancient Jain community that lived in the Madurai region. The site contains stone beds, inscriptions and sculptures believed to date from the early historic period through the later centuries of Jain influence. Tamil-Brahmi inscriptions and Jain carvings found here provide important evidence of the religious and cultural history of ancient Tamil Nadu.',

  lat: 9.8689,
  lng: 78.0646,

  image:
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'City Buses and Local Buses are available towards Keelakuyilkudi. Auto Rickshaws and Taxis are also available from Madurai.',
      station: 'Madurai Periyar Bus Stand',
      distance: 'Approximately 12 km'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 14 km',
      frequency:
        'Direct trains are available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available from Madurai city'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 14 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 16 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'Nagamalai Pudukottai Police Station',
        distance: 'Approximately 6 km',
        phone: '100',
        address: 'Nagamalai Pudukottai, Madurai'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 6 km',
        location: 'Nagamalai Pudukottai, Madurai'
      }
    ]
  },

  hotels: [
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 12 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 2388500'
    },
    {
      name: 'Fortune Pandiyan Hotel',
      price: '₹4,000/night',
      rating: 4.4,
      dist: 'Approximately 14 km',
      image:
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 4356789'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 13 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 14 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
{
  id: 'tn_thirumalai_nayakkar_palace',
  name: 'Thirumalai Nayakkar Palace',
  district: 'Madurai',
  category: 'palaces',
  categoryName: 'Forts & Palaces',

  rating: 4.5,
  ratingCount: 19000,

  entryFee: 'Adult ₹10, Child ₹5 (Additional charges may apply for camera and light & sound show)',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'A magnificent 17th-century palace famous for its grand Indo-Saracenic architecture, massive pillars and evening light and sound show.',

  longDesc:
    'Thirumalai Nayakkar Palace is one of the most famous historical landmarks in Madurai. Built in 1636 by King Thirumalai Nayak, the palace is known for its enormous pillars, high ceilings, impressive arches and beautiful architectural design. Originally, the palace complex was much larger than what remains today. The main attraction is the central courtyard surrounded by massive pillars, and visitors can also enjoy the light and sound show that narrates the history of Madurai and the Nayak dynasty.',

  attractions: [
    'Grand Central Courtyard',
    'Massive Stone Pillars',
    'Beautiful Arches and Domes',
    'Nayak Period Architecture',
    'Light and Sound Show',
    'Historic Palace Interior'
  ],

  history:
    'The palace was built in 1636 by King Thirumalai Nayak, one of the prominent rulers of the Madurai Nayak dynasty. It originally served as the royal residence and administrative center of the kingdom. The palace was constructed using a blend of Dravidian and Islamic architectural influences. Although only a part of the original palace survives today, it remains an important symbol of Madurai’s cultural and historical heritage.',

  lat: 9.9156,
  lng: 78.1210,

  image:
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent City Buses, Auto Rickshaws and Local Transport',
      station: 'Madurai Periyar Bus Stand',
      distance: 'Approximately 1.5 km'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 2 km',
      frequency:
        'Direct trains are available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available throughout Madurai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 3 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 5 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'B1 Vilakkuthoon Police Station',
        distance: 'Approximately 1 km',
        phone: '100',
        address: 'Madurai City, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 1 km',
        location: 'Madurai City'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotel Supreme',
      price: '₹2,000/night',
      rating: 4.2,
      dist: 'Approximately 1 km',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 2343151'
    },
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 4 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 2388500'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 1 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 2 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
    {
      id: 'tn_brihadeeswarar',
      name: 'Brihadeeswarar Temple (Big Temple)',
      district: 'Thanjavur',
      category: 'historical',
      categoryName: 'Historical Sites & Temples',
      rating: 4.9,
      ratingCount: 11800,
      entryFee: 'Free (Camera: ₹30)',
      openTime: '06:00 AM',
      closeTime: '08:30 PM',
      holiday: 'None',
      bestTime: 'November to February',
      shortDesc: '1,000-year-old Chola engineering wonder carved entirely out of granite, a UNESCO World Heritage site.',
      longDesc: 'Built by Emperor Raja Raja Chola I between 1003 and 1010 AD, Brihadeeswarar Temple is a towering example of Dravidian architecture. The temple tower (Vimana) is 66 meters high and capped with a monolithic 80-tonne granite dome. The monolithic Nandi statue weighs over 20 tonnes.',
      attractions: ['66m Granite Tower (Vimana)', '20-Ton Monolithic Nandi', 'Ancient Chola Frescoes', 'Sivaganga Tank'],
      history: 'Commissioned by Chola King Raja Raja I in 1010 AD. Celebrated 1,000 years of existence in 2010.',
      lat: 10.7828,
      lng: 79.1318,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Thanjavur Old & New Bus Stands', station: 'Old Bus Stand', distance: '1.2 km' },
        train: { station: 'Thanjavur Junction (TJ)', distance: '1.5 km', frequency: 'Direct trains from Chennai, Trichy, Madurai' },
        taxi: { options: 'Auto rickshaws, Cabs available near temple gate' }
      },
      emergency: {
        hospitals: [
          { name: 'Thanjavur Medical College Hospital', distance: '4.0 km', phone: '04362-240024', address: 'MC Road, Thanjavur' }
        ],
        police: [
          { name: 'Thanjavur West Police Station', distance: '0.8 km', phone: '04362-230300', address: 'South Rampart' }
        ],
        pharmacies: [
          { name: 'MedPlus Pharmacy', distance: '0.5 km', location: 'South Street' }
        ]
      },
      hotels: [
        { name: 'Svatma Thanjavur', price: '₹5,500/night', rating: 4.8, dist: '2.8 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 4362 273222' }
      ],
      restaurants: [
        { name: 'Sree Ariya Bhavan', foodType: 'Pure Vegetarian South Indian', price: '₹200 for two', rating: 4.4, dist: '0.6 km', address: 'Old Bus Stand Road' }
      ]
    },
    {
      id: 'tn_ooty',
      name: 'Ooty (Udhagamandalam) Hill Station',
      district: 'The Nilgiris (Ooty)',
      category: 'hillstations',
      categoryName: 'Hill Stations',
      rating: 4.8,
      ratingCount: 18500,
      entryFee: 'Free (Park entries ₹30 - ₹100)',
      openTime: '24 Hours',
      closeTime: '24 Hours',
      holiday: 'None',
      bestTime: 'October to June',
      shortDesc: 'The Queen of Hill Stations featuring lush tea gardens, mist-capped Nilgiri hills, and heritage toy train.',
      longDesc: 'Ooty is Tamil Nadu’s premier hill station located at an altitude of 2,240 meters in the Nilgiri Hills. Famous for its Government Botanical Gardens, Ooty Lake boating, Doddabetta Peak, tea factory tours, and the UNESCO Heritage Nilgiri Mountain Railway toy train.',
      attractions: ['Nilgiri Toy Train', 'Ooty Lake & Boating', 'Government Botanical Garden', 'Doddabetta Peak (2,637m)', 'Tea Factory & Museum'],
      history: 'Developed during the British Raj as the summer capital of the Madras Presidency.',
      lat: 11.4102,
      lng: 76.6950,
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'TNSTC & KSRTC buses from Coimbatore, Mysore, Bangalore', station: 'Ooty Central Bus Stand', distance: '1.0 km' },
        train: { station: 'Udagamandalam Railway Station (UAM)', distance: '0.5 km', frequency: 'Heritage Toy Train from Mettupalayam' },
        taxi: { options: 'Local sight-seeing cabs, Jeeps for Doddabetta' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Head Quarters Hospital Ooty', distance: '1.5 km', phone: '0423-2442212', address: 'Hospital Road, Ooty' }
        ],
        police: [
          { name: 'Ooty Town Police Station', distance: '1.0 km', phone: '0423-2444004', address: 'Commercial Road' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Ooty', distance: '0.7 km', location: 'Charing Cross' }
        ]
      },
      hotels: [
        { name: 'Savoy - IHCL SeleQtions Ooty', price: '₹9,000/night', rating: 4.8, dist: '1.8 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 423 2225500' },
        { name: 'Sterling Ooty Fern Hill', price: '₹4,200/night', rating: 4.4, dist: '3.0 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 423 2444150' }
      ],
      restaurants: [
        { name: 'Place To Bee', foodType: 'Italian & Organic European', price: '₹600 for two', rating: 4.5, dist: '1.2 km', address: 'Club Road' },
        { name: 'Shinkows Chinese Restaurant', foodType: 'Indo-Chinese Heritage', price: '₹450 for two', rating: 4.6, dist: '0.8 km', address: 'Commissioners Road' }
      ]
    },
    {
      id: 'tn_marina',
      name: 'Marina Beach Chennai',
      district: 'Chennai',
      category: 'beaches',
      categoryName: 'Beaches & Oceans',
      rating: 4.6,
      ratingCount: 22000,
      entryFee: 'Free',
      openTime: '05:00 AM',
      closeTime: '11:00 PM',
      holiday: 'None',
      bestTime: 'November to February (Evening sunset)',
      shortDesc: 'The second longest natural urban beach in the world stretching 13 km along the Bay of Bengal.',
      longDesc: 'Marina Beach is Chennai’s iconic beach running from Fort St. George in the north to Besant Nagar in the south. Famous for its vibrant evening atmosphere, street food stalls (sundal, crispy fish, bajji), heritage statues of Tamil scholars, and Chennai Lighthouse offering panoramic views.',
      attractions: ['Chennai Lighthouse', 'MGR & Anna Memorials', 'Local Street Food Stalls', 'Sunrise & Sunset Views'],
      history: 'Promenaded and built by Governor Mountstuart Elphinstone Grant Duff in the 1880s.',
      lat: 13.0499,
      lng: 80.2824,
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'MTC Buses connecting across Chennai', station: 'Marina Beach Bus Stop', distance: '0.1 km' },
        train: { station: 'Chepauk / Light House MRTS Station', distance: '0.4 km', frequency: 'MRTS trains every 15 mins' },
        taxi: { options: 'Uber, Ola, Autos plentiful along Kamarajar Salai' }
      },
      emergency: {
        hospitals: [
          { name: 'Rajiv Gandhi Government General Hospital', distance: '3.5 km', phone: '044-25305000', address: 'EVR Periyar Salai, Park Town' }
        ],
        police: [
          { name: 'Marina Police Station (D5)', distance: '0.2 km', phone: '044-23452445', address: 'Kamarajar Salai' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Triplicane', distance: '0.6 km', location: 'Triplicane High Road' }
        ]
      },
      hotels: [
        { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '3.5 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
      ],
      restaurants: [
        { name: 'Nair Mess', foodType: 'South Indian Meals & Seafood', price: '₹300 for two', rating: 4.5, dist: '0.8 km', address: 'Triplicane' }
      ]
    },
    {
      id: 'tn_mahabalipuram',
      name: 'Mahabalipuram Shore Temple & Rock Reliefs',
      district: 'Chengalpattu (Mahabalipuram)',
      category: 'historical',
      categoryName: 'Historical Sites & Monuments',
      rating: 4.8,
      ratingCount: 15400,
      entryFee: '₹40 (Indians), ₹600 (Foreigners)',
      openTime: '06:00 AM',
      closeTime: '06:00 PM',
      holiday: 'None',
      bestTime: 'October to March',
      shortDesc: '7th-century UNESCO Pallava coastal temple complex with rock-cut rathas and open-air bas-reliefs.',
      longDesc: 'Mahabalipuram (Mamallapuram) is a renowned UNESCO World Heritage site known for its 7th and 8th-century Pallava architectural monuments. Key attractions include the Shore Temple overlooking the Bay of Bengal, Pancha Rathas (monolithic chariots), Krishna’s Butter Ball, and Descent of the Ganges bas-relief.',
      attractions: ['Shore Temple', 'Pancha Rathas', 'Descent of the Ganges', 'Krishna’s Butterball', 'Mahabalipuram Lighthouse'],
      history: 'Flourished as a major port city under King Narasimhavarman I (Mamalla) in 7th century AD.',
      lat: 12.6169,
      lng: 80.1992,
      image: 'https://images.unsplash.com/photo-1609946782701-7b003a890d23?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'ECR Express Buses from Chennai ECR/CMBT', station: 'Mahabalipuram Bus Stand', distance: '0.5 km' },
        train: { station: 'Chengalpattu Junction (CGL)', distance: '29 km', frequency: 'Frequent buses connect to Mahabalipuram' },
        taxi: { options: 'ECR Tourist Taxis, Rental Bikes & Scooters' }
      },
      emergency: {
        hospitals: [
          { name: 'Mahabalipuram Government Hospital', distance: '1.0 km', phone: '044-27442227', address: 'E Raja St' }
        ],
        police: [
          { name: 'Mahabalipuram Tourist Police', distance: '0.4 km', phone: '044-27442229', address: 'Kovalam Road' }
        ],
        pharmacies: [
          { name: 'MedPlus Mahabalipuram', distance: '0.3 km', location: 'East Raja Street' }
        ]
      },
      hotels: [
        { name: 'InterContinental Chennai Mahabalipuram Resort', price: '₹9,500/night', rating: 4.7, dist: '8.0 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 44 71720101' }
      ],
      restaurants: [
        { name: 'Moonrakers Restaurant', foodType: 'Fresh Coastal Seafood', price: '₹700 for two', rating: 4.4, dist: '0.4 km', address: 'Othavadai Street' }
      ]
    },
    {
      id: 'tn_kodaikanal',
      name: 'Kodaikanal Hill Station',
      district: 'Dindigul (Kodaikanal)',
      category: 'hillstations',
      categoryName: 'Hill Stations',
      rating: 4.8,
      ratingCount: 16900,
      entryFee: 'Free',
      openTime: '24 Hours',
      closeTime: '24 Hours',
      holiday: 'None',
      bestTime: 'September to May',
      shortDesc: 'The Princess of Hill Stations nestled around a star-shaped lake surrounded by pine forests.',
      longDesc: 'Kodaikanal sits at 2,133 meters in the Palani Hills of Western Ghats. Known for its star-shaped Kodai Lake, Coakers Walk with cliff views, Pillar Rocks, Bryant Park botanical garden, and dense Pine Forest.',
      attractions: ['Kodai Lake & Pedal Boating', 'Coaker’s Walk', 'Pillar Rocks', 'Pine Forest', 'Silver Cascade Waterfalls'],
      history: 'Established in 1845 as a refuge from summer heat by American missionaries and British bureaucrats.',
      lat: 10.2381,
      lng: 77.4892,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Buses from Madurai, Dindigul, Coimbatore, Chennai', station: 'Kodaikanal Central Bus Stand', distance: '0.8 km' },
        train: { station: 'Kodai Road Railway Station (KQN)', distance: '80 km', frequency: 'Taxis & express buses connect uphill' },
        taxi: { options: 'Sightseeing tour taxis, Vans available at bus stand' }
      },
      emergency: {
        hospitals: [
          { name: 'VAN Allen Hospital Kodaikanal', distance: '1.2 km', phone: '04542-241273', address: 'Coaker’s Walk Road' }
        ],
        police: [
          { name: 'Kodaikanal Police Station', distance: '0.5 km', phone: '04542-241026', address: 'Post Office Road' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Kodai', distance: '0.4 km', location: 'Seven Road Junction' }
        ]
      },
      hotels: [
        { name: 'The Carlton Kodaikanal', price: '₹8,500/night', rating: 4.8, dist: '0.5 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 4542 240056' }
      ],
      restaurants: [
        { name: 'Cloud Street Bakery & Cafe', foodType: 'Woodfired Pizza & Desserts', price: '₹500 for two', rating: 4.6, dist: '0.6 km', address: 'PT Road' }
      ]
    },
    {
      id: 'tn_courtallam',
      name: 'Courtallam (Kuttalam) Waterfalls',
      district: 'Tenkasi (Courtallam)',
      category: 'waterfalls',
      categoryName: 'Cascading Waterfalls',
      rating: 4.7,
      ratingCount: 9400,
      entryFee: 'Free',
      openTime: '06:00 AM',
      closeTime: '07:00 PM',
      holiday: 'None',
      bestTime: 'June to September (Monsoon Season)',
      shortDesc: 'The Spa of South India featuring 9 cascading waterfalls renowned for therapeutic herbal waters.',
      longDesc: 'Courtallam is located in the Western Ghats of Tenkasi district. The waters flow through forest herbal lands before tumbling down rock faces, giving them therapeutic and rejuvenating properties. Major falls include Main Falls, Shenbaga Falls, Five Falls (Aintharuvi), and Honey Falls.',
      attractions: ['Main Falls (Peraruvi)', 'Five Falls (Aintharuvi)', 'Old Courtallam Falls', 'Shenbaga Devi Temple'],
      history: 'Mentioned in ancient Tamil Sangam literature as a sacred herbal bathing destination.',
      lat: 8.9304,
      lng: 77.2689,
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Buses from Tenkasi (6km) & Tirunelveli', station: 'Courtallam Bus Stand', distance: '0.5 km' },
        train: { station: 'Tenkasi Junction (TSI)', distance: '6.0 km', frequency: 'Express trains from Chennai & Madurai' },
        taxi: { options: 'Auto rickshaws and private taxis to all 9 falls' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Hospital Courtallam', distance: '1.0 km', phone: '04633-283254', address: 'Main Falls Road' }
        ],
        police: [
          { name: 'Courtallam Police Station', distance: '0.3 km', phone: '04633-283233', address: 'Bus Stand Road' }
        ],
        pharmacies: [
          { name: 'Sri Ram Pharmacy', distance: '0.4 km', location: 'Main Road Tenkasi' }
        ]
      },
      hotels: [
        { name: 'Saaral Resort Courtallam', price: '₹3,500/night', rating: 4.3, dist: '1.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 4633 283100' }
      ],
      restaurants: [
        { name: 'Border Rahmath Kadai', foodType: 'Legendary Parotta & Chicken Fry', price: '₹350 for two', rating: 4.7, dist: '4.0 km', address: 'Tenkasi-Shenkottai Road' }
      ]
    },
    {
      id: 'tn_hogenakkal',
      name: 'Hogenakkal Waterfalls',
      district: 'Dharmapuri (Hogenakkal)',
      category: 'waterfalls',
      categoryName: 'Cascading Waterfalls & Adventure',
      rating: 4.6,
      ratingCount: 8900,
      entryFee: 'Free (Coracle Boat Ride: ₹750/boat)',
      openTime: '08:00 AM',
      closeTime: '05:30 PM',
      holiday: 'None',
      bestTime: 'August to October',
      shortDesc: 'Niagara of India featuring roaring Kaveri river falls, circular coracle boat rides, and herbal oil massages.',
      longDesc: 'Hogenakkal (meaning Smokey Rocks) is where the Kaveri river enters Tamil Nadu forming a series of thunderous waterfalls and canyons. Famous for unique basket-boat (Coracle) rides right up to the roaring spray and traditional oil massage by local masseurs.',
      attractions: ['Coracle Basket-Boat Ride', 'Hogenakkal Falls Viewpoint', 'Traditional Oil Massage', 'Fresh River Fish Fry'],
      history: 'One of the oldest natural water formations along the Kaveri basin.',
      lat: 12.1182,
      lng: 77.7774,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Buses from Dharmapuri (46 km) and Salem', station: 'Hogenakkal Main Bus Stand', distance: '0.4 km' },
        train: { station: 'Dharmapuri Railway Station (DPI)', distance: '46 km', frequency: 'Direct buses available from station' },
        taxi: { options: 'Jeeps & Private Cabs from Dharmapuri town' }
      },
      emergency: {
        hospitals: [
          { name: 'Primary Health Centre Hogenakkal', distance: '1.2 km', phone: '04342-256221', address: 'Main Road' }
        ],
        police: [
          { name: 'Hogenakkal Police Station', distance: '0.5 km', phone: '04342-256222', address: 'Near Boat House' }
        ],
        pharmacies: [
          { name: 'Kaveri Medicals', distance: '0.5 km', location: 'Bus Stand Street' }
        ]
      },
      hotels: [
        { name: 'Hotel Tamil Nadu (TTDC Hogenakkal)', price: '₹1,800/night', rating: 4.0, dist: '0.3 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 4342 256247' }
      ],
      restaurants: [
        { name: 'Hogenakkal Fish Fry Stalls', foodType: 'Fresh Fried Kaveri Fish & Rice', price: '₹200 for two', rating: 4.5, dist: '0.2 km', address: 'River Bank Stalls' }
      ]
    },
    {
      id: 'tn_mudumalai',
      name: 'Mudumalai Tiger Reserve & National Park',
      district: 'The Nilgiris (Ooty)',
      category: 'wildlife',
      categoryName: 'Wildlife & National Parks',
      rating: 4.7,
      ratingCount: 7600,
      entryFee: '₹45 per head (Safari: ₹350 - ₹1,200)',
      openTime: '06:00 AM',
      closeTime: '06:00 PM',
      holiday: 'None',
      bestTime: 'October to May',
      shortDesc: 'A rich sanctuary home to Bengal tigers, Asian elephants, Indian leopards, and dense teak forests.',
      longDesc: 'Located at the tri-junction of Tamil Nadu, Karnataka, and Kerala, Mudumalai is one of India’s declared Tiger Reserves. Famous for forest van/jeep safaris, Theppakadu Elephant Camp (featured in the Oscar-winning documentary "The Elephant Whisperers"), and rich avian life.',
      attractions: ['Theppakadu Elephant Camp', 'Forest Department Jungle Safari', 'Moyar River Gorge', 'Bird Watching'],
      history: 'Declared a wildlife sanctuary in 1940 and designated a Tiger Reserve in 2007.',
      lat: 11.5623,
      lng: 76.5342,
      image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Buses along Ooty-Mysore Highway (NH 766)', station: 'Theppakadu Junction', distance: '0.2 km' },
        train: { station: 'Mysore Junction (65 km) / Mettupalayam (85 km)', distance: '65 km', frequency: 'Highway buses stop right at Theppakadu' },
        taxi: { options: 'Forest Safari Jeeps, Private Resort Vehicles' }
      },
      emergency: {
        hospitals: [
          { name: 'Gudalur Government Hospital', distance: '14 km', phone: '04262-261230', address: 'Gudalur' }
        ],
        police: [
          { name: 'Abhayaranyam Forest Police Station', distance: '1.0 km', phone: '0423-2444005', address: 'Theppakadu' }
        ],
        pharmacies: [
          { name: 'MedPlus Gudalur', distance: '14 km', location: 'Main Road Gudalur' }
        ]
      },
      hotels: [
        { name: 'Jungle Hut Resort Masinagudi', price: '₹5,500/night', rating: 4.6, dist: '8.0 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 98422 29900' }
      ],
      restaurants: [
        { name: 'Theppakadu Forest Canteen', foodType: 'South Indian Tiffin & Meals', price: '₹150 for two', rating: 4.1, dist: '0.1 km', address: 'Safari Counter' }
      ]
    },
    {
      id: 'tn_gingee',
      name: 'Gingee Fort (Senji Fort)',
      district: 'Villupuram (Gingee)',
      category: 'forts',
      categoryName: 'Forts & Palaces',
      rating: 4.7,
      ratingCount: 5200,
      entryFee: '₹25 (Indians), ₹300 (Foreigners)',
      openTime: '09:00 AM',
      closeTime: '05:30 PM',
      holiday: 'None',
      bestTime: 'October to February',
      shortDesc: 'Dubbed "Troy of the East" by the British, an impregnable hilltop fort complex across three hills.',
      longDesc: 'Gingee Fort is one of the few surviving forts in Tamil Nadu. The fort complex spans three hillocks: Rajagiri, Krishnagiri, and Chandrayandurg. Features a 7-storey Kalyana Mahal, royal granaries, prison cells, and military watchtowers.',
      attractions: ['Rajagiri Citadel Trek', 'Kalyana Mahal Palace', 'Granaries & Sacred Ponds', 'Krishnagiri Fort Hill'],
      history: 'Originally built by the Konar dynasty in the 12th century, fortified by Nayaks, Marathas (Chhatrapati Shivaji), Bijapur Sultans, and Mughals.',
      lat: 12.2514,
      lng: 79.4181,
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Buses from Tindivanam (25 km), Villupuram (40 km), & Puducherry', station: 'Gingee Bus Stand', distance: '2.0 km' },
        train: { station: 'Tindivanam Railway Station (TMV)', distance: '25 km', frequency: 'Direct local buses from Tindivanam station' },
        taxi: { options: 'Auto rickshaws from Gingee bus stand' }
      },
      emergency: {
        hospitals: [
          { name: 'Gingee Government Hospital', distance: '2.5 km', phone: '04145-222230', address: 'Tindivanam Road' }
        ],
        police: [
          { name: 'Gingee Police Station', distance: '2.0 km', phone: '04145-222233', address: 'Gandhi Bazaar' }
        ],
        pharmacies: [
          { name: 'Raja Pharmacy', distance: '1.8 km', location: 'Main Bazaar Road' }
        ]
      },
      hotels: [
        { name: 'Hotel Tamil Nadu Gingee', price: '₹1,500/night', rating: 3.9, dist: '2.2 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 4145 222204' }
      ],
      restaurants: [
        { name: 'Sri Vasantha Bhavan', foodType: 'Pure Veg Meals', price: '₹180 for two', rating: 4.2, dist: '2.0 km', address: 'Bus Stand Road' }
      ]
    },
    {
      id: 'tn_rameswaram',
      name: 'Ramanathaswamy Temple & Dhanushkodi',
      district: 'Ramanathapuram (Rameswaram)',
      category: 'temples',
      categoryName: 'Temples & Coastal Heritage',
      rating: 4.9,
      ratingCount: 17800,
      entryFee: 'Free (22 Holy Wells Bath: ₹25)',
      openTime: '05:00 AM',
      closeTime: '09:00 PM',
      holiday: 'None',
      bestTime: 'October to April',
      shortDesc: 'One of the 12 Jyotirlinga temples featuring the longest temple corridor in the world and ghost town Dhanushkodi.',
      longDesc: 'Rameswaram is a holy island connected to mainland India by the historic Pamban Bridge. The Ramanathaswamy Temple is famous for its 1,212 meter outer corridor with 1,200 carved granite pillars and 22 holy water wells (Teerthams). Nearby Dhanushkodi offers a dramatic trip to the tip of India where Indian Ocean meets Bay of Bengal.',
      attractions: ['Longest Temple Corridor in the World', '22 Holy Teertham Baths', 'Pamban Sea Bridge View', 'Dhanushkodi Ghost Town & Beach', 'APJ Abdul Kalam Memorial'],
      history: 'According to the Ramayana, Lord Rama constructed the Rama Setu bridge from here to Lanka.',
      lat: 9.2881,
      lng: 79.3174,
      image: 'https://images.unsplash.com/photo-1627894006066-b45786538965?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Direct SETC & TNSTC express buses from all TN cities', station: 'Rameswaram Bus Stand', distance: '2.0 km' },
        train: { station: 'Rameswaram Railway Station (RMM)', distance: '1.2 km', frequency: 'Direct express trains across India' },
        taxi: { options: '4x4 Jeeps to Dhanushkodi, Autos, Temple Cabs' }
      },
      emergency: {
        hospitals: [
          { name: 'Government General Hospital Rameswaram', distance: '1.5 km', phone: '04573-221233', address: 'Railway Station Road' }
        ],
        police: [
          { name: 'Rameswaram Town Police Station', distance: '0.8 km', phone: '04573-221224', address: 'West Car Street' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Rameswaram', distance: '0.5 km', location: 'East Car Street' }
        ]
      },
      hotels: [
        { name: 'Daiwik Hotels Rameswaram', price: '₹4,200/night', rating: 4.5, dist: '1.8 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 4573 223300' }
      ],
      restaurants: [
        { name: 'Ram Nivas Vegetarian Restaurant', foodType: 'South & North Indian Pure Veg', price: '₹250 for two', rating: 4.3, dist: '0.6 km', address: 'Car Street' }
      ]
    },
    {
      id: 'tn_kanyakumari',
      name: 'Kanyakumari Sunset & Vivekananda Rock Memorial',
      district: 'Kanyakumari',
      category: 'cultural',
      categoryName: 'Cultural & Coastal Monument',
      rating: 4.8,
      ratingCount: 21000,
      entryFee: 'Ferry Ride: ₹50',
      openTime: '08:00 AM',
      closeTime: '04:00 PM (Ferry)',
      holiday: 'None',
      bestTime: 'October to March',
      shortDesc: 'The southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean merge.',
      longDesc: 'Kanyakumari is famous for Triveni Sangam (confluence of three oceans), Vivekananda Rock Memorial built on an island rock offshore, and the massive 133-foot stone statue of Tamil poet Thiruvalluvar. Renowned for simultaneous sunset and full moon rise over the ocean.',
      attractions: ['Vivekananda Rock Memorial', '133ft Thiruvalluvar Statue', 'Triveni Sangam Bathing Ghat', 'Kanyakumari Temple', 'Our Lady of Ransom Church'],
      history: 'Swami Vivekananda meditated on the rock offshore in December 1892 before attending the Chicago Parliament of Religions.',
      lat: 8.0883,
      lng: 77.5385,
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'State express buses from Trivandrum, Madurai, Chennai', station: 'Kanyakumari Bus Stand', distance: '1.0 km' },
        train: { station: 'Kanyakumari Railway Station (CAPE)', distance: '1.2 km', frequency: 'Terminal station connected to major Indian hubs' },
        taxi: { options: 'Auto Rickshaws, Pre-paid Taxis at station' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Medical College Hospital Nagercoil', distance: '18 km', phone: '04652-223216', address: 'Asaripallam, Nagercoil' }
        ],
        police: [
          { name: 'Kanyakumari Marine Police Station', distance: '0.5 km', phone: '04652-246224', address: 'Sunset Point Road' }
        ],
        pharmacies: [
          { name: 'MedPlus Kanyakumari', distance: '0.6 km', location: 'Main Road' }
        ]
      },
      hotels: [
        { name: 'Hotel Sea View Kanyakumari', price: '₹3,800/night', rating: 4.5, dist: '0.4 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 4652 246361' }
      ],
      restaurants: [
        { name: 'The Ocean Restaurant', foodType: 'Seafood & Multi-Cuisine', price: '₹500 for two', rating: 4.4, dist: '0.3 km', address: 'East Car Street' }
      ]
    },
    {
      id: 'tn_yercaud',
      name: 'Yercaud Hill Station',
      district: 'Salem (Yercaud)',
      category: 'hillstations',
      categoryName: 'Hill Stations',
      rating: 4.5,
      ratingCount: 7100,
      entryFee: 'Free',
      openTime: '24 Hours',
      closeTime: '24 Hours',
      holiday: 'None',
      bestTime: 'October to June',
      shortDesc: 'The Jewel of the South featuring coffee plantations, orange groves, and peaceful Emerald Lake.',
      longDesc: 'Located at 1,515 meters in the Shevaroy Hills of Salem district, Yercaud is an affordable, scenic hill station. Highlights include Yercaud Emerald Lake with boating, Pagoda Point for valley views, Shevaroy Temple, and Kiliyur Falls.',
      attractions: ['Yercaud Emerald Lake', 'Pagoda Point Viewpoint', 'Shevaroy Temple Peak', 'Kiliyur Waterfalls', 'Botanical Garden & Orchidarium'],
      history: 'Discovered as a hill resort by Sir Thomas Munro in 1842.',
      lat: 11.7753,
      lng: 78.2093,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Frequent buses from Salem Junction & Bus Stand (30 km ghat road)', station: 'Yercaud Bus Stand', distance: '0.5 km' },
        train: { station: 'Salem Junction (SA)', distance: '32 km', frequency: 'Superfast express trains from Chennai & Bangalore' },
        taxi: { options: 'Salem Ghat Road Cabs, Auto Rickshaws in Yercaud' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Hospital Yercaud', distance: '1.0 km', phone: '04281-222234', address: 'Hospital Road' }
        ],
        police: [
          { name: 'Yercaud Police Station', distance: '0.6 km', phone: '04281-222223', address: 'Loop Road' }
        ],
        pharmacies: [
          { name: 'Sri Balaji Medicals', distance: '0.5 km', location: 'Lake Road' }
        ]
      },
      hotels: [
        { name: 'GRT Great Trails Yercaud', price: '₹6,500/night', rating: 4.7, dist: '2.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 4281 222000' }
      ],
      restaurants: [
        { name: 'Sweet Rasoi', foodType: 'North & South Indian Veg', price: '₹350 for two', rating: 4.2, dist: '0.8 km', address: 'Near Lake' }
      ]
    },
    {
  id: 'tn_gangaikonda_cholapuram',
  name: 'Gangaikonda Cholapuram Temple',
  district: 'Ariyalur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',

  rating: 4.8,
  ratingCount: 368,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'October to March',

  shortDesc:
    'A magnificent Chola-era Shiva temple built by Rajendra Chola I, known for its grand Dravidian architecture, sculptures and historical significance.',

  longDesc:
    'Gangaikonda Cholapuram, located in Ariyalur district, was established by Rajendra Chola I after his northern expedition. He built the Gangaikondacholisvarar Temple and made the city the capital of the Chola Empire. The temple was constructed between approximately 1023 and 1036 AD and is an important example of Chola architecture, sculpture and history. The temple complex contains beautiful stone sculptures, inscriptions, a large Shiva Lingam, Nandi and the famous Simhakeni lion well. It is part of the UNESCO-listed Great Living Chola Temples.',

  attractions: [
    'Gangaikondacholisvarar Shrine',
    'Large Shiva Lingam',
    'Massive Nandi',
    'Chola Stone Sculptures',
    'Sculptures of Saraswathi and Chandesura Anugraha Murthy',
    'Simbhakeni / Lion Well',
    'Chola-era Inscriptions',
    'Gangaikonda Cholapuram Heritage Complex'
  ],

  history:
    'Rajendra Chola I established Gangaikonda Cholapuram after his successful expedition to the Gangetic plains in 1023 AD. The city became the capital of the Chola Empire and remained an important capital for about 256 years. The Gangaikondacholisvarar Temple was constructed during the reign of Rajendra Chola I and represents the artistic and architectural excellence of the Middle Chola period.',

  lat: 11.20632,
  lng: 79.44872,

  image:
    'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Local and intercity buses available',
      station: 'Gangaikonda Cholapuram Bus Stop',
      distance: 'Near the temple'
    },

    train: {
      station: 'Ariyalur Railway Station',
      distance: 'Approximately 45 km',
      frequency: 'Regular trains available on the Chennai–Tiruchirappalli route'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport are available from nearby towns'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Jayankondam',
        distance: 'Approximately 9 km',
        phone: 'Verify current number locally',
        address: 'Jayankondam, Ariyalur District'
      }
    ],

    police: [
      {
        name: 'Jayankondam Police Station',
        distance: 'Approximately 9 km',
        phone: 'Verify current number locally',
        address: 'Jayankondam, Ariyalur District'
      }
    ],

    pharmacies: [
      {
        name: 'Nearby Medical Shops',
        distance: 'Available in Gangaikonda Cholapuram / Jayankondam',
        location: 'Gangaikonda Cholapuram and surrounding area'
      }
    ]
  },

  hotels: [
    {
      name: 'Nearby Hotels in Jayankondam',
      price: 'Varies',
      rating: 4.0,
      dist: 'Approximately 9 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Jayankondam',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 9 km',
      address: 'Jayankondam, Ariyalur District'
    }
  ]
},
{
  id: 'tn_pichavaram',
  name: 'Pichavaram Mangrove Forest',
  district: 'Cuddalore',
  category: 'nature',
  categoryName: 'Natural & Scenic Places',

  rating: 4.5,
  ratingCount: 23601,

  entryFee: 'Boating charges applicable',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Boating services generally available daily)',
  bestTime: 'November to February',

  shortDesc:
    'One of India’s largest and best-preserved mangrove forests, famous for its narrow waterways, boating experience and rich biodiversity.',

  longDesc:
    'Pichavaram Mangrove Forest is located between the Vellar and Coleroon estuaries in Cuddalore district. Spread over approximately 1,478.64 hectares, it is one of India’s largest and best-preserved mangrove ecosystems. The forest consists of a complex network of waterways surrounded by dense mangrove vegetation. Visitors can explore the mangrove channels through boat rides. The destination is popular among nature lovers, photographers, bird watchers and adventure enthusiasts.',

  attractions: [
    'Mangrove Forest',
    'Mangrove Waterways',
    'Boat Ride',
    'Bird Watching',
    'Rich Aquatic Biodiversity',
    'Scenic Natural Environment',
    'Photography Spots'
  ],

  history:
    'Pichavaram is a significant mangrove ecosystem located along the coastal region of Cuddalore district. Its unique marine forest environment has made it an important ecotourism destination in Tamil Nadu. The location also gained wider popularity after appearing in a boat sequence in the Tamil film Dasavathaaram.',

  lat: 11.4285,
  lng: 79.7850,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Chidambaram and nearby towns',
      station: 'Pichavaram Bus Stop',
      distance: 'Near the boating centre'
    },

    train: {
      station: 'Chidambaram Railway Station',
      distance: 'Approximately 16 km',
      frequency: 'Regular passenger and express trains available'
    },

    taxi: {
      options:
        'Taxi, Auto Rickshaw and local transport available from Chidambaram'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Chidambaram',
        distance: 'Approximately 16 km',
        phone: 'Verify current number locally',
        address: 'Chidambaram, Cuddalore District'
      }
    ],

    police: [
      {
        name: 'Killai Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Killai, Cuddalore District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Killai / Chidambaram'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Chidambaram',
      price: 'Varies',
      rating: 4.8,
      dist: 'Approximately 16 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Chidambaram',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 16 km',
      address: 'Chidambaram, Cuddalore District'
    }
  ]
},
{
  id: 'tn_bhavanisagar_dam',
  name: 'Bhavanisagar Dam',
  district: 'Erode',
  category: 'dams',
  categoryName: 'Dams & Lakes',

  rating: 4.4,
  ratingCount: 8500,

  entryFee: 'Varies / Check locally',
  openTime: '09:00 AM',
  closeTime: '06:30 PM',
  holiday: 'None (Generally open daily)',
  bestTime: 'October to March',

  shortDesc:
    'A major dam across the Bhavani River surrounded by scenic hills, gardens, reservoir views and recreational attractions.',

  longDesc:
    'Bhavanisagar Dam is located across the Bhavani River in Erode district. The reservoir and surrounding landscape provide a peaceful environment for visitors. The area includes gardens and recreational facilities and is suitable for family outings, photography and nature viewing. The dam is also associated with the Lower Bhavani Project and plays an important role in irrigation in the region.',

  attractions: [
    'Bhavanisagar Dam',
    'Bhavani River',
    'Reservoir View',
    'Garden',
    'Orchid Park',
    'Mountain Scenery',
    'Bird Watching',
    'Boating and Recreational Activities'
  ],

  history:
    'Bhavanisagar Dam was constructed across the Bhavani River as part of the Lower Bhavani Project. It is an important irrigation structure in Tamil Nadu and has also developed as a scenic tourist destination because of its reservoir, gardens and surrounding natural environment.',

  lat: 11.4796,
  lng: 77.1130,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Regular buses available from Erode, Gobichettipalayam and Sathyamangalam',
      station: 'Bhavanisagar Bus Stand',
      distance: 'Approximately 2 km'
    },

    train: {
      station: 'Erode Junction Railway Station',
      distance: 'Approximately 75 km',
      frequency: 'Regular trains available from major cities'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Sathyamangalam',
        distance: 'Approximately 16 km',
        phone: 'Verify current number locally',
        address: 'Sathyamangalam, Erode District'
      }
    ],

    police: [
      {
        name: 'Bhavanisagar Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Bhavanisagar, Erode District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Bhavanisagar',
        location: 'Bhavanisagar, Erode District'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Sathyamangalam',
      price: 'Varies',
      rating: 4.5,
      dist: 'Approximately 16 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Bhavanisagar',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.3,
      dist: 'Nearby',
      address: 'Bhavanisagar, Erode District'
    }
  ]
},
{
  id: 'tn_kalvarayan_hills',
  name: 'Kalvarayan Hills',
  district: 'Kallakurichi',
  category: 'hill_stations',
  categoryName: 'Hill Stations & Natural Places',

  rating: 4.4,
  ratingCount: 1200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic hill range in the Eastern Ghats known for waterfalls, streams, forests, trekking routes and peaceful hill landscapes.',

  longDesc:
    'Kalvarayan Hills are a major hill range of the Eastern Ghats associated with Kallakurichi district. The hills contain forests, waterfalls, streams, rivers and scenic viewpoints. The area is popular among trekkers and nature lovers because of its cool climate, peaceful surroundings and relatively unexplored landscapes. Important attractions around the hills include Megam Falls, Periyar Falls, Gomukhi Dam and a botanical garden.',

  attractions: [
    'Megam Falls',
    'Periyar Falls',
    'Gomukhi Dam',
    'Forest Streams',
    'Scenic Viewpoints',
    'Botanical Garden',
    'Trekking Trails',
    'Tribal Villages',
    'Vellimalai'
  ],

  history:
    'Kalvarayan Hills form part of the Eastern Ghats and have a long association with local tribal communities. The hill region has historically supported forest-based livelihoods and settlements. The area is also known for its natural environment, waterfalls and traditional tribal culture.',

  lat: 11.7780,
  lng: 78.6500,

  image:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Kallakurichi to Kalvarayan Hills',
      station: 'Kallakurichi Bus Stand',
      distance: 'Approximately 56 km'
    },

    train: {
      station: 'Chinnasalem Railway Station',
      distance: 'Approximately 40–50 km',
      frequency: 'Trains available from Chennai and Salem routes'
    },

    taxi: {
      options:
        'Taxi and local buses available from Kallakurichi'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Kallakurichi',
        distance: 'Approximately 56 km',
        phone: 'Verify current number locally',
        address: 'Kallakurichi, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Kalvarayan Hills Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Kalvarayan Hills, Kallakurichi District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby settlements',
        location: 'Kalvarayan Hills'
      }
    ]
  },

  hotels: [
    {
      name: 'Local Accommodation in Kalvarayan Hills',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants and Food Stalls',
      foodType: 'South Indian / Local Food',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      address: 'Kalvarayan Hills, Kallakurichi District'
    }
  ]
},
{
  id: 'tn_kalyana_pasupatheeswarar',
  name: 'Kalyana Pasupatheeswarar Temple',
  district: 'Karur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',

  rating: 4.7,
  ratingCount: 5200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None (Open daily)',
  bestTime: 'October to March',

  shortDesc:
    'An ancient Shiva temple and landmark of Karur, famous for its historic significance, beautiful sculptures and sacred traditions.',

  longDesc:
    'Arulmigu Kalyana Pasupatheeswarar Temple is one of the important landmarks of Karur. Karur was associated with the early Chera kingdom during the Sangam period. The temple is dedicated to Lord Pasupatheeswarar, a form of Lord Shiva. The temple is known for its artistic sculptures including the Pasupatheeswarar Lingam, the depiction of a cow pouring milk over the Lingam and Rangamatha. It is an important pilgrimage and heritage attraction in Karur.',

  attractions: [
    'Pasupatheeswarar Shrine',
    'Historic Stone Sculptures',
    'Pasupatheeswarar Lingam',
    'Cow and Lingam Sculpture',
    'Rangamatha Sculpture',
    'Ancient Temple Architecture',
    'Religious Festivals'
  ],

  history:
    'Karur was an important centre during the Sangam period and was associated with the early Chera kings. The Pasupatheeswarar Temple has been an important Shaivite pilgrimage centre and is considered one of the major religious landmarks of Karur.',

  lat: 10.9601,
  lng: 78.0766,

  image:
    'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent city and intercity buses available',
      station: 'Karur Bus Stand',
      distance: 'Approximately 1–2 km'
    },

    train: {
      station: 'Karur Junction Railway Station',
      distance: 'Approximately 2 km',
      frequency: 'Regular trains available to major cities'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and local transport are available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Karur',
        distance: 'Approximately 2 km',
        phone: 'Verify current number locally',
        address: 'Karur, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Karur Town Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Karur, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Karur Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Karur Town',
      price: 'Varies',
      rating: 4.2,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Karur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.1,
      dist: '1–3 km',
      address: 'Karur Town'
    }
  ]
},
{
  id: 'tn_krishnagiri_dam',
  name: 'Krishnagiri Dam Park',
  district: 'Krishnagiri',
  category: 'dams',
  categoryName: 'Dams & Parks',

  rating: 4.2,
  ratingCount: 4800,

  entryFee: 'Check locally',
  openTime: '09:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Generally open daily)',
  bestTime: 'October to February',

  shortDesc:
    'A scenic dam and recreational park located across the Thenpennai River, featuring gardens, children’s play areas and beautiful reservoir views.',

  longDesc:
    'Krishnagiri Dam Park is located approximately 10 km from Krishnagiri town. The dam was constructed across the Thenpennai River during 1955–1957 under the leadership of former Tamil Nadu Chief Minister K. Kamaraj. The dam supports irrigation in the surrounding agricultural areas. The park covers around 50 acres on both sides of the dam and includes flower gardens and children’s play equipment, making it a popular family tourist destination.',

  attractions: [
    'Krishnagiri Dam',
    'Thenpennai River',
    'Dam Reservoir',
    'Flower Gardens',
    'Children’s Play Area',
    'Scenic Viewpoints',
    'Photography',
    'Family Recreation'
  ],

  history:
    'Krishnagiri Dam was constructed between 1955 and 1957 across the Thenpennai River. The project was developed during the period of Chief Minister K. Kamaraj and has benefited agricultural lands around the region through irrigation.',

  lat: 12.5146,
  lng: 78.2137,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Regular buses available from Krishnagiri town',
      station: 'Krishnagiri Bus Stand',
      distance: 'Approximately 10 km'
    },

    train: {
      station: 'Dharmapuri Railway Station',
      distance: 'Approximately 40–50 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport are available from Krishnagiri'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Krishnagiri',
        distance: 'Approximately 10 km',
        phone: 'Verify current number locally',
        address: 'Krishnagiri, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Krishnagiri Police Station',
        distance: 'Approximately 10 km',
        phone: 'Verify current number locally',
        address: 'Krishnagiri, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available near Krishnagiri town',
        location: 'Krishnagiri'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Krishnagiri',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 10 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Krishnagiri',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: 4.0,
      dist: 'Approximately 10 km',
      address: 'Krishnagiri Town'
    }
  ]
},
{
  id: 'tn_poompuhar',
  name: 'Poompuhar',
  district: 'Mayiladuthurai',
  category: 'historical',
  categoryName: 'Historical & Heritage Places',

  rating: 4.3,
  ratingCount: 1200,

  entryFee: 'Free for public areas; charges may apply at specific attractions',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Specific attractions may have separate timings)',
  bestTime: 'November to February',

  shortDesc:
    'An ancient Chola port city on the Bay of Bengal, famous for its historical heritage, beach, Kannagi statue and cultural attractions.',

  longDesc:
    'Poompuhar, also known as Kaveripoompattinam, is an ancient port town located near the mouth of the Kaveri River on the Bay of Bengal. It was once a flourishing port city and served for a period as the capital of the Early Chola kings. Today, Poompuhar is an important historical and cultural tourist destination known for Poompuhar Beach, Kannagi Statue, museums, lighthouse views and its connection with Tamil literary heritage.',

  attractions: [
    'Poompuhar Beach',
    'Kannagi Statue',
    'Poompuhar Museum',
    'Lighthouse',
    'Kaveri River Mouth',
    'Silappathikaram Heritage',
    'Ancient Port City Heritage',
    'Scenic Coastal Views'
  ],

  history:
    'Poompuhar, historically known as Kaveripoompattinam, was a flourishing ancient port city and was associated with the Early Chola kings. The city has an important place in Tamil history and literature, particularly through the epic Silappathikaram.',

  lat: 11.1437,
  lng: 79.8510,

  image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Regular buses available from Mayiladuthurai and Sirkazhi',
      station: 'Poompuhar Bus Stand',
      distance: 'Near tourist area'
    },

    train: {
      station: 'Mayiladuthurai Junction Railway Station',
      distance: 'Approximately 24 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis and local buses available from Mayiladuthurai and Sirkazhi'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Sirkazhi',
        distance: 'Approximately 21 km',
        phone: 'Verify current number locally',
        address: 'Sirkazhi, Mayiladuthurai District'
      }
    ],

    police: [
      {
        name: 'Poompuhar / Local Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Poompuhar, Mayiladuthurai District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available nearby',
        location: 'Poompuhar / Sirkazhi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels and Tourist Accommodation in Poompuhar',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Poompuhar',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      address: 'Poompuhar, Mayiladuthurai District'
    }
  ]
},
{
  id: 'tn_velankanni',
  name: 'Velankanni Basilica of Our Lady of Good Health',
  district: 'Nagapattinam',
  category: 'religious',
  categoryName: 'Religious & Pilgrimage Places',

  rating: 4.7,
  ratingCount: 5200,

  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'August to September for the annual festival; October to February for pleasant weather',

  shortDesc:
    'A world-famous Christian pilgrimage centre on the Bay of Bengal, known for its Gothic-style Basilica and spiritual significance.',

  longDesc:
    'Velankanni is one of the most visited pilgrimage centres in India and is located on the shores of the Bay of Bengal in Nagapattinam district. The Basilica of Our Lady of Good Health attracts pilgrims from India and around the world. The church is noted for its distinctive Gothic-style architecture, white walls and red-tiled roof. The shrine also includes the Chapel of Our Lady of Sorrows. Visitors from different faiths visit the Basilica as a place of prayer and pilgrimage.',

  attractions: [
    'Basilica of Our Lady of Good Health',
    'Main Basilica',
    'Chapel of Our Lady of Sorrows',
    'Gothic-style Architecture',
    'Velankanni Beach',
    'Pilgrimage Centre',
    'Annual Feast',
    'Night Church Illumination'
  ],

  history:
    'Velankanni developed into a major Christian pilgrimage centre around the shrine dedicated to Our Lady of Good Health. Its international religious importance led to the town being recognised as a Holy City by the Vatican. The Basilica attracts pilgrims from different parts of India and other countries.',

  lat: 10.6833,
  lng: 79.8450,

  image:
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent buses available from Nagapattinam, Thanjavur, Chennai and nearby towns',
      station: 'Velankanni Bus Stand',
      distance: 'Near the Basilica'
    },

    train: {
      station: 'Velankanni Railway Station',
      distance: 'Approximately 1 km',
      frequency: 'Regular trains available on selected routes'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport are available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Velankanni',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Velankanni, Nagapattinam District'
      }
    ],

    police: [
      {
        name: 'Velankanni Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Velankanni, Nagapattinam District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Velankanni'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels near Velankanni Basilica',
      price: 'Varies',
      rating: 4.2,
      dist: '0.5–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Velankanni',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: 4.1,
      dist: '0.5–3 km',
      address: 'Velankanni, Nagapattinam District'
    }
  ]
},
{
  id: 'tn_sathanur_fossil_wood_park',
  name: 'National Fossil Wood Park, Sathanur',
  district: 'Perambalur',
  category: 'natural',
  categoryName: 'Natural & Geological Places',

  rating: 4.4,
  ratingCount: 1500,

  entryFee: 'Check locally',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to February',

  shortDesc:
    'A unique geological attraction featuring a huge petrified tree trunk estimated to be around 100 million years old.',

  longDesc:
    'The National Fossil Wood Park at Sathanur in Perambalur district is a remarkable geological attraction. The park preserves a large petrified tree trunk that is more than 18 metres long and belongs to the geological formations of the Cretaceous period. Geological studies indicate that the area was once influenced by an ancient sea environment. The site also has an educational centre, museum and children’s park where visitors can learn about fossils, the origin of Earth, evolution and geology.',

  attractions: [
    'Petrified Fossil Tree',
    'Sathanur Fossil Wood',
    'Fossil Museum',
    'Educational Centre',
    'Children’s Park',
    'Geological Exhibits',
    'Nature Photography',
    'Geology Learning Experience'
  ],

  history:
    'The fossilized tree at Sathanur belongs to an ancient geological period. The large petrified trunk is more than 18 metres long. Dr. M. S. Krishnan of the Geological Survey of India first reported the fossil tree in 1940.',

  lat: 11.2500,
  lng: 78.9000,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Town buses available from Perambalur to Sathanur',
      station: 'Sathanur Bus Stop',
      distance: 'Near the tourist site'
    },

    train: {
      station: 'Ariyalur Railway Station',
      distance: 'Approximately 30–35 km',
      frequency: 'Regular trains available on the Chennai–Trichy route'
    },

    taxi: {
      options:
        'Taxis and local transport available from Perambalur and Ariyalur'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Perambalur',
        distance: 'Approximately 23 km',
        phone: 'Verify current number locally',
        address: 'Perambalur, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Local Police Station, Sathanur',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Sathanur, Perambalur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby villages',
        location: 'Sathanur / Perambalur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Perambalur',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 23 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Perambalur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.0,
      dist: 'Approximately 23 km',
      address: 'Perambalur Town'
    }
  ]
},
{
  id: 'tn_pudukkottai_government_museum',
  name: 'Government Museum, Pudukkottai',
  district: 'Pudukkottai',
  category: 'museums',
  categoryName: 'Museums',

  rating: 4.4,
  ratingCount: 1594,

  entryFee: 'Adult ₹5, Child ₹3',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Friday and National Holidays',
  bestTime: 'November to February',

  shortDesc:
    'A multi-purpose museum displaying archaeological, geological, zoological, anthropological, artistic and cultural collections.',

  longDesc:
    'The Government Museum at Thirugokarnam, Pudukkottai was established in 1910 and is one of the important museums in Tamil Nadu. The museum contains collections from archaeology, anthropology, numismatics, arts, zoology, botany, geology and industrial arts. Visitors can see rare objects including sculptures, coins, musical instruments, paintings, copper objects, fossils, zoological specimens and other materials that help explain the culture and life of earlier communities.',

  attractions: [
    'Archaeology Section',
    'Anthropology Section',
    'Numismatics Collection',
    'Zoology Section',
    'Botany Section',
    'Geology Section',
    'Stone Sculptures',
    'Fossils',
    'Coins',
    'Musical Instruments',
    'Paintings'
  ],

  history:
    'The Government Museum at Pudukkottai was started in 1910 and was taken over by the Government in 1950. It is a multi-purpose museum with several specialised sections and a large collection of objects related to archaeology, anthropology, geology, zoology, arts and culture.',

  lat: 10.3900,
  lng: 78.8200,

  image:
    'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent city and intercity buses available',
      station: 'Pudukkottai Bus Stand',
      distance: 'Approximately 5 km'
    },

    train: {
      station: 'Pudukkottai Railway Station',
      distance: 'Approximately 3 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Pudukkottai',
        distance: 'Approximately 4 km',
        phone: 'Verify current number locally',
        address: 'Pudukkottai, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Pudukkottai Town Police Station',
        distance: 'Approximately 4 km',
        phone: 'Verify current number locally',
        address: 'Pudukkottai, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Thirugokarnam / Pudukkottai'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: 'Varies',
      rating: null,
      dist: '2–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Pudukkottai',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: '2–5 km',
      address: 'Pudukkottai Town'
    }
  ]
},
{
  id: 'tn_kanchanagiri_hills',
  name: 'Kanchanagiri Hills',
  district: 'Ranipet',
  category: 'hill_stations',
  categoryName: 'Hill Stations & Recreational Places',

  rating: 4.5,
  ratingCount: 204,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic hill destination at around 1,500 feet elevation, known for green surroundings, hilltop temples and the famous Bell Rock.',

  longDesc:
    'Kanchanagiri Hills is a popular natural and recreational destination in Ranipet district. The green hill is situated at an elevation of around 1,500 feet and contains small Shiva and Murugan temples. One of its most notable attractions is the famous Bell Rock, which is known for the sound associated with it. The hill provides a peaceful environment for visitors interested in nature, photography, short hikes and scenic views.',

  attractions: [
    'Kanchanagiri Hill',
    'Bell Rock',
    'Shiva Temple',
    'Murugan Temple',
    'Green Landscape',
    'Hilltop View',
    'Nature Photography',
    'Short Hiking',
    'Scenic Viewpoints'
  ],

  history:
    'Kanchanagiri Hills is a locally important natural and recreational destination of Ranipet district. The hill contains small Shiva and Murugan temples and is especially known for the Bell Rock, which has become a popular attraction among visitors.',

  lat: 12.9300,
  lng: 79.3200,

  image:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Local buses available from Ranipet',
      station: 'Ranipet Bus Stand',
      distance: 'Approximately 8 km'
    },

    train: {
      station: 'Walajah Road Railway Junction',
      distance: 'Approximately 12 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available from Ranipet'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Ranipet',
        distance: 'Approximately 8 km',
        phone: 'Verify current number locally',
        address: 'Ranipet, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Ranipet Police Station',
        distance: 'Approximately 8 km',
        phone: 'Verify current number locally',
        address: 'Ranipet, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available near Ranipet',
        location: 'Ranipet Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Ranipet',
      price: 'Varies',
      rating: null,
      dist: 'Approximately 8 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Ranipet',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: 'Approximately 8 km',
      address: 'Ranipet Town'
    }
  ]
},
{
  id: 'tn_vettangudi_bird_sanctuary',
  name: 'Vettangudi Bird Sanctuary',
  district: 'Sivaganga',
  category: 'wildlife',
  categoryName: 'Wildlife & Bird Sanctuaries',

  rating: 4.1,
  ratingCount: 514,

  entryFee: 'Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Check local forest department timings)',
  bestTime: 'November to February',

  shortDesc:
    'A protected wetland habitat covering about 40 hectares and attracting thousands of migratory and resident birds during the winter season.',

  longDesc:
    'Vettangudi Bird Sanctuary is located near Tirupathur in Sivaganga district. The sanctuary covers approximately 40 hectares and includes the tanks of Vettangudi, Periyakollukudi and Chinna Kollukudi villages. It is an important natural habitat and breeding area for winter migratory birds. Visitors can observe species such as Grey Herons, Darters, Spoonbills, White Ibis, Asian Openbill Storks, Night Herons, Painted Storks, Little Cormorants and egrets.',

  attractions: [
    'Migratory Birds',
    'Grey Herons',
    'Darters',
    'Spoonbills',
    'White Ibis',
    'Asian Openbill Storks',
    'Painted Storks',
    'Little Cormorants',
    'Bird Watching',
    'Bird Photography',
    'Wetland Ecosystem'
  ],

  history:
    'Vettangudi developed as an important bird habitat around a group of village tanks. The wetland environment provides suitable feeding, nesting, breeding and roosting areas for resident and migratory birds.',

  lat: 10.1830,
  lng: 78.5750,

  image:
    'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Road transport available from Tirupathur and nearby towns',
      station: 'Vettangudipatti Bus Stop',
      distance: 'Nearby'
    },

    train: {
      station: 'Karaikudi Railway Station',
      distance: 'Approximately 32 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis and local transport available from Tirupathur and Karaikudi'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tirupathur',
        distance: 'Approximately 10–15 km',
        phone: 'Verify current number locally',
        address: 'Tirupathur, Sivaganga District'
      }
    ],

    police: [
      {
        name: 'Tirupathur Police Station',
        distance: 'Nearby town',
        phone: 'Verify current number locally',
        address: 'Tirupathur, Sivaganga District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Tirupathur / Vettangudi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tirupathur / Karaikudi',
      price: 'Varies',
      rating: null,
      dist: '10–32 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tirupathur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '10–15 km',
      address: 'Tirupathur, Sivaganga District'
    }
  ]
},
{
  id: 'tn_suruli_falls',
  name: 'Suruli Falls',
  district: 'Theni',
  category: 'waterfalls',
  categoryName: 'Waterfalls',

  rating: 4.2,
  ratingCount: 4842,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Check local forest department timings)',
  bestTime: 'June to October',

  shortDesc:
    'A beautiful multi-stage waterfall in the Western Ghats, surrounded by dense greenery and natural mountain scenery.',

  longDesc:
    'Suruli Falls is one of the major natural attractions of Theni district. The waterfall is located in the Western Ghats and receives water from the Suruli River. The falls descend in stages through a forested landscape, creating a scenic environment for visitors. The surrounding area is also associated with caves and natural attractions. It is a popular destination for nature lovers, photography and short outdoor trips.',

  attractions: [
    'Suruli Waterfalls',
    'Western Ghats Landscape',
    'Forest Environment',
    'Suruli River',
    'Natural Caves',
    'Nature Photography',
    'Picnic Area',
    'Trekking / Walking Trails'
  ],

  history:
    'Suruli Falls is a naturally formed waterfall in the Western Ghats. The surrounding region contains several natural and religious attractions and has long been visited by local tourists.',

  lat: 9.6710,
  lng: 77.2750,

  image:
    'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Theni and Cumbum',
      station: 'Suruli Falls Bus Stop',
      distance: 'Near the entrance'
    },

    train: {
      station: 'Theni Railway Station',
      distance: 'Approximately 55–60 km',
      frequency: 'Limited passenger services; check current schedule'
    },

    taxi: {
      options:
        'Taxis and local transport available from Theni and Cumbum'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Cumbum',
        distance: 'Approximately 10–15 km',
        phone: 'Verify current number locally',
        address: 'Cumbum, Theni District'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Suruli / Cumbum area'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Cumbum / Uthamapalayam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Cumbum / Theni',
      price: 'Varies',
      rating: 4.3,
      dist: '10–60 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Cumbum',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '10–15 km',
      address: 'Cumbum, Theni District'
    }
  ]
},
{
  id: 'tn_manapad_beach',
  name: 'Manapad Beach',
  district: 'Thoothukudi',
  category: 'beaches',
  categoryName: 'Beaches',

  rating: 4.6,
  ratingCount: 2064,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'A scenic coastal destination known for its sandy shoreline, sea views, rocky landscape and Holy Cross Church on the cliff.',

  longDesc:
    'Manapad is a coastal village in Thoothukudi district located on the Bay of Bengal. The destination is known for its scenic beach, coastal landscape and the Holy Cross Church situated on a cliff overlooking the sea. The area attracts visitors for its peaceful surroundings, photography, coastal sightseeing and religious tourism. It is also associated with the visit of St. Francis Xavier.',

  attractions: [
    'Manapad Beach',
    'Bay of Bengal View',
    'Holy Cross Church',
    'Cliff Viewpoint',
    'Coastal Landscape',
    'Sunrise and Sunset',
    'Photography',
    'Fishing Village'
  ],

  history:
    'Manapad is an old coastal settlement associated with Portuguese-era Christian heritage. St. Francis Xavier visited the region in the 16th century. The Holy Cross Church on the coastal cliff is one of the best-known landmarks of the village.',

  lat: 8.3770,
  lng: 78.0520,

  image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Tiruchendur and nearby towns',
      station: 'Manapad Bus Stop',
      distance: 'Near the beach'
    },

    train: {
      station: 'Tiruchendur Railway Station',
      distance: 'Approximately 18 km',
      frequency: 'Regular services available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local buses available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tiruchendur',
        distance: 'Approximately 18 km',
        phone: 'Verify current number locally',
        address: 'Tiruchendur, Thoothukudi District'
      }
    ],

    police: [
      {
        name: 'Manapad / Local Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Manapad, Thoothukudi District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Manapad / Tiruchendur',
        location: 'Manapad'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchendur',
      price: 'Varies',
      rating: null,
      dist: '18–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruchendur',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: null,
      dist: '18–20 km',
      address: 'Tiruchendur, Thoothukudi District'
    }
  ]
},
{
  id: 'tn_mukkombu_upper_anaicut',
  name: 'Mukkombu (Upper Anaicut)',
  district: 'Tiruchirappalli',
  category: 'parks',
  categoryName: 'Parks & Recreational Places',

  rating: 3.9,
  ratingCount: 31,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic riverside recreational destination where the Cauvery divides into two branches, surrounded by greenery and water landscapes.',

  longDesc:
    'Mukkombu, also known as Upper Anaicut, is a popular recreational destination near Tiruchirappalli. It is located on the Cauvery River where the river divides into two branches. The area is known for its gardens, water channels, greenery and peaceful surroundings. It is suitable for family outings, photography, nature walks and relaxation.',

  attractions: [
    'Cauvery River',
    'Upper Anaicut',
    'River Channels',
    'Gardens',
    'Children’s Recreation Area',
    'Green Landscape',
    'Photography',
    'Family Picnic'
  ],

  history:
    'Mukkombu is an important water-management structure on the Cauvery system. The name refers to the three branching waterways in the region. The location has developed into a popular recreational spot because of its river environment and gardens.',

  lat: 10.8520,
  lng: 78.7100,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Tiruchirappalli and Karur routes',
      station: 'Mukkombu Bus Stop',
      distance: 'Near tourist area'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: 'Approximately 18 km',
      frequency: 'Frequent trains available'
    },

    taxi: {
      options:
        'Taxis and Auto Rickshaws available from Tiruchirappalli'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tiruchirappalli',
        distance: 'Approximately 18 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Jeeyapuram Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Jeeyapuram, Tiruchirappalli District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Jeeyapuram / Tiruchirappalli'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchirappalli',
      price: 'Varies',
      rating: null,
      dist: '15–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruchirappalli',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: '15–20 km',
      address: 'Tiruchirappalli'
    }
  ]
},
{
  id: 'tn_yelagiri_hills',
  name: 'Yelagiri Hills',
  district: 'Tirupathur',
  category: 'hill_stations',
  categoryName: 'Hill Stations',

  rating: 4.3,
  ratingCount: 8537,

  entryFee: 'No general entry fee; activity charges may apply',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic hill station in the Eastern Ghats known for its greenery, lake, parks, viewpoints and outdoor activities.',

  longDesc:
    'Yelagiri Hills is one of the popular hill stations of Tamil Nadu and is located in Tirupathur district. The hill region is situated at an elevation of around 1,200 metres and consists of four major hills. Attractions include Punganoor Lake and Park, Nature Park, Jalagamparai Waterfalls, Swamimalai Hills, telescope facilities and boating. The destination is suitable for families, nature lovers, photography and adventure activities.',

  attractions: [
    'Punganoor Lake',
    'Nature Park',
    'Jalagamparai Waterfalls',
    'Swamimalai Hills',
    'Nilavoor Lake',
    'Boating',
    'Viewpoints',
    'Trekking',
    'Telescope Observatory'
  ],

  history:
    'Yelagiri is a hill region of the Eastern Ghats and has developed as a popular hill station. Its combination of forests, viewpoints, lakes, waterfalls and outdoor activities has made it an important tourism destination in Tirupathur district.',

  lat: 12.5800,
  lng: 78.6300,

  image:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent buses available from Tirupathur',
      station: 'Yelagiri Bus Stand',
      distance: 'Near major tourist areas'
    },

    train: {
      station: 'Jolarpettai Junction',
      distance: 'Approximately 20 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local buses available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tirupathur',
        distance: 'Approximately 30 km',
        phone: 'Verify current number locally',
        address: 'Tirupathur, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Yelagiri Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Yelagiri, Tirupathur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Yelagiri',
        location: 'Yelagiri Hills'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels and Resorts in Yelagiri',
      price: 'Varies',
      rating: null,
      dist: 'Nearby',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Restaurants in Yelagiri',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: 'Nearby',
      address: 'Yelagiri Hills'
    }
  ]
},
{
  id: 'tn_amaravathi_crocodile_farm',
  name: 'Amaravathi Crocodile Farm',
  district: 'Tiruppur',
  category: 'wildlife',
  categoryName: 'Wildlife & Animal Attractions',

  rating: 3.9,
  ratingCount: 1576,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',

  shortDesc:
    'A wildlife attraction near Amaravathi Reservoir known for crocodile conservation and its natural reservoir environment.',

  longDesc:
    'Amaravathi Crocodile Farm is located near Amaravathi Reservoir in Tiruppur district. The reservoir and surrounding river system support a significant population of crocodiles. The crocodile farm provides visitors with an opportunity to observe these reptiles and learn about their habitat and conservation. The surrounding Amaravathi Dam and Western Ghats landscape make the area attractive for wildlife and nature tourism.',

  attractions: [
    'Crocodile Farm',
    'Crocodile Observation',
    'Amaravathi Reservoir',
    'Amaravathi Dam',
    'Western Ghats Landscape',
    'Wildlife Photography',
    'Nature Observation'
  ],

  history:
    'The Amaravathi reservoir and its river system provide a suitable habitat for mugger crocodiles. The crocodile farm was developed as a wildlife attraction and conservation-related facility in the Amaravathi area.',

  lat: 10.4500,
  lng: 77.2700,

  image:
    'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Udumalpet and nearby towns',
      station: 'Amaravathinagar Bus Stop',
      distance: 'Near tourist area'
    },

    train: {
      station: 'Udumalpet Railway Station',
      distance: 'Approximately 25 km',
      frequency: 'Limited services; verify current schedule'
    },

    taxi: {
      options:
        'Taxis and local buses available from Udumalpet'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Udumalpet',
        distance: 'Approximately 25 km',
        phone: 'Verify current number locally',
        address: 'Udumalpet, Tiruppur District'
      }
    ],

    police: [
      {
        name: 'Amaravathi Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Amaravathinagar, Tiruppur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Amaravathinagar / Udumalpet',
        location: 'Amaravathinagar'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Udumalpet',
      price: 'Varies',
      rating: null,
      dist: '20–25 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Restaurants in Udumalpet',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '20–25 km',
      address: 'Udumalpet, Tiruppur District'
    }
  ]
},
{
  id: 'tn_pulicat_lake',
  name: 'Pulicat Lake',
  district: 'Tiruvallur',
  category: 'lakes',
  categoryName: 'Lakes & Wetlands',

  rating: 4.4,
  ratingCount: 1398,

  entryFee: 'Free for lake viewing; activity charges may apply',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'A large brackish-water lagoon famous for migratory birds, flamingos, boating, fishing villages and scenic coastal landscapes.',

  longDesc:
    'Pulicat Lake is a major coastal lagoon located in Tiruvallur district along the Bay of Bengal. The lake is separated from the sea by Sriharikota and supports a rich wetland ecosystem. During the migratory season, large numbers of birds including flamingos visit the area. Pulicat is also known for its lighthouse, fishing communities, boating and traditional palm-leaf handicrafts.',

  attractions: [
    'Pulicat Lake',
    'Flamingo Bird Watching',
    'Pulicat Bird Sanctuary',
    'Pulicat Lighthouse',
    'Boating',
    'Fishing Villages',
    'Backwaters',
    'Palm-leaf Handicrafts',
    'Coastal Scenery'
  ],

  history:
    'Pulicat has a long coastal trading history and was an important Dutch settlement. The Dutch established a fort at Pulicat in 1609. Today the area is better known as an ecotourism destination because of its lake, birdlife, lighthouse and coastal environment.',

  lat: 13.4140,
  lng: 80.3160,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent buses available from Chennai and nearby towns',
      station: 'Pulicat Bus Stop',
      distance: 'Near lake area'
    },

    train: {
      station: 'Ponneri Railway Station',
      distance: 'Approximately 20 km',
      frequency: 'Frequent local trains from Chennai Central'
    },

    taxi: {
      options:
        'Taxis and local transport available from Chennai / Ponneri'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Ponneri',
        distance: 'Approximately 20 km',
        phone: 'Verify current number locally',
        address: 'Ponneri, Tiruvallur District'
      }
    ],

    police: [
      {
        name: 'Pulicat Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Pulicat, Tiruvallur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Pulicat',
        location: 'Pulicat Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Accommodation near Pulicat / Ponneri',
      price: 'Varies',
      rating: null,
      dist: '5–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Pulicat',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: null,
      dist: 'Nearby',
      address: 'Pulicat, Tiruvallur District'
    }
  ]
},
{
  id: 'tn_sathanur_dam',
  name: 'Sathanur Dam',
  district: 'Tiruvannamalai',
  category: 'dams',
  categoryName: 'Dams & Reservoirs',

  rating: 4.3,
  ratingCount:1635,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A major reservoir and scenic recreational destination surrounded by hills, gardens and the natural landscape of the South Pennar basin.',

  longDesc:
    'Sathanur Dam is one of the major dams of Tamil Nadu and is located in Tiruvannamalai district. The dam is constructed across the South Pennar River and forms a large reservoir. The surrounding area includes gardens and recreational spaces and provides scenic views of the reservoir and nearby hills. It is suitable for family outings, nature photography and sightseeing.',

  attractions: [
    'Sathanur Dam',
    'Sathanur Reservoir',
    'South Pennar River',
    'Dam Gardens',
    'Scenic Viewpoints',
    'Children’s Recreation Area',
    'Nature Photography',
    'Reservoir Landscape'
  ],

  history:
    'Sathanur Dam was constructed across the South Pennar River as an important irrigation and water-management project. Over time, the reservoir and surrounding recreational facilities have developed into a tourist attraction.',

  lat: 12.2400,
  lng: 78.8900,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Tiruvannamalai and nearby towns',
      station: 'Sathanur Bus Stop',
      distance: 'Near dam'
    },

    train: {
      station: 'Tiruvannamalai Railway Station',
      distance: 'Approximately 30–35 km',
      frequency: 'Regular train services available'
    },

    taxi: {
      options:
        'Taxis and local buses available from Tiruvannamalai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tiruvannamalai',
        distance: 'Approximately 30 km',
        phone: 'Verify current number locally',
        address: 'Tiruvannamalai, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Sathanur Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Sathanur, Tiruvannamalai District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Sathanur / Chengam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruvannamalai',
      price: 'Varies',
      rating: null,
      dist: '30–35 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruvannamalai',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '30–35 km',
      address: 'Tiruvannamalai'
    }
  ]
},
{
  id: 'tn_muthupet_mangrove_forest',
  name: 'Muthupet Mangrove Forest',
  district: 'Thiruvarur',
  category: 'adventure',
  categoryName: 'Adventure & Nature',

  rating: 4.1,
  ratingCount: 53,

  entryFee: 'Boating charges may apply',
  openTime: '08:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'November to February',

  shortDesc:
    'A scenic mangrove ecosystem and lagoon destination known for boating, bird watching, backwaters and rich coastal biodiversity.',

  longDesc:
    'Muthupet Mangrove Forest is one of the important natural attractions of Thiruvarur district. The mangrove ecosystem is located around the southern part of the Cauvery delta and contains extensive marshlands, backwaters and mangrove vegetation. Visitors can explore the mangrove environment by boat and enjoy bird watching, photography and nature-based activities. The area is particularly attractive during the migratory bird season.',

  attractions: [
    'Mangrove Forest',
    'Muthupet Lagoon',
    'Boat Ride',
    'Backwaters',
    'Bird Watching',
    'Migratory Birds',
    'Mangrove Ecosystem',
    'Nature Photography',
    'Fishing Villages'
  ],

  history:
    'Muthupet is located in the southern part of the Cauvery delta and has a long association with coastal fishing and lagoon ecosystems. The mangrove forest and wetlands have become important natural tourism and biodiversity areas.',

  lat: 10.4800,
  lng: 79.5200,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Regular buses available from Thiruvarur and Pattukkottai',
      station: 'Muthupet Bus Stand',
      distance: 'Approximately 5–10 km from boating areas'
    },

    train: {
      station: 'Muthupet Railway Station',
      distance: 'Approximately 5–10 km',
      frequency: 'Check current train schedule'
    },

    taxi: {
      options:
        'Taxis and local transport available from Muthupet'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Muthupet',
        distance: 'Approximately 5–10 km',
        phone: 'Verify current number locally',
        address: 'Muthupet, Thiruvarur District'
      }
    ],

    police: [
      {
        name: 'Muthupet Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Muthupet, Thiruvarur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Muthupet'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Muthupet',
      price: 'Varies',
      rating: null,
      dist: '5–10 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Muthupet',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: null,
      dist: '5–10 km',
      address: 'Muthupet, Thiruvarur District'
    }
  ]
},
{
  id: 'tn_vellore_fort',
  name: 'Vellore Fort',
  district: 'Vellore',
  category: 'forts',
  categoryName: 'Forts & Historical Monuments',

  rating: 4.3,
  ratingCount: 30398,

  entryFee: 'Check current ASI / local ticket rules',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Specific facilities may have separate timings)',
  bestTime: 'October to February',

  shortDesc:
    'A massive granite fort in the heart of Vellore, famous for its moat, military architecture, temples, mosque, church and museums.',

  longDesc:
    'Vellore Fort is one of the most important monuments in Vellore district. The rectangular fort is built mainly with massive granite stones and is surrounded by a wide moat. The complex contains several important structures including Jalakanteswarar Temple, a mosque, St. John’s Church and historical palaces. Museums have also been established within the fort complex. The fort is closely associated with the Vellore Revolt of 1806.',

  attractions: [
    'Massive Granite Fort',
    'Wide Moat',
    'Jalakanteswarar Temple',
    'St. John’s Church',
    'Old Mosque',
    'Tippu Mahal',
    'Begam Mahal',
    'Fort Museum',
    'Archaeological Museum',
    'Photography'
  ],

  history:
    'Vellore Fort was constructed during the 16th century under the Vijayanagara period and is associated with Chinna Bommi Nayakar. The fort was later occupied by the British and witnessed the Vellore Revolt of 1806. It is an important example of military architecture in South India.',

  lat: 12.9200,
  lng: 79.1320,

  image:
    'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent city and intercity buses available',
      station: 'Vellore Bus Stand',
      distance: 'Approximately 2 km'
    },

    train: {
      station: 'Katpadi Junction Railway Station',
      distance: 'Approximately 7 km',
      frequency: 'Frequent trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Vellore Medical College Hospital',
        distance: 'Approximately 5–8 km',
        phone: 'Verify current number locally',
        address: 'Vellore District'
      }
    ],

    police: [
      {
        name: 'Vellore North Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Vellore, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Vellore Fort / Vellore Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Vellore',
      price: 'Varies',
      rating: null,
      dist: '1–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Restaurants in Vellore',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: '1–5 km',
      address: 'Vellore Town'
    }
  ]
},
{
  id: 'tn_kamaraj_memorial_house',
  name: 'Kamaraj Memorial House',
  district: 'Virudhunagar',
  category: 'cultural',
  categoryName: 'Cultural & Memorial Places',

  rating: 4.8,
  ratingCount: 624,

  entryFee: 'Free / Check locally',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to February',

  shortDesc:
    'The birthplace and memorial house of former Tamil Nadu Chief Minister K. Kamaraj, displaying photographs, personal belongings and memorabilia.',

  longDesc:
    'Kamaraj Memorial House in Virudhunagar is the birthplace and memorial of K. Kamaraj, one of the prominent political leaders of Tamil Nadu. The government converted his residence into a memorial to honour his contribution. The rooms display photographs from different stages of his life, along with clothes, a watch, books and other personal articles. The memorial provides visitors with an opportunity to learn about his life and contribution to Tamil Nadu.',

  attractions: [
    'Kamaraj Memorial House',
    'Personal Belongings',
    'Historical Photographs',
    'Books',
    'Clothing and Memorabilia',
    'Life History Displays',
    'Cultural Learning',
    'Photography'
  ],

  history:
    'K. Kamaraj was born in Virudhunagar and later became an important leader and Chief Minister of Tamil Nadu. His birthplace was declared a memorial by the Tamil Nadu Government and preserved as a place of public remembrance and education.',

  lat: 9.5850,
  lng: 77.9550,

  image:
    'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent buses available from major towns',
      station: 'Virudhunagar Bus Stand',
      distance: 'Approximately 1–2 km'
    },

    train: {
      station: 'Virudhunagar Junction Railway Station',
      distance: 'Approximately 2 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Virudhunagar',
        distance: 'Approximately 2 km',
        phone: 'Verify current number locally',
        address: 'Virudhunagar, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Virudhunagar Town Police Station',
        distance: 'Approximately 2 km',
        phone: 'Verify current number locally',
        address: 'Virudhunagar, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Virudhunagar Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Virudhunagar',
      price: 'Varies',
      rating: null,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Virudhunagar',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '1–3 km',
      address: 'Virudhunagar Town'
    }
  ]
}
  ],

  initialReviews: [
    { id: 1, placeId: 'tn_meenakshi', userName: 'Karthik Raja', rating: 5, date: '2026-07-15', comment: 'The architecture of Meenakshi Temple is unbelievable. The 1000 pillar hall left me speechlessly amazed!' },
    { id: 2, placeId: 'tn_ooty', userName: 'Priya Sundaram', rating: 5, date: '2026-08-01', comment: 'Riding the Nilgiri toy train through the tunnels and tea estates was a dream come true.' },
    { id: 3, placeId: 'tn_brihadeeswarar', userName: 'Arun Kumar', rating: 5, date: '2026-07-28', comment: 'Chola dynasty engineering at its absolute finest. Mandatory visit for history lovers!' }
  ]
};

// Expose on window object
if (typeof window !== 'undefined') {
  window.TN_DATA = TN_DATA;
}
