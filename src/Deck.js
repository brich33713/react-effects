import react, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import {v4 as uuid} from 'uuid'

const Deck = ({deck,handleClick}) => {
    const[stack,updateStack] = useState([])
    useEffect(()=>{
            const intervalId = setInterval(async() => {
                let angle = Math.random() * 360
                let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`)
                updateStack(stack => [...stack,{...card.data.cards[0],remaining: card.data.remaining,angle}])
            },1000)    
                
            return () => {
                clearInterval(intervalId)
            }
            
        },[])

    
    for(let card of stack){
        if(card.remaining === 0){
            let btn = document.querySelector('button')
            btn.innerText = 'No More Cards!'
        }
    }

    return (
    <div>
        {stack.map(card => <Card key={uuid()} data={card} />)}
    </div>
    )

}

export default Deck;