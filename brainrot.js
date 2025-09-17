elements.Mustardice = {
  color: ["#cbf3a6ff"],
  behavior: behaviors.POWDER,
  state: "solid",
  weight: 3,
  tempHigh: 10,
  temp: -20,
  stateHigh: "Mustard",
  movable: true,
}

elements.Mustard = {
  color: ["#FFD000"],
  behavior: behaviors.LIQUID,
  category: "food",
  state: "liquid",
  tempLow: -10,
  stateLow: "Mustardice",
  weight: 1,
  movable: true,
  temp: 20,
}

elements.Brainrot = {
  color: ["#28d232"],
  behavior: behaviors.LIQUID,
  category: "special",
  state: "liquid",
  density: 1,
  movable: true,
  temp: 20,
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
};

elements.Mangos.reactions = {
    "Brainrot": { elem2: "Mustard", chance: 100 }
};
