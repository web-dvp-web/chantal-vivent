

import "./cardsservices.css";
import separation from "../../images/separation2.png";
const CardsServices = (props) => {
  return (
    <div className="cardsServicesContainer">
      <div className="imgCardsServicesContainer">
        <img className="imgCardsServices" src={props.img} alt="img" />
      </div>
      <div className="ServiceContainer">
        <p className="titreServices">{props.titre}</p>
        <div className="pServicesContainer">
      <p className="pServicesC1">{props.services}</p>
      <p className="pServicesC2">{props.services2}</p>
      <p className="pServicesC3">{props.services3}</p>
      <p className="pServicesC3">{props.services4}</p>
      <p className="pServicesC3">{props.services5}</p>
      <b className="bTitre"><p className="servicesG">{props.titreg}</p></b>
      <p className="pServicesC3">{props.services7}</p>
      <p className="pServicesC3">{props.services8}</p>
      <p className="pServicesC3">{props.services9}</p>   
      <p className="pServicesC3">{props.services10}</p>         
      </div>
      <div className="separationContainer">
        <div className="imgSeparationContainer">
          <img className="separation" src={separation} alt="ligne rouge" />
        </div>
        <p className="prix">{props.services6}</p>
      </div>
      <a className="aButtonContact" href="/contact"><button className="buttonMeContacter">Me contacter</button></a>
      <h1 className="rappel">CHANTAL VIVENT</h1>
      <h1 className="rappel">06 80 52 04 94</h1>
      </div>

    </div>
  );
};
export default CardsServices;
