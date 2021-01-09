const features = [
  {
    icon: '#icon-global',
    heading: 'Worlds greatest luxury homes',
    text:
      'Atque incidunt est ipsa et laudantium, autem at delectus perferendis, quam possimus mollitia veniam, dolore nobis exercitationem necessitatibus minus alias unde quaerat!',
  },
  {
    icon: '#icon-trophy',
    heading: 'Only the absolute best properties',
    text:
      'Nobis tempora in facilis quae voluptates ea maiores aut incidunt reprehenderit dicta corrupti vel obcaecati inventore assumenda adipisci, totam quos sapiente asperiores!',
  },
  {
    icon: '#icon-map-pin',
    heading: 'All located in top-tier locations',
    text:
      'Deleniti, ullam reprehenderit optio nisi provident, ipsa, doloribus nobis fuga praesentium magnam id itaque sapiente aspernatur iusto. Laboriosam sed vel sunt minima.',
  },
  {
    icon: '#icon-key',
    heading: 'New home in under one week',
    text:
      'Rem officiis culpa atque molestias facere saepe quis veritatis in molestiae odit omnis repellat sunt, aperiam excepturi cum! Enim minus hic laborum?',
  },
  {
    icon: '#icon-presentation',
    heading: 'Highest rated realtors',
    text:
      'Enim rerum error optio ab mollitia, officia possimus corrupti eius unde asperiores, eveniet labore harum sapiente hic.',
  },
  {
    icon: '#icon-lock',
    heading: 'Secure payments on livin',
    text:
      'Magni eius consequatur, placeat unde esse totam? Molestiae ad similique sequi minus. Molestias a quisquam nisi at nulla placeat architecto iusto pariatur?',
  },
];

const story = {
  pictures: {
    backgroundImage: require('./images/back.jpg'),
    imageOne: require('./images/story-1.jpeg'),
    imageTwo: require('./images/story-2.jpeg'),
  },
  content: {
    heading: 'Happy customers',
    quote: 'The best decision of our lives',
    text:
      'Consequuntur natus asperiores magni itaque doloribus iure distinctio, praesentium voluptates reprehenderit inventore.',
    buttonText: 'Find your own home',
  },
};

const homes = {
  properties: [
    {
      name: 'Beautiful Family House',
      image: require('./images/house-1.jpeg'),
      icon: '#icon-heart-full',
      location: 'USA',
      rooms: 5,
      metersSquared: '325',
      price: '1,200,000',
    },
    {
      name: 'Modern Glass Villa',
      image: require('./images/house-2.jpeg'),
      icon: '#icon-heart-full',
      location: 'Canada',
      rooms: 6,
      metersSquared: '450',
      price: '2,750,000',
    },
    {
      name: 'Cozy Country House',
      image: require('./images/house-3.jpeg'),
      icon: '#icon-heart-full',
      location: 'UK',
      rooms: 4,
      metersSquared: '250',
      price: '850,000',
    },
    {
      name: 'Large Rustical Villa',
      image: require('./images/house-4.jpeg'),
      icon: '#icon-heart-full',
      location: 'Portugal',
      rooms: 6,
      metersSquared: '480',
      price: '1,950,000',
    },
    {
      name: 'Majestic Palace House',
      image: require('./images/house-5.jpeg'),
      icon: '#icon-heart-full',
      location: 'Germany',
      rooms: 18,
      metersSquared: '4230',
      price: '9,500,000',
    },
    {
      name: 'Modern Familiy Apartment',
      image: require('./images/house-6.jpeg'),
      icon: '#icon-heart-full',
      location: 'Italy',
      rooms: 3,
      area: '180',
      price: '600,000',
    },
  ],
  icons: {
    like: '#icon-heart-full',
    location: '#icon-map-pin',
    rooms: '#icon-profile-male',
    area: '#icon-expand',
    price: '#icon-key',
  },
};

export { features, story, homes };
