import { Button } from "../../../index" 
import LogoBike from '../../../../assets/images/bike.svg'
import LogoQuad from '../../../../assets/images/walk.svg'
import LogoWalk from '../../../../assets/images/quad.svg'
import { useForm } from "react-hook-form";


export default function SearchRoadForm (props){

    const { register, handleSubmit, watch, errors } = useForm();


    return(
        <form className="searchRoad__form" onSubmit={handleSubmit(props.onSubmit)}>
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
                    {...register("city")}
                />
                {
                            props.listOption.length > 0 ?
                        <datalist id='cityList'>
                            {props.displayListOption}
                        </datalist>
                        : null
                        }

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

        </form>
    )
}