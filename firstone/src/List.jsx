
function List(){

    const fruits = [
        {key: 1, name: "apple", calories: 95},
        {key: 2, name: "banana", calories: 195},
        {key: 3, name: "orange", calories: 15},
        {key: 4, name: "strawberry", calories: 75},
        {key: 5, name: "peach", calories: 100},
    ]
    fruits.sort((a,b) => a.calories - b.calories)
    const lowCalFruits = fruits.filter(fruits=> fruits.calories <100);

    const listItems = lowCalFruits.map(fruits => <li key={fruits.key}>{fruits.name} {fruits.calories}</li>);

    return(
        <ol>{listItems}</ol>
    )
}

export default List