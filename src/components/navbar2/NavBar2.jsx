import logoTel from "../../images/contact2.svg";
import "./NavBar2.css";
const NavBar2 = (props) => {
  return (
    <nav>
      <ul className="ulNavBar2">
        <div className="allNavBar2Container">

          <li className="liNavBar2">
              <a className="aNB2" href="/#sectionmenuprincipal" aria-label="Accéder à la page menu principal">
            <div className="allNB2">
                <p className="p1">{props.lien1NB2}</p>
            </div>
              </a>
          </li>
        

          <li className="liNavBar2">
            <a
              className="aNB2"
              href="prestations-chantalvivent-Medium-Voyante#sectionprestations"
              aria-label="Accéder à la page prestations"
            >
              <div className="allNB2">
                <p className="p1">{props.lien2NB2}</p>
              </div>
            </a>
          </li>

          <li className="liNavBar2">
            <a
              className="aNB2"
              href="/aproposdemoi-Chantal-Vivent#sectionapropos"
              aria-label="Accéder à la page à propos de moi"
            >
              <div className="allNB2">
                <p className="p1">{props.lien4NB2}</p>
              </div>
            </a>
          </li>

          <li className="liNavBar2">
              <a className="aNB2"
                 href="contact-chantal-vivent#section3"
                 aria-label="Accéder à la page contact"
              >
            <div className="allNB2">
                <p className="p1">{props.lien3NB2}</p>
            </div>
              </a>
              </li>
    
         
          <li className="liNavBar2">
            <a
              className="aNB2"
              href="/mentionslegales#sectionmentionslegales"
              aria-label="Accéder à la page mentions legales"
            >
              <div className="allNB2">
                <p className="p1">{props.lien5NB2}</p>
              </div>
            </a>
          </li>

          <li className="liNavBar2">
            <a
              className="aNB2"
              href="/charte-éthique#sectioncharte"
              aria-label="Accéder à la page charte-éthique"
            >
              <div className="allNB2">
                <p className="p1">{props.lien5NB22}</p>
              </div>
            </a>
          </li>

          <div className="logoTelContainer">
            <img className="logoTelNavBar" src={logoTel} alt="logo telephone" />
            <p className="pTel">{props.tel}</p>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar2;
