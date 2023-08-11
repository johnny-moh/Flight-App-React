import React from 'react';


function EditFlightForm(props) {





    return (


        <div className="container">
            <div className="row">
                <h1 className='text-left '>Edit Flight Scheduale</h1>
                <div className="col-lg-12 mb-5 border p-4 bg-light ">
                    <div className='table-responsive border p-4 bg-light rounded'>
                        <form>
                            <div className='form-row'>

                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Id:

                                    </label>
                                    <input name="id" className='form-control' type="number" min="1" max="99999"
                                        defaultValue={props.flight.id}
                                        ref={props.newFlight.id}
                                        readOnly

                                    >

                                    </input>
                                </div>
                                <div className='col-md-4 mb-3'>

                                    <label>
                                        Flight No:

                                    </label>
                                    <input name="flight_no" className='form-control' maxLength="10"
                                        defaultValue={props.flight.flight_no}
                                        ref={props.newFlight.flight_no}
                                    ></input>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Airline:

                                    </label>
                                    <input name="airline" className='form-control' maxLength="25"
                                        defaultValue={props.flight.airline}
                                        ref={props.newFlight.airline}
                                    ></input>
                                </div>

                            </div>
                            <div className='form-row'>

                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Trip Type:

                                    </label>
                                    <select name="trip_type" className='form-control custom-select'
                                        defaultValue={props.flight.trip_type}
                                        ref={props.newFlight.trip_type}
                                    >
                                        <option>One Way</option>
                                        <option>Round trip</option>
                                        <option value="Multi">Multiple Destinations</option>
                                    </select>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Departure Airport:

                                    </label>
                                    <input type="text" name='departure_airport' className='form-control'
                                        defaultValue={props.flight.departure_airport}
                                        ref={props.newFlight.departure_airport}
                                    ></input>

                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Arrival Airport:

                                    </label>
                                    <input type="" name='arrival_airport' className='form-control' defaultValue={props.flight.arrival_airport}
                                        ref={props.newFlight.arrival_airport}
                                    ></input>
                                </div>

                            </div>
                            <div className='form-row'>


                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Departure Date:

                                    </label>
                                    <input type="date" name='departure_date' className='form-control'
                                        defaultValue={props.flight.departure_date}
                                        ref={props.newFlight.departure_date}
                                    ></input>
                                </div>
                                <div className='col-md-4 mb-3'></div>


                            </div>
                            <div className='form-row'>


                                <div className='col-md-4 mb-3'>
                                    <label>
                                        Return Date:

                                    </label>
                                    <input type="date" name='return_date' className='form-control'
                                        defaultValue={props.flight.return_date}
                                        ref={props.newFlight.return_date}
                                    ></input>
                                </div>
                                <div className='col-md-4 mb-3'></div>


                            </div>


                            <button onClick={props.handleSubmit}

                                type="button" className="btn btn-primary btn-just-icon btn-lg"
                            >Submit</button>


                        </form>


                    </div>
                </div>
            </div>

        </div>










    )

}


export default EditFlightForm;

