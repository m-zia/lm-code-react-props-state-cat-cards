interface CatCardProps {
    name: string,
    species: string,
    food: Array<string>,
    birth: number
}

//implicit return
const CatCard : React.FC<CatCardProps> = ({name, species, food, birth}) =>
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {food}</p>
            <p className="card__text">Birth Year: {birth}</p>
        </div>;

export default CatCard;