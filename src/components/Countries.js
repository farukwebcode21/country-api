import React, { useEffect, useState } from 'react'
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
 
    return (
        <div className="container">
            <h1>Total Country : {countries.length}</h1>
            <div className="container-country">
                {
                    countries.map(countrie => <Country 
                        key={countrie.cca2} 
                        countrie ={countrie}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries
