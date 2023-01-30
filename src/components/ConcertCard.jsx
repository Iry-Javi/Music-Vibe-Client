import { Link } from "react-router-dom";

function ConcertCard ( { title, description, _id } ) {
  
  return (
    <div className="ConcertCard card">
      <Link to={`/concerts/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}
 
export default ConcertCard;