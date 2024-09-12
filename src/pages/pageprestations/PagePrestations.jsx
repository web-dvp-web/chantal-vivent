import { useState } from "react";
import "./pageprestations.css";
import imgIntroduction from "../../images/nouvelles/brasouvert2.png";
import CardsCommentaire from "../../components/cardscommentaire/CardsCommentaire";
import service1 from "../../images/nouvelles/bureau.jpg";
import service2 from "../../images/nouvelles/CELLES 2.jpg";
import service3 from "../../images/nouvelles/WhatsApp Image 2024-08-06 at 16.48.30 (2).jpeg";
import imgintroduction2 from "../../images/nouvelles/Montesquieu 07 24.jpg";
import CardsTexte2 from "../../components/cardstexte2/CardsTexte2";
/*animation du texte*/

const PagePrestations = () => {
  const [ouvert, setOuvert] = useState(false);
  const [ouvert2, setOuvert2] = useState(false);

  const changeTexteContainer = () => {
    setOuvert(!ouvert);
  };

  const changeTexteContainer2 = () => {
    setOuvert2(!ouvert2);
  };

  return (
    <div className="pageMenu1Container">
      <div
        className="h1VideoContainer"
        aria-label="fleurs rose avec des branches en avant avec un fond flou de la foret "
      >
        <div className="allH1Container">
          <div className="imgIntroduction2Container">
            <img
              className="imgIntroduction2"
              src={imgintroduction2}
              alt="chantalvivent"
            />
          </div>
          <div className="h1CC">
            <div className="h1Container">
              <CardsTexte2
                titre="Le changement commence par une prise de conscience. Vous êtes prêt(e) à faire ce premier pas ?"
                texte="Bienvenue sur mon site, Médium Voyante Énergéticienne."
                texte2=" Spiritualité et bien-être se rencontrent pour
vous guider vers une vie plus équilibrée. Je vous propose des prestations personnalisées telles que la voyance médiumnité, les séances
énergétiques, les conseils sur les lieux de vie, etc au plus juste et le plus cohérent pour vous-même.
Que vous cherchiez des réponses, du soulagement émotionnel ou un rééquilibrage énergétique, je vous
accompagne. "
                texte3="Parce-que vous êtes unique, ce moment sera bienveillant, respectueux et sacré."
              />

              <p className="reservez">Réservez votre consultation </p>
              <p className="h1PresentationTel">06 80 52 04 94</p>
              <p className="h1Presentation">
                via téléphone, visioconférence, WhatsApp, Messenger.
              </p>
            </div>
          </div>
          <div className="h1Container"></div>
          <div className="imgIntroductionContainer">
            <img
              className="imgIntroduction"
              alt="montage-images"
              src={imgIntroduction}
            />
          </div>
        </div>
      </div>
      <div className="h2ServicesContainer">
      
          <h2 className="h2Services"> DÉCOUVREZ MES PRESTATIONS </h2>
      
      </div>
      <div className="allCards">
        <div className="cardsServicesContainer">
          <div className="imgCardsServicesContainer">
            <img className="imgCardsServices" src={service1} alt="img" />
          </div>
          <div className="ServiceContainer">
            <p className="titreServices">VOYANCE ET MEDIUMNITE</p>

            <div className="separationContainer">
              <p className="pServicesC3">
                Vous souhaitez obtenir des <b> clés </b> pour éclairer votre{" "}
                <b> chemin de vie </b>? <br />
                Choisissez la formule qui vous convient le mieux : <br /> <br />
                Consultation de <b>20 minutes</b> : Idéale pour un thème.{" "}
                <b>40 €</b> <br /> <br />
                Consultation de <b>1 heure</b> : Pour un échange plus
                approfondi. <b>70 € </b>
                <br />
                <br />
                Consultation <b>personnalisée</b> : Un accompagnement
                sur-mesure. <b>80 €</b>{" "}
              </p>
            </div>
            <a
              className="aButtonContact"
              href="/contact-horaires-chantal-vivent-medium-voyante-energéticienne"
            >
              <button className="buttonMeContacter">
                Réservez votre consultation
              </button>
            </a>
            <h1 className="rappel">CHANTAL VIVENT</h1>
            <h1 className="rappel">06 80 52 04 94</h1>
            <div className="texteCardContainerok">

            <CardsTexte2
              titre=""
              texte="Une consultation approfondie pour vous guider sur plusieurs aspect de votre vie, et favoriser votre développement personnel.
              
              Par la connexion aux mondes subtils, aux guides de lumière, vous serez éclairé sur différents domaines.

Je réponds à vos questions (professionnel, sentimental, affaires, immobilier achat et vente, santé, évolution de vie spirituelle, message des défunts, etc…).

Vous avez une lecture claire pour vos choix à faire, mettre du sens sur les opportunités, être en accord avec votre chemin de vie. Les informations vous permettront d’appréhender au mieux les situations que vous traversez.

Par la guidance, vous serez alignez sur vos aspirations profondes en étant vous- même pour profiter pleinement de la vie."
/>
</div>
          </div>
        </div>

        <div className="cardsServicesContainer">
          <div className="imgCardsServicesContainer">
            <img className="imgCardsServices" src={service2} alt="img" />
          </div>
          <div className="ServiceContainer">
            <p className="titreServices">SÉANCE ENERGETIQUE «PURIFICATION»</p>
            <div className="pServicesContainer">
              <p className="pServicesC3">
                Nettoyage énergétique : Libérez-vous des{" "}
                <b>énergies négatives</b> et retrouvez votre{" "}
                <b>équilibre intérieur.</b>
                <br /> Ressentez une énergie renouvelée grâce aux séances !{" "}
                <br /> <br />
                <b>Séance</b> Équilibre Énergétique <b>(1h)</b> : Retrouvez
                votre harmonie intérieure <b>70 €</b> <br /> <br />
                <b>Forfait</b> Bien-être énergétique <b>(3 séances)</b> : Un
                programme complet pour renforcer votre vitalité et votre
                bien-être. <b> 180 € </b>
              </p>
            </div>
            <div className="separationContainer"></div>
            <a
              className="aButtonContact"
              href="/contact-horaires-chantal-vivent-medium-voyante-energéticienne"
            >
              <button className="buttonMeContacter">
                Réservez votre séance{" "}
              </button>
            </a>
            <h1 className="rappel">CHANTAL VIVENT</h1>
            <h1 className="rappel">06 80 52 04 94</h1>
            <div className="texteCardContainerok">
            <CardsTexte2
              texte="     Ces consultations permettent un rééquilibrage énergétique pour le bien-être physique et mental (corps, esprit, émotionnel etc)
              Travailler énergétiquement sur les blessures, les charges émotionnelles négatives, libérer les schémas bloquants, les peurs, les entités et énergies négatives, et autres, vous permet d’être en harmonie.
              L’équilibrage de vos énergies, vous procurera une sensation de paix intérieure.
              Chaque séance énergétique sont des étapes sur le chemin de l'épanouissement. Ce travail vous rapproche de votre équilibre intérieur.
              En comprenant vos besoins en profondeur, je peux vous proposer un protocole énergétique ciblé pour vous aider à atteindre vos objectifs de bien-être.
              "
              />
              </div>
          </div>
        </div>

        <div className="cardsServicesContainer">
          <div className="imgCardsServicesContainer">
            <img className="imgCardsServices" src={service3} alt="img" />
          </div>
          <div className="ServiceContainer">
            <p className="titreServices">
              FORMATION INDIVIDUELLE ET/OU GROUPES
            </p>
            <div className="pServicesContainer">
              <p className="pServicesC3">
                <b>
                  {" "}
                  Envie de mieux vous connaître et de développer votre potentiel
                  ?{" "}
                </b>
                <br />
                <br />
                <u>Découvrez la formation: </u> <br />
                Un pas vers le bien-être énergétique en demi-journée ou journée
                <br /> <br />
                "Initiation aux énergies : Acquérir les bases pour comprendre et
                harmoniser votre énergie vitale." <br />
                "Offrez-vous un moment pour vous et votre développement
                personnel. Cette formation est l'occasion d'explorer votre
                dimension énergétique et de vous ouvrir à de nouvelles
                perspectives." <br />
                <br />
                Demi-journée <b>70 €</b> <br />
                Journée<b>100 €</b>
              </p>
            </div>
            <div className="separationContainer"></div>
            <a
              className="aButtonContact"
              href="/contact-horaires-chantal-vivent-medium-voyante-energéticienne"
            >
              <button className="buttonMeContacter">
                Réservez votre formation
              </button>
            </a>
            <h1 className="rappel">CHANTAL VIVENT</h1>
            <h1 className="rappel">06 80 52 04 94</h1>
          </div>
        </div>
      </div>
      <div className="h1TitreCardsCommentairesContainer">
     
          <h1 className="h1TitreCardsCommentaires">
            VOS TÉMOIGNAGES... EN VOUS REMERCIANT
          </h1>
        
      </div>
      <div className="allCardsCommentaireContainer">
      
          <CardsCommentaire
            nom="Alice Teboul"
            img="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"
            commentaire="
          «J'ai eu la chance de recevoir un soins extraordinaire de la part de Chantal. C'est une personne authentique. J'éprouve beaucoup de gratitude d'avoir croisé son chemin. Son soin a résonné en moi positivement. Son soin m'a fait du bien.
Merci infiniment Chantal.
Je recommande ses soins. »"
          />
          <CardsCommentaire
            nom="Ressiica31"
            img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            commentaire="
            «Chantal est en un seul mot exceptionnelle !!!
D’une gentillesse incroyable qui a répondu à ma demande dans la journée même et qui a su cibler ma problématique et y répondre.
Elle a aidé mon fils de 21 mois et je l’a remercie du fond du cœur !
Vous pouvez la consulter les yeux fermés !»"
          />
          <CardsCommentaire
            nom="Jonathan Glais"
            img="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            commentaire="Milles Merci pour votre aide !
Chantal est d’une extrême gentillesse. Elle a aidé mon fils qui ne se sentait pas en sécurité dans sa chambre et a trouvé directement le problème.
Aussitôt contacté, elle a su nous aider dans la journée."
          />
        
      </div>
      <div className="allCardsCommentaireContainer">
      
          <CardsCommentaire
            nom="Candice Mouanjo"
            img="https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg"
            commentaire="«J’ai rencontrée Chantal à un moment difficile de ma vie ( crises d’angoisses , peur du monde extérieur) elle m’a fait un bien fou , elle m’a apaisé , confiance en moi , j’ai sentie un réelle changement dans ma vie . N’hésitez pas à aller la voire c’est une personne d’une douceur et gentillesse extrême . Encore merci Chantal 🙏🏾😘»"
          />
          <CardsCommentaire
            nom="Emilie Claria"
            img="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_960_720.jpg"
            commentaire="«Si vous recherchez une personne lumineuse et de confiance👍. Vous devez rencontrer Chantal🙏. Elle suit mon fils de 16 ans depuis 1 an. Sa douceur, son amour, sa générosité fait que mon fils est en confiance et se sent de mieux en mieux🙏🙏. Elle est très professionnelle et maîtrise ses techniques. Je vous recommande Chantal une femme solaire au grand cœur ❤️ . Vous ne serez pas déçu 🥰»"
          />
          <CardsCommentaire
            nom="GALLARDO SYLVIE"
            img="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg"
            commentaire="«Il n’y a pas de hasard dans la vie.
          Merci Chantal. 🌈
          Belle personne Humble avec une perception très fine et des révélations si justes.
          Disponible et à l’écoute je la remercie du fond du cœur pour avoir été présente pour mon fils lorsqu’il a eu besoin d’etre rassuré dans une situation particulière. Je l’ai consultée en séance de voyance et de rééquilibrage énergétique. Et je vais continuer 😊
          Je la recommande vivement ! 🥰»"
          />
        
      </div>
      <div className="buttonLaisserUnAvisContainer">
        <a href="https://www.google.com/search?client=ubuntu-chr&hs=YyV&sca_esv=cdbd7a50714e292d&tbm=lcl&sxsrf=ADLYWIJgdAXSAgs04e9vNWWq2xgmj0fe1g:1723534646945&q=M%C3%A9dium+Voyante+Energeticienne+Chantal+VIVENT+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2t7QwMzMwNbMwsjQ2NzI1NjYw2sDI-IrRyPfwypTM0lyFsPzKxLySVAXXvNSi9NSSzOTM1Ly8VAXnDKBoYo5CmGeYq1-IgmNZZvEiVjI0AQCFLY1VhAAAAA&rldimm=7986605682937253302&hl=fr-FR&sa=X&ved=2ahUKEwidm47zuvGHAxWGcKQEHa7INGIQ9fQKegQIKxAF&biw=1536&bih=723&dpr=1.25#lkt=LocalPoiReviews&lrd=0x12aed5eaf4291659:0x6ed61f8dc4974db6,3,,,,">
          <button className="buttonLaisserVotreAvis">
            Laisser un avis Google
          </button>
        </a>
        <h1 className="rappel">CHANTAL VIVENT</h1>
        <h1 className="rappel">06 80 52 04 94</h1>
      </div>
      <div className="cardsTexteContainer">
        <div className="cardsTexteContainer">
          <div className="backgroundAllTexteContainer">
            <div className="allTexteContainer">
              <div className="titreButtonContainer">
                <h2 className="h2ServicesTextContainer">
                  Pourquoi et quand consulter un medium voyant
                </h2>
                <button
                  onClick={changeTexteContainer2}
                  className="buttonEnSavoirPlus"
                >
                  En savoir plus
                </button>
              </div>
              <div
                className={ouvert2 ? "texteContainer ouvert" : "texteContainer"}
              >
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Quelques petits conseils en partage :{" "}
                </h2>
                <br /> <br />
                - Le professionnel se doit d’avoir un comportement en accord
                avec une éthique (charte). <br />
                - Le professionnel ne juge pas, vous met à l’aise.
                <br />
                - Le praticien vous dit ce que vous avez besoin d’entendre et
                pas ce que vous avez envie d’entendre
                <br />
                - Aidez-vous dans votre choix de professionnel par le bouche à
                oreille, les avis d’autres consultants....
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Pourquoi Consulter un Médium ?
                </h2>
                <br />
                <br />
                Un médium est un intermédiaire. Il est en connexion avec Les
                Guides de Lumière. Il vous transmet ce qu’il perçoit.
                <br /> C’est l’opportunité d’être guidé, de prendre conscience
                de toutes les opportunités de votre vie. Il met en lumière vos
                potentiels.
                <br />
                 Vous vous sentez connecté et avez besoin de communiquer avec
                vos « Guides de Lumière »<br />
                 Vous êtes en demande d’informations et de solutions parce que
                vous vous sentez perdu, triste, en colère, seul, dubitatif pour
                prendre une décision...
                <br />
                 Vous avez beaucoup d’énergie et vous ne savez pas par où
                commencer pour mener à bien vos projets de vie (travail, vie
                sociale, vie amoureuse...)
                <br />
                 Vous avez besoin, envie de contacter un défunt, ou ressentez
                des présences subtiles
                <br />
                 Vous vous interrogez sur le sens de votre vie
                <br />
                 Vous avez le sentiment que rien n’avance et vous avez envie de
                comprendre pourquoi
                <br />
                 Vous avez des problèmes au travail, dans votre couple, au sein
                de votre cercle d’amis...
                <br />
                 Cette liste n’est pas exhaustive, bien sur..........
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Quand Consulter un Médium Voyant ?<br />
                  <br />
                </h2>
                Il est important de comprendre que l’on consulte lorsque le
                moment est juste pour soi. Votre esprit est prêt, vous êtes en
                accord avec cette démarche, elle est impulsée par vous.
                <br />
                 Vous êtes dans une position d’ouverture et vous avez besoin
                d’être éclairé
                <br />
                 Vous avez envie de prendre des raccourcis
                <br />
                 Vous avez un choix important à faire
                <br />
                 Vous n’êtes pas heureux, vous voulez comprendre pourquoi et
                comment allez de l’avant
                <br />
                 Vous ressentez les choses et vous avez besoin d’une
                confirmation
                <br />
                 Vous avez besoin de conseils, d’amour, et de donner du sens à
                votre vie
                <br />
                 Vous souffrez d’un deuil et souhaitez contacter un défunt ou
                être en lien
                <br />
                 Vous êtes prêt à opérer des changements en vous
                <br />
                 Vous êtes inquiet, stressé, fatigué... et vous avez envie d’en
                comprendre les origines
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Brève distinction entre un médium et un voyant :<br />
                </h2>
                <br />
                <br />
                On pourrait dire que le voyant utilise des supports comme des
                cartes ou autres et fait une lecture tandis que le médium
                perçoit vos guides de lumière et vous répète l’information. Il
                est canal et utilise toutes ses capacités extra- sensorielles.
                Pour ma part, j’ai le privilège d’accéder aux différentes
                sources dans le cadre de mes consultations.
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Prenez rendez-vous pour une belle consultation de guidance.
                </h2>
                <br />
                <br />
                <h1 className="rapell">CHANTAL VIVENT</h1>
                <h1 className="rapell">06 80 52 04 94</h1>
              </div>
            </div>
          </div>
          <div className="backgroundAllTexteContainer">
            <div className="allTexteContainer">
              <div className="titreButtonContainer">
                <h2 className="h2ServicesTextContainer">
                  Qu'est ce que la purification <br /> énergétique ?
                </h2>
                <button
                  onClick={changeTexteContainer}
                  className="buttonEnSavoirPlus"
                >
                  En savoir plus
                </button>
              </div>
              <div
                className={ouvert ? "texteContainer ouvert" : "texteContainer"}
              >
                <br />
                <br />
                "Source Luc BODIN, Serge Boutboul" Les découvertes de la
                physique quantique réalisées depuis plus d’un siècle ont établi
                que nous sommes constitués d’énergies concentrées comme tout ce
                qui existe dans l’univers. Tout y est vibrations. Chaque
                particule est une concentration d’énergies qui vibre à une
                fréquence qui lui est propre. Ensuite, ces particules
                s’assemblent pour former des atomes, des molécules, des
                cellules, des organismes... et des êtres humains.
                <h2 className="h2TextContainer">
                  Qu’est ce que la purification ?
                </h2>
                <br />
                <br />
                Pour conserver ou retrouver la santé, notre circuit énergétique
                personnel doit demeurer en équilibre avec les vibrations
                extérieures. Cette vision rejoint les présentations des
                médecines ancestrales comme l’Ayurveda, la médecine
                traditionnelle chinoise, le magnétisme, etc.
                <br />
                <br />
                Nous vivons dans un monde de dualité avec l’ombre et la lumière,
                le Yin et le Yang, le froid et le chaud... De la même manière,
                dans notre environnement se trouvent des énergies positives et
                d’autres négatives pour nous.
                <br />
                <br />
                Les énergies négatives (ou mauvaises) peuvent nous perturber à
                des degrés et des niveaux divers. En effet, elles peuvent nous
                toucher autant sur les plans, physique qu’émotionnel, psychique
                et spirituel. Cela se produit souvent de manière progressive et
                insidieuse. Mais pas toujours, cela peut être brutal comme
                lorsque nous rencontrons certaines personnes négatives, certains
                lieux chargés d’histoire douloureuses, certaines entités ou
                défunts agressifs, etc.
                <br />
                <br />
                C’est pourquoi un nettoyage énergétique de notre être est
                important à réaliser régulièrement afin d’éliminer les énergies
                négatives du corps et de l’esprit..
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Quelles sont les mauvaises ondes et les mauvaises énergies ?
                </h2>
                <br />
                <br />
                Nous vivons dans un environnement chargé d’une grande variété
                d’ondes vibrant sur des fréquences différentes. Certaines nous
                sont bonnes, voire indispensables à notre vie (pour nous
                nourrir, nous donner force et vitalité, etc.) et d’autres ne le
                sont pas. Ces dernières peuvent pénétrer en nous et ainsi
                perturber le fonctionnement de notre organisme et de notre
                esprit.
                <br />
                <br />
                –Les énergies négatives sont abondantes dans notre
                environnement. Nous les retrouvons par exemple au contact
                d’individus néfastes, de certains endroits nocifs comme les
                lieux stagnants, les champs de batailles, les endroits
                d’attentat, certains points géobiologiques, etc.
                <br />
                <br />
                –Les énergies usagées. Elles correspondent à des énergies ayant
                été utilisées par notre organisme qui sont devenues des déchets.
                Elles sont éliminées naturellement de notre être. Mais
                quelquefois, des blocages surviennent dans leur évacuation,
                faisant qu’elles s’accumulent dans notre être.
                <br />
                <br />
                –Les pensées négatives– surtout si elles sont intenses et
                chargées d’émotions délétères – provenant des autres (critiques,
                jalousie, convoitise, etc.), mais également les nôtres que nous
                développons avec nos peurs et nos angoisses.
                <br />
                <br />
                – Les émotions négatives (souffrance, haine, agressivité,
                rancune...) des autres, mais aussi que nous générons nous-mêmes
                à la suite par exemple d’un choc émotionnel ou d’une situation
                douloureuse.
                <br />
                <br />
                – Les parasites énergétiques provenant du bas-astral.
                <br />
                <br />
                – Les entités sont des formes de conscience autonome qui ne sont
                pas incarnées dans un corps matériel. En s’introduisant en nous,
                elles se nourrissent de nos énergies, mais également de nos
                émotions négatives et de nos souffrances qu’elles ont tendant à
                amplifier pour mieux en profiter.
                <br />
                <br />
                –Certains défunts restés sur Terre qui cherchent à pénétrer en
                nous.
                <br />
                <br />
                – Des actes de magies noires et de sorcellerie (sorts, charmes,
                envoûtement, malédiction, etc.) dirigés contre nous afin de nous
                nuire.
                <br />
                <br />
                Cette liste n’est pas exhaustive.
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Quels sont les effets et les influences des mauvaises énergies
                  sur nous ?
                </h2>
                <br />
                <br />
                Sur le plan général, les troubles induits par les énergies
                nuisibles sont variables selon la nature de l’énergie négative
                et l’endroit où elle va intervenir :
                <br /> <br />
                – Le premier signe est sans doute la fatigue à cause du pompage
                ou de la perte énergétique que ces énergies nuisibles
                produisent.
                <br />
                <br />
                – À un degré de plus, cette fatigue entraîne un état de stress,
                d’anxiété, de déprime...
                <br />
                <br />
                – Puis, cela favorise les infections... les maladies.
                <br />
                <br />
                Sur le plan physique, nous retrouvons beaucoup de symptômes
                possibles :
                <br />
                <br />
                – Des sensations douloureuses, des spasmes, des pesanteurs, des
                chaleurs, des picotements...
                <br />
                <br />
                Sur le plan émotionnel, les éléments nuisibles ont tendance à
                amplifier le stress, les chocs émotionnels, les émotions
                négatives, les peurs, les anxiétés, les situations douloureuses,
                les colères.... ce qui a tendance à les faire perdurer sans en
                trouver la solution.
                <br />
                <br />
                Sur le plan psychique, les symptômes se caractérisent par des
                difficultés plus ou moins grandes de concentration, de
                mémorisation, d’attention, mais également par des impossibilités
                de raisonnement logique, des incompréhensions, des changements
                d’humeur et de sentiments....
                <br />
                <br />
                Sur le plan spirituel, des énergies négatives cherchent à
                éloigner la personne du Divin par la division, la séparation et
                la rupture avec le monde céleste ce qui amène à une
                déstructuration de l’être.
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Quelques points sont cependant importants à retenir :
                </h2>
                <br />
                <br />
                – Tous ces troubles peuvent (bien sûr) avoir d’autres causes que
                la seule présence d’énergies nuisibles. Cependant, ces dernières
                se fixent souvent sur des endroits en souffrance. Les énergies
                négatives ne sont donc pas la cause du problème de santé, mais
                un facteur aggravant. De toutes façons, une consultation
                médicale est toujours indispensable en cas de troubles
                (physiques ou psychiques) importants ou/et persistants.
                <br />
                <br />
                – Inversement, les symptômes présentés – souvent légers (du
                moins au départ) – sont attribués à d’autres causes généralement
                médicales comme une douleur musculaire sera expliquée par une
                simple contracture... alors que celle-ci peut avoir été générée
                par des entités.
                <br />
                <br />
                – Les troubles tant physiques que psychiques et spirituels
                apparaissent souvent progressivement et donc insidieusement. La
                personne n’en prend pas conscience et pensent que la situation
                demeure normale... Elle ne prend conscience du phénomène que
                lorsqu’il a pris de l’ampleur.
                <br />
                <br />
                – Les énergies négatives, les entités... peuvent n’induire aucun
                trouble du moins en apparence. Leurs activités étant légères.
                Elles attendent leur heure... et ne sont donc pas détectables
                pendant un certain temps.
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Pourquoi effectuer un nettoyage énergétique ? Pourquoi
                  purifier son corps et son esprit ?
                </h2>
                <br />
                <br />
                Son but est de permettre de retrouver toutes nos capacités
                physiques, psychiques et spirituels sans être influencés par des
                consciences étrangères (entités et autres).
                <br />
                <br />
                Après avoir réalisé une purification, nous ressentons
                généralement un état de bien-être, de quiétude et de paix se
                manifester en nous. Des qualités, des aptitudes et des talents
                qui étaient endormis se réveillent. Notre esprit retrouve sa
                pleine efficience. Nos aspirations spirituelles retrouvent leur
                juste place. C’est souvent après une purification que nous
                constatons l’amélioration, quelquefois sur des troubles
                inattendus...
                <br />
                <br />
                <h2 className="h2TextContainer">
                  À quelle fréquence faut-il réaliser les nettoyages
                  énergétiques ?
                </h2>
                <br />
                <br />
                Dans l’état actuel de la vie moderne et les nombreuses nuisances
                que nous côtoyons, un nettoyage énergétique devrait presque être
                quotidien, surtout lorsque nous rencontrons des personnes
                délétères (colériques, critiques, jalouses...) ou des personnes
                malades, lorsque nous utilisons les transports en commun,
                lorsque nous visitons des lieux néfastes, stagnants, souterrains
                ou chargés d’histoires douloureuses... mais aussi des hôpitaux
                (lourds en souffrances), des lieux publics, etc.
                <br />
                <br />
                Deux conseils :
                <br />
                <br />
                – Lorsque nous nous demandons si nous devons effectuer une
                purification de notre être, cela signifie qu’il faut la réaliser
                ! Notre intuition nous parle dans ce cas-là. Si la purification
                n’avait pas été utile, nous n’y aurions pas pensé !
                <br />
                <br />
                – Quand nous n’avons pas du tout envie d’effectuer un nettoyage
                sur nous, que nous le jugeons inutile ou que nous considérons
                que nous avons des choses plus importantes à faire... bref,
                lorsque nous le désirons le moins...c’est là que nous avons le
                plus besoin d’effectuer ce nettoyage !
                <br />
                <br />
                <h2 className="h2TextContainer">
                  Réserver une séance de nettoyage énergétique
                </h2>
                <br/>
                <h1 className="rapell">CHANTAL VIVENT</h1>
                <h1 className="rapell">06 80 52 04 94</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PagePrestations;
