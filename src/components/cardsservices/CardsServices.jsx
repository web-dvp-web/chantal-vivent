import "./cardsservices.css";
const CardsServices = (props) => {
  return (
    <div className="cardsServicesContainer">
      <img className="imgCardsServices" src={props.img} alt="img" />
      <p className="titreServices">{props.titre}</p>
      <p className="pServicesC1">{props.services}</p>
      <p className="pServicesC2">{props.services2}</p>
    
      <p className="pServicesC3">{props.services3}</p>
      <p className="pServicesC3">{props.services4}</p>
      
      <p className="pServicesC3">{props.services5}</p>
      <p className="pServicesC3">{props.services6}</p>
    </div>
  );
};
export default CardsServices;
