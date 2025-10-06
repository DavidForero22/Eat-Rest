import CardDescription from "./cardDescription";
import cardLayout from "../assets/img-layout.png";

const Card = ({title, image, description, link}) => {
    return (
    <a href={link} target="_blank" title={title} className="card">
        <img className="card-img" src={image} alt={title} onError={(e) => {
            e.target.onError = null;
            e.target.src = cardLayout;
        }}/>
        <p>{title}</p>
        <CardDescription desc= {description}/>
    </a>
    )
}

export default Card;