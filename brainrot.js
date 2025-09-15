addElement("Brainrot", {
    color: "#28d232",
    state: "liquid",
    behavior: "liquid",
    category: "Special",
    colorBG: "#F5E100",
    weight: 1
});

addElement("IceMangos", {
    color: "#9fc6f2",
    state: "solid",
    behavior: "solid",
    weight: 5
});

addElement("Mangos", {
    color: "#eaa95f",
    category: "Food",
    state: "solid",
    behavior: "solid",
    tempHigh: 100,
    tempLow: -10,
    stateLow: "IceMangos",
    colorBG: "#F5E100",
    weight: 3,
    reactions: {
        "Brainrot": { "elem2": "Mustard", "chance": 100 }
    }
});
