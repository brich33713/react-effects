import react, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Deck from './Deck.js'
import Card from './Card.js'
import {v4 as uuid} from 'uuid'


const DeckWrapper = () => {

    const[deckId,changeDeck] = useState('')
    const[cardsDrawing,setcardsDrawing] = useState(false)
    

    useEffect(()=>{
        async function getDeck(){
            let deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            changeDeck(deck);    
        }
        getDeck()      
        },[])

    const buttonRef = useRef()
    
    const handleClick = async(e) => {
            e.preventDefault()  
            setcardsDrawing(!cardsDrawing)
            e.target.innerText = (e.target.innerText === 'Start Drawing!') ? `Stop Drawing!` : `Start Drawing!`; 
    }

    if(buttonRef.current){
        console.log(buttonRef.current.innerText)
        if(buttonRef.current.innerText === 'No More Cards!'){
            setcardsDrawing(false)
            console.log(setcardsDrawing)
        }
    }

    // if(buttonRef.current.innerText === 'No More Cards!'){
    //     setcardsDrawing(false)
    // }

    return(
        <div key='deck'>
            {<button onClick={handleClick} ref={buttonRef}>Start Drawing!</button>}
            {cardsDrawing && <Deck deck={deckId} handleClick={handleClick} />}
        </div>
    )
}


export default DeckWrapper;