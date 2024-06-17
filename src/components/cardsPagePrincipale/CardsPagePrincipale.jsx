import "./cardspageprincipale.css";
import imgcv from "../../images/energie.png";
const CardsPagePrincipale = (props) => {
  return (
    <div className="cardsPagePrincipaleContainer">
      <div className="cards1and2Container">
        <div className="cards1Container">
          <a href="/Pagemenu1">
            <p className="titreMenu1">{props.titremenu1}</p>
          </a>
        </div>
        <div className="cards2Container">
          <a href="/contact">
            <p className="titreMenu2">{props.titremenu2}</p>
          </a>
        </div>
      </div>
        <a className="aLeBlog" href="/leblog">
      <div className="cards3Container">
        <div className="titreCards3Container">
        <p className="titreMenu3">{props.titremenu3}</p>
        <p className="titreMenu3">{props.titremenu4}</p>
        <p className="titreMenu3">{props.titremenu5}</p>
        </div>
        <img src={imgcv} className="imgLivreMontagne" alt="montagne" />
      </div>
        </a>
    </div>
  );
};
export default CardsPagePrincipale;
