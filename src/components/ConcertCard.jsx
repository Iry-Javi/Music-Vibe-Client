import { Link } from "react-router-dom";

function ConcertCard ( { title, description, concert_id } ) {
  
  return (
    <div className="ConcertCard card">
      <Link to={`/concerts/${concert_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}
 
export default ConcertCard;