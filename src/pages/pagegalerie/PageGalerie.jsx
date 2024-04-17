import "./pagegalerie.css";
import CarteInformations6 from "../../components/carteinformations6/CarteInformations6";
import CarteInformations7 from "../../components/carteinformations7/CarteInformations7";
import a1 from "../../images/a1.jpg";
import portrait from "../../images/portrait.jpg";

const PageGalerie = () => {
  return (
    <div className="pageGalerieContainer">
      <CarteInformations7
        titre="Qui suis-je"
        texte="Lors de nos rendez-vous et dans le cadre de mon activité, je serai amenée à vous poser de nombreuses questions, notament sur votre vie et votre parcours afin de mieux vous connaître, et ainsi dispenser les conseils les mieux adaptés à votre profil. Il est de ce fait totalement légitime que vous sachiez en amont à qui vous aurez affaire! Alors c'est parti ! Un exercice qui n'est pas simple, mais je vais essayer de faire au mieux ! "
        img={portrait}
      />
      <p className="texteInfoGalerie">
        <p className="gras"> Qui suis-je ?</p>
        <br />
        <br />
        chantal vivent
      </p>

      <CarteInformations6
        titre="Pourquoi consulter un / une naturopathe ?"
        texte="Si vous êtes arrivé(e)s sur le site, bravo ! Cela signifie que vous êtes intéressé(e), ou peut-être simplement curieux-se, mais c’est déjà le premier pas de fait ! Alors, soyez les bienvenu(e)s !	
     Dans cet article, je vais vous expliquer à la fois ma pratique, mais aussi les raisons qui peuvent vous amener à vouloir prendre RDV avec moi. 
     "
        img={a1}
      />
      <p className="texteInfoGalerie">
        <b>
          La naturopathie, c’est l’ensemble des processus naturels, innés et
          bruts, qui permettent de maintenir ou relever la santé de notre
          organisme dans son ensemble.
        </b>
      </p>
      <p className="pBleu">
        Je vous y aiderai et vous guiderai pas à pas avec plaisir et passion !{" "}
      </p>
    </div>
  );
};
export default PageGalerie;
