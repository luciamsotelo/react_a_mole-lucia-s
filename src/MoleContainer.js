// file MoleContainer.js

import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer({setScore, score}) {
    const [displayMole, setDisplayMole] = useState(false);

    const handleBop = () => {
        setScore(score+1);
        setDisplayMole(false);
    };

    const moleComponent = displayMole ? (
        <Mole handleBop={handleBop} setDisplayMole={setDisplayMole} />
    ) : ( 
        <EmptySlot setDisplayMole={setDisplayMole}/>
    );
    return (
        <div className="MoleContainer" >
            {moleComponent}
        </div>
    );
}

export default MoleContainer;
