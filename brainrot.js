addElement("Brainrot", {
    color: "#28d232",
    state: "liquid",
    behavior: "liquid",
    category: "Special"
})

addElement("IceMangos", {
    color: "#9fc6f2",
    state: "solid",
    behavior: "solid"
})

addElement("Mangos", {
    color: "#eaa95f",
    category: "Food",
    state: "solid",
    behavior: "solid",
    tempHigh: 100,
    tempLow: -10,
    stateLow: "IceMangos",
    reactions: {
        "Brainrot": { "elem2": "Mustard", "chance": 100 }
    }
})
