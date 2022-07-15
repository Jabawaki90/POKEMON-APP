import Image from 'next/image'
import {useState} from 'react'

const SinglePokemon = ({result})=>{

    const [pokemon, setPokemon] = useState(result)
    console.log('single poke page')
    console.log(pokemon)
    
    return <div>
        <Image/>
        <div>
            <h4>{pokemon.name}</h4>
            <p>{pokemon.types[0].type.name}</p>
            <p>base experience</p>
            <p>abilities</p>
            <ul></ul>
        </div>
    </div>
}

export default SinglePokemon