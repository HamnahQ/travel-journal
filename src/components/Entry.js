import React from 'react';

export default function Entry(props){
    return(
        <div className='entry'>
            <img src = {props.item.imageUrl} className= 'entry--image'/>
            <section className='entry-info'>
                <section className='entry--stats'>
                    <img src = {require("../images/location-pin.png")} className = "entry--pin"/>
                    <h3 className='entry--loc'>{props.item.location}</h3>
                    <a href = {props.item.googleMapsUrl} >View on Google Maps</a>
                </section>
                <section className = 'entry--text'>
                    <h2 className='entry--title'>{props.item.title}</h2>
                    <h4 className='entry--date'> {props.item.startDate} - {props.item.endDate}</h4>
                    <h5 className='entry--text'> {props.item.description}</h5>

                </section>
            </section>
            
            
        </div>
    )
}