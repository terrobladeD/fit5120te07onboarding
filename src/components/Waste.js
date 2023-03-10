import React from "react";

const setWasteBin = (num) => {
    if (num === 1) {
        return "green food bin";
    } else if (num === 2) {
        return "red landfill bin";
    } else {
        return "yellow recycle bin";
    }
}

const Waste = ({ name, imageSrc, wasteClass}) => (
    <div className="movie">
        <img src={process.env.PUBLIC_URL + imageSrc} alt={process.env.PUBLIC_URL + imageSrc} />
        <div className="movie-info">
            <h3>{name}</h3>
        </div>
        <div className="movie-over">
            <h2 className={"garbage"+wasteClass}>{setWasteBin(wasteClass)}</h2>

        </div>
    </div>
)

export default Waste;