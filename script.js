document.addEventListener("DOMContentLoaded", () => {
  // Data arrays for dynamic content
  const heroBackgrounds = [
    "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1578853354824-0a8e81e7d81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  ]

  const heroTitles = [
    "Discover the World's Premier Casino Hotels",
    "Experience Elite Gaming Destinations",
    "Explore Iconic Casino Resorts Worldwide",
    "The Ultimate Guide to Global Gaming Havens",
  ]

  const heroSubtitles = [
    "Your comprehensive guide to the most prestigious gaming destinations where entertainment meets exceptional accommodation",
    "Unveiling the finest establishments that combine world-class gaming with premium hospitality",
    "From Las Vegas to Macau, discover where sophisticated gaming and elegant accommodations converge",
    "Curated insights into the planet's most celebrated casino hotels and gaming resorts",
  ]

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Top Casinos", href: "#top-casinos" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "VIP Club", href: "#vip-club" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
  ]

  const stats = [
    { icon: "building", title: "1,000+", text: "Premium Casinos" },
    { icon: "globe-americas", title: "60+", text: "Countries" },
    { icon: "users", title: "Millions", text: "Annual Visitors" },
    { icon: "dollar-sign", title: "$450B+", text: "Industry Value" },
  ]

  const features = [
    {
      icon: "dice",
      title: "World-Class Gaming",
      description:
        "From classic table games to the latest slots, experience gaming at its finest with professional dealers and exclusive high-limit rooms.",
    },
    {
      icon: "utensils",
      title: "Fine Dining",
      description:
        "Indulge in culinary masterpieces created by celebrity chefs in restaurants that range from casual to Michelin-starred experiences.",
    },
    {
      icon: "bed",
      title: "Premium Accommodations",
      description:
        "Retreat to elegantly appointed rooms and suites featuring top-tier amenities, stunning views, and personalized service.",
    },
    {
      icon: "glass-cheers",
      title: "Nightlife & Entertainment",
      description:
        "Experience world-class shows, concerts, and vibrant nightclubs featuring renowned DJs and performers.",
    },
    {
      icon: "swimming-pool",
      title: "Wellness Facilities",
      description:
        "Rejuvenate your body and mind in premium wellness centers offering a range of treatments and fitness programs.",
    },
    {
      icon: "shopping-bag",
      title: "High-End Shopping",
      description:
        "Browse upscale boutiques featuring designer brands and exclusive collections all within the resort complex.",
    },
    {
      icon: "concierge-bell",
      title: "VIP Services",
      description:
        "Enjoy personalized attention with dedicated concierge services, private gaming salons, and exclusive access to events.",
    },
    {
      icon: "cocktail",
      title: "Premium Bars & Lounges",
      description:
        "Savor expertly crafted cocktails and rare spirits in sophisticated bars with panoramic views and elegant atmospheres.",
    },
  ]

  const casinos = [
    {
      name: "Bellagio",
      location: "Las Vegas, USA",
      image:
        "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      rating: 5,
      description:
        "Iconic for its dancing fountains, the Bellagio offers a sophisticated gaming experience with over 2,300 slot machines and 150 table games.",
      features: [
        { icon: "dice", text: "156 Tables" },
        { icon: "bed", text: "3,950 Rooms" },
        { icon: "utensils", text: "12 Restaurants" },
      ],
      details:
        "The Bellagio stands as a monument to elegance on the Las Vegas Strip. Its 116,000-square-foot casino features everything from penny slots to high-limit salons. The property also houses a fine art gallery, botanical gardens, and the world-famous fountains choreographed to music. With multiple award-winning restaurants and the stunning 'O' by Cirque du Soleil, the Bellagio represents the pinnacle of casino hotel experiences.",
    },
    {
      name: "Marina Bay Sands",
      location: "Singapore",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      description:
        "Famous for its rooftop infinity pool, Marina Bay Sands features a massive casino with over 600 table games and 1,500 slot machines.",
      features: [
        { icon: "dice", text: "600+ Tables" },
        { icon: "bed", text: "2,561 Rooms" },
        { icon: "utensils", text: "80+ Restaurants" },
      ],
      details:
        "Marina Bay Sands has redefined Singapore's skyline with its three connected towers topped by the spectacular SkyPark. The casino spans 15,000 square meters across four levels, offering a range of games including Sic Bo, Baccarat, and Singapore Stud Poker. Beyond gaming, the integrated resort features the ArtScience Museum, luxury shopping, celebrity chef restaurants, and the world's largest rooftop infinity pool with breathtaking views of the city.",
    },
    {
      name: "The Venetian Macao",
      location: "Macau, China",
      image:
        "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      description:
        "The largest casino in the world, The Venetian Macao offers 3,000 gaming machines and 800 gaming tables across 550,000 square feet.",
      features: [
        { icon: "dice", text: "800+ Tables" },
        { icon: "bed", text: "3,000 Suites" },
        { icon: "utensils", text: "30+ Restaurants" },
      ],
      details:
        "The Venetian Macao is a colossal integrated resort that recreates the charm of Venice, complete with canals and gondola rides. As the largest casino property in the world, it offers an unparalleled gaming experience across its massive floor. The resort features a 15,000-seat arena for major events, over 350 retail stores in the Grand Canal Shoppes, and suites that are nearly double the size of average hotel rooms. Its ornate architecture and attention to detail make it a standout destination in Macau's Cotai Strip.",
    },
    {
      name: "Caesars Palace",
      location: "Las Vegas, USA",
      image:
        "https://images.unsplash.com/photo-1578853354824-0a8e81e7d81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      rating: 4.5,
      description:
        "A Las Vegas landmark since 1966, Caesars Palace offers a 124,000 square foot casino floor with all the classic games and modern slots.",
      features: [
        { icon: "dice", text: "185 Tables" },
        { icon: "bed", text: "3,960 Rooms" },
        { icon: "utensils", text: "15 Restaurants" },
      ],
      details:
        "Caesars Palace has defined luxury on the Las Vegas Strip for over five decades. Its Roman-themed architecture houses one of the most respected poker rooms in Las Vegas, along with a race and sports book featuring 140 HD screens. The Forum Shops offer world-class shopping, while the Colosseum hosts legendary performers like Celine Dion and Elton John. The property's Garden of the Gods Pool Oasis features seven different pool experiences set amid Roman architecture and statuary.",
    },
    {
      name: "Wynn Las Vegas",
      location: "Las Vegas, USA",
      image:
        "https://images.unsplash.com/photo-1630255733678-cf82ac59eef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      rating: 5,
      description:
        "Known for its elegance, the Wynn features a 111,000 square foot casino with 1,800+ slot machines and 26 poker tables.",
      features: [
        { icon: "dice", text: "190 Tables" },
        { icon: "bed", text: "2,716 Rooms" },
        { icon: "utensils", text: "20 Restaurants" },
      ],
      details:
        "The Wynn Las Vegas represents the height of sophistication on the Strip. Its naturally lit casino floor breaks from tradition with floral displays and abundant natural light. The resort is home to an 18-hole golf course, multiple award-winning restaurants, and the spectacular 'Lake of Dreams' show. Every room is elegantly appointed with floor-to-ceiling windows, and the Encore tower offers an additional layer of exclusivity. The Wynn consistently earns five-star ratings across its hotel, restaurants, and amenities.",
    },
    {
      name: "MGM Grand",
      location: "Las Vegas, USA",
      image:
        "https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      rating: 4.5,
      description:
        "One of the largest hotels in the world, MGM Grand's casino spans 171,500 square feet with over 2,500 gaming machines.",
      features: [
        { icon: "dice", text: "200+ Tables" },
        { icon: "bed", text: "6,852 Rooms" },
        { icon: "utensils", text: "22 Restaurants" },
      ],
      details:
        "The MGM Grand is a massive entertainment complex anchored by its emerald-colored main tower. Its casino is one of the largest in Las Vegas, featuring a wide variety of table games, slots, and a major poker room that hosts World Poker Tour events. The property is home to the Grand Garden Arena, which hosts championship boxing matches and major concerts, plus multiple nightclubs including Hakkasan. Its pool complex spans 6.5 acres with four swimming pools, three whirlpools, and a lazy river.",
    },
    {
      name: "Casino de Monte-Carlo",
      location: "Monaco",
      image:
        "https://images.unsplash.com/photo-1588250318421-b92b9d8e67d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      description:
        "This legendary Belle Époque casino has been a symbol of Monaco's elegant gambling scene since 1863, featuring exclusive gaming rooms.",
      features: [
        { icon: "dice", text: "European Games" },
        { icon: "crown", text: "Private Salons" },
        { icon: "landmark", text: "Historic Venue" },
      ],
      details:
        "The Casino de Monte-Carlo is perhaps the world's most iconic gambling establishment, having featured in multiple James Bond films. Its ornate 19th-century architecture houses gaming rooms adorned with stained glass, paintings, and sculptures. The casino offers European games like Chemin de Fer and European Roulette in an atmosphere of unparalleled sophistication. While smaller than modern mega-casinos, it compensates with history, exclusivity, and an elegant atmosphere that has attracted the aristocracy and high rollers for over 150 years.",
    },
    {
      name: "Resorts World",
      location: "Las Vegas, USA",
      image:
        "https://images.unsplash.com/photo-1605119272504-5aef4b6b4e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      rating: 4.5,
      description:
        "The newest addition to the Las Vegas Strip, featuring a 117,000 square foot casino with cutting-edge technology and gaming options.",
      features: [
        { icon: "dice", text: "150+ Tables" },
        { icon: "bed", text: "3,500 Rooms" },
        { icon: "utensils", text: "40+ Restaurants" },
      ],
      details:
        "Resorts World Las Vegas is the first ground-up resort development on the Strip in over a decade, bringing fresh energy to the north end of Las Vegas Boulevard. The property integrates three Hilton hotel brands (Hilton, Conrad, and Crockfords) with varying levels of luxury. Its casino features the latest slot machines with cashless wagering options and a sportsbook with a 100-foot LED screen. The resort's dining portfolio includes authentic street food at Famous Foods Street Eats and fine dining from renowned chefs. Its 5,000-seat theater hosts major residencies from top musical artists.",
    },
    {
      name: "City of Dreams",
      location: "Macau, China",
      image:
        "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      description:
        "A premium integrated resort featuring approximately 420,000 square feet of gaming space with 450 gaming tables and 1,500 machines.",
      features: [
        { icon: "dice", text: "450 Tables" },
        { icon: "bed", text: "1,400 Rooms" },
        { icon: "ticket-alt", text: "The House of Dancing Water" },
      ],
      details:
        "City of Dreams represents the new generation of Macau's integrated resorts, featuring three hotels including the ultra-premium Morpheus designed by the late Zaha Hadid. Its casino offers a full range of games popular in Asia, including baccarat and sic bo, across both mass market and VIP areas. The property is home to 'The House of Dancing Water,' a breathtaking water-based performance created by Franco Dragone. With Michelin-starred dining options and the Boulevard retail area featuring over 50 luxury brands, City of Dreams delivers a comprehensive high-end experience.",
    },
    {
      name: "Atlantis Paradise Island",
      location: "Bahamas",
      image:
        "https://images.unsplash.com/photo-1548150914-c3d7b31c5c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.5,
      description:
        "This Caribbean resort features a 50,000 square foot casino with ocean views, 85 gaming tables, and over 700 slot machines.",
      features: [
        { icon: "dice", text: "85 Tables" },
        { icon: "bed", text: "3,800 Rooms" },
        { icon: "water", text: "Aquaventure Waterpark" },
      ],
      details:
        "Atlantis Paradise Island combines a tropical paradise with a world-class casino experience. The resort's casino offers panoramic views of turquoise Caribbean waters while featuring popular table games and the latest slot machines. Beyond gaming, Atlantis is known for its massive Aquaventure waterpark, marine habitats with over 50,000 aquatic animals, and multiple accommodation options ranging from the iconic Royal Towers to the exclusive Cove. The property's Marina Village offers dining and shopping in a charming waterfront setting.",
    },
    {
      name: "Crown Melbourne",
      location: "Melbourne, Australia",
      image:
        "https://images.unsplash.com/photo-1569983020902-26bef716f314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.5,
      description:
        "Australia's premier casino resort spans 220,000 square feet of gaming space with 2,500 gaming machines and 540 gaming tables.",
      features: [
        { icon: "dice", text: "540 Tables" },
        { icon: "bed", text: "1,600 Rooms" },
        { icon: "utensils", text: "70+ Restaurants" },
      ],
      details:
        "Crown Melbourne is the centerpiece of the Southbank precinct along the Yarra River. Its massive casino offers Australia's largest selection of table games, including unique local variations. The complex includes three hotels, with Crown Towers setting the standard for luxury in Melbourne. The property features a stunning atrium with seasonal displays, a high-end retail collection, and a dining precinct with restaurants from renowned chefs like Nobu Matsuhisa and Neil Perry. The Crown Riverwalk comes alive at night with flames shooting from towers along the promenade.",
    },
    {
      name: "Sun City Resort",
      location: "South Africa",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.5,
      description:
        "This African resort paradise features a 125,000 square foot casino with 852 slot machines and 40 gaming tables in a unique setting.",
      features: [
        { icon: "dice", text: "40 Tables" },
        { icon: "bed", text: "1,500 Rooms" },
        { icon: "paw", text: "Adjacent Game Reserve" },
      ],
      details:
        'Sun City Resort offers a unique African casino experience nestled between the Pilanesberg mountains. The complex includes four hotels, with the Palace of the Lost City standing as its crown jewel. The casino provides a full range of gaming options in an elegant atmosphere. What truly sets Sun City apart are its surroundings and amenities: the resort features two championship golf courses designed by Gary Player, the Valley of Waves water park, and proximity to the Pilanesberg Game Reserve where visitors can see Africa\'s "Big Five" wildlife on safari.',
    },
    {
      name: "Foxwoods Resort Casino",
      location: "Connecticut, USA",
      image:
        "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      rating: 4,
      description:
        "One of the largest casino resorts in North America with 340,000 square feet of gaming space, 3,400 slot machines and 250 table games.",
      features: [
        { icon: "dice", text: "250 Tables" },
        { icon: "bed", text: "2,200 Rooms" },
        { icon: "shopping-bag", text: "Tanger Outlets" },
      ],
      details:
        "Foxwoods Resort Casino, operated by the Mashantucket Pequot Tribal Nation, is a massive entertainment complex set in the Connecticut woods. The resort comprises six casinos with everything from penny slots to high-stakes baccarat and one of the world's largest bingo halls. Foxwoods features four hotels, the Grand Theater hosting major performers, a Tanger Outlets shopping center, and a wide range of dining options. Outdoor activities include ziplines and a topgolf facility, making Foxwoods a comprehensive destination beyond just gaming.",
    },
    {
      name: "Casino Baden-Baden",
      location: "Baden-Baden, Germany",
      image:
        "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      rating: 4.5,
      description:
        "This historic German casino, established in 1824, offers classic table games in a stunning Belle Époque setting once frequented by European royalty.",
      features: [
        { icon: "dice", text: "Classic Tables" },
        { icon: "landmark", text: "Historic Venue" },
        { icon: "glass-cheers", text: "Elegant Atmosphere" },
      ],
      details:
        'Casino Baden-Baden is housed in the Kurhaus, a neoclassical mansion that has been the social center of this spa town for nearly 200 years. Described by Marlene Dietrich as "the most beautiful casino in the world," its ornate interior features frescoes, crystal chandeliers, and red and gold décor inspired by French royal palaces. While smaller than modern mega-casinos, it offers an unparalleled atmosphere of old-world European elegance. The surrounding town is famous for its thermal baths and cultural events, making Casino Baden-Baden part of a sophisticated wellness and entertainment destination.',
    },
    {
      name: "The Cosmopolitan",
      location: "Las Vegas, USA",
      image:
        "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      description:
        "A modern luxury resort featuring a 100,000 square foot casino with floor-to-ceiling windows offering rare views of the Las Vegas Strip.",
      features: [
        { icon: "dice", text: "120+ Tables" },
        { icon: "bed", text: "3,027 Rooms" },
        { icon: "utensils", text: "25+ Restaurants" },
      ],
      details:
        "The Cosmopolitan has established itself as one of the Strip's most sophisticated destinations since opening in 2010. Its casino breaks from Vegas tradition with natural light and terrace views of the Strip. The resort is known for its uniquely configured rooms, many featuring private terraces—a rarity in Las Vegas. The Cosmopolitan's restaurant collection is among the most impressive in the city, and its three-story Chandelier Bar has become an iconic meeting spot. The property also features the Marquee Nightclub & Dayclub, a multi-level entertainment venue attracting world-class DJs.",
    },
    {
      name: "Mohegan Sun",
      location: "Connecticut, USA",
      image:
        "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      rating: 4.5,
      description:
        "This Native American casino resort features 300,000 square feet of gaming space across three distinctly themed casinos.",
      features: [
        { icon: "dice", text: "300+ Tables" },
        { icon: "bed", text: "1,600 Rooms" },
        { icon: "music", text: "10,000-seat Arena" },
      ],
      details:
        "Mohegan Sun, owned by the Mohegan Tribe, offers a distinctive casino experience with indigenous-inspired design elements throughout the property. Its three casinos—Casino of the Earth, Casino of the Sky (featuring a planetarium dome), and Casino of the Wind—provide varied atmospheres and gaming options. The resort includes two luxury hotel towers, a 10,000-seat arena hosting major concerts and sporting events, and over 40 restaurants and bars. The Mohegan Sun Arena serves as home court for the WNBA's Connecticut Sun, making it one of the few casinos with a professional sports team.",
    },
  ]

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      caption: "Casino gaming floor with elegant chandeliers",
    },
    {
      url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Premium hotel suite with panoramic city views",
    },
    {
      url: "https://images.unsplash.com/photo-1596178060810-72c633ce9383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Casino roulette table with players",
    },
    {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      caption: "Infinity pool with skyline views",
    },
    {
      url: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      caption: "Casino poker table during tournament play",
    },
    {
      url: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      caption: "Fine dining restaurant with elegant decor",
    },
    {
      url: "https://images.unsplash.com/photo-1596546707388-6ea9e8e1e60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Casino hotel exterior at night with dramatic lighting",
    },
    {
      url: "https://images.unsplash.com/photo-1623107274042-16962aa28ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      caption: "Modern casino architecture with distinctive design",
    },
  ]

  const events = [
    {
      title: "World Series of Poker",
      location: "Bellagio, Las Vegas",
      date: "2023-11-15",
      image:
        "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      description:
        "The world's most prestigious poker tournament returns with a guaranteed prize pool of $10 million. Players from around the globe will compete in various poker disciplines over two weeks of intense competition.",
    },
    {
      title: "International Baccarat Championship",
      location: "The Venetian Macao, China",
      date: "2023-12-05",
      image:
        "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      description:
        "Asia's premier baccarat tournament featuring the world's top players competing for a record prize pool. VIP packages include luxury accommodation and exclusive dining experiences.",
    },
    {
      title: "Grand Slot Tournament",
      location: "MGM Grand, Las Vegas",
      date: "2023-10-20",
      image:
        "https://images.unsplash.com/photo-1596547609652-9cf5d8c6a5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Test your luck in the world's largest slot tournament with over 1,000 machines and a $1 million top prize. Entry is open to players of all levels with qualifying rounds throughout the day.",
    },
    {
      title: "European Roulette Masters",
      location: "Casino de Monte-Carlo, Monaco",
      date: "2023-09-28",
      image:
        "https://images.unsplash.com/photo-1596178060810-72c633ce9383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Experience the elegance of European roulette in its spiritual home. This invitation-only tournament brings together roulette enthusiasts in the world's most iconic casino setting.",
    },
    {
      title: "Casino Gala & Awards Night",
      location: "Marina Bay Sands, Singapore",
      date: "2023-11-30",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "The annual black-tie event recognizing excellence in the casino hotel industry. Featuring celebrity guests, gourmet dining, and entertainment from world-class performers.",
    },
    {
      title: "Blackjack World Championship",
      location: "Caesars Palace, Las Vegas",
      date: "2023-10-10",
      image:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "The ultimate test of blackjack skill and strategy with multiple rounds of competition and varying rule sets. Limited to 200 participants with qualifying events held worldwide.",
    },
  ]

  const testimonials = [
    {
      name: "James Wilson",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "My stay at the Bellagio was nothing short of magical. The casino floor was vibrant and exciting, and I was lucky enough to win big at the blackjack tables! The staff treated me like royalty throughout my stay.",
    },
    {
      name: "Sarah Chen",
      location: "Sydney, Australia",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Marina Bay Sands exceeded all my expectations. The infinity pool is as amazing as it looks in photos, and the casino offered a sophisticated gaming experience. The restaurants were world-class - I'm still dreaming about the food!",
    },
    {
      name: "Robert Johnson",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4.5,
      text: "The Venetian Macao is truly a city within a city. I spent three days there and still didn't see everything! The casino floor is enormous, and I loved the gondola rides through the shopping area. A must-visit destination.",
    },
    {
      name: "Maria Rodriguez",
      location: "Madrid, Spain",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5,
      text: "Caesars Palace has such a rich history, and you can feel it when you walk through the property. The poker room is one of the best I've played in, and the Forum Shops are dangerous for my wallet! Will definitely return.",
    },
    {
      name: "David Kim",
      location: "Seoul, South Korea",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "The City of Dreams in Macau truly lives up to its name. The House of Dancing Water show was breathtaking, and the casino offered the perfect mix of games. The staff spoke multiple languages which made my experience seamless.",
    },
    {
      name: "Emma Thompson",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 4.5,
      text: "Wynn Las Vegas sets the standard for luxury. The naturally lit casino floor is a refreshing change from typical dark gaming halls. The restaurants are outstanding, and even the standard rooms feel like suites. Worth every penny!",
    },
    {
      name: "Michael Garcia",
      location: "Chicago, USA",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
      text: "Mohegan Sun surprised me with its unique design and atmosphere. The different themed casinos kept things interesting, and I particularly enjoyed the live entertainment. It's a great alternative to Las Vegas for East Coast residents.",
    },
    {
      name: "Sophie Laurent",
      location: "Paris, France",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
      text: "Casino de Monte-Carlo is like stepping into another era. The elegance and history are palpable, and the gaming experience is refined and sophisticated. The surrounding area of Monaco is equally beautiful. A truly special destination.",
    },
  ]

  const mapLocations = [
    { name: "Bellagio", location: "Las Vegas", coordinates: { x: 19.5, y: 39.5 } },
    { name: "Marina Bay Sands", location: "Singapore", coordinates: { x: 77, y: 53 } },
    { name: "The Venetian Macao", location: "Macau", coordinates: { x: 79, y: 45 } },
    { name: "Caesars Palace", location: "Las Vegas", coordinates: { x: 19.5, y: 39.5 } },
    { name: "Casino de Monte-Carlo", location: "Monaco", coordinates: { x: 48.5, y: 37 } },
    { name: "Sun City Resort", location: "South Africa", coordinates: { x: 51, y: 62 } },
    { name: "Crown Melbourne", location: "Australia", coordinates: { x: 87, y: 65 } },
    { name: "Atlantis Paradise Island", location: "Bahamas", coordinates: { x: 25, y: 44 } },
  ]

  const faqs = [
    {
      question: "What's the difference between a casino hotel and a regular casino?",
      answer:
        "Casino hotels combine premium accommodations with gaming facilities, allowing guests to stay and play in the same location. Regular casinos focus primarily on gaming without integrated lodging options. Casino hotels typically offer a more comprehensive entertainment experience with restaurants, shows, shopping, and other amenities.",
    },
    {
      question: "Do I need to be a hotel guest to use the casino facilities?",
      answer:
        "In most cases, no. Casino floors in casino hotels are typically open to the public, not just hotel guests. However, some exclusive areas or high-limit rooms might be reserved for hotel guests or casino members. Some resorts may offer special gaming promotions or credits for guests staying at the hotel.",
    },
    {
      question: "What's the best casino hotel for beginners?",
      answer:
        "For beginners, we recommend properties like MGM Grand in Las Vegas or Resorts World in Singapore. These venues offer a wide range of gaming options with lower minimum bets, free gaming lessons for beginners, and a less intimidating atmosphere. Many also have electronic versions of table games that allow you to learn at your own pace.",
    },
    {
      question: "Are casino hotels family-friendly?",
      answer:
        "Modern casino hotels, especially in Las Vegas and Macau, have evolved to be more family-friendly with attractions like pools, shows, arcades, and entertainment suitable for all ages. While children cannot enter gaming areas, many resorts offer supervised activities and kid-friendly amenities. Always check the specific property's policies regarding children before booking.",
    },
    {
      question: "What loyalty programs do casino hotels offer?",
      answer:
        "Most major casino hotel brands offer comprehensive loyalty programs that reward both gaming and non-gaming spending. Programs like MGM's M life, Caesars Rewards, and Wynn Rewards allow members to earn points for hotel stays, dining, shopping, and gambling. These points can be redeemed for complimentary rooms, dining credits, show tickets, and other perks. Higher tier levels often include benefits like priority check-in, room upgrades, and personal concierge service.",
    },
    {
      question: "What should I know about responsible gaming at casino hotels?",
      answer:
        "Reputable casino hotels promote responsible gaming through various programs and resources. These include self-exclusion options, betting limits, trained staff who can recognize problem gambling, and information about support services. Many properties display responsible gaming information throughout the casino and provide contact details for organizations that offer help for gambling problems.",
    },
    {
      question: "What's the typical dress code at casino hotels?",
      answer:
        "Dress codes vary by property and even by area within the same resort. Most casino floors have a casual dress code during the day, while evenings may require smart casual attire. High-limit rooms and upscale restaurants often enforce stricter dress codes requiring business casual or formal wear. Luxury European casinos like Monte-Carlo may require jackets for men in the evening. It's always best to check the specific requirements of your destination.",
    },
    {
      question: "How do comps work at casino hotels?",
      answer:
        "Comps (complimentaries) are rewards given to players based on their gaming activity. Casino hotels track play through loyalty cards, measuring factors like time played, average bet size, and total amount wagered. Based on this activity, players may receive comps ranging from free drinks and meals to complimentary rooms, show tickets, or even airfare. The more you play—and the higher your bets—the more generous the comps typically become.",
    },
  ]

  const blogPosts = [
    {
      title: "The Evolution of Casino Architecture: From Classic to Contemporary",
      date: "August 15, 2023",
      image:
        "https://images.unsplash.com/photo-1623107274042-16962aa28ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      excerpt:
        "Casino hotels have transformed from simple gambling halls to architectural masterpieces that define city skylines. This article explores how casino design has evolved from the ornate European style of Monte-Carlo to the themed mega-resorts of Las Vegas and the ultra-modern integrated resorts of Asia. Learn how architecture influences the gaming experience and creates iconic destinations that attract visitors for their design alone.",
    },
    {
      title: "Digital Transformation: How Technology is Reshaping Casino Hotels",
      date: "September 3, 2023",
      image:
        "https://images.unsplash.com/photo-1596547609652-9cf5d8c6a5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      excerpt:
        "From cashless gaming to AI-powered customer service, technology is revolutionizing the casino hotel experience. This article examines innovations like RFID chips, facial recognition for security, mobile apps that enhance the guest experience, and how big data is being used to personalize services. Discover how leading properties are embracing digital transformation while maintaining the human touch that defines hospitality.",
    },
    {
      title: "The Rise of Entertainment-Focused Casino Resorts",
      date: "October 12, 2023",
      image:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      excerpt:
        "Today's top casino hotels generate more revenue from non-gaming amenities than from gambling itself. This feature explores how properties are diversifying with celebrity chef restaurants, Broadway-caliber shows, designer shopping, and immersive attractions. Learn how this shift is attracting a broader audience and transforming casino hotels into comprehensive entertainment destinations that appeal to gamers and non-gamers alike.",
    },
    {
      title: "Sustainable Luxury: Eco-Friendly Initiatives at Top Casino Hotels",
      date: "November 5, 2023",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      excerpt:
        "Casino hotels are increasingly adopting sustainable practices without compromising luxury. This article highlights innovative environmental initiatives at leading properties, from energy-efficient buildings and water conservation to waste reduction and locally sourced dining. Discover how these eco-conscious approaches are reducing environmental impact while meeting the expectations of today's environmentally aware travelers.",
    },
  ]

  const socialLinks = [
    { icon: "facebook-f", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "youtube", url: "#" },
    { icon: "linkedin-in", url: "#" },
  ]

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "Singapore",
    "United Arab Emirates",
    "Brazil",
    "Mexico",
    "South Africa",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
  ]

  // Utility functions
  function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  function calculateTimeRemaining(targetDate) {
    const now = new Date()
    const target = new Date(targetDate)
    const difference = target - now

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  function showToast(message, type = "success") {
    const toast = document.getElementById("toast")
    const toastMessage = document.getElementById("toast-message")
    const toastIcon = document.getElementById("toast-icon")

    toastMessage.textContent = message

    if (type === "success") {
      toastIcon.className = "fas fa-check-circle text-primary text-xl mr-3"
    } else if (type === "error") {
      toastIcon.className = "fas fa-exclamation-circle text-red-500 text-xl mr-3"
    } else if (type === "info") {
      toastIcon.className = "fas fa-info-circle text-blue-500 text-xl mr-3"
    }

    toast.classList.add("show")

    setTimeout(() => {
      toast.classList.remove("show")
    }, 3000)
  }

  function showModal(title, content) {
    const modalContainer = document.getElementById("modal-container")
    const modalTitle = document.getElementById("modal-title")
    const modalBody = document.getElementById("modal-body")

    modalTitle.textContent = title
    modalBody.innerHTML = content

    modalContainer.style.display = "flex"
    document.body.style.overflow = "hidden"
  }

  function closeModal() {
    const modalContainer = document.getElementById("modal-container")
    modalContainer.style.display = "none"
    document.body.style.overflow = "auto"
  }

  // Initialize page content
  function initializePage() {
    // Set hero content
    const randomHeroIndex = Math.floor(Math.random() * heroBackgrounds.length)
    document.getElementById("hero-bg").style.backgroundImage = `url('${heroBackgrounds[randomHeroIndex]}')`
    document.getElementById("hero-title").textContent = heroTitles[randomHeroIndex]
    document.getElementById("hero-subtitle").textContent = heroSubtitles[randomHeroIndex]

    // Set navigation links
    const shuffledNavLinks = getRandomItems(navLinks, getRandomInt(5, 8))
    const navLinksContainer = document.getElementById("nav-links")
    const mobileNavLinksContainer = document.getElementById("mobile-nav-links")

    shuffledNavLinks.forEach((link) => {
      navLinksContainer.innerHTML += `
        <li class="ml-6"><a href="${link.href}" class="text-white font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">${link.name}</a></li>
      `

      mobileNavLinksContainer.innerHTML += `
        <li class="mb-4"><a href="${link.href}" class="text-white font-medium block py-2 hover:text-primary transition-colors">${link.name}</a></li>
      `
    })

    // Add contact button to navigation
    navLinksContainer.innerHTML += `
      <li class="ml-6"><a href="#newsletter-form" class="bg-primary text-secondary px-5 py-2 rounded-full font-semibold uppercase tracking-wide text-sm border-2 border-primary hover:bg-transparent hover:text-primary transition-all">Contact Us</a></li>
    `

    mobileNavLinksContainer.innerHTML += `
      <li class="mt-6"><a href="#newsletter-form" class="bg-primary text-secondary px-5 py-2 rounded-full font-semibold uppercase tracking-wide text-sm border-2 border-primary hover:bg-transparent hover:text-primary transition-all inline-block">Contact Us</a></li>
    `

    // Set stats
    const statsContainer = document.getElementById("stats-container")
    stats.forEach((stat) => {
      statsContainer.innerHTML += `
        <div class="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
          <i class="fas fa-${stat.icon} text-primary text-3xl mb-4"></i>
          <h3 class="text-xl font-bold mb-1">${stat.title}</h3>
          <p class="text-gray-600">${stat.text}</p>
        </div>
      `
    })

    // Set features
    const featuresContainer = document.getElementById("features-container")
    const randomFeatures = getRandomItems(features, getRandomInt(4, 6))

    randomFeatures.forEach((feature) => {
      featuresContainer.innerHTML += `
        <div class="bg-light p-8 rounded-lg shadow-md text-center group hover:bg-primary transition-all duration-300">
          <i class="fas fa-${feature.icon} text-primary text-4xl mb-6 group-hover:text-secondary transition-colors"></i>
          <h3 class="text-xl font-bold mb-4 group-hover:text-secondary transition-colors">${feature.title}</h3>
          <p class="text-gray-600 group-hover:text-secondary/80 transition-colors">${feature.description}</p>
        </div>
      `
    })

    // Set casinos
    const casinoContainer = document.getElementById("casino-container")
    const randomCasinos = getRandomItems(casinos, 6)

    randomCasinos.forEach((casino) => {
      let starsHTML = ""
      const fullStars = Math.floor(casino.rating)
      const hasHalfStar = casino.rating % 1 !== 0

      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>'
      }

      if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>'
      }

      let featuresHTML = ""
      casino.features.forEach((feature) => {
        featuresHTML += `<span class="bg-light px-3 py-1 rounded-full text-sm"><i class="fas fa-${feature.icon} text-primary mr-1"></i> ${feature.text}</span>`
      })

      casinoContainer.innerHTML += `
        <div class="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative h-64">
            <img src="${casino.image}" alt="${casino.name}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 bg-black/70 text-white py-2 px-4 rounded-tr-lg">
              <i class="fas fa-map-marker-alt text-primary mr-2"></i> ${casino.location}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">${casino.name}</h3>
            <div class="flex text-primary mb-4">
              ${starsHTML}
            </div>
            <p class="text-gray-600 mb-4">${casino.description}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              ${featuresHTML}
            </div>
            <button class="casino-detail-btn bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all inline-block" data-casino="${casino.name}">Learn More</button>
          </div>
        </div>
      `
    })

    // Set gallery
    const galleryContainer = document.getElementById("gallery-container")
    const galleryThumbs = document.getElementById("gallery-thumbs")
    const randomGalleryImages = getRandomItems(galleryImages, getRandomInt(5, 8))

    randomGalleryImages.forEach((image, index) => {
      galleryContainer.innerHTML += `
        <div class="swiper-slide">
          <img src="${image.url}" alt="${image.caption}" class="w-full h-full object-cover rounded-lg">
        </div>
      `

      galleryThumbs.innerHTML += `
        <div class="gallery-thumb ${index === 0 ? "active" : ""}" data-index="${index}">
          <img src="${image.url}" alt="Thumbnail" class="w-full h-16 object-cover">
        </div>
      `
    })

    // Set events
    const eventsContainer = document.getElementById("events-container")
    const randomEvents = getRandomItems(events, getRandomInt(4, 6))

    randomEvents.forEach((event) => {
      const eventDate = new Date(event.date)
      eventsContainer.innerHTML += `
        <div class="swiper-slide">
          <div class="bg-white rounded-lg overflow-hidden shadow-lg h-full">
            <div class="relative h-48">
              <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-4 text-white">
                <h3 class="text-xl font-bold">${event.title}</h3>
                <p><i class="fas fa-map-marker-alt text-primary mr-2"></i>${event.location}</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <i class="far fa-calendar-alt text-primary mr-2"></i>
                  <span>${formatDate(event.date)}</span>
                </div>
                <div class="event-countdown" data-date="${event.date}">
                  <span class="text-primary font-semibold">Coming Soon</span>
                </div>
              </div>
              <p class="text-gray-600 mb-4">${event.description.substring(0, 100)}...</p>
              <button class="event-detail-btn bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all inline-block" data-event="${event.title}">Learn More</button>
            </div>
          </div>
        </div>
      `
    })

    // Set VIP form casino options
    const favoriteSelect = document.getElementById("favorite-casino")
    casinos.forEach((casino) => {
      favoriteSelect.innerHTML += `<option value="${casino.name}">${casino.name} (${casino.location})</option>`
    })

    // Set country options
    const countrySelect = document.getElementById("country")
    countries.sort().forEach((country) => {
      countrySelect.innerHTML += `<option value="${country}">${country}</option>`
    })

    // Set testimonials
    const testimonialsContainer = document.getElementById("testimonials-container")
    const randomTestimonials = getRandomItems(testimonials, getRandomInt(3, 5))

    randomTestimonials.forEach((testimonial) => {
      let starsHTML = ""
      const fullStars = Math.floor(testimonial.rating)
      const hasHalfStar = testimonial.rating % 1 !== 0

      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>'
      }

      if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>'
      }

      testimonialsContainer.innerHTML += `
        <div class="swiper-slide">
          <div class="bg-light p-8 rounded-lg shadow-lg h-full">
            <div class="text-primary text-4xl mb-6">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="text-gray-700 mb-6">${testimonial.text}</p>
            <div class="flex text-primary mb-6">
              ${starsHTML}
            </div>
            <div class="flex items-center">
              <img src="${testimonial.image}" alt="${testimonial.name}" class="w-14 h-14 rounded-full mr-4">
              <div>
                <h4 class="font-bold">${testimonial.name}</h4>
                <p class="text-gray-600">${testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
      `
    })

    // Set FAQ
    const faqContainer = document.getElementById("faq-container")
    const randomFaqs = getRandomItems(faqs, getRandomInt(5, 7))

    randomFaqs.forEach((faq, index) => {
      faqContainer.innerHTML += `
        <div class="faq-item border border-gray-200 rounded-lg overflow-hidden">
          <div class="faq-question bg-white p-5 cursor-pointer flex justify-between items-center">
            <h3 class="font-bold text-lg">${faq.question}</h3>
            <i class="fas fa-chevron-down text-primary transition-transform"></i>
          </div>
          <div class="faq-answer bg-white px-5 max-h-0 overflow-hidden transition-all duration-300">
            <div class="py-5 border-t border-gray-100">
              <p class="text-gray-700">${faq.answer}</p>
            </div>
          </div>
        </div>
      `
    })

    // Set blog posts
    const blogContainer = document.getElementById("blog-container")
    const randomBlogPosts = getRandomItems(blogPosts, getRandomInt(3, 4))

    randomBlogPosts.forEach((post) => {
      blogContainer.innerHTML += `
        <div class="bg-light rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative h-48">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="text-white text-lg font-bold">Read Article</span>
            </div>
          </div>
          <div class="p-6">
            <div class="text-gray-500 mb-2"><i class="far fa-calendar-alt text-primary mr-2"></i>${post.date}</div>
            <h3 class="text-xl font-bold mb-3">${post.title}</h3>
            <p class="text-gray-600 mb-4">${post.excerpt.substring(0, 120)}...</p>
            <button class="blog-detail-btn bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all inline-block" data-post="${post.title}">Read More</button>
          </div>
        </div>
      `
    })

    // Set social links
    const socialLinksContainer = document.getElementById("social-links")
    const randomSocialLinks = getRandomItems(socialLinks, getRandomInt(3, 5))

    randomSocialLinks.forEach((link) => {
      socialLinksContainer.innerHTML += `
        <a href="${link.url}" class="text-gray-400 hover:text-primary transition-colors">
          <i class="fab fa-${link.icon}"></i>
        </a>
      `
    })

    // Set footer links
    const footerLinksContainer = document.getElementById("footer-links")
    shuffledNavLinks.forEach((link) => {
      footerLinksContainer.innerHTML += `
        <li><a href="${link.href}" class="hover:text-primary transition-colors">${link.name}</a></li>
      `
    })

    // Set destination links
    const destinationLinksContainer = document.getElementById("destination-links")
    const destinations = [...new Set(casinos.map((casino) => casino.location))]
    const randomDestinations = getRandomItems(destinations, getRandomInt(5, 8))

    randomDestinations.forEach((destination) => {
      destinationLinksContainer.innerHTML += `
        <li><a href="#" class="hover:text-primary transition-colors">${destination}</a></li>
      `
    })

    // Set current year
    document.getElementById("current-year").textContent = new Date().getFullYear()

    // Initialize world map
    initializeWorldMap()

    // Initialize Schema.org data
    initializeSchemaData()

    // Initialize countdown
    initializeCountdown()

    // Initialize event handlers
    initializeEventHandlers()

    // Initialize Swiper
    initializeSwipers()
  }

  function initializeWorldMap() {
    const mapContainer = document.getElementById("world-map")

    // Simple world map SVG
    mapContainer.innerHTML = `
      <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,20 Q20,10 30,20 T50,20 T70,20 T90,20 Q95,25 90,30 T70,30 T50,30 T30,30 Q20,35 10,30 Z" />
        <path d="M10,35 Q20,30 30,35 T50,35 T70,35 T90,35 Q95,40 90,45 T70,45 T50,45 T30,45 Q20,50 10,45 Z" />
        <path d="M20,50 Q30,45 40,50 T60,50 T80,50 Q85,55 80,60 T60,60 T40,60 Q30,65 20,60 Z" />
      </svg>
    `

    // Add map pins
    const randomLocations = getRandomItems(mapLocations, getRandomInt(6, 8))

    randomLocations.forEach((location) => {
      const pin = document.createElement("div")
      pin.className = "map-pin"
      pin.style.left = `${location.coordinates.x}%`
      pin.style.top = `${location.coordinates.y}%`
      pin.setAttribute("data-location", `${location.name}, ${location.location}`)
      pin.setAttribute("data-casino", location.name)
      mapContainer.appendChild(pin)
    })
  }

  function initializeSchemaData() {
    const schemaScript = document.getElementById("schema-script")
    const schemaData = JSON.parse(schemaScript.textContent)

    // Add casino data to schema
    const randomCasinos = getRandomItems(casinos, 5)
    schemaData.mainEntity.itemListElement = randomCasinos.map((casino, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: `${casino.name} Casino Hotel`,
          address: {
            "@type": "PostalAddress",
            addressLocality: casino.location,
          },
          image: casino.image,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: casino.rating,
            bestRating: "5",
            reviewCount: Math.floor(Math.random() * 1000) + 100,
          },
        },
      }
    })

    schemaScript.textContent = JSON.stringify(schemaData)
  }

  function initializeCountdown() {
    // Set a random future date for the countdown
    const now = new Date()
    const futureDate = new Date(now)
    futureDate.setDate(futureDate.getDate() + getRandomInt(30, 90))

    // Update countdown every second
    function updateCountdown() {
      const timeRemaining = calculateTimeRemaining(futureDate)

      document.getElementById("days").textContent = String(timeRemaining.days).padStart(2, "0")
      document.getElementById("hours").textContent = String(timeRemaining.hours).padStart(2, "0")
      document.getElementById("minutes").textContent = String(timeRemaining.minutes).padStart(2, "0")
      document.getElementById("seconds").textContent = String(timeRemaining.seconds).padStart(2, "0")

      // Update event countdowns
      document.querySelectorAll(".event-countdown").forEach((countdown) => {
        const eventDate = new Date(countdown.getAttribute("data-date"))
        const eventTimeRemaining = calculateTimeRemaining(eventDate)

        if (eventTimeRemaining.days < 0) {
          countdown.innerHTML = '<span class="text-gray-500">Event Ended</span>'
        } else {
          countdown.innerHTML = `<span class="text-primary font-semibold">${eventTimeRemaining.days}d ${eventTimeRemaining.hours}h</span>`
        }
      })
    }

    updateCountdown()
    setInterval(updateCountdown, 1000)
  }

  function initializeEventHandlers() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const mobileMenu = document.querySelector(".mobile-menu")
    const closeBtn = document.querySelector(".close-btn")

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.style.right = "0"
    })

    closeBtn.addEventListener("click", () => {
      mobileMenu.style.right = "-100%"
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.style.right = "-100%"
      })
    })

    // Header scroll effect
    const header = document.querySelector("header")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("py-2")
        header.classList.remove("py-4")
        header.classList.add("bg-black/90")
        header.classList.remove("bg-black/80")
      } else {
        header.classList.remove("py-2")
        header.classList.add("py-4")
        header.classList.remove("bg-black/90")
        header.classList.add("bg-black/80")
      }
    })

    // Back to top button
    const backToTopBtn = document.querySelector(".back-to-top")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling
        const icon = question.querySelector("i")

        // Close all other FAQs
        document.querySelectorAll(".faq-answer").forEach((item) => {
          if (item !== answer) {
            item.style.maxHeight = "0"
            item.previousElementSibling.querySelector("i").style.transform = "rotate(0deg)"
          }
        })

        // Toggle current FAQ
        if (answer.style.maxHeight === "0px" || !answer.style.maxHeight) {
          answer.style.maxHeight = answer.scrollHeight + "px"
          icon.style.transform = "rotate(180deg)"
        } else {
          answer.style.maxHeight = "0"
          icon.style.transform = "rotate(0deg)"
        }
      })
    })

    // Gallery thumbnails
    document.querySelectorAll(".gallery-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const index = Number.parseInt(thumb.getAttribute("data-index"))
        gallerySwiperInstance.slideTo(index)

        document.querySelectorAll(".gallery-thumb").forEach((t) => {
          t.classList.remove("active")
        })

        thumb.classList.add("active")
      })
    })

    // Map pins
    document.querySelectorAll(".map-pin").forEach((pin) => {
      pin.addEventListener("mouseenter", (e) => {
        const tooltip = document.getElementById("map-tooltip")
        tooltip.textContent = pin.getAttribute("data-location")
        tooltip.style.left = `${e.pageX - 100}px`
        tooltip.style.top = `${e.pageY - 50}px`
        tooltip.classList.remove("hidden")
      })

      pin.addEventListener("mouseleave", () => {
        document.getElementById("map-tooltip").classList.add("hidden")
      })

      pin.addEventListener("click", () => {
        const casinoName = pin.getAttribute("data-casino")
        const casino = casinos.find((c) => c.name === casinoName)

        if (casino) {
          showCasinoDetails(casino)
        }
      })
    })

    // Casino detail buttons
    document.querySelectorAll(".casino-detail-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const casinoName = button.getAttribute("data-casino")
        const casino = casinos.find((c) => c.name === casinoName)

        if (casino) {
          showCasinoDetails(casino)
        }
      })
    })

    // Event detail buttons
    document.querySelectorAll(".event-detail-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const eventTitle = button.getAttribute("data-event")
        const event = events.find((e) => e.title === eventTitle)

        if (event) {
          showEventDetails(event)
        }
      })
    })

    // Blog detail buttons
    document.querySelectorAll(".blog-detail-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const postTitle = button.getAttribute("data-post")
        const post = blogPosts.find((p) => p.title === postTitle)

        if (post) {
          showBlogDetails(post)
        }
      })
    })

    // Modal close buttons
    document.querySelectorAll(".modal-close").forEach((button) => {
      button.addEventListener("click", closeModal)
    })

    // Close modal when clicking outside
    document.getElementById("modal-container").addEventListener("click", (e) => {
      if (e.target === document.getElementById("modal-container")) {
        closeModal()
      }
    })

    // VIP form submission
    document.getElementById("vip-form").addEventListener("submit", (e) => {
      e.preventDefault()

      const submitBtn = e.target.querySelector('button[type="submit"]')
      const spinner = submitBtn.querySelector(".fa-spinner")

      submitBtn.disabled = true
      spinner.classList.remove("hidden")

      // Simulate form submission
      setTimeout(() => {
        submitBtn.disabled = false
        spinner.classList.add("hidden")

        showModal(
          "Thank You for Joining!",
          `
          <div class="text-center">
            <i class="fas fa-check-circle text-primary text-5xl mb-4"></i>
            <h4 class="text-xl font-bold mb-4">Welcome to Our VIP Club!</h4>
            <p class="text-gray-700 mb-6">Thank you for joining our exclusive VIP club. You'll now receive updates about the world's finest casino hotels and special offers.</p>
            <p class="text-gray-700">We've sent a confirmation email to your inbox with details about your membership.</p>
          </div>
        `,
        )

        e.target.reset()
      }, 1500)
    })

    // Newsletter form submission
    document.getElementById("newsletter-form").addEventListener("submit", (e) => {
      e.preventDefault()

      const submitBtn = e.target.querySelector('button[type="submit"]')
      const spinner = submitBtn.querySelector(".fa-spinner")

      submitBtn.disabled = true
      spinner.classList.remove("hidden")

      // Simulate form submission
      setTimeout(() => {
        submitBtn.disabled = false
        spinner.classList.add("hidden")

        showToast("Thank you for subscribing to our newsletter!")

        e.target.reset()
      }, 1500)
    })

    // Load more casinos
    document.getElementById("load-more-btn").addEventListener("click", () => {
      const button = document.getElementById("load-more-btn")
      const spinner = button.querySelector(".fa-spinner")
      const buttonText = button.querySelector("span")

      button.disabled = true
      spinner.classList.remove("hidden")
      buttonText.textContent = "Loading..."

      // Simulate loading more casinos
      setTimeout(() => {
        const casinoContainer = document.getElementById("casino-container")
        const currentCasinos = casinoContainer.querySelectorAll(".bg-white").length
        const remainingCasinos = casinos.length - currentCasinos

        if (remainingCasinos > 0) {
          const additionalCasinos = getRandomItems(
            casinos.filter(
              (casino) =>
                !Array.from(casinoContainer.querySelectorAll(".bg-white h3")).some(
                  (h3) => h3.textContent === casino.name,
                ),
            ),
            Math.min(3, remainingCasinos),
          )

          additionalCasinos.forEach((casino) => {
            let starsHTML = ""
            const fullStars = Math.floor(casino.rating)
            const hasHalfStar = casino.rating % 1 !== 0

            for (let i = 0; i < fullStars; i++) {
              starsHTML += '<i class="fas fa-star"></i>'
            }

            if (hasHalfStar) {
              starsHTML += '<i class="fas fa-star-half-alt"></i>'
            }

            let featuresHTML = ""
            casino.features.forEach((feature) => {
              featuresHTML += `<span class="bg-light px-3 py-1 rounded-full text-sm"><i class="fas fa-${feature.icon} text-primary mr-1"></i> ${feature.text}</span>`
            })

            const casinoElement = document.createElement("div")
            casinoElement.className =
              "bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            casinoElement.innerHTML = `
              <div class="relative h-64">
                <img src="${casino.image}" alt="${casino.name}" class="w-full h-full object-cover">
                <div class="absolute bottom-0 left-0 bg-black/70 text-white py-2 px-4 rounded-tr-lg">
                  <i class="fas fa-map-marker-alt text-primary mr-2"></i> ${casino.location}
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${casino.name}</h3>
                <div class="flex text-primary mb-4">
                  ${starsHTML}
                </div>
                <p class="text-gray-600 mb-4">${casino.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  ${featuresHTML}
                </div>
                <button class="casino-detail-btn bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all inline-block" data-casino="${casino.name}">Learn More</button>
              </div>
            `

            casinoContainer.appendChild(casinoElement)

            // Add event listener to new button
            casinoElement.querySelector(".casino-detail-btn").addEventListener("click", () => {
              showCasinoDetails(casino)
            })
          })

          button.disabled = false
          spinner.classList.add("hidden")
          buttonText.textContent = "Load More"

          if (casinoContainer.querySelectorAll(".bg-white").length >= casinos.length) {
            button.disabled = true
            button.classList.add("opacity-50")
            buttonText.textContent = "No More Casinos"
          }
        } else {
          button.disabled = true
          button.classList.add("opacity-50")
          spinner.classList.add("hidden")
          buttonText.textContent = "No More Casinos"
        }
      }, 1500)
    })
  }

  function showCasinoDetails(casino) {
    let starsHTML = ""
    const fullStars = Math.floor(casino.rating)
    const hasHalfStar = casino.rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fas fa-star"></i>'
    }

    if (hasHalfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>'
    }

    let featuresHTML = ""
    casino.features.forEach((feature) => {
      featuresHTML += `<div class="flex items-center"><i class="fas fa-${feature.icon} text-primary mr-2"></i> ${feature.text}</div>`
    })

    const modalContent = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="${casino.image}" alt="${casino.name}" class="w-full h-64 object-cover rounded-lg mb-4">
          <div class="flex justify-between items-center mb-4">
            <div class="text-primary text-xl">
              ${starsHTML}
            </div>
            <div class="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
              ${casino.location}
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            ${featuresHTML}
          </div>
        </div>
        <div>
          <h4 class="text-xl font-bold mb-4">About ${casino.name}</h4>
          <p class="text-gray-700 mb-4">${casino.details}</p>
          <div class="bg-light p-4 rounded-lg">
            <h5 class="font-bold mb-2">Disclaimer</h5>
            <p class="text-sm text-gray-600">This information is provided for informational purposes only. The World's Hotel Casino Guide is not affiliated with any casino hotel and does not offer booking services. Please visit the official website of ${casino.name} for the most up-to-date information.</p>
          </div>
        </div>
      </div>
    `

    showModal(`${casino.name} - ${casino.location}`, modalContent)
  }

  function showEventDetails(event) {
    const modalContent = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="${event.image}" alt="${event.title}" class="w-full h-64 object-cover rounded-lg mb-4">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <i class="far fa-calendar-alt text-primary mr-2"></i>
              <span>${formatDate(event.date)}</span>
            </div>
            <div class="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
              ${event.location}
            </div>
          </div>
          <div class="event-countdown-detail bg-light p-4 rounded-lg text-center" data-date="${event.date}">
            <h5 class="font-bold mb-2">Event Countdown</h5>
            <div class="flex justify-center gap-4">
              <div class="text-center">
                <span class="days text-2xl font-bold block">00</span>
                <span class="text-xs">Days</span>
              </div>
              <div class="text-center">
                <span class="hours text-2xl font-bold block">00</span>
                <span class="text-xs">Hours</span>
              </div>
              <div class="text-center">
                <span class="minutes text-2xl font-bold block">00</span>
                <span class="text-xs">Minutes</span>
              </div>
              <div class="text-center">
                <span class="seconds text-2xl font-bold block">00</span>
                <span class="text-xs">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 class="text-xl font-bold mb-4">About ${event.title}</h4>
          <p class="text-gray-700 mb-4">${event.description}</p>
          <div class="bg-light p-4 rounded-lg">
            <h5 class="font-bold mb-2">Disclaimer</h5>
            <p class="text-sm text-gray-600">This information is provided for informational purposes only. The World's Hotel Casino Guide is not affiliated with any casino hotel and does not offer booking services. Please visit the official website of ${event.location} for the most up-to-date information about this event.</p>
          </div>
        </div>
      </div>
    `

    showModal(event.title, modalContent)

    // Initialize countdown in modal
    const countdownElement = document.querySelector(".event-countdown-detail")
    const eventDate = new Date(event.date)

    function updateEventCountdown() {
      const timeRemaining = calculateTimeRemaining(eventDate)

      document.querySelector(".event-countdown-detail .days").textContent = String(timeRemaining.days).padStart(2, "0")
      document.querySelector(".event-countdown-detail .hours").textContent = String(timeRemaining.hours).padStart(
        2,
        "0",
      )
      document.querySelector(".event-countdown-detail .minutes").textContent = String(timeRemaining.minutes).padStart(
        2,
        "0",
      )
      document.querySelector(".event-countdown-detail .seconds").textContent = String(timeRemaining.seconds).padStart(
        2,
        "0",
      )

      if (timeRemaining.days < 0) {
        clearInterval(eventCountdownInterval)
        document.querySelector(".event-countdown-detail").innerHTML = '<h5 class="font-bold mb-2">Event Ended</h5>'
      }
    }

    updateEventCountdown()
    const eventCountdownInterval = setInterval(updateEventCountdown, 1000)
  }

  function showBlogDetails(post) {
    const modalContent = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="${post.image}" alt="${post.title}" class="w-full h-64 object-cover rounded-lg mb-4">
          <div class="flex justify-between items-center mb-4">
            <div>
              <i class="far fa-calendar-alt text-primary mr-2"></i>
              <span>${post.date}</span>
            </div>
          </div>
        </div>
        <div>
          <h4 class="text-xl font-bold mb-4">${post.title}</h4>
          <p class="text-gray-700 mb-4">${post.excerpt}</p>
          <div class="bg-light p-4 rounded-lg">
            <h5 class="font-bold mb-2">Disclaimer</h5>
            <p class="text-sm text-gray-600">This information is provided for informational purposes only. The World's Hotel Casino Guide is not affiliated with any casino hotel and does not offer booking services. Please visit the official website for the most up-to-date information.</p>
          </div>
        </div>
      </div>
    `

    showModal(post.title, modalContent)
  }

  let gallerySwiperInstance
  let initializeSwipers
  ;(() => {
    initializeSwipers = () => {
      const Swiper = window.Swiper

      gallerySwiperInstance = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })

      new Swiper(".events-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })

      new Swiper(".testimonials-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })
    }
  })()

  initializePage()
})
