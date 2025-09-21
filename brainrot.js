elements.Mustard = {
  color: ["#FFD000"],
  behavior: behaviors.LIQUID,
  category: "food",
  state: "liquid",
  tempLow: -10,
  tempHigh: 100,
  stateHigh: "oxygen",
  weight: 1,
  movable: true,
  temp: 20,
};

elements.Brainrot = {
  color: ["#28d232"],
  behavior: behaviors.LIQUID,
  category: "special",
  state: "liquid",
  movable: true,
  temp: 20,
  tempHigh: 200,
  stateHigh: "steam", // idem aqui
};

elements.IceMangos = {
  color: ["#9fc6f2"],
  state: "solid",
  behavior: behaviors.POWDER,
  weight: 5,
  movable: true,
  temp: -70,
  tempHigh: 20,
  stateHigh: "Mangos",
};

elements.Mangos = {
  color: ["#eaa95f", "#F5E100"], // combinei as duas cores
  category: "food",
  state: "solid",
  behavior: behaviors.POWDER,
  tempLow: -10,
  stateLow: "IceMangos",
  temp: 20,
  weight: 3,
  movable: true,
  tempHigh: 75,
  stateHigh: "ash",
  reactions: {
    "Brainrot": { elem2: "Mustard", chance: 100 }
  },
};

elements.Labubu = {
  color: ["#dadada", "#dbd9db"],
  state: "solid",
  behavior: behaviors.POWDER,
  tempLow: -70,
  stateLow: "ice",
  temp: 20,
  weight: 3,
  movable: true,
  tempHigh: 75,
  stateHigh: "ash",
};

elements.Boobbie = {
  color: ["#ff008c", "#ff00c8"],
  state: "solid",
  behavior: behaviors.POWDER,
  tempLow: -70,
  temp: 20,
  weight: 3,
  movable: true,
  tempHigh: 75,
  stateHigh: "ash",
  reactions: {
    "Brainrot": { elem2: "Labubu", chance: 50 }
  },
};
