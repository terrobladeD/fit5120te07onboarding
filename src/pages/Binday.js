import React, { useState } from 'react';
import '../App.css';

export function Binday() {
    const [inputValue, setInputValue] = useState('');
    const [collectionDay, setCollectionDay] = useState('');
    const [landfill, setLandfill] = useState('');
    const [recycle, setRecycle] = useState('');
    const [food, setFood] = useState('');



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue !== "") {
            //make query here
            setCollectionDay("Monday");
            setLandfill("2023-03-13");
            setRecycle("2023-03-13");
            setFood("2023-03-13");

        }
    };

    return (
        <div style={{ color: "white" ,marginTop:"5vw"}}>
            <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "space-around" }}>
                <label>
                    Enter your postcode:
                </label>
                <input type="text" value={inputValue} onChange={handleInputChange} style={{ width: "20vw" }} />

                <button type="submit">Submit</button>
            </form>
            <div style={{marginTop:"5vw"}}>
                <div className='dateinfo'>
                    <span>Collection Day:</span>
                    <span className='notifyDay'>{collectionDay}</span>
                </div>
                <div className='dateinfo'>
                    <span>Next Landfill:</span>
                    <span className='notifyDay'>{landfill}</span>
                </div>
                <div className='dateinfo'>
                    <span>Next Recycle:</span>
                    <span className='notifyDay'>{recycle}</span>
                </div>
                <div className='dateinfo'>
                    <span>Next Food:</span>
                    <span className='notifyDay'>{food}</span>
                </div>

            </div>
        </div>
    );
}