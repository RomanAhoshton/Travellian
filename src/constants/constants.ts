import popularSlide1 from "../images/Col-block1.png";
import popularSlide2 from "../images/Col-block2.png";
import popularSlide3 from "../images/Col-block3.png";
import specialSlide1 from "../images/Special1.png";
import specialSlide2 from "../images/Special2.png";
import specialSlide3 from "../images/Special3.png";
import destinationImage1 from "../images/Destination1.png";
import destinationImage2 from "../images/Destination2.png";
import destinationImage3 from "../images/Destination3.png";
import destinationImage4 from "../images/Destination4.png";
import avatar1 from "../images/Avatar1.svg";
import avatar2 from "../images/Avatar2.svg";
import avatar3 from "../images/Avatar3.svg";
import Star from "../icons/Star";
import HomeBackground from "../images/Home.png";



const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const formattedDate = `${day}.${month + 1}.${year}`;

const optionCount = 8;
const dateOptions = [{ value: formattedDate, label: formattedDate }];

for (let i = 1; i < optionCount; i++) {
  const nextDate = new Date(currentDate);
  nextDate.setDate(day + i);
  const nextDay = nextDate.getDate().toString().padStart(2, "0");
  const nextMonth = (nextDate.getMonth() + 1).toString().padStart(2, "0");
  const nextYear = nextDate.getFullYear();

  const nextFormattedDate = `${nextDay}.${nextMonth}.${nextYear}`;
  dateOptions.push({ value: nextFormattedDate, label: nextFormattedDate });
}

export const HomeImage = HomeBackground;

export const menuLinks = [
  { link: "Home" },
  { link: "Explore" },
  { link: "Blog" },
  { link: "Travel" },
];

export const bookNow = [
  {
    description: "Destination",
    option: [
      { value: "Dubai", label: "Dubai" },
      { value: "Paris", label: "Paris" },
      { value: "New York", label: "New York" },
      { value: "Tokyo", label: "Tokyo" },
      { value: "London", label: "London" },
      { value: "Sydney", label: "Sydney" },
      { value: "Rome", label: "Rome" },
      { value: "Cairo", label: "Cairo" },
    ],
  },
  {
    description: "Person",
    option: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
    ],
  },
  {
    description: "Check IN",
    option: dateOptions,
  },
  {
    description: "Check out",
    option: dateOptions,
  },
];

export const popularSlider = [
  { image: popularSlide1 },
  { image: popularSlide2 },
  { image: popularSlide3 },
  { image: popularSlide1 },
  { image: popularSlide2 },
  { image: popularSlide3 },
];

export const specialSlider = [
  {
    image: specialSlide1,
    title: "Lisbon, Portugal",
    stars: " ",
    subtitle:
      " 5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: {
      from: "From",
      number: "€500",
    },
    details: "",
  },
  {
    image: specialSlide2,
    title: "Athens, Greece",
    stars: " ",
    subtitle:
      " 5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: {
      from: "From",
      number: "€800",
    },
    details: "",
  },
  {
    image: specialSlide3,
    title: "Rome, Italy",
    stars: " ",
    subtitle:
      " 5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: {
      from: "From",
      number: "€750",
    },
    details: "",
  },
  {
    image: specialSlide1,
    title: "Lisbon, Portugal",
    stars: " ",
    subtitle:
      " 5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: {
      from: "From",
      number: "€500",
    },
    details: "",
  },
  {
    image: specialSlide2,
    title: "Athens, Greece",
    stars: " ",
    subtitle:
      " 5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: {
      from: "From",
      number: "€800",
    },
    details: "",
  },
  {
    image: specialSlide3,
    title: "Rome, Italy",
    stars: " ",
    subtitle:
      " 5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: {
      from: "From",
      number: "€750",
    },
    details: "",
  },
];

export const aboutItaly =
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.Italy, a traveler's dream, beckons with its rich history, art, and culinary delights. Explore ancient ruins in Rome, romantic canals in Venice, and Renaissance treasures in Florence. Savor delectable pasta, gelato, and world-class wines. Italy's diverse landscapes, from the Alps to coastal gems like Amalfi, ensure unforgettable adventures.";

export const destinationImages = [
  { image: destinationImage1 },
  { image: destinationImage2 },
  { image: destinationImage3 },
  { image: destinationImage4 },
  { image: destinationImage1 },
  { image: destinationImage2 },
  { image: destinationImage3 },
  { image: destinationImage4 },
];

export const travelsExperiences = [
  {
    avatar: avatar1,
    textReview:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    startReview: Star,
    fullName: "John Doe",
    position: "Accountant",
  },
  {
    avatar: avatar2,
    textReview:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    startReview: Star,
    fullName: "John Smith",
    position: "Journalist, HWO News",
  },
  {
    avatar: avatar3,
    textReview:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    startReview: Star,
    fullName: "Tamara Bellis",
    position: "Managing Director, JTH",
  },
  {
    avatar: avatar1,
    textReview:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    startReview: Star,
    fullName: "John Doe",
    position: "Accountant",
  },
  {
    avatar: avatar2,
    textReview:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    startReview: Star,
    fullName: "John Smith",
    position: "Journalist, HWO News",
  },
  {
    avatar: avatar3,
    textReview:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    startReview: Star,
    fullName: "Tamara Bellis",
    position: "Managing Director, JTH",
  },
];

export const footerLinks = [
  {
    title: "Menu",
    links: [
      { link: "Home" },
      { link: "Explore" },
      { link: "Travel" },
      { link: "Blog" },
      { link: "Pricing" },
    ],
  },
  {
    title: "Information",
    links: [
      { link: "Destinations" },
      { link: "Supports" },
      { link: "Terms & Conditions" },
      { link: "Privacy" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { link: "+123 456 789" },
      { link: "info@travellian.com" },
      { link: "1245, New York, USA" },
    ],
  },
];
