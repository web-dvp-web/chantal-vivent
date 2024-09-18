import { NavLink } from 'react-router-dom';
import logoTel from '../../images/contact2.svg';
import './NavBar2.css';
const NavBar2 = (props) => {
  return (
    <div className="allNavBar2Container">
      <NavLink className="aNB2" to="/" aria-label="Accéder à la page d'accueil" >
        <div className="allNB2">
          <p className='p1'>{props.lien1NB2}</p>
        </div>
      </NavLink>
      <NavLink className="aNB2" to="prestations-chantalvivent-Medium-Voyante" aria-label="Accéder à la page prestations" > 
        <div className="allNB2">
          <p className='p1'>{props.lien2NB2}</p>
        </div>
      </NavLink>
      <NavLink className="aNB2" to="/aproposdemoi-Chantal-Vivent" aria-label="Accéder à la page à propos de moi">
        <div className="allNB2">
          <p className='p1'>{props.lien4NB2}</p>
        </div>
      </NavLink>
      <NavLink className="aNB2" to="/contact#ancrecontact" aria-label="Accéder à la page contact">
        <div className="allNB2">
          <p className='p1'>{props.lien3NB2}</p>
        </div>
      </NavLink>
      <NavLink to='/mensionlegale' aria-label="Accéder à la page mension legale"
        className="aNB2MentionsLegale"
        onMouseEnter={() => document.querySelector('.p1ML2').classList.add('visible')}
        onMouseLeave={() => document.querySelector('.p1ML2').classList.remove('visible')}
      >
        <div className="allNB2MentionsLegales">
        <NavLink className="aNB2MentionsLegale" to="/mentionslegales" aria-label="Accéder à la page mentions legales"><p className='p1ML'>{props.lien5NB2}</p></NavLink>
        <NavLink className="aNB2MentionsLegale" to="/charte-éthique" aria-label="Accéder à la page charte-éthique"><p className='p1ML2'>{props.lien5NB22}</p></NavLink>

        </div>
      </NavLink>
      <div className="logoTelContainer">
        <img className="logoTelNavBar" src={logoTel} alt="logo telephone" />
        <p className="pTel">{props.tel}</p>
      </div>
    </div>
  );
};

export default NavBar2;