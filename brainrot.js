if (!categories.Mod) {
    categories.Mod = [];
}

elements.Mustard = {
  color: ["#FFD000"],
  behavior: behaviors.LIQUID,
  category: "food",
  state: "liquid",
  tempLow: -10,
  tempHigh: 100,
  stateHigh: "oxygen",
  stateLow: "Mustardice",
  weight: 1,
  movable: true,
  temp: 20,
};

elements.Brainrot = {
  color: ["#28d232"],
  behavior: behaviors.LIQUID,
  category: "special",
  state: "liquid",
  density: 1,
  movable: true,
  temp: 20,
  tempHigh: 200,
  stateHigh: "oxygen",
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
  color: ["#eaa95f"],
  category: "food",
  state: "solid",
  behavior: behaviors.POWDER,
  tempLow: -10,
  stateLow: "IceMangos",
  colorBG: ["#F5E100"],
  temp: 20,
  weight: 3,
  movable: true,
  tempHigh: 75,
  stateHigh: "ash",
};

elements.Mangos.reactions = {
    "Brainrot": { elem2: "Mustard", chance: 100 }
};
