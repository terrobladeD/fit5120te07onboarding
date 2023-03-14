import React, { useState } from 'react';
import axios from 'axios';
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

            // 
            const formData = new FormData();
            formData.append('inputValue', inputValue);

            axios.post('http://127.0.0.1:5000/profile', formData)
                .then(response => {

                    if (JSON.stringify(response.data).length <5) {
                        setCollectionDay("");
                        setLandfill("");
                        setRecycle("");
                        setFood("");
                        alert("wrong input")
                    }
                    else {
                        const resjson = JSON.parse(response.data.replace("NaN", '""'));
                        setCollectionDay(resjson.day ? resjson.day : "Not listed");
                        setLandfill(resjson.landfilldate ? resjson.landfilldate : "Not listed");
                        setRecycle(resjson.recycledate ? resjson.recycledate : "Not listed");
                        setFood(resjson.fooddate ? resjson.fooddate : "Not listed");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            // //make query here
            // setCollectionDay("Monday");
            // setLandfill("2023-03-13");
            // setRecycle("2023-03-13");
            // setFood("2023-03-13");

        }
    };

    return (
        <div style={{ color: "white", marginTop: "5vw" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "space-around" }}>
                <label>
                    Enter your address:
                </label>
                <input type="text" value={inputValue} onChange={handleInputChange} style={{ width: "20vw" }} />

                <button type="submit">Submit</button>
            </form>
            <div style={{ marginTop: "5vw" }}>
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