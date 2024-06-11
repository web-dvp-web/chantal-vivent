import MenuOuvrant from "../menuouvrant/MenuOuvrant";
import medaillon from "../../images/portraitmedaillon.png";
import "./header.css";
const Header = (props) => {
  return (
    <div className="headerContainer">
      <MenuOuvrant />
      <div className="medaillonTitreLogoContainer">
        <div className="medaillonContainer">
          <img
            src={medaillon}
            alt="portrait chantal vivent"
            className="medaillon"
          />
        </div>
        <div className="titreSousTitreContainer">
          <div className="titreHeaderContainer">
            <p className="h1Header">{props.soustitre}</p>
          </div>
          <div className="sousTitreHeaderContainer">
            <h1 className="sousTitreHeader">{props.h1header}</h1>
          </div>
        </div>
        <img
          className="logoEntreprise"
          src={props.logo}
          alt="logo entreprise"
        />
      </div>
    </div>
  );
};
export default Header;
