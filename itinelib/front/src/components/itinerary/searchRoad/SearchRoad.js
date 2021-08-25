import { useForm } from "react-hook-form";
import './searchRoad.scss';
import { Button, useDebounce } from '../../index'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AutoComplete } from "@react-md/autocomplete";




function SearchRoad(props){

    const { register, handleSubmit, watch, errors } = useForm();
    
    const [ city, setCity ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const [ listItinerary, setListItinerary ] = useState([])
    const [ isSearching, setIsSearching ] = useState(false);


    const debouncedSearchTerm = useDebounce(searchValue, 1000);



    useEffect(
        () => {
          if (debouncedSearchTerm) {
            setIsSearching(true);
            getCity(debouncedSearchTerm).then((results) => {
              setIsSearching(false);
              setCity(results);
            });
          } else {
            setCity([]);
            setIsSearching(false);
          }
        },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
      );



    let timeout = null;

   const delayBeforeSendingRequest = (e) => {
       setCity([])
        clearTimeout(timeout)
        let research = e.target.value
        if(research && research.length > 3 ){
            setSearchValue(research)

            timeout = setTimeout(async()=>{
                await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&limit=100`)
                .then(el => el.data.features.map(adress => {
                    setCity(old => [...old,adress])
                }))
            },1000)
        }
    }
    
    const onSubmit = (data) =>{
        console.log('oui')
        const address = data.city.replaceAll(' ','+')
        const region = data.region;
        const transport = data.transport;

        if (region && !address){
            // .then(data => setListItinerary(data))
            // faire un filter sur la liste pour afficher seulement ceux avec le bon moyen de transport
        }
        else if (region && address){
            // axios.get('') Tous les itinéraire de la région
            // Faire un filter + include avec tous les itinéraire qui contiennent le nom des rue
                // + le moyen de transport
            // .then(data => setListItinerary(data))
        }

        // getCity(address)
    } 

    const rere = city.map(e => e.properties.label)



    const getCity = (address)=>{
        try{
            return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${address}`)
                        .then(el => el.data.features.map(adress => {
                            // console.log(address)
                            // setCity(adress.properties.label)
                            return adress
                        }))
                        // .then(el => el.data)
                        .catch(e => {
                            console.log(e) 
                            return[]
                        })}
        catch(e){
            console.log(e)
            return[]
        }
    }



    return(
        <form className="searchRoad__form" >
        {/* <form className="searchRoad__form" onSubmit={handleSubmit(onSubmit)}> */}
            <div className="searchRoad__form__inputContainer">
                <label htmlFor="searchRegion"> Région</label>
                <input type="text" id='searchRegion' {...register('region')} />
            </div>

            <div className="searchRoad__form__inputContainer">
                <label htmlFor="searchCity"> Ville</label>
                {/* <input onChange={e => setSearchValue(e.target.value)} type="text" id='searchCity'  /> */}
                {/* <input onChange={e => setSearchValue(e.target.value)} {...register('city')} type="text" id='searchCity'  /> */}
                <AutoComplete
                    id="searchCity"
                    name="arrival"
                    label="Point d'arrivée"
                    placeholder="Exemple : 18 rue de..."
                    data={rere}
                    onChange={( e => setSearchValue(e.target.value))}
                    // {...register('arrival')}
                />
            </div>
            {console.log(city)}
            {console.log(searchValue)}

            <div className="searchRoad__form__inputContainer" >
                <label htmlFor="SearchTransport"> Transport</label>
                <input type="text" id='SearchTransport' {...register('transport')} />
            </div>

            <Button id="searchRoad__form__inputSubmit" type="submit" size="medium" value="Envoyer" color="green" />

        </form> 
    )
}

export default SearchRoad