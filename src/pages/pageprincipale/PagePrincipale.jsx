import "./pageprincipale.css";
import CardsPagePrincipale from "../../components/cardsPagePrincipale/CardsPagePrincipale";
const PagePrincipale = () => {
  return (
    <div className="PagePrincipaleContainer">
      <CardsPagePrincipale
        titremenu1="Mes prestations"
        titremenu2="Me contacter"
        titremenu3="Je me présente"
      />
    </div>
  );
};
export default PagePrincipale;
