import { useForm } from "react-hook-form";
import './searchRoad.scss';
import { Button } from '../../index'

function SearchRoad(props){

    // eslint-disable-next-line
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    } 

    return(
        <form className="searchRoad__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="searchRoad__form__inputContainer">
                <label htmlFor="searchRegion"> Région</label>
                <input type="text" id='searchRegion' {...register('region')} />
            </div>

            <div className="searchRoad__form__inputContainer">
                <label htmlFor="searchCity"> Ville</label>
                <input type="text" id='searchCity' {...register('city')} />
            </div>

            <div className="searchRoad__form__inputContainer" >
                <label htmlFor="SearchTransport"> Transport</label>
                <input type="text" id='SearchTransport' {...register('transport')} />
            </div>

            <Button id="searchRoad__form__inputSubmit" type="button" size="medium" value="Envoyer" color="green" />


        </form> 
    )
}

export default SearchRoad