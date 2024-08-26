import PlayerCard from "./PlayerCard";
import "./PlayerCard.css";

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
