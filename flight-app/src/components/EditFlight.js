import React from 'react';
import { useParams } from 'react-router-dom';
import EditFlightForm  from './EditFlightForm';


 const  EditFlight= (props)=> {
    //This is how we find the id from URL and index from DataList
    const id = parseInt(useParams().id);
    const index = props.flightData.findIndex(obj => obj.id === id);
    const flight = (index !== -1) ? props.flightData[index] : props.flightData[0];

    const newFlight = {
        "id": React.createRef(),
        "airline": React.createRef(),
        "flight_no": React.createRef(),
        "trip_type": React.createRef(),
        "departure_airport": React.createRef(),
        "arrival_airport": React.createRef(),  
        "departure_date": React.createRef(),
        "return_date": React.createRef()
    }
    
    console.log('hello');
 const handleSubmit = (e) =>{
    e.preventDefault();
    flight.flight_no =              newFlight.flight_no.current.value;
    flight.airline =                newFlight.airline.current.value;
    flight.trip_type =              newFlight.trip_type.current.value;
    flight.departure_airport =      newFlight.departure_airport.current.value;
    flight.arrival_airport =        newFlight.arrival_airport.current.value;
    flight.departure_date =         newFlight.departure_date.current.value;
    flight.return_date =            newFlight.return_date.current.value;
 
    props.updateFlight(index, flight)

}
console.log(props.isSubmitted);
    return (
        <div className="container">
            <div className="row">
                <h1 className='text-left '>Edit Flight Scheduale</h1>
                <div className="col-lg-12 mb-5 border p-4 bg-light ">
                    <div className='table-responsive border p-4 bg-light rounded'>
                    {/* means == true */}
                    {!props.isSubmitted ?
                    <EditFlightForm flight={flight} newFlight={newFlight} handleSubmit={handleSubmit} />

                        :
                        <p className='text-center alert-danger p-2 rounded'>
                            Successfuly Updated!
                            {props.resetSubmit()}
                        </p>
                }

                    </div>
                </div>
            </div>

        </div>










    )

}


export default EditFlight;


