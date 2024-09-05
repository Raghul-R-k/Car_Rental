// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";



const vehicles = [
  {
    id: 1,
    type: 'Compact Cars',
    description: 'Small and fuel-efficient cars suitable for city driving and short trips.',
    examples: 'Toyota Corolla, Honda Civic, Ford Focus'
  },
  {
    id: 2,
    type: 'Sedans',
    description: 'Mid-size to full-size cars with comfortable seating and ample trunk space.',
    examples: 'Toyota Camry, Honda Accord, Nissan Altima'
  },
  {
    id: 3,
    type: 'SUVs (Sport Utility Vehicles)',
    description: 'Larger vehicles with higher ground clearance, suitable for family trips or off-road driving.',
    examples: 'Toyota RAV4, Ford Escape, Honda CR-V'
  },
  {
    id: 4,
    type: 'Vans',
    description: 'Vehicles with extended seating capacity, suitable for transporting larger groups of people or cargo.',
    examples: 'Dodge Grand Caravan, Chrysler Pacifica, Toyota Sienna'
  },
  {
    id: 5,
    type: 'Trucks',
    description: 'Vehicles with open beds for transporting cargo or towing trailers.',
    examples: 'Ford F-150, Chevrolet Silverado, Toyota Tacoma'
  },
  {
    id: 6,
    type: 'Luxury Cars',
    description: 'High-end vehicles with premium features and luxurious interiors.',
    examples: 'BMW 5 Series, Mercedes-Benz E-Class, Audi A6'
  },
  {
    id: 7,
    type: 'Convertibles',
    description: 'Cars with retractable roofs, perfect for enjoying open-air driving in warm weather.',
    examples: 'Ford Mustang Convertible, Chevrolet Camaro Convertible, Mazda MX-5 Miata'
  },
  {
    id: 8,
    type: 'Electric Cars (EVs) and Hybrids',
    description: 'Environmentally-friendly vehicles with electric or hybrid powertrains, offering improved fuel efficiency and lower emissions.',
    examples: 'Tesla Model 3, Toyota Prius, Nissan Leaf'
  },
  {
    id: 9,
    type: 'Sports Cars',
    description: 'High-performance vehicles designed for speed and agility, ideal for enthusiasts or special occasions.',
    examples: 'Chevrolet Corvette, Porsche 911, Ford Mustang GT'
  },
  {
    id: 10,
    type: 'Motorcycles',
    description: 'Two-wheeled vehicles suitable for solo riders or passengers, offering a fun and adventurous way to explore the open road.',
    examples: 'Harley-Davidson, BMW Motorrad, Honda Gold Wing'
  }
];

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

// export default carData ; 
export default vehicles ; 








