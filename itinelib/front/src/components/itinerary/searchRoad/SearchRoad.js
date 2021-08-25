import './searchRoad.scss';
import { useDebounce } from '../../index'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import SearchRoadForm from "./searchRoadForm/SearchRoadForm";



function SearchRoad(props){    
    const [ city, setCity ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const [ isSearching, setIsSearching ] = useState(false);
    const [ transport, setTransport] = useState()
    const [ listOption, setListOption ] = useState([]);




    const debouncedSearchTerm = useDebounce(searchValue, 1000);



    useEffect(
        () => {
          if (debouncedSearchTerm) {
            setIsSearching(true);
            getCity(debouncedSearchTerm).then((results) => {
              setIsSearching(false);
              setCity(results);
              setListOption(results)
            });
          } else {
            setListOption([])
            setCity([]);
            setIsSearching(false);
          }
        },
        [debouncedSearchTerm] 
      );


      const displayListOption = listOption.map((e,i) => <option key={i} value={e.properties.label}/>)


    const onSubmit = (event) =>{
        event.preventDefault()        
        if (city){
            //post de transport[0]
        }
    } 

    const getCity = (address)=>{
        try{
            return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${address}`)
                        .then(el => el.data.features.map(adress => {
                            setCity(address)
                            return adress
                        }))
                        .catch(e => {
                            console.log(e) 
                            return[]
                        })}
        catch(e){
            console.log(e)
            return[]
        }
    }

    const addTransport = (event, transport) => {
        setTransport(transport)  
      }

      const searchAddress = (event) => {
        setSearchValue('')
        setSearchValue(event.target.value)
        if (event.target.value){
            const searchedAddress = city.filter(e => e.properties.label == event.target.value)
                        setCity(searchedAddress)

        }
      }

    return(
        <SearchRoadForm
        onSubmit={onSubmit}
        searchAddress={searchAddress}
        listOption={listOption}
        displayListOption={displayListOption}
        addTransport={addTransport}
        />
    )
}

export default SearchRoad