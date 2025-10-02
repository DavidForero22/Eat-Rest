const CardDescription = ({desc}) => {
    return (
        <p className="card-description" dangerouslySetInnerHTML={{ __html: desc }} />
    )
}

export default CardDescription;