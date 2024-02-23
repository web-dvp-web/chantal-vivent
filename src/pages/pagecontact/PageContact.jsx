import "./pagecontact.css";
import imgcontact from "../../images/Mecontacter.jpg";
const PageContact = (props) => {
  return (
    <div className="pageContactContainer">
      <div className="horairesContainer">
        <h1 className="h1Horaires">Me Contacter</h1>
        <p className="pHoraires">
        Vous pouvez me contacter à l'adresse email: sbnaturo9@gmail.com pour toutes informations et les prises de rdv. Nous conviendrons ensemble de l'accompagnement le mieux adapté à vos besoins. 
        </p>
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
