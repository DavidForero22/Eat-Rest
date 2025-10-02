import CardDescription from "./cardDescription";

const Card = ({title, image, description, link}) => {
    return (
    <a href={link} target="_blank" title={title} className="card">
        <img className="card-img" src={image}/>
        <p>{title}</p>
        <CardDescription desc= {description}/>
    </a>
    )
}

export default Card;