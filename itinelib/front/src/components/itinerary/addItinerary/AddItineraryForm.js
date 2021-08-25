import { useForm } from "react-hook-form";
import './addItineraryForm.scss';
import { Button, useDebounce } from '../../index'
import LogoBike from '../../../assets/images/bike.svg'
import LogoQuad from '../../../assets/images/walk.svg'
import LogoWalk from '../../../assets/images/quad.svg'

import axios from 'axios';
import React,  {useState, useEffect} from 'react';



function AddItineraryForm(props){

    const { register, handleSubmit, watch, errors } = useForm();
    const [address, setAddress] = useState([])
    const [ listOption, setListOption ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('')
    const [departure, setDeparture] = useState()
    const [arrival, setArrival] = useState()
    const [ isSearching, setIsSearching ] = useState(false);
    const [ transportValue, setTransportValue] = useState()

    const debouncedSearchTerm = useDebounce(searchValue, 500);


    useEffect(
        () => {
          if (debouncedSearchTerm) {
            setIsSearching(true);
            getAddress(debouncedSearchTerm).then((results) => {
            //   createListe(results)
            setListOption(results)
              setIsSearching(false);
              setAddress(results);
            });
          } else {          
              setListOption([])
            setAddress([]);
            setIsSearching(false);
          }
        },
        [debouncedSearchTerm] 
      );


     
    const onSubmit = (data) =>{
        console.log('submit',data)
       getLocation(data.departure, 'departure')
       if (getLocation){
           const departureLocation = {x:departure[0].properties.x, y:departure[0].properties.y}
           const arrivalLocation = {x:arrival[0].properties.x, y:arrival[0].properties.y}
           console.log(departureLocation)
           console.log(arrivalLocation)
       }
       else{
           console.log("la localisation n'a pas marché")
       }
    } 

    const getAddress = async(addressValue)=>{
        try{
            return await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${addressValue}&limit=20`)
                        .then(el => el.data.features.map(adress => {
                            setAddress(address)
                            return adress
                        }))
                        .catch(e => {
                            return[]
                        })}
        catch(e){
            return[]
        }
    }

      const getLocation = (el,nameInput) => {
          const addresse = address.filter( e => e.properties.label == el )
        switch(nameInput){
            case'departure':
                setDeparture(addresse);
            
            case 'arrival':
                setArrival(address);
            break;

            default:
                return console.log('le switch ne marche pas')
        }
      }

      
      const displayListOption = listOption.map((e,i) => <option key={i} value={e.properties.label}/>)

      const searchAddress = (event) => {
        setSearchValue('')
        const name = event.target.name
        setSearchValue(event.target.value)
        if (event.target.value && name){
            const searchedAddress = address.filter(e => e.properties.label == event.target.value)

            switch(name){
                case 'departure':
                        setDeparture(searchedAddress)
                    break;
                    case 'arrival':
                        setArrival(searchedAddress)
                        break;
                    default:
                        return null
            }
        }
      }

      const addTransport = (event, transport) => {
          setTransportValue(transport)  
        }
        
        return(
            <>
                <form className="addItinerary__form" onSubmit={handleSubmit(onSubmit)} >


                    <div className="searchRoad__form__inputContainer">
                        <label>Point de départ</label>
                        <input 
                        id="departure"
                        name="departure"
                        label="Point de départ"
                        placeholder="Exemple : 18 rue de..."
                        onChange={searchAddress}
                        list="departureList"
                        />
                        {
                            listOption.length > 0 ?
                        <datalist id='departureList'>
                            {displayListOption}
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
                            onChange={searchAddress}
                            list="arrivalList"
                        />
                        {
                            listOption.length > 0 ?
                        <datalist id='arrivalList'>
                            {displayListOption}
                        </datalist>
                        : null
                        }

                    </div>


                    <div className="addItinerary__form__inputContainer transportForm" >
                            <figure>
                                <img onClick={(e) =>addTransport(e,'walk')} src={LogoWalk} alt="walk" />
                                <figcaption>Marche</figcaption>
                            </figure>
                            
                            <figure>
                                <img onClick={(e) =>addTransport(e,'quad')} src={LogoQuad} alt="quad" />
                                <figcaption>Quad</figcaption>
                            </figure>

                            <figure>
                                <img onClick={(e) =>addTransport(e,'bike')} src={LogoBike} alt="bike" />
                                <figcaption>Velo</figcaption>
                            </figure>
                    </div>

                    <Button id="addItinerary__form__inputSubmit" type="submit" size="medium" value="Ajouter" color="green" />

                </form> 
            </>
    )
}

export default AddItineraryForm
