// login and match to password
// check isLoggedIn?

//data that is saved until posted to main database
export const deliveries = [
  {
    _id: "!",
    isOpen: true,
    vehicle: "x",
    region: "Carpenteria",
    location: "Craig's Farm",
    foodType: "Produce",
    lbsPickedUp: 100.5,
    //other donation details
  },
  {
    _id: "@",
    isOpen: false,
    recipients: ["#"],
    vehicle: "x",
    region: "Carpenteria",
    location: "Darla's Coop",
    foodType: "Baked Goods",
    lbsPickedUp: 30,
    //other donation details
  },
];

// export const recipients = [{
//     _id : "#",
//     isOpen: false,
//     vehicle: "x",
//     location: "Miny Pony Tony's",
//     weight: 13
// }, {
//     _id : "$",
//     isOpen: false,
//     vehicle: "x",
//     location: "Kursten's Nursin'",
//     weight: 7
// }, {
//     _id : "$%",
//     isOpen: false,
//     vehicle: "x",
//     location: "Gabbin's Cabins'",
//     weight: 10.5
// },
// ]

//MOCK APP DATA
export const drivers = [
  {
    _id: 1,
    driver: "Becky",
    isLoggedIn: false,
    pin: "6666",
    runningBalance: 100,
    clock_in: "02-Jan-21",
    clock_out: null,
  },
  {
    _id: 2,
    driver: "Kevin",
    isLoggedIn: true,
    pin: "1313",
    runningBalance: 0,
    clock_in: "02-Jan-21",
    clock_out: null,
  },
];

export const vehicles = [
  {
    _id: "y",
    name: "Honda Element",
    driver: null,
  },
  {
    _id: "x",
    name: "Box Truck",
    driver: 1,
  },
];

export const donors = ["Darla's Coop", "Ebby's Organic Farm", "Craig's Farm"];
export const recipients = ["Fannys old home", "Mini pig farm"];
export const region = ["Carpinteria", "Goleta", "Lompoc"];
