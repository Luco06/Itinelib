import { useForm } from "react-hook-form";
import './addItinerary.scss';
import { useDebounce } from '../../index'
import AddItineraryForm from './addItineraryForm.js/AddItineraryForm'
import { connect } from "react-redux";
import {changeItinerary} from '../../../redux/actions'



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
     
    const onSubmit = (event) =>{
        event.preventDefault()

   try{
       setDepartureLocation({x:departure[0].geometry.coordinates[0], y:departure[0].geometry.coordinates[1]})
       setArrivalLocation({x:arrival[0].geometry.coordinates[0], y:arrival[0].geometry.coordinates[1]})
    //    console.log('hahah',props)
    if(departure && arrival && transport){
        const tab = [departureLocation,arrivalLocation]
        console.log(transport)
        console.log(departureLocation)
        console.log(arrivalLocation)
        props.dispatch(changeItinerary(tab))
        // console.log([departureLocation.x,arrivalLocation])
    }
    else{
        return null
    }
   }
   catch(e){
       console.log(e)
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
            <>
                {props.toggleItinerary ?
                    <AddItineraryForm
                        onSubmit={onSubmit}
                        searchAddress={searchAddress}
                        listOption={listOption}
                        displayListOption={displayListOption}
                        addTransport={addTransport}
                    />
                :
                    null
                }
            </>
    )
}

export default connect((state)=>{
    return {
        toggleItinerary:state.toggleItinerary,
        itineraryWaypoint:state.itineraryWaypoint
    }
})(AddItinerary)
