
const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
]
const allName = students.map( s => s.name);
const ids = students.filter( s => s.id)
const bigger = students.filter(s => s.id > 40);


console.log(bigger);  


