import React, {useState} from 'react';

function MyCommponent(){

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Barsam")
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={()=>updateName()}>Reveal 🪄</button>
        </div>
    )

}

export default MyCommponent