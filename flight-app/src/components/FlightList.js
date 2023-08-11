import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';



let TableHead = () => {

    return (
        <thead className='table-borderless table-primary'>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Airline</th>
                <th scope="col">Flight Number</th>
                <th scope="col">Trip Type</th>
                <th scope="col">Departure Airport</th>
                <th scope="col">Arrival Airport</th>
                <th scope="col">Departure Date</th>
                <th scope="col">Arrival Date</th>
                <th scope="col" style={{ width: '150px' }}>Action</th>
                <th>


                </th>



            </tr>
        </thead>



    );

}

let TableBody = (props) => {
    return (

        <tbody>

            {props.flightData.map(flight => {
                return (

                    <tr key={flight.id}>

                        <th scope='row'>{flight.id}</th>
                        <td>{flight.airline}</td>
                        <td>{flight.flight_no}</td>
                        <td>{flight.trip_type}</td>
                        <td>{flight.departure_airport}</td>
                        <td>{flight.arrival_airport}</td>
                        <td>{flight.departure_date}</td>
                        <td>{flight.return_date}</td>

                        <td>

                            <Link type="button"
                                className="btn btn-success btn-just-icon btn-sm"
                                to={"/edit/" + flight.id}>Edit</Link>

                            <button onClick={() => { props.deleteFlight() }}

                                type="button" className="btn btn-sm btn-danger">
                                Delete

                            </button>



                        </td>
                    </tr>
                );

            })
            }


        </tbody>
    )


}
let FlightButton = () => {

    const [info, setInfo] = useState('')
    const getInfo = () => {
        axios.get('https://app.goflightlabs.com/advanced-real-time-flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTUyZDM1OTAwYzNiMTBjMzFmZGYxNzcxYTRiMmNlMjYyMjBiNzZiOGQ5ZDNkNGIzMjM3NmU0ZWI2MTc3NGEyNWE0N2RhZWNhZDU2MDI4OWIiLCJpYXQiOjE2NzA1NDYyNTIsIm5iZiI6MTY3MDU0NjI1MiwiZXhwIjoxNzAyMDgyMjUyLCJzdWIiOiIxOTE3MyIsInNjb3BlcyI6W119.NFx0nYZhhi7cHOmeoBj6HTS0N3_BZ0qszz5Lm5KU4Gwgze8XKxTM5AvXgpc8ZLGpc8Aq4N3uveQeQUj88iCv7Q')
            .then(res => {

                console.log(res.data.aircraft)
                setInfo(res.data.aircraft)
            }).catch(err => {
                console.log(err)

            })

    }


    return (

      
            <button onClick={getInfo} type="button"
            {...info ? <p>{info}</p>: null}
                className="btn btn-success btn-just-icon btn-sm  ">Get Your Flight Info Here</button>
       
    );
}

let FlightList = (props) => {

    return (

        <div className="container">
            <div className="row">
                <h1 className='text-left '>Flight Scheduale</h1>
                <div className="col-lg-12 mb-5 border p-4 bg-light ">
                    <p className='text-left font-weight-bold'> Active Flight Scheduale </p>

                    <div className="table-responsive">
                        <h1></h1>


                        <button onClick={props.showhideform}
                            type="button" className='btn btn-md btn-show'>
                            Show Flight Table

                        </button>
                        {
                            props.show &&


                            <table className="table table-hover">
                                <TableHead />
                                <TableBody flightData={props.flightData} deleteFligh={props.deleteFlight} />
                                <FlightButton />



                            </table>
                        }




                    </div>
                </div>
            </div>



        </div>

    );
}

export default FlightList;