elements.brainrot = {
  color: ["#28d232"],
  behavior: behaviors.LIQUID,
  category: "special",
  state: "liquid",
  density: 1,
}
elements.IceMangos = {
    color: "#9fc6f2",
    state: "solid",
    behavior: behaviors.SOLID,
    weight: 5
}


elements.mangos = {
    color: ["#eaa95f"],
    category: "food",
    state: "solid",
    behavior: behaviors.SOLID,
    tempHigh: 100,
    tempLow: -10,
    stateLow: "IceMangos",
    colorBG: "#F5E100",
    weight: 3,
    reactions: {
    "Brainrot": {"elem2": "Mustard", "chance": 100}
    }
}
