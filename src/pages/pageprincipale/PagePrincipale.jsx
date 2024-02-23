import "./pageprincipale.css";
import CardsPagePrincipale from "../../components/cardsPagePrincipale/CardsPagePrincipale";
const PagePrincipale = () => {
  return (
    <div className="PagePrincipaleContainer">
      <CardsPagePrincipale
        titremenu1="Mes services"
        titremenu2="contacter moi"
        titremenu3="À la une"
      />
    </div>
  );
};
export default PagePrincipale;
