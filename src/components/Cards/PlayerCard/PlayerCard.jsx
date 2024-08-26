import { useState } from "react";
import "./PlayerCard.css";

function PlayerCard({ name, img, statistics }) {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="playerCard" onClick={handleClick}>
      <div className="card">
        {show ? (
          <img src={img} alt="" />
        ) : (
          statistics.map((item) => <p>🏀{item}</p>)
        )}
        <p>{name}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
