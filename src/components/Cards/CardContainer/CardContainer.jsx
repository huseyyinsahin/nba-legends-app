import PlayerCard from "../PlayerCard/PlayerCard";
import "./CardContainer.css"

function CardContainer({ data }) {
  return (
    <div className="cardContainer">
      {data.map((item) => (
        <PlayerCard {...item} />
      ))}
    </div>
  );
}

export default CardContainer;
