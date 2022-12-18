import "./Pictures.css"
import "./OrderButton"
import OrderButton from "./OrderButton"

const Pictures =(props)=> {
    return (
        <div className="images">
            <img src={props.myPicture} alt=""/>
            <h3 className="main-heading">{props.myTitle}</h3>
            <OrderButton />
        </div>
    )
}

export default Pictures