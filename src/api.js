const getPeople = () => new Promise(resolve => setTimeout(() => {
    const data = {
        people: [
            { id: 1, name: 'Harry', age: 30 },
            { id: 2, name: 'Homer', age: 19 },
            { id: 3, name: 'Barry', age: 8 },
            { id: 4, name: 'James', age: 21 },
            { id: 5, name: 'Heal', age: 12 }
        ]
    }
    resolve(data)
}, 3000))

export { getPeople }