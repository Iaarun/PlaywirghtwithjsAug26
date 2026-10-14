const person = {
    username: "Alex",
    age: 35,
    city: "Bengaluru",
    isActive: true
}

console.log(typeof person)
console.log(person.username)
console.log(person['age'])
console.log(person.isActive)


const person2 = {
    data:[
    {
    username: "Alex1",
    age: 35,
    city: "Bengaluru",
    isActive: true
    },
    {
    username: "Alex2",
    age: 49,
    city: "Bengaluru North",
    isActive: false,
    102: 'pass'
    }
]
    
}

console.log(typeof person2.data)
console.log( person2.data[0].username)
console.log( person2.data[1])
