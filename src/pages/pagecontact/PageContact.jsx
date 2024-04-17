import "./pagecontact.css";
import imgcontact from "../../images/portrait.jpg";
import logotel from "../../images/2.png";
const PageContact = (props) => {
  return (
    <div className="pageContactContainer">
      <div className="horairesContainer">
        <h1 className="h1Horaires">Me Contacter</h1>
        <div className="telContainer">
        <img className="logoTel" src={logotel} alt="logo telephone"/>
          <p className="pHoraires">
            06 80 52 04 94 
          </p>
        </div>
      </div>
        <div className="mailTelAdresseContainer">
          <div className="logoTexteContainer">
            <p className="pInfo">{props.mail}</p>
          </div>
        </div>
      <div className="imgLogoContainer">
        <img
          className="imgContact"
          src={imgcontact}
          alt="img logo de contact"
        />
      </div>
    </div>
  );
};
export default PageContact;
