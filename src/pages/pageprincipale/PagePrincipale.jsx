import "./pageprincipale.css";
import CardsPagePrincipale from "../../components/cardsPagePrincipale/CardsPagePrincipale";
const PagePrincipale = () => {
  return (
    <div className="PagePrincipaleContainer">
      <CardsPagePrincipale
        titremenu1="Nos services"
        titremenu2="contacter nous"
        titremenu3="Notre galerie dimages"
      />
    </div>
  );
};
export default PagePrincipale;
