import Card from "./Card"
import starfield from '../assets/starfield.jpg'
import liesOfp from '../assets/lies-of-p.jpg'
import cyberpunk from '../assets/cyberpunk.jpg'
import totk from '../assets/zeldatotk.jpg'

import './cards.css'

const cards = [
    {
        id:1,
        title: 'Starfield',
        image: starfield,
        url: 'https://store.steampowered.com/app/1716740/Starfield/'
    },
    {
        id:2,
        title: 'Lies Of P',
        image: liesOfp,
        urL : 'https://store.steampowered.com/app/1627720/Lies_of_P/'
    },
    {
        id:3,
        title: 'Cyberpunk',
        image: cyberpunk,
        url: 'https://store.steampowered.com/app/2138330/Cyberpunk_2077_Phantom_Liberty/?l=spanish'
    },
    {
        id:4,
        title: 'Tears of the kingdom',
        image: totk,
        url: 'https://www.nintendo.com/es-mx/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/'
    }
]

function Cards() {
  return (
    <div className="container d-flex h-100 align-items-center">
        <div className="row">
            {
                cards.map(card=>(
                    <div className="col-md-3" key={card.id} >
                        <Card title={card.title} image={card.image} url={card.url}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Cards