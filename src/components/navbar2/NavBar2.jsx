import logoTel from '../../images/contact2.svg';
import './NavBar2.css';
const NavBar2 = (props) => {
  return (
    <div className="allNavBar2Container">
      <a className="aNB2" href="/" >
        <div className="allNB2">
          <p className='p1'>{props.lien1NB2}</p>
        </div>
      </a>
      <a className="aNB2" href="prestations-chantalvivent-Medium-Voyante">
        <div className="allNB2">
          <p className='p1'>{props.lien2NB2}</p>
        </div>
      </a>
      <a className="aNB2" href="/aproposdemoi-Chantal-Vivent">
        <div className="allNB2">
          <p className='p1'>{props.lien4NB2}</p>
        </div>
      </a>
      <a className="aNB2" href="/contact-horaires-chantal-vivent-medium-voyante-energéticienne">
        <div className="allNB2">
          <p className='p1'>{props.lien3NB2}</p>
        </div>
      </a>
      <a href='/mensionlegale'
        className="aNB2MentionsLegale"
        onMouseEnter={() => document.querySelector('.p1ML2').classList.add('visible')}
        onMouseLeave={() => document.querySelector('.p1ML2').classList.remove('visible')}
      >
        <div className="allNB2MentionsLegales">
        <a className="aNB2MentionsLegale" href="/mentionslegales"><p className='p1ML'>{props.lien5NB2}</p></a>
        <a className="aNB2MentionsLegale" href="/charte-éthique"><p className='p1ML2'>{props.lien5NB22}</p></a>

        </div>
      </a>
      <div className="logoTelContainer">
        <img className="logoTelNavBar" src={logoTel} alt="logo telephone" />
        <p className="pTel">{props.tel}</p>
      </div>
    </div>
  );
};

export default NavBar2;