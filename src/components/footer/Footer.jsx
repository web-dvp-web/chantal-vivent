import "./footer.css";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/x.png";
import iconetel from "../../images/2.png";
import iconemail from "../../images/5.png";
import iconeadresse from "../../images/adresse.png";
const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="infoFooterContainer">
        <div className="titreLogoRsContainer">
          <h1 className="h1Footer">{props.titre}</h1>
          <h2 className="h2Footer">{props.soustitre}</h2>
          <div className="logoRsContainer">
            <a href="https://www.instagram.com/">
              <img
                className="logoInstagram"
                src={instagram}
                alt="logo instagram"
              />
            </a>
            <a href="https://www.facebook.com/">
              <img
                className="logoFacebook"
                src={facebook}
                alt="logo Facebook"
              />
            </a>
            <a href="https://twitter.com/?lang=fr">
              <img className="logoTwitter" src={twitter} alt="logo instagram" />
            </a>
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
          <div className="iconeFooterContainer">
            <img
              className="iconeFooter"
              src={iconetel}
              alt="icone d'un téléphone "
            />
            <p className="infoFooter">{props.tel} </p>
          </div>
          <hr className="ligne" />
          <div className="iconeFooterContainer">
            <img
              className="iconeFooter"
              src={iconemail}
              alt="icone d'un mail "
            />
            <p className="infoFooter">{props.mail}</p>
          </div>
          <hr className="ligne" />
          <div className="iconeFooterContainer">
            <img
              className="iconeFooter"
              src={iconeadresse}
              alt="icone pointeur gps "
            />
            <p className="infoFooter">{props.adresse} </p>
          </div>
          <hr className="ligne" />
          </div>
          <div className="part2Footer">
          <hr className="ligne" />
            <a className="aFooter" href="/contact">
              <p className="aFooter">Nos horaires{props.horaires} </p>
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
