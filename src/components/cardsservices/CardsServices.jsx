import "./cardsservices.css";
import separation from "../../images/separation.png";
const CardsServices = (props) => {
  return (
    <div className="cardsServicesContainer">
      <img className="imgCardsServices" src={props.img} alt="img" />
      <p className="titreServices">{props.titre}</p>
      <p className="pServicesC1">{props.services}</p>
      <p className="pServicesC2">{props.services2}</p>
      <p className="pServicesC3">{props.services3}</p>
      <b><p className="servicesG">{props.titreg}</p></b>
      <p className="pServicesC3">{props.services4}</p>
      <p className="pServicesC3">{props.services5}</p>
      <div className="separationContainer">
        <img className="separation" src={separation} alt="ligne rouge" />
        <p className="prix">{props.services6}</p>
      </div>
    </div>
  );
};
export default CardsServices;
