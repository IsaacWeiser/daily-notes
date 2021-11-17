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

// display out the notes
// stretch goal here is to be able to add spaces and "and" to the subject section when there are multiple items

for (let notation of notes) {
    console.log (`
    Note ${notation.id} 
    ${notation.date}
    I learned ${notation.subject}
    I spent ${notation.timeSpent}Hrs working on it.
    I felt ${notation.feeling}.
    `)
}

//search for a specific note based on a feeling
const searchTerm = "pog"

for (const item of notes) {
    if (item.feeling === searchTerm) {
        console.log(" here's that note sir: ")
        console.log(item)
    }
}