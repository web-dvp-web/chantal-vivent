import './cartesinformations7.css'
import { Fade } from "react-awesome-reveal";

const CarteInformations6 = (props) => {
    return(
        <div className="carteInformations5Container">
            <div className='infoCi6Container'>
            <Fade direction='up'>
              <h2 className="h2Ci6">{props.titre}</h2>
            </Fade>
            <Fade direction='up'>
              <p className="pCi6">{props.texte}</p>
            </Fade>
            </div>
            <div className='imgCi6Container'>
              <img className="imgCi6"  alt="img" src={props.img}/>
            </div>
        </div>
    )
}
export default CarteInformations6