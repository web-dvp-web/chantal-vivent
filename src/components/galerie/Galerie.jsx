import "./galerie.css";
const Galerie = (props) => {
  return (
    <div className="galerieContainer">
      <div className="imgContainer">
        <div className="h1Container">
          <h1 className="h1Galerie">{props.titre1}</h1>
          <h1 className="h1Part2">{props.titre2}</h1>
        </div>
        <div className="h2GalerieContainer">
          <h2 className="h2Galerie">{props.soustitre}</h2>
          <p className="descriptionGalerie">{props.description}</p>
        </div>
        <img className="imgGalerie" src={props.img1} alt="img" />
        <img className="imgGalerie" src={props.img2} alt="img" />
        <img className="imgGalerie" src={props.img3} alt="img" />
        <img className="imgGalerie" src={props.img4} alt="img" />
        <img className="imgGalerie" src={props.img5} alt="img" />
        <img className="imgGalerie" src={props.img6} alt="img" />
        <img className="imgGalerie" src={props.img7} alt="img" />
        <img className="imgGalerie" src={props.img8} alt="img" />
        <img className="imgGalerie" src={props.img9} alt="img" />
      </div>
    </div>
  );
};
export default Galerie;
