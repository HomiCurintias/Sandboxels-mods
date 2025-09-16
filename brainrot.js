elements.Brainrot = {
  color: "#28d232",
  behavior: behaviors.LIQUID,
  category: "special",
  state: "liquid",
  density: 1,
  movable: true,
  temp: 0,
};

elements.IceMangos = {
  color: "#9fc6f2",
  state: "solid",
  behavior: behaviors.SOLID,
  weight: 5,
  movable: true,
  temp: -70,
  tempHigh: 0,
  stateHigh: "Mangos",
};

elements.Mangos = {
  color: "#eaa95f",
  category: "food",
  state: "solid",
  behavior: behaviors.SOLID,
  tempLow: -10,
  stateLow: "IceMangos",
  colorBG: "#F5E100",
  temp: 20,
  weight: 3,
  movable: true,
};
