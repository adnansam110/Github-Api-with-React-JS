import React from 'react'
import Person from './Person'

function NameList() {
    // const names= ['Adnan', 'Hassan', 'Usman']
    // const nameList= names.map((name)=> <h2>{name}</h2>)

    const persons = [
        {
            id:1,
            name:'Adnan',
            age:21,
            skill:'React'
        },
        {
            id:2,
            name:'Hassan',
            age:22,
            skill:'Vue'
        },
        {
            id:3,
            name:'Usman',
            age:24,
            skill:'Angular'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            <h1>About People</h1>
            {personList}
        </div>
    )
}

export default NameList
