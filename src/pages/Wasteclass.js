import Waste from '../components/Waste';
import WasteItem from "../assets/data.json";

export function Wasteclass() {
    return (

        <>
            <div className='movie-container'>
                {WasteItem.map((para, index) => (<Waste key={index} {...para}></Waste>))}
            </div>

        </>);
}
