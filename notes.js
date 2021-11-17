const notes = [
    {
        id: 1,
        subject: "flex box",
        date: "11-15-21",
        feeling: "yeet",
        timeSpent: 6
    },
    {
        id: 2,
        subject: "data types",
        date: "11-16-21",
        feeling: "pog",
        timeSpent: 2
    }
]


console.log(notes)

// new note added using push

notes.push({id:3, subject:["push function", "arrays and objects", "for...of loops", "array iteration"], date: "11-17-21", feeling:"somewhat anxious", timeSpent:2.5})

console.log("today's new knowledge: " + JSON.stringify(notes[2]))
console.log(notes[2])