import { useForm } from "react-hook-form";
import { Button } from '../../../index'
import LogoBike from '../../../../assets/images/bike.svg'
import LogoQuad from '../../../../assets/images/walk.svg'
import LogoWalk from '../../../../assets/images/quad.svg'



function AddItineraryForm(props){

    const { register, handleSubmit, watch, errors } = useForm();

    return(
        <>
            <form className="addItinerary__form" onSubmit={props.onSubmit} >

                <div className="searchRoad__form__inputContainer">
                    <label>Point de départ</label>
                    <input 
                    id="departure"
                    name="departure"
                    label="Point de départ"
                    placeholder="Exemple : 18 rue de..."
                    onChange={props.searchAddress}
                    list="departureList"
                    // {...register("departure")}

                    />
                    {
                        props.listOption.length > 0 ?
                    <datalist id='departureList'>
                        {props.displayListOption}
                    </datalist>
                    : null
                    }
                </div>

                <div className="searchRoad__form__inputContainer">

                    <label>Point d'arrivée</label>
                        <input 
                        id="arrival"
                        name="arrival"
                        label="Point d'arrivée"
                        placeholder="Exemple : 18 rue de..."
                        onChange={props.searchAddress}
                        list="arrivalList"
                        // {...register("arrival")}

                    />
                    {
                        props.listOption.length > 0 ?
                    <datalist id='arrivalList'>
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

                <Button id="addItinerary__form__inputSubmit" type="submit" size="medium" value="Ajouter" color="green" />

            </form> 
        </>
    )
}

export default AddItineraryForm
