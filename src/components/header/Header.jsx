import MenuOuvrant from "../menuouvrant/MenuOuvrant";
import "./header.css";
const Header = (props) => {
  return (
    <div className="headerContainer">
      <MenuOuvrant />
      <div className="titreSousTitreContainer">
        <h1 className="h1Header">{props.h1header}</h1>
        <p className="sousTitreHeader">{props.soustitre}</p>
      </div>
      <img className="logoEntreprise" src={props.logo} alt="logo entreprise" />
    </div>
  );
};
export default Header;
