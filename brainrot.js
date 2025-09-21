elements.Mustard = {
  color: ["#FFD000"],
  behavior: behaviors.LIQUID,
  category: "food",
  state: "liquid",
  tempLow: -10,
  tempHigh: 100,
  stateHigh: "steam",
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
  stateHigh: "steam",
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
  color: ["#eaa95f", "#F5E100"],
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

elements.GrimaceShakeGas = {
  color: ["#5900ad"],
  state: "gas",
  behavior: behaviors.GAS,
  movable: true,
  reactions: {
    "fragance": { elem2: "Brainrot", chance: 10 }
  },
  tempLow: 0,
  stateLow: "GrimaceShake",
}

elements.GrimaceShakeSolid = {
  color: ["#5900ad"],
  state: "solid",
  behavior: behaviors.SOLID,
  movable: true,
  tempHigh: -50,
  stateHigh: "GrimaceShake",
}

elements.GrimaceShake = {
  color: ["#5900ad"],
  state: "liquid",
  behavior: behaviors.LIQUID,
  movable: true,
  tempHigh: 100,
  stateHigh: "GrimaceShakeGas",
  tempLow: -100,
  stateLow: "GrimaceShakeSolid",
  category: "food",
  reactions: {
    "Brainrot": { elem2: "stench", chance: 100 }
  },
}
