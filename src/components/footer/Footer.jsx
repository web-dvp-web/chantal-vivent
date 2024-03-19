import "./footer.css";
import facebook from "../../images/facebook.png";
import iconemail from "../../images/5.png";
import imgcontactfooter from "../../images/Montage photo de voyage en forme de mosaïque.png"
const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="infoFooterContainer">
        <div className="titreLogoRsContainer">
          <h1 className="h1Footer">{props.titre}</h1>
          <h2 className="h2Footer">{props.soustitre}</h2>
          <div className="logoRsContainer">
            <a href="https://www.facebook.com/profile.php?id=61555318679708">
              <img
                className="logoFacebook"
                src={facebook}
                alt="logo Facebook"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555318679708"><p className="pFacebook">Ma page facebook</p></a>
          </div>
          <img
            className="logoFooter"
            src={props.logo}
            alt="logo entreprise Footer"
          />
        </div>
        <div className="info2FooterContainer">
          <div className="part1Footer">
          <hr className="ligne" />
          <h2 className="h2footerContacerNous">Mon adresse mail</h2>
          <div className="iconeFooterContainer">
            <img
              className="iconeFooter"
              src={iconemail}
              alt="icone d'un mail "
            />
            <p className="infoFooter">{props.mail}</p>
          </div>
          <img className="imgContactFooter" src={imgcontactfooter} alt="femme en randonnée"/>
          <hr className="ligne" />
          </div>
          <div className="part2Footer">
          <hr className="ligne" />
            <a className="aFooter" href="/contact">
              <p className="aFooter">Me contacter{props.horaires} </p>
            </a>
            <hr className="ligne" />
            <a href="/mentionslegales">
              <p className="aFooter">mentions légales</p>
            </a>
            <hr className="ligne" />
            <a className="aFooter" href="https://www.dvpariege.fr/">
              <p className="aFooter">Besoin d'un site internet ?</p>
            </a>
          <hr className="ligne" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
