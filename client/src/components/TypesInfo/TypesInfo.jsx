import { useSelector } from "react-redux";

const TypesInfo = () => {
    const types = useSelector(state=>state.types)

    return (
        <div>
            {types.map(type=>{
                return <p>
                    {type.name}
                </p>
            })}
        </div>
    )

}
export default TypesInfo;