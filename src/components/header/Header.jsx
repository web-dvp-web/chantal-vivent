import "./header.css";
const Header = (props) => {
  return (
    <div className="header2">

    <div className="headerContainer">
      <div className="medaillonTitreLogoContainer">
        <div className="medaillonContainer">
          <img
            className="logoEntreprise"
            src={props.logo}
            alt="logo entreprise"
            />
        </div>
        <div className="titreSousTitreContainer">
          <div className="titreHeaderContainer">
            <p className="h1Header">{props.soustitre}</p>
          </div>
          
          <div className="sousTitreHeaderContainer">
            <h1 className="sousTitreHeader">{props.h1header}</h1>
          </div>
          <p className="contactPortable">06 80 52 04 94</p>
        </div>
      </div>
    </div>
      <div className="bar2"></div>
    </div>
  );
};
export default Header;
