// file Mole.js
import { useEffect } from 'react'
import moleImg from "./images/mole.png"

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer);
    }, [props.setDisplayMole]);

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            alt="Mole"
            onClick={props.handleBop} />
        </div>
    )
}


export default Mole;

