import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Log from './Log';
import GraficoDatos from './GraficoDatos';

const Index = () => {
    const [position, setPosition] = useState(0);

    return (
        <>
            <Navbar location={position} setLocation={setPosition} />
            <div className="container mt-2">
                {
                    position === 0 ? <GraficoDatos /> : position === 1 ? <Log /> : null
                }
            </div>
        </>
    )
}

export default Index
