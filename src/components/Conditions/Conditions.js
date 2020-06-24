import React from 'react';
import classes from './Conditions.module.css'

const conditions = (props) => {
    return (
        <div className={classes.Wrapper}>

            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

            {props.loading && <div className={classes.Loader} />}


            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>Temperature: {Math.round(props.responseObj.main.temp)} degrees</p>
                    <p>Humidity Index: {Math.round(props.responseObj.main.humidity)}</p>
                    <p>Conditions: {props.responseObj.weather[0].description}</p>
                </div>
            : null
            }
        </div>
    )
}

export default conditions;