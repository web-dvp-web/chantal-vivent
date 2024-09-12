import "./footer.css";
import iconemail from "../../images/5.png";
import iconetel from "../../images/4.png";
import iconeadresse from "../../images/adresse.png";
import iconeWeb from "../../images/7.png";
import iconeFacebook from "../../images/6.png";
const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="infoFooterContainer">
        <div className="titreLogoRsContainer">
          <h1 className="h1Footer">{props.titre}</h1>
          <h2 className="h2Footer">{props.soustitre}</h2>
          <div className="logoRsContainer">
           <p className="h2Footer">06 80 52 04 94</p>
          </div>
           <p className="h2Footer">Siret : 89877682800011 </p>
          <img
            className="logoFooter"
            src={props.logo}
            alt="logo entreprise Footer"
          />

        </div>
        <div className="info2FooterContainer">
          <div className="part1Footer">
          <hr className="ligne" />
          <div className="iconeWebContainer">
          <img 
            className="iconeFooter"
            src={iconeWeb}
            alt="icone web"
            />
          <a href="https://chantalvivent.fr/">
            <p className="infoFooter">https://chantalvivent.fr/</p>
          </a>
            </div>
      
          <hr className="ligne" />
          <div className="iconeFacebookContainer">
          <img 
            className="iconeFooter"
            src={iconeFacebook}
            alt="icone web"
            />
            <a href="https://www.facebook.com/chantal.vivent/?locale=fr_FR">
              <p className="infoFooter">Facebook</p>
            </a>
          </div>
          <hr className="ligne" />
          <div className="iconeAdresseContainer">

          <img 
            className="iconeFooter"
            src={iconeadresse}
            alt="icone portable"
            />
             <p className="infoFooter">{props.adresse}</p>
            </div>
            <hr className="ligne" />
            <div className="mailContainer">
            <img
              className="iconeFooter"
              src={iconemail}
              alt="icone d'un mail "
              />
            <p className="infoFooter">{props.mail}</p>
              </div>
            <hr className="ligne" />
      
            <div className="telContainer">
            <img 
            className="iconeFooter"
            src={iconetel}
            alt="icone portable"
            />
             <p className="infoFooter">{props.tel}</p>
            </div>
            <hr className="ligne2" />
          </div>
          <div className="part2Footer">
          <hr className="ligne" />
            <a className="aFooter" href="/contact">
              <p className="aFooter">Me contacter{props.horaires} </p>
            </a>
            <hr className="ligne" />
            <a className="aFooter" href="https://www.dvpariege.fr/">
              <p className="aFooter">Site réalisé par dvpariege</p>
            </a>
            <hr className="ligne" />
            <a href="https://www.instagram.com/emilie.bardet.studio/?hl=fr">
              <p className="aFooter">Logo réalisé par Emilie Bardet</p>
            </a>
            <hr className="ligne" />
            <a href="/mentionslegales">
              <p className="aFooter">Mentions légales</p>
            </a>
          <hr className="ligne" />
          <a href="charte-éthique">
            <p className="aFooter">Charte éthique</p>
          </a>
          <hr className="ligne" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
