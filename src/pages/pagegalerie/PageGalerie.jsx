import Galerie from "../../components/galerie/Galerie";
import "./pagegalerie.css";
const PageGalerie = () => {
  return (
    <div className="pageGalerieContainer">
      <Galerie
        img1="https://cdn.pixabay.com/photo/2019/02/25/13/38/haircut-4019676_960_720.jpg"
        img2="https://cdn.pixabay.com/photo/2018/04/03/23/04/woman-3288365_1280.jpg"
        img3="https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg"
        img4="https://cdn.pixabay.com/photo/2017/07/31/22/59/salon-2561845_1280.jpg"
        img5="https://cdn.pixabay.com/photo/2018/02/22/17/09/barber-shop-3173422_960_720.jpg"
        img6="https://cdn.pixabay.com/photo/2019/11/18/10/10/hairdresser-4634452_1280.jpg"
        img7="https://cdn.pixabay.com/photo/2021/11/15/11/55/haircut-6797912_1280.jpg"
        img8="https://cdn.pixabay.com/photo/2018/10/11/19/17/models-3740601_960_720.jpg"
        img9="https://cdn.pixabay.com/photo/2020/08/08/13/45/hair-5473077_960_720.jpg"
        titre1="Nos"
        titre2="Coiffures"
        soustitre="Nos meilleure coiffures"
        description="
           Chez Les ciseaux d'or, nous nous engageons à vous offrir des coiffures qui vous mettent en valeur, quelle que soit votre longueur de cheveux, votre texture ou votre style.
           Voici quelques-unes de nos coiffures les plus populaires :"
      />
      <Galerie
        img1="https://cdn.pixabay.com/photo/2019/12/01/18/04/hairdresser-4666064_1280.jpg"
        img2="https://cdn.pixabay.com/photo/2018/10/22/13/43/scissors-3765409_1280.jpg"
        img3="https://cdn.pixabay.com/photo/2018/10/22/13/43/scissors-3765411_1280.jpg"
        img4="https://cdn.pixabay.com/photo/2020/04/16/06/09/barbershop-5049289_1280.jpg"
        img5="https://cdn.pixabay.com/photo/2020/08/31/11/17/barbershop-5532156_1280.jpg"
        img6="https://cdn.pixabay.com/photo/2018/10/22/13/43/scissors-3765409_1280.jpg"
        img7="https://cdn.pixabay.com/photo/2018/10/22/13/43/scissors-3765411_1280.jpg"
        img8="https://cdn.pixabay.com/photo/2020/04/16/06/09/barbershop-5049289_1280.jpg"
        img9="https://cdn.pixabay.com/photo/2020/08/31/11/17/barbershop-5532156_1280.jpg"
        titre1="Nos"
        titre2="Outils Pro"
        soustitre="Nous travaillons avec le meilleur"
        description="Chez Les ciseaux d'or, nous utilisons uniquement des outils professionnels de haute qualité pour créer des coiffures parfaites. Nos outils sont conçus pour durer et nous nous assurons qu'ils sont bien entretenus pour garantir des résultats optimaux.
             Voici quelques-uns des outils professionnels que nous utilisons :"
      />
    </div>
  );
};
export default PageGalerie;
