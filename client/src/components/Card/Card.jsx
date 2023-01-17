import React from "react";

const Card = (props) => {
    
    return (
        <div>
            <p>id:{props.id}</p>
            <p>name:{props.name}</p>
            <p>img:{props.img}</p>
            <p>type:{props.type}</p>
            <p>health:{props.health}</p>
            <p>attack:{props.attack}</p>
            <p>defense:{props.defense}</p>
            <p>speed:{props.speed}</p>
            <p>height:{props.height}</p>
            <p>weight:{props.weight}</p>
        </div>
    )

}
export default Card