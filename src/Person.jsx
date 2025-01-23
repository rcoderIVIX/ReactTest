import { useState } from "react";


function Person(){
    const [person, setPerson] = useState({name: '.', age: 30})


    return(<div className='all'>

        <div>React Test</div>
        <div className = 'wrapper'>
        <div className ='enterName'>Enter Name</div>
        <input type='text'
        onChange={(keystroke)=>
            setPerson(prevPerson => ({...prevPerson, name: keystroke.target.value}))
        }
        value = {person.name}
        />
        <h1>{person.name}</h1>
        </div>


        <div className ='entire-wrapper-2'>

        <div>Increment Age</div>
        <div className='wrapper2'>
        <button className='btn'onClick={()=> setPerson(prevPerson => ({...prevPerson, age: prevPerson.age - 1}))}>-</button>
        <h1>Age: {person.age}</h1>
        <button className = 'btn' onClick={()=> setPerson(prevPerson => ({...prevPerson, age: prevPerson.age + 1}))}>+</button>
        </div>
        </div>       
   
        </div>
)
}

export default Person