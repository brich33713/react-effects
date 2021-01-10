import react from 'react'
import {v4 as uuid} from 'uuid'

const Card = ({data}) => {


    return (<div key={uuid()}>
        <img src={data.image} style={{position: 'absolute', transform: `rotate(${data.angle}deg)`, marginLeft: '240px', marginRight: '240px', marginTop: '240px', display: 'block'}} />
    </div>)
}

export default Card;