import { Button } from "../../../index" 
import LogoBike from '../../../../assets/images/bike.svg'
import LogoQuad from '../../../../assets/images/walk.svg'
import LogoWalk from '../../../../assets/images/quad.svg'
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {displayaddItineray} from '../../../../redux/actions'

function SearchRoadForm (props){

    const { register, handleSubmit, watch, errors } = useForm();


    const toggleAdd = () => {
        props.dispatch(displayaddItineray())
        console.log(props)
    }
    return(
        <form className="searchRoad__form" onSubmit={props.onSubmit}>
            <div className="searchRoad__form__inputContainer">
                <label htmlFor="searchCity"> Taper une Ville</label>
                <input 
                    type="text" 
                    id="city"
                    name="city"
                    label="Point d'arrivée"
                    placeholder="Exemple : 18 rue de..."
                    onChange={props.searchAddress}
                    list="cityList"
                />
                {
                            props.listOption.length > 0 ?
                        <datalist id='cityList'>
                            {props.displayListOption}
                        </datalist>
                        : null
                        }

                        {console.log("dispatch",props.dispatch)}

            </div>


            <div className="addItinerary__form__inputContainer transportForm" >
                            <figure>
                                <img onClick={(e) =>props.addTransport(e,'walk')} src={LogoWalk} alt="walk" />
                                <figcaption>Marche</figcaption>
                            </figure>
                            
                            <figure>
                                <img onClick={(e) =>props.addTransport(e,'quad')} src={LogoQuad} alt="quad" />
                                <figcaption>Quad</figcaption>
                            </figure>

                            <figure>
                                <img onClick={(e) =>props.addTransport(e,'bike')} src={LogoBike} alt="bike" />
                                <figcaption>Velo</figcaption>
                            </figure>
                    </div>

            <Button id="searchRoad__form__inputSubmit" type="submit" size="medium" value="Envoyer" color="green" />


                    <div>
                        <button onClick={toggleAdd}>Ajouter un itineraire</button>
                    </div>
        </form>
    )
}


export default connect((state)=>{
    console.log(state)
    return {
        toggleItinerary:state.toggleItinerary
    }
})(SearchRoadForm)