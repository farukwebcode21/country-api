import React from 'react'

const Country = (props) => {
    console.log(props.countrie);
    const {name, capital, flags, population} = props.countrie;
    return (
        <div className="country">
            <img height="200px" width="300px" src={flags.png} alt=""/>
            <h4>Country Name:{name.common}</h4>
            <p>Capital :{capital}</p>
            <p>Population:{population}</p>

        </div>
    )
}

export default Country
