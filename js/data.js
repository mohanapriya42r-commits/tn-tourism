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
    'Madurai', 'Chennai', 'The Nilgiris', 'Dindigul', 'Thanjavur',
    'Ramanathapuram', 'Chengalpattu', 'Kanyakumari', 'Tenkasi (Courtallam)',
    'Dharmapuri (Hogenakkal)', 'Salem (Yercaud)', 'Coimbatore (Valparai)', 'Villupuram (Gingee)',
    'Kanchipuram', 'Tirunelveli', 'Namakkal','Ariyalur','Cuddalore','Erode','Kallakurichi','Karur','Krishnagiri','Mayiladuthurai','Nagapattinam','Perambalur','Pudukottai','Ranipet','Sivaganga','Theni','Thoothukudi','Tiruchirappalli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Virudhunagar'
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
      image: 'https://m.media-amazon.com/images/S/pv-target-images/b3073d7cf3711749a1e962055fa72c8aac3716244c4a6bed240692980e65c7a7.jpg',
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
    'https://www.laurewanders.com/wp-content/uploads/2023/09/Thirumalai-Nayakar-Palace-00002-scaled.jpg',

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
  id: 'tn_thanjavur_palace',
  name: 'Thanjavur Maratha Palace & Royal Museum',
  district: 'Thanjavur',
  category: 'historical',
  categoryName: 'Historical Sites & Museums',
  rating: 4.6,
  ratingCount: 6800,
  entryFee: 'Entry charges apply',
  openTime: '09:00 AM',
  closeTime: '06:00 PM',
  holiday: 'Check locally',
  bestTime: 'November to February',
  shortDesc: 'Historic royal palace complex featuring ancient architecture, museums, royal artifacts and the Saraswathi Mahal Library.',
  longDesc: 'Thanjavur Maratha Palace is an important heritage complex associated with the Nayak and Maratha rulers of Thanjavur. The complex includes royal courtyards, museums, art collections, historic weapons and the famous Saraswathi Mahal Library.',
  attractions: [
    'Royal Palace Complex',
    'Saraswathi Mahal Library',
    'Royal Museum',
    'Art Gallery',
    'Durbar Hall',
    'Ancient Sculptures'
  ],
  history: 'The palace complex was developed under the Nayak rulers and later expanded and used by the Maratha rulers of Thanjavur.',
  lat: 10.7867,
  lng: 79.1378,
  image: 'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Thanjavur Bus Stand',
      station: 'Thanjavur Old Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '2.5 km',
      frequency: 'Regular trains from Chennai, Trichy and Madurai'
    },
    taxi: {
      options: 'Auto Rickshaws, Cabs & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Thanjavur Medical College Hospital',
        distance: '4 km',
        phone: '04362-240024',
        address: 'MC Road, Thanjavur'
      }
    ],
    police: [
      {
        name: 'Thanjavur West Police Station',
        distance: '1.5 km',
        phone: '04362-230300',
        address: 'Thanjavur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Thanjavur Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Svatma Thanjavur',
      price: '₹5,500/night',
      rating: 4.8,
      dist: '2.5 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4362 273222'
    }
  ],
  restaurants: [
    {
      name: 'Thanjavur Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Thanjavur Town'
    }
  ]
},

{
  id: 'tn_gangaikonda_cholapuram',
  name: 'Gangaikonda Cholapuram Brihadisvara Temple',
  district: 'Thanjavur',
  category: 'historical',
  categoryName: 'Historical Sites & Temples',
  rating: 4.8,
  ratingCount: 7200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Magnificent Chola-era temple built by Rajendra Chola I and part of the UNESCO Great Living Chola Temples.',
  longDesc: 'Gangaikonda Cholapuram Brihadisvara Temple is a magnificent Chola temple commissioned by Rajendra Chola I. The temple is celebrated for its Dravidian architecture, detailed sculptures and connection with the imperial Chola capital.',
  attractions: [
    'Brihadisvara Temple',
    'Chola Sculptures',
    'Temple Architecture',
    'Stone Inscriptions',
    'Historic Temple Complex'
  ],
  history: 'Built by Rajendra Chola I in the 11th century as the centerpiece of his new capital, Gangaikonda Cholapuram.',
  lat: 11.2001,
  lng: 79.4510,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38HkvZefadjKLtxYPTszK8vmxMyIHbKpS7K3jH2AXYA&s=10',
  transport: {
    bus: {
      available: 'Buses from Thanjavur, Kumbakonam and Jayankondam',
      station: 'Gangaikonda Cholapuram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Kumbakonam Railway Station',
      distance: '35 km',
      frequency: 'Road transport required from Kumbakonam'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Nearby Government Hospital',
        distance: '10–15 km',
        phone: 'Verify current number',
        address: 'Nearby Town'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Gangaikonda Cholapuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1–5 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Kumbakonam',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '30–40 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Vegetarian Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.1,
      dist: '1–5 km',
      address: 'Gangaikonda Cholapuram Area'
    }
  ]
},

{
  id: 'tn_darasuram_airavatesvara',
  name: 'Airavatesvara Temple, Darasuram',
  district: 'Thanjavur',
  category: 'historical',
  categoryName: 'Historical Sites & Temples',
  rating: 4.8,
  ratingCount: 6100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Beautiful 12th-century Chola temple famous for its intricate stone carvings and architectural details.',
  longDesc: 'Airavatesvara Temple at Darasuram is one of the finest examples of later Chola architecture. The temple is known for its detailed sculptures, stone craftsmanship, musical steps and elegant architectural design.',
  attractions: [
    'Stone Carvings',
    'Musical Steps',
    'Chola Architecture',
    'Temple Sculptures',
    'UNESCO Great Living Chola Temples'
  ],
  history: 'Built by Chola King Rajaraja II in the 12th century and recognized as part of the UNESCO Great Living Chola Temples.',
  lat: 10.9488,
  lng: 79.3550,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYfu7d2_-UJcxMu5G4DTgjqNRnWfJeOkI1covJQgkpg&s=10',
  transport: {
    bus: {
      available: 'Buses from Kumbakonam and Thanjavur',
      station: 'Darasuram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Kumbakonam Railway Station',
      distance: '5 km',
      frequency: 'Regular passenger and express trains'
    },
    taxi: {
      options: 'Auto Rickshaws, Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kumbakonam',
        distance: '6 km',
        phone: 'Verify current number',
        address: 'Kumbakonam'
      }
    ],
    police: [
      {
        name: 'Darasuram Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Darasuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Darasuram / Kumbakonam'
      }
    ]
  },
  hotels: [
    {
      name: 'Quality Inn Viha, Kumbakonam',
      price: '₹2,500–₹5,000/night',
      rating: 4.2,
      dist: '5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kumbakonam Vegetarian Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '5 km',
      address: 'Kumbakonam'
    }
  ]
},

{
  id: 'tn_punnainallur_mariamman',
  name: 'Punnainallur Mariamman Temple',
  district: 'Thanjavur',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.7,
  ratingCount: 5400,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',
  shortDesc: 'Famous Mariamman temple near Thanjavur known for its spiritual significance and traditional festivals.',
  longDesc: 'Punnainallur Mariamman Temple is a popular pilgrimage destination near Thanjavur dedicated to Goddess Mariamman. The temple attracts devotees throughout the year and is especially vibrant during important festivals.',
  attractions: [
    'Mariamman Shrine',
    'Temple Architecture',
    'Religious Festivals',
    'Temple Tank',
    'Traditional Rituals'
  ],
  history: 'The temple has a long association with local traditions and devotion to Goddess Mariamman.',
  lat: 10.7860,
  lng: 79.1850,
  image: 'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Thanjavur',
      station: 'Punnainallur Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '7 km',
      frequency: 'Local buses and taxis available'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Thanjavur Medical College Hospital',
        distance: '8 km',
        phone: '04362-240024',
        address: 'MC Road, Thanjavur'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Punnainallur Area'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Punnainallur'
      }
    ]
  },
  hotels: [
    {
      name: 'Svatma Thanjavur',
      price: '₹5,500/night',
      rating: 4.8,
      dist: '8 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4362 273222'
    }
  ],
  restaurants: [
    {
      name: 'Thanjavur Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '5–8 km',
      address: 'Thanjavur'
    }
  ]
},

{
  id: 'tn_sivaganga_park_thanjavur',
  name: 'Sivaganga Park',
  district: 'Thanjavur',
  category: 'parks',
  categoryName: 'Parks & Recreation',
  rating: 4.2,
  ratingCount: 3200,
  entryFee: 'Entry charges may apply',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Popular green recreational space near the Big Temple with gardens, walking areas and family attractions.',
  longDesc: 'Sivaganga Park is a popular recreational area in Thanjavur located close to the Brihadeeswarar Temple. The park provides gardens, walking spaces and a relaxed environment for families and visitors.',
  attractions: [
    'Gardens',
    'Walking Areas',
    'Children’s Recreation',
    'Green Spaces',
    'Nearby Big Temple'
  ],
  history: 'Developed as a public recreational space in the historic Thanjavur city area.',
  lat: 10.7785,
  lng: 79.1325,
  image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Thanjavur',
      station: 'Thanjavur Old Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '2 km',
      frequency: 'Regular trains and buses available'
    },
    taxi: {
      options: 'Auto Rickshaws, Cabs & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Thanjavur Medical College Hospital',
        distance: '4 km',
        phone: '04362-240024',
        address: 'MC Road, Thanjavur'
      }
    ],
    police: [
      {
        name: 'Thanjavur West Police Station',
        distance: '1 km',
        phone: '04362-230300',
        address: 'Thanjavur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5 km',
        location: 'Thanjavur'
      }
    ]
  },
  hotels: [
    {
      name: 'Svatma Thanjavur',
      price: '₹5,500/night',
      rating: 4.8,
      dist: '3 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4362 273222'
    }
  ],
  restaurants: [
    {
      name: 'Thanjavur Restaurants',
      foodType: 'South Indian & Traditional Tamil Cuisine',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1–2 km',
      address: 'Thanjavur Town'
    }
  ]
},

{
  id: 'tn_thiruvaiyaru',
  name: 'Thiruvaiyaru',
  district: 'Thanjavur',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Places',
  rating: 4.5,
  ratingCount: 3900,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'January to February',
  shortDesc: 'Historic Cauvery-side town famous for Carnatic music heritage and the annual Thyagaraja Aradhana.',
  longDesc: 'Thiruvaiyaru is a culturally important town on the banks of the Cauvery River. It is closely associated with Saint-composer Thyagaraja and is famous for the annual Thyagaraja Aradhana music festival.',
  attractions: [
    'Thyagaraja Samadhi',
    'Cauvery River',
    'Thyagaraja Aradhana',
    'Traditional Temples',
    'Cultural Heritage'
  ],
  history: 'Thiruvaiyaru has a long association with Carnatic music and the life and legacy of Saint Thyagaraja.',
  lat: 10.8815,
  lng: 79.1020,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Thanjavur and nearby towns',
      station: 'Thiruvaiyaru Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '15 km',
      frequency: 'Buses and taxis connect Thanjavur'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruvaiyaru',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Thiruvaiyaru'
      }
    ],
    police: [
      {
        name: 'Thiruvaiyaru Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thiruvaiyaru'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5 km',
        location: 'Thiruvaiyaru'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Thanjavur',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thiruvaiyaru Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Thiruvaiyaru'
    }
  ]
},
    {
      id: 'tn_ooty',
      name: 'Ooty (Udhagamandalam) Hill Station',
      district: 'The Nilgiris',
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
  id: 'tn_ooty_botanical_garden',
  name: 'Government Botanical Garden, Ooty',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Gardens & Nature',
  rating: 4.7,
  ratingCount: 12500,
  entryFee: '₹50 (Adults)',
  openTime: '07:00 AM',
  closeTime: '06:30 PM',
  holiday: 'None',
  bestTime: 'April to June',
  shortDesc: 'Beautiful 55-acre botanical garden featuring rare plants, colorful flowers, lawns, and ancient trees.',
  longDesc: 'The Government Botanical Garden in Ooty is one of the most popular attractions in the Nilgiris. Spread across around 55 acres, the garden features a wide variety of exotic and indigenous plants, colorful flower beds, fern houses, and a famous fossilized tree trunk believed to be millions of years old.',
  attractions: [
    'Lower Garden',
    'New Garden',
    'Italian Garden',
    'Fern House',
    'Fossil Tree',
    'Flower Shows'
  ],
  history: 'Established in 1848 and maintained by the Government of Tamil Nadu to promote horticulture and preserve plant species.',
  lat: 11.4146,
  lng: 76.7115,
  image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Ooty town',
      station: 'Ooty Bus Stand',
      distance: '2.5 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '3.0 km',
      frequency: 'Regular heritage train services'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '3.0 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '3.0 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2–3 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Savoy - IHCL SeleQtions Ooty',
      price: '₹9,000/night',
      rating: 4.8,
      dist: '3.0 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 423 2225500'
    }
  ],
  restaurants: [
    {
      name: 'Ooty Local Restaurants',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.2,
      dist: '2–3 km',
      address: 'Ooty Town'
    }
  ]
},

{
  id: 'tn_ooty_rosegarden',
  name: 'Government Rose Garden, Ooty',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Gardens & Nature',
  rating: 4.6,
  ratingCount: 7800,
  entryFee: '₹50 (Adults)',
  openTime: '07:30 AM',
  closeTime: '06:30 PM',
  holiday: 'None',
  bestTime: 'April to June',
  shortDesc: 'Terraced hillside garden famous for thousands of rose varieties and colorful floral displays.',
  longDesc: 'The Government Rose Garden is located on the slopes of Elk Hill in Ooty. The garden is known for its large collection of roses arranged across beautifully landscaped terraces and is one of the most attractive flower gardens in the Nilgiris.',
  attractions: [
    'Rose Collections',
    'Terraced Gardens',
    'Elk Hill View',
    'Flower Photography',
    'Seasonal Blooms'
  ],
  history: 'Established in 1995 and developed as an important horticultural attraction in Ooty.',
  lat: 11.4025,
  lng: 76.7050,
  image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses and town buses',
      station: 'Ooty Bus Stand',
      distance: '2.0 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '2.0 km',
      frequency: 'Heritage train services'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '2.5 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '2.0 km',
        phone: '0423-2444004',
        address: 'Commercial Road'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–2 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Sterling Ooty Fern Hill',
      price: '₹4,200/night',
      rating: 4.4,
      dist: '3.5 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 423 2444150'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants near Rose Garden',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹450 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Elk Hill Road, Ooty'
    }
  ]
},

{
  id: 'tn_ooty_pykara',
  name: 'Pykara Lake & Waterfalls',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Lakes & Waterfalls',
  rating: 4.7,
  ratingCount: 9600,
  entryFee: 'Boat ride charges apply',
  openTime: '08:30 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'October to June',
  shortDesc: 'Scenic Nilgiri destination featuring a beautiful lake, boat rides, waterfalls, and forest landscapes.',
  longDesc: 'Pykara is a popular tourist destination located near Ooty. The Pykara River flows through the Nilgiri hills and forms a scenic lake and waterfalls. Visitors can enjoy boating, viewpoints, and peaceful forest scenery.',
  attractions: [
    'Pykara Lake',
    'Pykara Waterfalls',
    'Boat House',
    'Pykara River',
    'Forest Scenery',
    'Viewpoints'
  ],
  history: 'Pykara is associated with the natural landscape and hydroelectric development of the Nilgiri region.',
  lat: 11.4478,
  lng: 76.6250,
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses and tourist vehicles from Ooty',
      station: 'Ooty Central Bus Stand',
      distance: '23 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '23 km',
      frequency: 'Road transport required from Ooty'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Sightseeing Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '25 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '23 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Ooty',
        distance: '23 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Sterling Ooty Fern Hill',
      price: '₹4,200/night',
      rating: 4.4,
      dist: '24 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 423 2444150'
    }
  ],
  restaurants: [
    {
      name: 'Pykara Tourist Restaurants',
      foodType: 'South Indian & Snacks',
      price: '₹400 for two',
      rating: 4.0,
      dist: '1 km',
      address: 'Pykara Tourist Area'
    }
  ]
},

{
  id: 'tn_ooty_avalanche',
  name: 'Avalanche Lake & Eco Tourism',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Lakes & Eco Tourism',
  rating: 4.7,
  ratingCount: 5200,
  entryFee: 'Eco-tourism package charges apply',
  openTime: '08:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to June',
  shortDesc: 'Peaceful high-altitude lake surrounded by forests, mountains, and pristine Nilgiri landscapes.',
  longDesc: 'Avalanche Lake is a scenic natural attraction near Ooty surrounded by dense forests and mountain landscapes. The area is known for its peaceful atmosphere, trekking opportunities, camping and eco-tourism activities.',
  attractions: [
    'Avalanche Lake',
    'Mountain Views',
    'Forest Trails',
    'Trekking',
    'Eco Tourism',
    'Nature Photography'
  ],
  history: 'The Avalanche region is known for its natural forests, mountain ecosystem and important water resources of the Nilgiris.',
  lat: 11.3070,
  lng: 76.5860,
  image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Eco-tourism vehicles and local transport from Ooty',
      station: 'Ooty Bus Stand',
      distance: '28 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '28 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Eco-tourism Vehicles & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '30 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '28 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Ooty',
        distance: '28 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Ooty',
      price: '₹3,000–₹10,000/night',
      rating: 4.3,
      dist: '28–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Restaurants in Ooty',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.2,
      dist: '28 km',
      address: 'Ooty Town'
    }
  ]
},

{
  id: 'tn_ooty_emarald_lake',
  name: 'Emerald Lake, Ooty',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Lakes & Nature',
  rating: 4.6,
  ratingCount: 4100,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to June',
  shortDesc: 'Serene mountain lake surrounded by tea plantations, rolling hills, and peaceful countryside.',
  longDesc: 'Emerald Lake is located in the Silent Valley area of the Nilgiris near Ooty. The lake is surrounded by green hills, tea estates and natural landscapes, making it a peaceful destination for nature lovers and photographers.',
  attractions: [
    'Emerald Lake',
    'Tea Estates',
    'Mountain Views',
    'Bird Watching',
    'Nature Photography',
    'Sunrise & Sunset'
  ],
  history: 'The Emerald region forms part of the important high-altitude water and forest ecosystem of the Nilgiris.',
  lat: 11.3265,
  lng: 76.6100,
  image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses and tourist vehicles from Ooty',
      station: 'Ooty Bus Stand',
      distance: '25 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '25 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Sightseeing Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '27 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '25 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Ooty',
        distance: '25 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Ooty',
      price: '₹3,000–₹10,000/night',
      rating: 4.3,
      dist: '25–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants in Ooty',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.2,
      dist: '25 km',
      address: 'Ooty Town'
    }
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
      district: 'Chengalpattu',
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
      image: 'https://cdn.britannica.com/86/170886-050-58E0C0B9/Shrines-Shiva-Shore-Temple-Vishnu-Mamallapuram-Tamil.jpg',
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
  id: 'tn_muttukadu_boat_house',
  name: 'Muttukadu Boat House',
  district: 'Chengalpattu',
  category: 'waterfalls',
  categoryName: 'Water Activities & Recreation',
  rating: 4.4,
  ratingCount: 6800,
  entryFee: 'Boat ride charges apply',
  openTime: '09:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Popular backwater destination on ECR offering boating, water activities and scenic coastal views.',
  longDesc: 'Muttukadu Boat House is a popular recreational destination along the East Coast Road. The backwaters provide opportunities for boating and water-based activities while the surrounding coastal landscape makes it a popular weekend destination from Chennai.',
  attractions: [
    'Boat Rides',
    'Backwaters',
    'Speed Boats',
    'Water Activities',
    'ECR Scenic Drive'
  ],
  history: 'Developed as an important boating and recreation destination along the East Coast Road.',
  lat: 12.8282,
  lng: 80.2500,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'ECR buses from Chennai and nearby towns',
      station: 'Muttukadu Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '35 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'ECR Taxis, Rental Cars & Bikes'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Nearby Government / Private Hospital',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'ECR Area'
      }
    ],
    police: [
      {
        name: 'Kelambakkam Police Station',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Kelambakkam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '3–5 km',
        location: 'ECR Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'ECR Beach Resorts',
      price: '₹4,000–₹12,000/night',
      rating: 4.3,
      dist: '2–8 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'ECR Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹800 for two',
      rating: 4.2,
      dist: '1–5 km',
      address: 'East Coast Road'
    }
  ]
},

{
  id: 'tn_kovalam_chengalpattu',
  name: 'Kovalam Beach',
  district: 'Chengalpattu',
  category: 'beaches',
  categoryName: 'Beaches & Oceans',
  rating: 4.5,
  ratingCount: 5200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Scenic coastal destination known for its beach, fishing village atmosphere and water activities.',
  longDesc: 'Kovalam is a popular coastal destination along the East Coast Road in Chengalpattu district. The area combines a scenic beach, traditional fishing village atmosphere and recreational water activities.',
  attractions: [
    'Kovalam Beach',
    'Fishing Village',
    'Coastal Views',
    'Surfing',
    'Beach Walks'
  ],
  history: 'A traditional coastal fishing settlement that has developed into a popular ECR tourist destination.',
  lat: 12.7956,
  lng: 80.2500,
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Regular ECR buses from Chennai',
      station: 'Kovalam Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '35 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'ECR Taxis, Rental Cars & Bikes'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Nearby Government / Private Hospital',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Kovalam / Kelambakkam Area'
      }
    ],
    police: [
      {
        name: 'Kovalam Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kovalam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–3 km',
        location: 'Kovalam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Kovalam Beach Resorts',
      price: '₹3,000–₹10,000/night',
      rating: 4.3,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kovalam Seafood Restaurants',
      foodType: 'Fresh Seafood & South Indian',
      price: '₹700 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Kovalam Beach Road'
    }
  ]
},

{
  id: 'tn_vandalur_zoo',
  name: 'Arignar Anna Zoological Park (Vandalur Zoo)',
  district: 'Chengalpattu',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',
  rating: 4.5,
  ratingCount: 18000,
  entryFee: 'Entry charges vary by visitor category',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Tuesday',
  bestTime: 'November to February',
  shortDesc: 'Major zoological park near Chennai featuring a wide variety of mammals, birds, reptiles and safari experiences.',
  longDesc: 'Arignar Anna Zoological Park at Vandalur is one of the major wildlife attractions near Chennai. The large park provides visitors with opportunities to see lions, tigers, elephants, deer, birds, reptiles and many other species.',
  attractions: [
    'Lion Safari',
    'Tiger Enclosure',
    'Elephants',
    'Birds',
    'Reptiles',
    'Butterfly Garden'
  ],
  history: 'The zoo was originally established in Madras in 1855 and was later relocated to its present Vandalur location.',
  lat: 12.8797,
  lng: 80.0810,
  image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from Chennai and Tambaram',
      station: 'Vandalur Zoo Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Vandalur Railway Station',
      distance: '2 km',
      frequency: 'Suburban trains and buses available'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tambaram',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Tambaram'
      }
    ],
    police: [
      {
        name: 'Vandalur Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Vandalur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2 km',
        location: 'Vandalur Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Tambaram & Vandalur',
      price: '₹1,500–₹5,000/night',
      rating: 4.1,
      dist: '2–8 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Vandalur Restaurants',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.1,
      dist: '1–3 km',
      address: 'Vandalur'
    }
  ]
},

{
  id: 'tn_thirukalukundram',
  name: 'Vedagiriswarar Temple, Thirukalukundram',
  district: 'Chengalpattu',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.7,
  ratingCount: 3200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Ancient hill temple dedicated to Lord Shiva, located on Vedagiri Hill with scenic views of the surrounding region.',
  longDesc: 'Vedagiriswarar Temple at Thirukalukundram is an important Shiva temple located on Vedagiri Hill. Visitors can experience the historic temple architecture and enjoy panoramic views from the hilltop.',
  attractions: [
    'Vedagiriswarar Temple',
    'Vedagiri Hill',
    'Hilltop Viewpoint',
    'Temple Tank',
    'Traditional Architecture'
  ],
  history: 'An ancient Shaivite temple associated with the religious traditions and legends of Thirukalukundram.',
  lat: 12.6083,
  lng: 80.0667,
  image: 'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Regular buses from Chengalpattu and Mahabalipuram',
      station: 'Thirukalukundram Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '15 km',
      frequency: 'Regular buses and taxis available'
    },
    taxi: {
      options: 'Local Taxis, Rental Cars & Auto Rickshaws'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thirukalukundram',
        distance: '1.2 km',
        phone: 'Verify current number',
        address: 'Thirukalukundram'
      }
    ],
    police: [
      {
        name: 'Thirukalukundram Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thirukalukundram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1 km',
        location: 'Thirukalukundram Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels & Lodges in Thirukalukundram',
      price: '₹1,000–₹3,000/night',
      rating: 4.0,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thirukalukundram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.0,
      dist: '1 km',
      address: 'Thirukalukundram'
    }
  ]
},

{
  id: 'tn_madurantakam_lake',
  name: 'Madurantakam Lake',
  district: 'Chengalpattu',
  category: 'lakes',
  categoryName: 'Lakes & Nature',
  rating: 4.3,
  ratingCount: 2100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Historic irrigation lake offering peaceful views, greenery and seasonal bird-watching opportunities.',
  longDesc: 'Madurantakam Lake is one of the notable water bodies in Chengalpattu district. The reservoir is important for irrigation and provides a peaceful natural setting, particularly after the monsoon season.',
  attractions: [
    'Lake View',
    'Bird Watching',
    'Sunrise Views',
    'Nature Photography',
    'Green Landscapes'
  ],
  history: 'A historic irrigation reservoir that has played an important role in the agricultural development of the region.',
  lat: 12.5106,
  lng: 79.8844,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Chengalpattu and Chennai',
      station: 'Madurantakam Bus Stand',
      distance: '2 km'
    },
    train: {
      station: 'Madurantakam Railway Station',
      distance: '3 km',
      frequency: 'Regular passenger trains and buses'
    },
    taxi: {
      options: 'Local Taxis & Auto Rickshaws'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Madurantakam',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Madurantakam'
      }
    ],
    police: [
      {
        name: 'Madurantakam Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Madurantakam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2–3 km',
        location: 'Madurantakam Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Madurantakam',
      price: '₹1,000–₹3,000/night',
      rating: 4.0,
      dist: '2–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Madurantakam Local Restaurants',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.0,
      dist: '2–4 km',
      address: 'Madurantakam Town'
    }
  ]
},

{
  id: 'tn_kelambakkam',
  name: 'Kelambakkam & ECR Coastal Area',
  district: 'Chengalpattu',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',
  rating: 4.3,
  ratingCount: 2900,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Growing coastal destination near Chennai featuring ECR scenery, beaches, resorts and nearby recreational attractions.',
  longDesc: 'Kelambakkam is an important gateway to the ECR coastal belt in Chengalpattu district. The surrounding area is known for scenic roads, coastal landscapes, resorts and access to several nearby tourist attractions.',
  attractions: [
    'ECR Scenic Drive',
    'Coastal Views',
    'Nearby Beaches',
    'Beach Resorts',
    'Water Activities'
  ],
  history: 'Kelambakkam developed as an important junction connecting Chennai with the ECR coastal tourism belt.',
  lat: 12.7955,
  lng: 80.2280,
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC and private buses from Chennai',
      station: 'Kelambakkam Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '30 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'Uber, Ola, ECR Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Chettinad Hospital',
        distance: '5–8 km',
        phone: 'Verify current number',
        address: 'Kelambakkam Area'
      }
    ],
    police: [
      {
        name: 'Kelambakkam Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kelambakkam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Kelambakkam'
      }
    ]
  },
  hotels: [
    {
      name: 'ECR Beach Resorts',
      price: '₹3,000–₹10,000/night',
      rating: 4.2,
      dist: '2–8 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kelambakkam Restaurants',
      foodType: 'South Indian & Seafood',
      price: '₹600 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Kelambakkam'
    }
  ]
},
    {
  id: 'tn_kapaleeswarar',
  name: 'Kapaleeshwarar Temple, Mylapore',
  district: 'Chennai',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.8,
  ratingCount: 16800,
  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic Dravidian-style Shiva temple in Mylapore, famous for its colorful gopuram and traditional architecture.',
  longDesc: 'Kapaleeshwarar Temple is one of Chennai’s most famous temples, located in the historic Mylapore neighborhood. Dedicated to Lord Shiva and Goddess Parvati, the temple is known for its impressive Rajagopuram, detailed sculptures, traditional rituals and vibrant festivals.',
  attractions: [
    'Rajagopuram',
    'Kapaleeshwarar Shrine',
    'Karpagambal Shrine',
    'Temple Tank',
    'Traditional Sculptures',
    'Panguni Festival'
  ],
  history: 'An ancient Shaivite temple associated with the historic Mylapore region and Tamil devotional traditions.',
  lat: 13.0338,
  lng: 80.2697,
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Kapaleeswarar1.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
  transport: {
    bus: {
      available: 'MTC buses from major parts of Chennai',
      station: 'Mylapore Bus Terminus',
      distance: '0.5 km'
    },
    train: {
      station: 'Mylapore MRTS / Light House area',
      distance: '1.5 km',
      frequency: 'Regular suburban/MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Government Royapettah Hospital', distance: '3.5 km', phone: 'Verify current number', address: 'Royapettah, Chennai' }
    ],
    police: [
      { name: 'Mylapore Police Station', distance: '1.0 km', phone: 'Verify current number', address: 'Mylapore, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5 km', location: 'Mylapore' }
    ]
  },
  hotels: [
    { name: 'Raintree, St. Mary’s Road', price: '₹6,000–₹10,000/night', rating: 4.4, dist: '2.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'Mylapore Restaurants', foodType: 'South Indian Vegetarian', price: '₹500 for two', rating: 4.3, dist: '0.5 km', address: 'Mylapore' }
  ]
},

{
  id: 'tn_fort_st_george',
  name: 'Fort St. George',
  district: 'Chennai',
  category: 'historical',
  categoryName: 'Historical Sites & Museums',
  rating: 4.5,
  ratingCount: 9200,
  entryFee: 'Entry charges may apply',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Sunday',
  bestTime: 'November to February',
  shortDesc: 'Historic colonial fort complex and one of the most important landmarks in Chennai.',
  longDesc: 'Fort St. George is a historic British-era fort complex located near the Marina coastline. The complex includes St. Mary’s Church, the Fort Museum and important colonial-era buildings. It played a major role in the development of Madras during the colonial period.',
  attractions: [
    'Fort Museum',
    'St. Mary’s Church',
    'Secretariat Buildings',
    'Colonial Architecture',
    'Historic Artifacts'
  ],
  history: 'Established by the English East India Company in 1640 and became an important center of British administration in South India.',
  lat: 13.0795,
  lng: 80.2870,
  image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from across Chennai',
      station: 'Fort St. George Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chennai Beach Railway Station',
      distance: '1.5 km',
      frequency: 'Frequent suburban train services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Rajiv Gandhi Government General Hospital', distance: '2.5 km', phone: '044-25305000', address: 'Park Town, Chennai' }
    ],
    police: [
      { name: 'Fort Police Station', distance: '1.0 km', phone: 'Verify current number', address: 'Fort St. George' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1–2 km', location: 'Parrys / George Town' }
    ]
  },
  hotels: [
    { name: 'Taj Connemara', price: '₹8,000–₹15,000/night', rating: 4.5, dist: '4 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'George Town Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹400 for two', rating: 4.1, dist: '1–2 km', address: 'George Town, Chennai' }
  ]
},

{
  id: 'tn_san_thome_basilica',
  name: 'San Thome Basilica',
  district: 'Chennai',
  category: 'historical',
  categoryName: 'Churches & Heritage Sites',
  rating: 4.7,
  ratingCount: 8600,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Historic neo-Gothic basilica and important Christian pilgrimage site overlooking the Chennai coast.',
  longDesc: 'San Thome Basilica is a historic church located in Mylapore, Chennai. It is traditionally associated with the tomb of Saint Thomas the Apostle and is known for its distinctive white neo-Gothic architecture.',
  attractions: [
    'Main Basilica',
    'Tomb Chapel',
    'Museum',
    'Neo-Gothic Architecture',
    'Prayer Hall'
  ],
  history: 'The basilica is traditionally associated with Saint Thomas the Apostle and has been rebuilt in different architectural forms over the centuries.',
  lat: 13.0339,
  lng: 80.2770,
  image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from major Chennai areas',
      station: 'San Thome Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Mylapore MRTS Station',
      distance: '2 km',
      frequency: 'Regular MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'St. Isabel’s Hospital', distance: '2 km', phone: 'Verify current number', address: 'Mylapore, Chennai' }
    ],
    police: [
      { name: 'Mylapore Police Station', distance: '1.5 km', phone: 'Verify current number', address: 'Mylapore, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5 km', location: 'San Thome' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '3 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'San Thome Restaurants', foodType: 'South Indian & Continental', price: '₹700 for two', rating: 4.2, dist: '0.5–1 km', address: 'San Thome, Chennai' }
  ]
},

{
  id: 'tn_valluvar_kottam',
  name: 'Valluvar Kottam',
  district: 'Chennai',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Sites',
  rating: 4.5,
  ratingCount: 7300,
  entryFee: 'Entry charges may apply',
  openTime: '08:30 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Monument dedicated to Tamil poet Thiruvalluvar, featuring a large stone chariot and Kural inscriptions.',
  longDesc: 'Valluvar Kottam is an important cultural landmark in Chennai dedicated to the Tamil poet and philosopher Thiruvalluvar. The monument is known for its impressive stone chariot, large auditorium and inscriptions of verses from the Thirukkural.',
  attractions: [
    'Stone Chariot',
    'Thirukkural Inscriptions',
    'Auditorium',
    'Thiruvalluvar Monument',
    'Tamil Cultural Exhibits'
  ],
  history: 'Constructed in the 1970s as a memorial to Thiruvalluvar and his contribution to Tamil literature.',
  lat: 13.0524,
  lng: 80.2425,
  image: 'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from all major Chennai areas',
      station: 'Valluvar Kottam Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Nungambakkam Railway Station',
      distance: '2 km',
      frequency: 'Regular suburban train services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Government Hospital, Chennai', distance: '3 km', phone: 'Verify current number', address: 'Chennai' }
    ],
    police: [
      { name: 'Nungambakkam Police Station', distance: '2 km', phone: 'Verify current number', address: 'Nungambakkam, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5–1 km', location: 'Nungambakkam' }
    ]
  },
  hotels: [
    { name: 'The Residency Towers', price: '₹5,000–₹9,000/night', rating: 4.4, dist: '2 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'T. Nagar Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹600 for two', rating: 4.3, dist: '2 km', address: 'T. Nagar, Chennai' }
  ]
},

{
  id: 'tn_guindy_national_park',
  name: 'Guindy National Park',
  district: 'Chennai',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',
  rating: 4.4,
  ratingCount: 6800,
  entryFee: 'Entry charges apply',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Tuesday',
  bestTime: 'November to February',
  shortDesc: 'Urban national park protecting blackbuck, spotted deer, birds, reptiles and native dry evergreen vegetation.',
  longDesc: 'Guindy National Park is a protected green space located within Chennai city. It is home to blackbuck, spotted deer, jackals, reptiles and many species of birds. The park provides a unique opportunity to experience wildlife within an urban environment.',
  attractions: [
    'Blackbuck',
    'Spotted Deer',
    'Bird Watching',
    'Nature Trails',
    'Dry Evergreen Forest'
  ],
  history: 'The protected area evolved from the Guindy forest reserve and became a national park in 1978.',
  lat: 13.0068,
  lng: 80.2206,
  image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from major parts of Chennai',
      station: 'Guindy National Park Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Guindy Railway Station',
      distance: '2 km',
      frequency: 'Frequent suburban trains'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Government Hospital Guindy', distance: '3 km', phone: 'Verify current number', address: 'Guindy, Chennai' }
    ],
    police: [
      { name: 'Guindy Police Station', distance: '2 km', phone: 'Verify current number', address: 'Guindy, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1–2 km', location: 'Guindy' }
    ]
  },
  hotels: [
    { name: 'ITC Grand Chola', price: '₹10,000–₹18,000/night', rating: 4.7, dist: '3 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'Guindy Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹700 for two', rating: 4.3, dist: '2–3 km', address: 'Guindy, Chennai' }
  ]
},

{
  id: 'tn_birla_planetarium',
  name: 'Birla Planetarium Chennai',
  district: 'Chennai',
  category: 'science',
  categoryName: 'Science & Education',
  rating: 4.5,
  ratingCount: 5900,
  entryFee: 'Ticket charges apply',
  openTime: '10:00 AM',
  closeTime: '05:45 PM',
  holiday: 'Check locally',
  bestTime: 'Throughout the year',
  shortDesc: 'Popular science centre and planetarium offering astronomy shows, exhibitions and educational experiences.',
  longDesc: 'B. M. Birla Planetarium in Chennai is part of the Periyar Science and Technology Centre. It features an advanced planetarium, astronomy shows, science exhibits and educational displays designed for students, families and science enthusiasts.',
  attractions: [
    'Planetarium Shows',
    'Science Exhibitions',
    'Astronomy Displays',
    'Technology Exhibits',
    'Educational Programs'
  ],
  history: 'Established in 1988 as part of the science and technology education initiatives in Chennai.',
  lat: 13.0067,
  lng: 80.2497,
  image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from across Chennai',
      station: 'Kotturpuram Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Kotturpuram MRTS Station',
      distance: '1.5 km',
      frequency: 'Regular MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Adyar Government Hospital', distance: '3 km', phone: 'Verify current number', address: 'Adyar, Chennai' }
    ],
    police: [
      { name: 'Kotturpuram Police Station', distance: '2 km', phone: 'Verify current number', address: 'Kotturpuram, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1 km', location: 'Kotturpuram' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '5 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'Adyar Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹600 for two', rating: 4.3, dist: '2–3 km', address: 'Adyar, Chennai' }
  ]
},

{
  id: 'tn_besant_nagar_beach',
  name: 'Besant Nagar Beach (Elliot’s Beach)',
  district: 'Chennai',
  category: 'beaches',
  categoryName: 'Beaches & Oceans',
  rating: 4.5,
  ratingCount: 11200,
  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Popular Chennai beach known for its relaxed atmosphere, seaside promenade and evening food spots.',
  longDesc: 'Besant Nagar Beach, popularly known as Elliot’s Beach, is a well-known coastal destination in south Chennai. It is less crowded than Marina Beach and is popular for evening walks, sea views, local food and nearby attractions.',
  attractions: [
    'Beach Walk',
    'Karl Schmidt Memorial',
    'Ashtalakshmi Temple',
    'Sunrise Views',
    'Seaside Food Stalls'
  ],
  history: 'Named after Annie Besant and developed as an important recreational coastal area of Chennai.',
  lat: 13.0005,
  lng: 80.2667,
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from central and south Chennai',
      station: 'Besant Nagar Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chennai MRTS Stations',
      distance: '3–5 km',
      frequency: 'Regular suburban/MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Adyar Government Hospital', distance: '3 km', phone: 'Verify current number', address: 'Adyar, Chennai' }
    ],
    police: [
      { name: 'Besant Nagar Police Station', distance: '1.5 km', phone: 'Verify current number', address: 'Besant Nagar, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5–1 km', location: 'Besant Nagar' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '3 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'Besant Nagar Restaurants', foodType: 'South Indian, Seafood & Cafe Food', price: '₹700 for two', rating: 4.3, dist: '0.5 km', address: 'Besant Nagar' }
  ]
},

{
  id: 'tn_madras_museum',
  name: 'Government Museum, Chennai',
  district: 'Chennai',
  category: 'historical',
  categoryName: 'Museums & Heritage',
  rating: 4.6,
  ratingCount: 10400,
  entryFee: 'Entry charges apply',
  openTime: '09:30 AM',
  closeTime: '05:30 PM',
  holiday: 'Friday',
  bestTime: 'November to February',
  shortDesc: 'Major museum complex housing archaeology, bronze sculptures, art, natural history and cultural collections.',
  longDesc: 'The Government Museum in Egmore is one of India’s oldest museums. Its extensive collections include Chola bronzes, archaeological artifacts, Amaravati sculptures, coins, manuscripts, natural history specimens and galleries covering Tamil cultural heritage.',
  attractions: [
    'Bronze Gallery',
    'Archaeology Gallery',
    'Amaravati Sculptures',
    'Natural History Gallery',
    'Contemporary Art Gallery',
    'Museum Buildings'
  ],
  history: 'Established in 1851 and expanded over time into one of the most important museum complexes in India.',
  lat: 13.0694,
  lng: 80.2548,
  image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from all major Chennai areas',
      station: 'Egmore Museum Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Chennai Egmore Railway Station',
      distance: '1.5 km',
      frequency: 'Frequent suburban and long-distance trains'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Rajiv Gandhi Government General Hospital', distance: '3 km', phone: '044-25305000', address: 'Park Town, Chennai' }
    ],
    police: [
      { name: 'Egmore Police Station', distance: '1 km', phone: 'Verify current number', address: 'Egmore, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5 km', location: 'Egmore' }
    ]
  },
  hotels: [
    { name: 'Taj Connemara', price: '₹8,000–₹15,000/night', rating: 4.5, dist: '2.5 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'Egmore Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹500 for two', rating: 4.2, dist: '0.5–1 km', address: 'Egmore, Chennai' }
  ]
},

{
  id: 'tn_mgr_memorial',
  name: 'MGR Memorial & Anna Memorial',
  district: 'Chennai',
  category: 'memorial',
  categoryName: 'Memorials & Landmarks',
  rating: 4.6,
  ratingCount: 8700,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Iconic memorial complex on Marina Beach dedicated to former Tamil Nadu leaders M. G. Ramachandran and C. N. Annadurai.',
  longDesc: 'The MGR Memorial and Anna Memorial are located along the Marina Beach promenade. The landscaped memorial grounds are popular with visitors interested in Tamil Nadu history, public life and Chennai landmarks.',
  attractions: [
    'MGR Memorial',
    'Anna Memorial',
    'Memorial Gardens',
    'Marina Promenade',
    'Night Illumination'
  ],
  history: 'The memorials were established to honor two major political leaders and former Chief Ministers of Tamil Nadu.',
  lat: 13.0648,
  lng: 80.2807,
  image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'MTC buses from all major Chennai areas',
      station: 'Marina Memorial Bus Stop',
      distance: '0.2 km'
    },
    train: {
      station: 'Chepauk MRTS Station',
      distance: '1.5 km',
      frequency: 'Regular MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Rajiv Gandhi Government General Hospital', distance: '3 km', phone: '044-25305000', address: 'Park Town, Chennai' }
    ],
    police: [
      { name: 'Marina Police Station', distance: '0.5 km', phone: 'Verify current number', address: 'Kamarajar Salai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1 km', location: 'Triplicane' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '4 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'Marina Area Restaurants', foodType: 'South Indian & Seafood', price: '₹500 for two', rating: 4.2, dist: '0.5–1 km', address: 'Marina Beach' }
  ]
},
    {
      id: 'tn_kodaikanal',
      name: 'Kodaikanal Hill Station',
      district: 'Dindigul',
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
  id: 'tn_dindigul_fort',
  name: 'Dindigul Fort',
  district: 'Dindigul',
  category: 'historical',
  categoryName: 'Historical Sites & Monuments',
  rating: 4.6,
  ratingCount: 7200,
  entryFee: '₹25 (Approx.)',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'Historic hilltop fort offering panoramic views of Dindigul city and surrounding plains.',
  longDesc: 'Dindigul Fort is a historic hilltop fort built on a massive rock overlooking Dindigul town. The fort has strong stone walls, bastions and old structures reflecting the military architecture of the Nayak and later rulers.',
  attractions: [
    'Historic Fort Walls',
    'Hilltop Viewpoint',
    'Old Bastions',
    'Ancient Structures',
    'Panoramic City View'
  ],
  history: 'The fort was originally associated with the Madurai Nayak rulers and was later controlled by several South Indian and Mysore rulers.',
  lat: 10.3624,
  lng: 77.9695,
  image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'TNSTC buses from Madurai, Trichy, Coimbatore and nearby towns',
      station: 'Dindigul Bus Stand',
      distance: '2.5 km'
    },
    train: {
      station: 'Dindigul Junction (DG)',
      distance: '3 km',
      frequency: 'Frequent trains from Chennai, Madurai and Coimbatore'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Dindigul',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Dindigul Town'
      }
    ],
    police: [
      {
        name: 'Dindigul Town Police Station',
        distance: '2.5 km',
        phone: 'Verify current number',
        address: 'Dindigul'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2 km',
        location: 'Dindigul Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Dindigul',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '2–4 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Dindigul Local Restaurants',
      foodType: 'South Indian & Famous Dindigul Biryani',
      price: '₹500 for two',
      rating: 4.4,
      dist: '2–3 km',
      address: 'Dindigul Town'
    }
  ]
},

{
  id: 'tn_sirumalai',
  name: 'Sirumalai Hills',
  district: 'Dindigul',
  category: 'hillstations',
  categoryName: 'Hill Stations & Nature',
  rating: 4.5,
  ratingCount: 4300,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Peaceful hill destination surrounded by forests, plantations and scenic viewpoints near Dindigul.',
  longDesc: 'Sirumalai is a scenic hill region located near Dindigul. The hills are known for dense vegetation, pleasant weather, winding mountain roads and peaceful viewpoints. It is a good destination for nature lovers and short hill trips.',
  attractions: [
    'Sirumalai Hills',
    'Mountain Viewpoints',
    'Forest Roads',
    'Sirumalai Lake',
    'Nature Photography',
    'Trekking Areas'
  ],
  history: 'Sirumalai has traditionally been known for its forest landscape, agricultural plantations and distinctive hill ecosystem.',
  lat: 10.2350,
  lng: 77.9400,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Dindigul and nearby villages',
      station: 'Dindigul Bus Stand',
      distance: '25 km'
    },
    train: {
      station: 'Dindigul Junction (DG)',
      distance: '25 km',
      frequency: 'Road transport required from Dindigul'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Jeeps'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Dindigul',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul Town'
      }
    ],
    police: [
      {
        name: 'Dindigul Police Station',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Dindigul',
        distance: '25 km',
        location: 'Dindigul Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Sirumalai Hill Resorts',
      price: '₹2,000–₹5,000/night',
      rating: 4.1,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Sirumalai Local Restaurants',
      foodType: 'South Indian',
      price: '₹400 for two',
      rating: 4.0,
      dist: '1–5 km',
      address: 'Sirumalai'
    }
  ]
},

{
  id: 'tn_athiur_sirumalai_lake',
  name: 'Sirumalai Lake',
  district: 'Dindigul',
  category: 'nature',
  categoryName: 'Lakes & Nature',
  rating: 4.3,
  ratingCount: 1800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'Quiet hill lake surrounded by green landscapes and misty Sirumalai surroundings.',
  longDesc: 'Sirumalai Lake is a peaceful natural attraction in the Sirumalai hill region. The surrounding greenery and cool climate make the area suitable for nature walks, photography and relaxing away from busy city areas.',
  attractions: [
    'Lake View',
    'Hill Scenery',
    'Nature Walks',
    'Photography',
    'Bird Watching'
  ],
  history: 'The lake forms part of the water resources and natural landscape of the Sirumalai hill region.',
  lat: 10.2355,
  lng: 77.9420,
  image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses and tourist vehicles from Dindigul',
      station: 'Dindigul Bus Stand',
      distance: '25 km'
    },
    train: {
      station: 'Dindigul Junction (DG)',
      distance: '25 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Taxis, Jeeps & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Dindigul',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul Town'
      }
    ],
    police: [
      {
        name: 'Dindigul Police Station',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '25 km',
        location: 'Dindigul Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels & Resorts in Sirumalai',
      price: '₹2,000–₹5,000/night',
      rating: 4.1,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Sirumalai Local Restaurants',
      foodType: 'South Indian',
      price: '₹400 for two',
      rating: 4.0,
      dist: '1–5 km',
      address: 'Sirumalai'
    }
  ]
},

{
  id: 'tn_amaravathi_dam',
  name: 'Amaravathi Dam',
  district: 'Dindigul',
  category: 'nature',
  categoryName: 'Dams & Nature',
  rating: 4.4,
  ratingCount: 3500,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'Scenic reservoir destination surrounded by hills and natural landscapes near the Dindigul region.',
  longDesc: 'Amaravathi Dam is a major reservoir in the Amaravathi region, surrounded by the scenic landscapes of the Western Ghats. The area is popular for its reservoir views, greenery and peaceful surroundings.',
  attractions: [
    'Amaravathi Reservoir',
    'Dam View',
    'Western Ghats Scenery',
    'Nature Photography',
    'Sunrise Views'
  ],
  history: 'The dam was constructed as an important water resource and irrigation project in the region.',
  lat: 10.4070,
  lng: 77.2450,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Dindigul, Palani and nearby towns',
      station: 'Nearby Local Bus Stop',
      distance: '2 km'
    },
    train: {
      station: 'Palani Railway Station',
      distance: '25 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Local Taxis, Rental Cars & Tourist Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Palani',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Palani'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Amaravathi Region'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–10 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Palani',
      price: '₹1,500–₹4,000/night',
      rating: 4.0,
      dist: '20–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '5–10 km',
      address: 'Nearby Town'
    }
  ]
},

{
  id: 'tn_palani_hills',
  name: 'Palani Hills & Foothills',
  district: 'Dindigul',
  category: 'nature',
  categoryName: 'Hills & Nature',
  rating: 4.6,
  ratingCount: 5100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Scenic Western Ghats landscape around Palani offering mountain views, greenery and peaceful countryside.',
  longDesc: 'The Palani Hills form an important mountain range of the Western Ghats and extend across the Dindigul region. The foothills around Palani provide scenic views, agricultural landscapes and access to several natural attractions.',
  attractions: [
    'Palani Hill Views',
    'Western Ghats Scenery',
    'Mountain Roads',
    'Agricultural Landscapes',
    'Nature Photography'
  ],
  history: 'The Palani Hills form part of the Western Ghats and have played an important role in the natural and cultural landscape of the region.',
  lat: 10.4500,
  lng: 77.5200,
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'TNSTC buses from Dindigul, Madurai and nearby towns',
      station: 'Palani Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Palani Railway Station',
      distance: '1.5 km',
      frequency: 'Regular passenger and express services'
    },
    taxi: {
      options: 'Local Taxis, Autos & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Palani',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Palani'
      }
    ],
    police: [
      {
        name: 'Palani Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Palani'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Palani Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Palani Hotels & Lodges',
      price: '₹1,000–₹4,000/night',
      rating: 4.1,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Palani Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Palani Town'
    }
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
      district: 'Ramanathapuram',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtctekn3ScKMN24PxZcfd3eclBENRig4_SxhIpSVj4IvEI0nZU80TWrMvJ&s=10',
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
  id: 'tn_apj_abdul_kalam_memorial',
  name: 'APJ Abdul Kalam Memorial',
  district: 'Ramanathapuram',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Places',
  rating: 4.8,
  ratingCount: 12500,
  entryFee: 'Free',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Monday',
  bestTime: 'October to March',
  shortDesc: 'Memorial dedicated to Dr. APJ Abdul Kalam in his hometown of Rameswaram, showcasing his life, achievements and legacy.',
  longDesc: 'The Dr. APJ Abdul Kalam Memorial at Peikarumbu near Rameswaram commemorates the life of India’s former President and renowned scientist Dr. APJ Abdul Kalam. The memorial features exhibits, photographs, replicas and displays highlighting his childhood, scientific career and contribution to India.',
  attractions: [
    'APJ Abdul Kalam Memorial',
    'Life History Exhibits',
    'Photographs & Personal Items',
    'Rocket & Missile Models',
    'Memorial Garden'
  ],
  history: 'Built in memory of Dr. APJ Abdul Kalam, who was born in Rameswaram and served as the 11th President of India.',
  lat: 9.2937,
  lng: 79.3190,
  image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local and express buses from Rameswaram',
      station: 'Rameswaram Bus Stand',
      distance: '3 km'
    },
    train: {
      station: 'Rameswaram Railway Station',
      distance: '3 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Taxis and Tourist Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government General Hospital Rameswaram',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    police: [
      {
        name: 'Rameswaram Town Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2–3 km',
        location: 'Rameswaram'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Rameswaram',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '3–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Rameswaram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '3 km',
      address: 'Rameswaram'
    }
  ]
},

{
  id: 'tn_pamban_bridge',
  name: 'Pamban Bridge',
  district: 'Ramanathapuram',
  category: 'historical',
  categoryName: 'Engineering & Heritage Attractions',
  rating: 4.7,
  ratingCount: 9200,
  entryFee: 'Free (View from permitted areas)',
  openTime: '24 Hours',
  closeTime: '24 Hours',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic railway bridge connecting Rameswaram Island with mainland India, surrounded by spectacular sea views.',
  longDesc: 'Pamban Bridge is a famous engineering landmark connecting Rameswaram Island with mainland Tamil Nadu. The historic railway bridge crosses the Palk Strait and offers spectacular views of the surrounding sea and coastline.',
  attractions: [
    'Pamban Railway Bridge',
    'Sea Views',
    'Palk Strait',
    'Road Bridge View',
    'Photography'
  ],
  history: 'The original railway bridge was opened in 1914 and became an important transport link between mainland India and Rameswaram Island.',
  lat: 9.2750,
  lng: 79.2150,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses connecting Rameswaram and Ramanathapuram',
      station: 'Pamban Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Pamban Railway Station',
      distance: '2 km',
      frequency: 'Train services connect Rameswaram with mainland'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws and Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Rameswaram',
        distance: '12 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    police: [
      {
        name: 'Pamban Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Pamban'
      }
    ],
    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1–2 km',
        location: 'Pamban'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Rameswaram',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '10–15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Pamban Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Pamban'
    }
  ]
},

{
  id: 'tn_ervadi_dargah',
  name: 'Erwadi Dargah',
  district: 'Ramanathapuram',
  category: 'cultural',
  categoryName: 'Spiritual & Cultural Places',
  rating: 4.6,
  ratingCount: 6500,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',
  shortDesc: 'Important Islamic pilgrimage centre known for the shrine of Sultan Syed Ibrahim Shaheed and annual religious celebrations.',
  longDesc: 'Erwadi Dargah is a prominent pilgrimage destination in Ramanathapuram district. The shrine is associated with Sultan Syed Ibrahim Shaheed and attracts devotees from different parts of India throughout the year.',
  attractions: [
    'Erwadi Dargah',
    'Main Shrine',
    'Religious Architecture',
    'Annual Urs Festival',
    'Spiritual Heritage'
  ],
  history: 'The shrine is traditionally associated with Sultan Syed Ibrahim Shaheed and has developed into an important pilgrimage centre in southern Tamil Nadu.',
  lat: 9.1980,
  lng: 78.9900,
  image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Ramanathapuram and nearby towns',
      station: 'Erwadi Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Ramanathapuram Railway Station',
      distance: '25 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws and Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kilakarai',
        distance: '10 km',
        phone: 'Verify current number',
        address: 'Kilakarai'
      }
    ],
    police: [
      {
        name: 'Erwadi Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Erwadi'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Erwadi'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Erwadi / Ramanathapuram',
      price: '₹1,200–₹3,500/night',
      rating: 4.0,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Erwadi Local Restaurants',
      foodType: 'South Indian & Coastal Cuisine',
      price: '₹400 for two',
      rating: 4.1,
      dist: '0.5–2 km',
      address: 'Erwadi'
    }
  ]
},

{
  id: 'tn_ariyaman_beach',
  name: 'Ariyaman Beach',
  district: 'Ramanathapuram',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',
  rating: 4.5,
  ratingCount: 4800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Peaceful coastal beach near Rameswaram known for clear waters, sandy shores and relaxing seaside views.',
  longDesc: 'Ariyaman Beach is a scenic coastal destination on the Palk Bay side of Ramanathapuram district. The beach offers a quieter alternative to the busier tourist areas and is suitable for beach walks, photography and family outings.',
  attractions: [
    'Ariyaman Beach',
    'Palk Bay Views',
    'Beach Walks',
    'Sunrise Views',
    'Photography'
  ],
  history: 'Ariyaman is part of the coastal landscape of Ramanathapuram district and has developed as a recreational beach destination.',
  lat: 9.3500,
  lng: 78.9800,
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Rameswaram and Ramanathapuram',
      station: 'Nearest Local Bus Stop',
      distance: '1–2 km'
    },
    train: {
      station: 'Rameswaram Railway Station',
      distance: '15–20 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars and Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Rameswaram',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Nearby Coastal Area'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–10 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Rameswaram Beach Area Hotels',
      price: '₹1,500–₹5,000/night',
      rating: 4.1,
      dist: '10–20 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹600 for two',
      rating: 4.2,
      dist: '5–10 km',
      address: 'Ramanathapuram Coastal Area'
    }
  ]
},

{
  id: 'tn_kilakarai',
  name: 'Kilakarai Heritage Town',
  district: 'Ramanathapuram',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Places',
  rating: 4.4,
  ratingCount: 3600,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic coastal town known for its maritime heritage, traditional architecture and old mosques.',
  longDesc: 'Kilakarai is a historic coastal town on the Gulf of Mannar. It has a long maritime trading history and is known for traditional houses, historic mosques and its distinctive coastal cultural heritage.',
  attractions: [
    'Historic Mosques',
    'Coastal Heritage',
    'Traditional Houses',
    'Old Trading Streets',
    'Gulf of Mannar Views'
  ],
  history: 'Kilakarai developed as an important maritime trading centre and has centuries-old connections with overseas trade across the Indian Ocean.',
  lat: 9.2300,
  lng: 78.7850,
  image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Ramanathapuram and Rameswaram',
      station: 'Kilakarai Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Ramanathapuram Railway Station',
      distance: '15 km',
      frequency: 'Buses and taxis connect Kilakarai'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws and Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kilakarai',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kilakarai'
      }
    ],
    police: [
      {
        name: 'Kilakarai Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kilakarai'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Kilakarai'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Ramanathapuram',
      price: '₹1,200–₹3,500/night',
      rating: 4.0,
      dist: '15–20 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kilakarai Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Kilakarai'
    }
  ]
},

{
  id: 'tn_gulf_mannar_marine',
  name: 'Gulf of Mannar Marine Biosphere Reserve',
  district: 'Ramanathapuram',
  category: 'wildlife',
  categoryName: 'Marine Wildlife & Nature',
  rating: 4.6,
  ratingCount: 3900,
  entryFee: 'Activity / Boat charges may apply',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',
  shortDesc: 'Marine ecosystem known for coral reefs, seagrass, mangroves, islands and diverse coastal wildlife.',
  longDesc: 'The Gulf of Mannar Marine Biosphere Reserve is a biologically rich marine region along the southeastern coast of Tamil Nadu. The area contains coral reefs, seagrass beds, mangroves, islands and diverse marine life, making it an important destination for nature and marine-ecosystem awareness.',
  attractions: [
    'Coral Reefs',
    'Marine Ecosystem',
    'Coastal Islands',
    'Seagrass Beds',
    'Mangroves',
    'Marine Wildlife'
  ],
  history: 'The Gulf of Mannar was established as a protected marine biosphere region because of its exceptional marine biodiversity and ecological importance.',
  lat: 9.1500,
  lng: 78.6000,
  image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Ramanathapuram and coastal towns',
      station: 'Ramanathapuram Bus Stand',
      distance: '10–30 km depending on access point'
    },
    train: {
      station: 'Ramanathapuram Railway Station',
      distance: '10–30 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Local Taxis and Authorized Boat Operators'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ramanathapuram',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Ramanathapuram'
      }
    ],
    police: [
      {
        name: 'Coastal Police Station',
        distance: '10–20 km',
        phone: 'Verify current number',
        address: 'Ramanathapuram Coast'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '10–20 km',
        location: 'Nearby Coastal Towns'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Ramanathapuram',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '10–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '5–20 km',
      address: 'Ramanathapuram Coast'
    }
  ]
},
    {
  id: 'tn_padmanabhapuram_palace',
  name: 'Padmanabhapuram Palace',
  district: 'Kanyakumari',
  category: 'historical',
  categoryName: 'Historical Sites & Palaces',
  rating: 4.8,
  ratingCount: 9200,
  entryFee: 'Entry charges apply',
  openTime: '09:00 AM',
  closeTime: '04:30 PM',
  holiday: 'Monday',
  bestTime: 'October to March',
  shortDesc: 'Magnificent traditional wooden palace showcasing the rich architecture and heritage of the former Travancore kingdom.',
  longDesc: 'Padmanabhapuram Palace is a historic palace complex known for its traditional Kerala-style architecture, intricate woodwork, murals, carved ceilings and royal interiors. It was the former seat of the Travancore rulers and is one of the most important heritage attractions in Kanyakumari district.',
  attractions: [
    'Manimalika',
    'Thai Kottaram',
    'Durbar Hall',
    'Navarathri Mandapam',
    'Wooden Architecture',
    'Royal Murals'
  ],
  history: 'The palace served as the capital and royal residence of the Travancore kingdom before the capital was shifted to Thiruvananthapuram.',
  lat: 8.2447,
  lng: 77.3250,
  image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Regular buses from Nagercoil, Kanyakumari and Thiruvananthapuram',
      station: 'Padmanabhapuram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Eraniyal Railway Station',
      distance: '3 km',
      frequency: 'Local trains and buses available'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thuckalay',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Thuckalay'
      }
    ],
    police: [
      {
        name: 'Thuckalay Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Thuckalay'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–3 km',
        location: 'Thuckalay'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Nagercoil',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thuckalay Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.2,
      dist: '2 km',
      address: 'Thuckalay'
    }
  ]
},

{
  id: 'tn_thiruvalluvar_statue',
  name: 'Thiruvalluvar Statue',
  district: 'Kanyakumari',
  category: 'cultural',
  categoryName: 'Cultural & Coastal Monuments',
  rating: 4.7,
  ratingCount: 8600,
  entryFee: 'Ferry ticket / Entry charges may apply',
  openTime: '08:00 AM',
  closeTime: '04:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',
  shortDesc: 'Iconic 133-foot monument dedicated to Tamil poet and philosopher Thiruvalluvar standing on a rocky island near Kanyakumari.',
  longDesc: 'The Thiruvalluvar Statue is one of the most recognizable landmarks of Kanyakumari. The monumental statue stands on a rocky island close to Vivekananda Rock Memorial and represents the cultural contribution of the Tamil poet Thiruvalluvar.',
  attractions: [
    '133-Foot Statue',
    'Rock Island',
    'Sea Views',
    'Ferry Ride',
    'Vivekananda Rock Memorial View'
  ],
  history: 'The statue was inaugurated in 2000 as a monumental tribute to Thiruvalluvar and his contribution to Tamil literature.',
  lat: 8.0777,
  lng: 77.5560,
  image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Nagercoil and Kanyakumari',
      station: 'Kanyakumari Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Kanyakumari Railway Station (CAPE)',
      distance: '2 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Pre-paid Taxis & Tourist Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kanyakumari',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Kanyakumari'
      }
    ],
    police: [
      {
        name: 'Kanyakumari Marine Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kanyakumari'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Kanyakumari Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel Sea View Kanyakumari',
      price: '₹3,800/night',
      rating: 4.5,
      dist: '0.5 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4652 246361'
    }
  ],
  restaurants: [
    {
      name: 'Kanyakumari Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.3,
      dist: '0.5–1 km',
      address: 'Kanyakumari'
    }
  ]
},

{
  id: 'tn_padmanabhapuram_temple',
  name: 'Thanumalayan Temple, Suchindram',
  district: 'Kanyakumari',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.8,
  ratingCount: 7400,
  entryFee: 'Free',
  openTime: '04:30 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic temple famous for its magnificent gopuram, musical pillars and unique Trimurti tradition.',
  longDesc: 'Thanumalayan Temple at Suchindram is one of the most important temples in Kanyakumari district. The temple is dedicated to the combined form of Brahma, Vishnu and Shiva and is renowned for its intricate sculptures, musical pillars and large temple tower.',
  attractions: [
    'Main Gopuram',
    'Musical Pillars',
    'Large Hanuman Statue',
    'Stone Sculptures',
    'Temple Architecture'
  ],
  history: 'An ancient temple with strong Shaivite and Vaishnavite traditions and a long association with the cultural history of southern Tamil Nadu.',
  lat: 8.1540,
  lng: 77.4670,
  image: 'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Frequent buses from Nagercoil and Kanyakumari',
      station: 'Suchindram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '6 km',
      frequency: 'Regular trains and buses available'
    },
    taxi: {
      options: 'Auto Rickshaws, Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Nagercoil',
        distance: '7 km',
        phone: 'Verify current number',
        address: 'Nagercoil'
      }
    ],
    police: [
      {
        name: 'Suchindram Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Suchindram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Suchindram'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Nagercoil',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '7 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Suchindram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '0.5 km',
      address: 'Suchindram'
    }
  ]
},

{
  id: 'tn_thirparappu_waterfalls',
  name: 'Thirparappu Waterfalls',
  district: 'Kanyakumari',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.6,
  ratingCount: 6800,
  entryFee: 'Entry charges may apply',
  openTime: '07:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'June to January',
  shortDesc: 'Scenic waterfall on the Kodayar River surrounded by lush greenery and popular bathing areas.',
  longDesc: 'Thirparappu Waterfalls is a scenic natural attraction in Kanyakumari district where the Kodayar River cascades over a rocky stretch. The area is surrounded by greenery and is popular for family outings, nature photography and seasonal bathing.',
  attractions: [
    'Thirparappu Waterfalls',
    'Kodayar River',
    'Bathing Area',
    'Swimming Pool',
    'Riverside Scenery'
  ],
  history: 'The waterfall and surrounding river landscape have long been an important natural attraction in the western part of Kanyakumari district.',
  lat: 8.3890,
  lng: 77.2570,
  image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Buses from Nagercoil, Kulasekaram and nearby towns',
      station: 'Thirparappu Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '35 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kulasekaram',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Kulasekaram'
      }
    ],
    police: [
      {
        name: 'Thirparappu Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thirparappu'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Thirparappu'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Kulasekaram',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '8–15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thirparappu Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.1,
      dist: '1–3 km',
      address: 'Thirparappu'
    }
  ]
},

{
  id: 'tn_mathur_aqueduct',
  name: 'Mathur Aqueduct',
  district: 'Kanyakumari',
  category: 'nature',
  categoryName: 'Nature & Engineering',
  rating: 4.5,
  ratingCount: 4200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Impressive elevated aqueduct surrounded by green hills and plantations, offering beautiful countryside views.',
  longDesc: 'Mathur Aqueduct is a major engineering landmark in Kanyakumari district built across the Paraliyar River. The elevated structure carries water across the valley and provides visitors with scenic views of the surrounding hills and greenery.',
  attractions: [
    'Mathur Aqueduct',
    'Valley Views',
    'Green Hills',
    'Water Channel',
    'Photography'
  ],
  history: 'Built as an important irrigation structure to carry water across the valley and support agriculture in the region.',
  lat: 8.3390,
  lng: 77.2830,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses from Nagercoil and nearby towns',
      station: 'Mathur Aqueduct Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '35 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruvattar',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Thiruvattar'
      }
    ],
    police: [
      {
        name: 'Thiruvattar Police Station',
        distance: '7 km',
        phone: 'Verify current number',
        address: 'Thiruvattar'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–8 km',
        location: 'Thiruvattar / Kulasekaram'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Nagercoil',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '30–35 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.1,
      dist: '5–10 km',
      address: 'Nearby Town'
    }
  ]
},

{
  id: 'tn_olakkay_aruvikulam',
  name: 'Olakkay Aruvi Waterfalls',
  district: 'Kanyakumari',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.4,
  ratingCount: 2800,
  entryFee: 'Free / Check locally',
  openTime: '07:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None',
  bestTime: 'June to January',
  shortDesc: 'Hidden forest waterfall surrounded by the Western Ghats, popular among nature lovers and trekkers.',
  longDesc: 'Olakkay Aruvi is a lesser-known waterfall destination in the forested hills of Kanyakumari district. The route involves natural surroundings and is best suited for visitors interested in trekking, waterfalls and peaceful forest landscapes.',
  attractions: [
    'Waterfall',
    'Forest Trails',
    'Western Ghats',
    'Trekking',
    'Nature Photography'
  ],
  history: 'A natural waterfall associated with the forest and hill ecosystem of the Western Ghats in Kanyakumari district.',
  lat: 8.3700,
  lng: 77.3700,
  image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80',
  transport: {
    bus: {
      available: 'Local buses to nearby villages',
      station: 'Nearest Local Bus Stop',
      distance: '3–5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '30–40 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Local Taxis & Guided Trekking Transport'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kulasekaram',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Kulasekaram'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '10–15 km',
        phone: 'Verify current number',
        address: 'Nearby Town'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '10–15 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Kulasekaram',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '15–25 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.0,
      dist: '10–15 km',
      address: 'Nearby Town'
    }
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
  id: 'tn_thiruchendur_murugan',
  name: 'Thiruchendur Murugan Temple',
  district: 'Thoothukudi',
  category: 'temples',
  categoryName: 'Temples & Coastal Heritage',

  rating: 4.9,
  ratingCount: 18500,

  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Famous seashore temple dedicated to Lord Murugan, beautifully located beside the Bay of Bengal.',

  longDesc:
    'Thiruchendur Murugan Temple is one of the six major Arupadai Veedu temples dedicated to Lord Murugan. Located directly on the seashore, the temple is known for its magnificent architecture, religious significance, festivals and beautiful coastal surroundings.',

  attractions: [
    'Thiruchendur Murugan Temple',
    'Temple Gopuram',
    'Bay of Bengal',
    'Nazhi Kinaru',
    'Seashore View',
    'Temple Festivals',
    'Beach'
  ],

  history:
    'Thiruchendur is traditionally associated with Lord Murugan defeating the demon Surapadman and is one of the six sacred abodes of Murugan.',

  lat: 8.4970,
  lng: 78.1190,

  image:
    'https://c9admin.cottage9.com/uploads/5017/thiruchendur-murugan-temple-a-historical-overview.jpg',

  transport: {
    bus: {
      available: 'Regular buses from Thoothukudi, Tirunelveli and Madurai',
      station: 'Thiruchendur Bus Stand',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchendur Railway Station',
      distance: '1 km',
      frequency: 'Regular passenger train services'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Tourist Cabs'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchendur',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Thiruchendur'
      }
    ],

    police: [
      {
        name: 'Thiruchendur Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Thiruchendur'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '0.5–1 km',
        location: 'Thiruchendur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thiruchendur',
      price: '₹1,500–₹5,000/night',
      rating: 4.3,
      dist: '0.5–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Thiruchendur Local Restaurants',
      foodType: 'South Indian Vegetarian & Seafood',
      price: '₹400 for two',
      rating: 4.3,
      dist: '0.5–2 km',
      address: 'Thiruchendur'
    }
  ]
},

{
  id: 'tn_kayalpattinam_beach',
  name: 'Kayalpattinam Beach',
  district: 'Thoothukudi',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',

  rating: 4.4,
  ratingCount: 3200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Peaceful coastal destination known for its sandy shoreline, fishing culture and beautiful Bay of Bengal views.',

  longDesc:
    'Kayalpattinam is a historic coastal town in Thoothukudi district. Its beach provides a peaceful environment for visitors interested in coastal sightseeing, photography, beach walks and experiencing the traditional fishing-town atmosphere.',

  attractions: [
    'Kayalpattinam Beach',
    'Bay of Bengal',
    'Fishing Village',
    'Coastal Views',
    'Beach Walks',
    'Sunrise Views'
  ],

  history:
    'Kayalpattinam is an old coastal settlement with a long history of maritime trade and cultural exchange across the Indian Ocean.',

  lat: 8.5700,
  lng: 78.1200,

  image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Regular buses from Thiruchendur and Thoothukudi',
      station: 'Kayalpattinam Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Kayalpattinam Railway Station',
      distance: '2 km',
      frequency: 'Local train services available'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Local Buses'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruchendur',
        distance: '8 km',
        phone: 'Verify current number locally',
        address: 'Thiruchendur'
      }
    ],

    police: [
      {
        name: 'Kayalpattinam Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Kayalpattinam'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Kayalpattinam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thiruchendur',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '8–12 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Kayalpattinam Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹450 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Kayalpattinam'
    }
  ]
},

{
  id: 'tn_kazhugumalai',
  name: 'Kazhugumalai Jain Sculptures & Vettuvan Koil',
  district: 'Thoothukudi',
  category: 'historical',
  categoryName: 'Historical & Archaeological Places',

  rating: 4.7,
  ratingCount: 4100,

  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Historic hill destination famous for Vettuvan Koil, ancient Jain sculptures and remarkable rock-cut architecture.',

  longDesc:
    'Kazhugumalai is an important historical and archaeological destination in Thoothukudi district. The site is known for Vettuvan Koil, ancient Jain sculptures and inscriptions carved into the rocky landscape.',

  attractions: [
    'Vettuvan Koil',
    'Jain Sculptures',
    'Rock-Cut Architecture',
    'Ancient Inscriptions',
    'Kazhugumalai Hill',
    'Historical Photography'
  ],

  history:
    'Kazhugumalai contains important rock-cut monuments and Jain sculptures dating to the medieval period and provides evidence of the region’s religious and artistic heritage.',

  lat: 9.1470,
  lng: 77.7050,

  image:
    'https://images.unsplash.com/photo-1609946782701-7b003a890d23?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses from Kovilpatti and nearby towns',
      station: 'Kazhugumalai Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Kovilpatti Railway Station',
      distance: '20 km',
      frequency: 'Regular trains and buses available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kovilpatti',
        distance: '20 km',
        phone: 'Verify current number locally',
        address: 'Kovilpatti'
      }
    ],

    police: [
      {
        name: 'Kazhugumalai Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Kazhugumalai'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1–2 km',
        location: 'Kazhugumalai'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Kovilpatti',
      price: '₹1,200–₹3,500/night',
      rating: 4.0,
      dist: '20–25 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Kazhugumalai Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '1–2 km',
      address: 'Kazhugumalai'
    }
  ]
},

{
  id: 'tn_mannar_marine_biosphere',
  name: 'Gulf of Mannar Marine Biosphere Reserve',
  district: 'Thoothukudi',
  category: 'wildlife',
  categoryName: 'Marine Wildlife & Nature',

  rating: 4.6,
  ratingCount: 3800,

  entryFee: 'Activity / Boat charges may apply',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',

  shortDesc:
    'Rich marine ecosystem featuring coral reefs, seagrass, coastal islands and diverse marine wildlife.',

  longDesc:
    'The Gulf of Mannar Marine Biosphere Reserve is one of India’s important marine ecosystems. The region contains coral reefs, seagrass beds, mangroves, islands and diverse marine species. Coastal areas around Thoothukudi provide opportunities to learn about marine biodiversity and conservation.',

  attractions: [
    'Coral Reefs',
    'Marine Wildlife',
    'Coastal Islands',
    'Seagrass Beds',
    'Mangroves',
    'Marine Conservation',
    'Boat Experiences'
  ],

  history:
    'The Gulf of Mannar region was recognized for its exceptional marine biodiversity and established as a protected biosphere reserve.',

  lat: 8.8050,
  lng: 78.1500,

  image:
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses from Thoothukudi and coastal towns',
      station: 'Thoothukudi Bus Stand',
      distance: '5–20 km depending on access point'
    },

    train: {
      station: 'Thoothukudi Railway Station',
      distance: '5–20 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis and Authorized Boat Operators'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Medical College Hospital Thoothukudi',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi'
      }
    ],

    police: [
      {
        name: 'Coastal Police Station',
        distance: '5–15 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi Coast'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–10 km',
        location: 'Thoothukudi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thoothukudi',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '5–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Thoothukudi Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹600 for two',
      rating: 4.3,
      dist: '5–10 km',
      address: 'Thoothukudi'
    }
  ]
},

{
  id: 'tn_tuticorin_harbour_beach',
  name: 'Thoothukudi Beach & Harbour',
  district: 'Thoothukudi',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',

  rating: 4.3,
  ratingCount: 2900,

  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Coastal destination showcasing the maritime character of Thoothukudi with sea views, harbour surroundings and evening atmosphere.',

  longDesc:
    'Thoothukudi is a historic port city on the Gulf of Mannar. Its coastal areas provide visitors with views of the sea, harbour environment and the city’s long maritime heritage. The destination is suitable for coastal sightseeing and photography.',

  attractions: [
    'Thoothukudi Coast',
    'Harbour Views',
    'Sea View',
    'Maritime Heritage',
    'Sunset Views',
    'Photography'
  ],

  history:
    'Thoothukudi has been an important maritime and pearl-fishing centre for centuries and developed into a major port city in southern Tamil Nadu.',

  lat: 8.8050,
  lng: 78.1450,

  image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'City and intercity buses',
      station: 'Thoothukudi New Bus Stand',
      distance: '3 km'
    },

    train: {
      station: 'Thoothukudi Railway Station',
      distance: '3 km',
      frequency: 'Regular train services'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis, Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Medical College Hospital Thoothukudi',
        distance: '5 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi'
      }
    ],

    police: [
      {
        name: 'Thoothukudi Town Police Station',
        distance: '3 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–3 km',
        location: 'Thoothukudi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thoothukudi',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '2–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Thoothukudi Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.3,
      dist: '1–3 km',
      address: 'Thoothukudi'
    }
  ]
},

{
  id: 'tn_panchalankurichi',
  name: 'Panchalankurichi Kattabomman Memorial Fort',
  district: 'Thoothukudi',
  category: 'historical',
  categoryName: 'Historical & Freedom Heritage',

  rating: 4.7,
  ratingCount: 3400,

  entryFee: 'Check locally',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Historic memorial associated with freedom fighter Veerapandiya Kattabomman and the Polygar resistance against British rule.',

  longDesc:
    'Panchalankurichi is historically associated with Veerapandiya Kattabomman, one of the prominent leaders who resisted British authority in the late 18th century. The memorial complex preserves the memory of Kattabomman and the historical events connected with Panchalankurichi.',

  attractions: [
    'Kattabomman Memorial',
    'Historic Fort Site',
    'Freedom Struggle Exhibits',
    'Statues',
    'Historical Displays',
    'Cultural Heritage'
  ],

  history:
    'Panchalankurichi was the stronghold of Veerapandiya Kattabomman, who fought against the British East India Company during the Polygar Wars.',

  lat: 8.9350,
  lng: 78.0200,

  image:
    'https://images.unsplash.com/photo-1609946782701-7b003a890d23?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses from Thoothukudi, Tirunelveli and nearby towns',
      station: 'Panchalankurichi Bus Stop',
      distance: '1 km'
    },

    train: {
      station: 'Thoothukudi Railway Station',
      distance: '35 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis, Rental Cars and Local Buses'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ottapidaram',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Ottapidaram'
      }
    ],

    police: [
      {
        name: 'Ottapidaram Police Station',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Ottapidaram'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '5–10 km',
        location: 'Ottapidaram / Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thoothukudi',
      price: '₹1,500–₹5,000/night',
      rating: 4.1,
      dist: '30–40 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '5–10 km',
      address: 'Panchalankurichi / Ottapidaram'
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
  id: 'tn_srirangam_ranganathaswamy',
  name: 'Sri Ranganathaswamy Temple, Srirangam',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.9,
  ratingCount: 18500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'November to February',

  shortDesc:
    'Magnificent island temple dedicated to Lord Ranganatha, famous for its massive gopurams, temple corridors and rich Vaishnavite heritage.',

  longDesc:
    'Sri Ranganathaswamy Temple at Srirangam is one of the most important Vaishnavite temples in India. Located on the island between the Cauvery and Kollidam rivers, the vast temple complex is known for its numerous concentric enclosures, magnificent gopurams, detailed sculptures and strong cultural and religious traditions.',

  attractions: [
    'Rajagopuram',
    'Temple Corridors',
    'Thousand Pillar Hall',
    'Golden Vimanam',
    'Temple Towers',
    'Cauvery River',
    'Ancient Sculptures',
    'Temple Festivals'
  ],

  history:
    'The temple has a long history with major contributions from the Cholas, Pandyas, Hoysalas, Vijayanagara rulers and Nayaks.',

  lat: 10.8624,
  lng: 78.6950,

  image:
    'https://www.trichyproperty.in/wp-content/uploads/2026/06/Srirangam.jpeg',

  transport: {
    bus: {
      available: 'Frequent buses from Tiruchirappalli city',
      station: 'Srirangam Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Srirangam Railway Station',
      distance: '2 km',
      frequency: 'Regular passenger and express trains'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis, Rental Cars and Local Transport'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Srirangam',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Srirangam, Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Srirangam Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Srirangam'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '0.5–1 km',
        location: 'Srirangam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Srirangam',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Srirangam Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '0.5–2 km',
      address: 'Srirangam'
    }
  ]
},

{
  id: 'tn_rockfort_temple',
  name: 'Rockfort Ucchi Pillayar Temple',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Hill Attractions',

  rating: 4.8,
  ratingCount: 12500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'Historic hilltop temple dedicated to Lord Ganesha offering panoramic views of Tiruchirappalli city and the Cauvery region.',

  longDesc:
    'Rockfort Ucchi Pillayar Temple is located on top of the historic Rockfort hill in central Tiruchirappalli. Visitors climb a series of rock-cut steps to reach the temple and enjoy spectacular views of the city, Cauvery River and surrounding areas.',

  attractions: [
    'Ucchi Pillayar Temple',
    'Thayumanaswamy Temple',
    'Rock-Cut Steps',
    'Historic Rock Fort',
    'City Viewpoint',
    'Cauvery River View'
  ],

  history:
    'The Rockfort hill has a long historical association with the Pallavas, Cholas, Nayaks and other South Indian rulers.',

  lat: 10.8261,
  lng: 78.6957,

  image:
    'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'City buses from all major parts of Tiruchirappalli',
      station: 'Rockfort Bus Stop',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '5 km',
      frequency: 'Frequent trains from major cities'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchirappalli',
        distance: '4 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Fort Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '0.5 km',
        location: 'Rockfort Area'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Central Tiruchirappalli',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '2–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Rockfort Local Restaurants',
      foodType: 'South Indian & Vegetarian',
      price: '₹400 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Rockfort, Tiruchirappalli'
    }
  ]
},

{
  id: 'tn_samayapuram_mariamman',
  name: 'Samayapuram Mariamman Temple',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.8,
  ratingCount: 9800,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Famous Mariamman temple and major pilgrimage centre located near Tiruchirappalli.',

  longDesc:
    'Samayapuram Mariamman Temple is one of the most popular Amman temples in Tamil Nadu. Dedicated to Goddess Mariamman, the temple attracts large numbers of devotees throughout the year and is particularly busy during major festivals.',

  attractions: [
    'Mariamman Shrine',
    'Temple Gopuram',
    'Temple Festivals',
    'Traditional Rituals',
    'Devotional Activities'
  ],

  history:
    'The temple has a long-standing tradition of worship dedicated to Goddess Mariamman and is an important pilgrimage centre in the region.',

  lat: 10.9480,
  lng: 78.7510,

  image:
    'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent buses from Tiruchirappalli and nearby towns',
      station: 'Samayapuram Bus Stand',
      distance: '0.5 km'
    },

    train: {
      station: 'Samayapuram Railway Station',
      distance: '2 km',
      frequency: 'Local trains and buses available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Tourist Vehicles'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Samayapuram',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Samayapuram'
      }
    ],

    police: [
      {
        name: 'Samayapuram Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Samayapuram'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Samayapuram'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels around Samayapuram',
      price: '₹1,200–₹4,000/night',
      rating: 4.1,
      dist: '1–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Samayapuram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '0.5–2 km',
      address: 'Samayapuram'
    }
  ]
},

{
  id: 'tn_kallanai_grand_anaicut',
  name: 'Kallanai Grand Anaicut',
  district: 'Tiruchirappalli',
  category: 'historical',
  categoryName: 'Historical & Engineering Attractions',

  rating: 4.7,
  ratingCount: 8700,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'Ancient Chola-era dam across the Cauvery River and one of the world’s oldest water-diversion structures still in use.',

  longDesc:
    'Kallanai, also known as the Grand Anaicut, is an ancient stone barrage constructed across the Cauvery River. The structure is associated with Chola King Karikala Chola and continues to demonstrate the engineering achievements of ancient Tamil civilization.',

  attractions: [
    'Ancient Stone Dam',
    'Cauvery River',
    'River View',
    'Chola Engineering',
    'Green Landscape',
    'Photography'
  ],

  history:
    'Kallanai was built during the Chola period, traditionally attributed to Karikala Chola, and has been maintained and modified over centuries.',

  lat: 10.8390,
  lng: 78.8550,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses from Tiruchirappalli and Thanjavur routes',
      station: 'Kallanai Bus Stop',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '20 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis, Rental Cars and Auto Rickshaws'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchirappalli',
        distance: '20 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number locally',
        address: 'Kallanai Area'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '5–10 km',
        location: 'Nearby Towns'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchirappalli',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '15–25 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '5–10 km',
      address: 'Kallanai Area'
    }
  ]
},

{
  id: 'tn_vayalur_murugan',
  name: 'Vayalur Murugan Temple',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.6,
  ratingCount: 4200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Peaceful Murugan temple surrounded by greenery and traditional village landscapes near Tiruchirappalli.',

  longDesc:
    'Vayalur Murugan Temple is an important Murugan shrine near Tiruchirappalli. The temple is known for its spiritual atmosphere, traditional architecture and association with the devotional traditions of the region.',

  attractions: [
    'Murugan Shrine',
    'Temple Architecture',
    'Temple Tank',
    'Traditional Festivals',
    'Green Surroundings'
  ],

  history:
    'The temple has a long association with Tamil Murugan worship and regional devotional traditions.',

  lat: 10.7790,
  lng: 78.6370,

  image:
    'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Local buses from Tiruchirappalli',
      station: 'Vayalur Bus Stop',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '10 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchirappalli',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '5 km',
        phone: 'Verify current number locally',
        address: 'Vayalur Area'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '3–5 km',
        location: 'Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchirappalli',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '8–12 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Vegetarian Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '3–5 km',
      address: 'Vayalur'
    }
  ]
},

{
  id: 'tn_puliyancholai',
  name: 'Puliyancholai Waterfalls',
  district: 'Tiruchirappalli',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',

  rating: 4.5,
  ratingCount: 5100,

  entryFee: 'Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'June to January',

  shortDesc:
    'Natural forest destination at the foothills of the Kolli Hills known for streams, waterfalls and lush greenery.',

  longDesc:
    'Puliyancholai is a scenic natural destination near the foothills of the Kolli Hills. The area is known for its streams, seasonal waterfalls, forest landscapes and peaceful surroundings. It is suitable for nature lovers, photography and short outdoor trips.',

  attractions: [
    'Waterfalls',
    'Forest Streams',
    'Kolli Hills Foothills',
    'Nature Walks',
    'Green Landscape',
    'Photography'
  ],

  history:
    'Puliyancholai is part of the forested landscape around the foothills of the Kolli Hills and has traditionally been known for its natural streams and greenery.',

  lat: 11.0840,
  lng: 78.4200,

  image:
    'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Local buses from Thuraiyur and nearby towns',
      station: 'Puliyancholai Bus Stop',
      distance: '1 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '50 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Tourist Taxis, Jeeps and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thuraiyur',
        distance: '25 km',
        phone: 'Verify current number locally',
        address: 'Thuraiyur'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '10–20 km',
        phone: 'Verify current number locally',
        address: 'Nearby Town'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '10–20 km',
        location: 'Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels around Thuraiyur',
      price: '₹1,500–₹4,000/night',
      rating: 4.0,
      dist: '20–30 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '10–20 km',
      address: 'Nearby Town'
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
  id: 'tn_poondi_reservoir',
  name: 'Poondi Reservoir',
  district: 'Tiruvallur',
  category: 'lakes',
  categoryName: 'Lakes & Nature',

  rating: 4.4,
  ratingCount: 3200,

  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'Scenic reservoir surrounded by greenery and countryside landscapes, popular for peaceful nature visits and photography.',

  longDesc:
    'Poondi Reservoir is an important water reservoir near Tiruvallur. The large water body and surrounding greenery provide a peaceful environment away from the city. It is suitable for nature lovers, photography and short family outings.',

  attractions: [
    'Poondi Reservoir',
    'Water Views',
    'Green Landscape',
    'Nature Photography',
    'Bird Watching',
    'Sunset Views'
  ],

  history:
    'Poondi Reservoir was developed as an important water-storage facility for supplying drinking water to Chennai and surrounding areas.',

  lat: 13.2040,
  lng: 79.9060,

  image:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses available from Tiruvallur and Chennai',
      station: 'Poondi Bus Stop',
      distance: 'Near reservoir'
    },

    train: {
      station: 'Tiruvallur Railway Station',
      distance: 'Approximately 15 km',
      frequency: 'Frequent suburban trains from Chennai'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruvallur',
        distance: 'Approximately 15 km',
        phone: 'Verify current number locally',
        address: 'Tiruvallur'
      }
    ],

    police: [
      {
        name: 'Poondi Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Poondi, Tiruvallur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Poondi / Tiruvallur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruvallur',
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
      name: 'Local Restaurants in Tiruvallur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '15 km',
      address: 'Tiruvallur'
    }
  ]
},

{
  id: 'tn_veeraraghava_perumal_temple',
  name: 'Sri Veeraraghava Perumal Temple, Tiruvallur',
  district: 'Tiruvallur',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.8,
  ratingCount: 6800,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Ancient Vaishnavite temple dedicated to Lord Veeraraghava Perumal and an important pilgrimage centre near Chennai.',

  longDesc:
    'Sri Veeraraghava Perumal Temple is a historic temple in Tiruvallur and one of the important Divya Desams associated with Vaishnavism. The temple is known for its traditional architecture, religious festivals and sacred temple tank.',

  attractions: [
    'Veeraraghava Perumal Shrine',
    'Temple Gopuram',
    'Temple Tank',
    'Traditional Architecture',
    'Religious Festivals',
    'Temple Sculptures'
  ],

  history:
    'The temple has a long history associated with the Sri Vaishnavite tradition and is traditionally counted among the Divya Desams.',

  lat: 13.1420,
  lng: 79.9070,

  image:
    'https://images.unsplash.com/photo-1600100397608-f010b6d6a0e8?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Frequent buses from Chennai and nearby towns',
      station: 'Tiruvallur Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Tiruvallur Railway Station',
      distance: '1 km',
      frequency: 'Frequent suburban and express trains'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruvallur',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Tiruvallur'
      }
    ],

    police: [
      {
        name: 'Tiruvallur Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Tiruvallur'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Tiruvallur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruvallur',
      price: '₹1,200–₹4,000/night',
      rating: 4.1,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Tiruvallur Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Tiruvallur'
    }
  ]
},

{
  id: 'tn_thiruttani_murugan',
  name: 'Thiruthani Murugan Temple',
  district: 'Tiruvallur',
  category: 'temples',
  categoryName: 'Temples & Hill Attractions',

  rating: 4.9,
  ratingCount: 14500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Famous hilltop temple dedicated to Lord Murugan and one of the six sacred Arupadai Veedu temples.',

  longDesc:
    'Thiruthani Murugan Temple is situated on Thiruthani Hill and is one of the six major sacred abodes of Lord Murugan. Visitors climb the hill to reach the temple and can enjoy panoramic views of the surrounding countryside.',

  attractions: [
    'Murugan Temple',
    'Thiruthani Hill',
    'Temple Gopuram',
    'Hilltop Views',
    'Temple Festivals',
    'Sacred Steps'
  ],

  history:
    'Thiruthani is traditionally recognized as one of the six sacred abodes of Lord Murugan and has an important place in Tamil religious heritage.',

  lat: 13.1750,
  lng: 79.6150,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81JsWvjDBLavTxTr2-0N7qorjynb7JyMLvWrOsb8EOA&s=10',

  transport: {
    bus: {
      available: 'Buses from Chennai, Tiruvallur and nearby towns',
      station: 'Thiruthani Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Tiruttani Railway Station',
      distance: '1.5 km',
      frequency: 'Regular suburban and express trains'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruttani',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Tiruttani'
      }
    ],

    police: [
      {
        name: 'Tiruttani Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Tiruttani'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Tiruttani'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruttani',
      price: '₹1,200–₹4,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Tiruttani Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Tiruttani'
    }
  ]
},

{
  id: 'tn_bird_sanctuary_pulicat',
  name: 'Pulicat Bird Sanctuary',
  district: 'Tiruvallur',
  category: 'wildlife',
  categoryName: 'Wildlife & Bird Watching',

  rating: 4.6,
  ratingCount: 5200,

  entryFee: 'Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Important wetland bird habitat famous for flamingos and large numbers of migratory birds during winter.',

  longDesc:
    'The Pulicat Bird Sanctuary covers the wetland ecosystem around Pulicat Lake. During the migratory season, flamingos and many other species of waterbirds can be seen around the lagoon and surrounding wetlands.',

  attractions: [
    'Flamingos',
    'Migratory Birds',
    'Wetland Ecosystem',
    'Pulicat Lake',
    'Bird Watching',
    'Photography'
  ],

  history:
    'The Pulicat wetland ecosystem is recognized for its importance to migratory and resident bird populations along the southeastern coast of India.',

  lat: 13.4100,
  lng: 80.3200,

  image:
    'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses from Chennai and Ponneri',
      station: 'Pulicat Bus Stop',
      distance: '1 km'
    },

    train: {
      station: 'Ponneri Railway Station',
      distance: '20 km',
      frequency: 'Frequent suburban trains'
    },

    taxi: {
      options:
        'Taxis and Local Transport from Ponneri'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ponneri',
        distance: '20 km',
        phone: 'Verify current number locally',
        address: 'Ponneri'
      }
    ],

    police: [
      {
        name: 'Pulicat Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Pulicat'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1 km',
        location: 'Pulicat'
      }
    ]
  },

  hotels: [
    {
      name: 'Accommodation near Pulicat',
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
      name: 'Pulicat Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: 'Varies',
      rating: null,
      dist: '1–3 km',
      address: 'Pulicat'
    }
  ]
},

{
  id: 'tn_amirthi_zoo_tiruvallur',
  name: 'Amirthi Zoological Park',
  district: 'Tiruvallur',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',

  rating: 4.2,
  ratingCount: 2800,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Tuesday',
  bestTime: 'October to February',

  shortDesc:
    'Forest-based recreational and wildlife destination with greenery, small waterfalls and nature trails.',

  longDesc:
    'Amirthi Zoological Park is a forest-oriented recreational destination known for its natural surroundings, wildlife enclosures, walking trails and seasonal waterfall. It is suitable for families and visitors interested in nature and outdoor activities.',

  attractions: [
    'Wildlife Enclosures',
    'Forest Trails',
    'Waterfall',
    'Nature Walks',
    'Green Landscape',
    'Photography'
  ],

  history:
    'The park was developed as a forest and wildlife recreation area to promote awareness of local flora and fauna.',

  lat: 12.7000,
  lng: 79.2500,

  image:
    'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Local buses from nearby towns',
      station: 'Nearest Local Bus Stop',
      distance: '1–3 km'
    },

    train: {
      station: 'Nearest Railway Station',
      distance: '20–30 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis, Rental Cars and Local Transport'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital',
        distance: '15–25 km',
        phone: 'Verify current number locally',
        address: 'Nearby Town'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '10–20 km',
        phone: 'Verify current number locally',
        address: 'Nearby Town'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '10–20 km',
        location: 'Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Nearby Towns',
      price: '₹1,500–₹4,000/night',
      rating: 4.0,
      dist: '15–30 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '10–20 km',
      address: 'Nearby Town'
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
