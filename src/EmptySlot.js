// File emptyslot 
import React, { useEffect } from 'react';
import molehillImage from './images/molehill.png';

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(true);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [props.setDisplayMole]);

    return (
        <div>
            <img
                style={{ width: '30vw' }}
                src={molehillImage}
                alt="Molehill"
            />
        </div>
    );
}

export default EmptySlot;
