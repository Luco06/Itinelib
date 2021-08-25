import { useForm } from "react-hook-form";
import './addItinerary.scss';
import { useDebounce } from '../../index'
import AddItineraryForm from './addItineraryForm.js/AddItineraryForm'


import axios from 'axios';
import React,  {useState, useEffect} from 'react';



function AddItinerary(props){

    const [address, setAddress] = useState([])
    const [ listOption, setListOption ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('')
    const [departure, setDeparture] = useState()
    const [departureLocation, setDepartureLocation] = useState({})
    const [arrivalLocation, setArrivalLocation] = useState({})
    const [arrival, setArrival] = useState()
    const [ isSearching, setIsSearching ] = useState(false);
    const [ transport, setTransport] = useState()

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
   
           setDepartureLocation({x:departure[0].geometry.coordinates[0], y:departure[0].geometry.coordinates[1]})
           setArrivalLocation({x:arrival[0].geometry.coordinates[0], y:arrival[0].geometry.coordinates[1]})
        if(departure && arrival && transport){
            console.log(transport)
            console.log(departure[0])
            console.log(arrival)
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
        setTransport(transport)  
    }
        
        return(
            <AddItineraryForm
                onSubmit={onSubmit}
                searchAddress={searchAddress}
                listOption={listOption}
                displayListOption={displayListOption}
                addTransport={addTransport}
            />
    )
}

export default AddItinerary
