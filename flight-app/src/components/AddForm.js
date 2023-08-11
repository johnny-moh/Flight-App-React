import React from 'react';

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: '', flight_No: '', airline: '', trip_type: '',
                departure_airport: '', arrival_airport: '',
                departure_date: "", return_date: ''


            }
        }



    }



    handleChange = (event) => {

        let { name, value } = event.target;
        let data = this.state.data;
        data[name] = value;
        this.setState({ data })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.error) {
            this.props.addFlight(this.state.data)
            this.setState({
                data: {
                    id: '', flight_no: '', airline: '', trip_type: '',
                    departure_airport: '', arrival_airport: '',
                    departure_date: '', return_date: ''
                }
            });


        }

    }



    render() {




        let data = this.state.data;
        return (



            <div className="container">
                <div className="row">
                    <h1 className='text-center '>Add Flight Scheduale</h1>
                    <div className="col-lg-10 mb-10 border p-2 bg-light offset-md-3 ">
                        <div className='table-responsive border p-4 bg-light rounded  justify-content'>
                            <form>
                                <div className='form-row'>

                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Id:

                                        </label>
                                        <input name="id" className='form-control' type="number" min="1" max="99999"
                                            value={data.Id}
                                            onChange={this.handleChange}
                                        >

                                        </input>
                                    </div>
                                    <div className='col-md-6 mb-3'>

                                        <label>
                                            Flight No:

                                        </label>
                                        <input name="flight_no" className='form-control' maxLength="10"
                                            value={data.flight_no}
                                            onChange={this.handleChange}></input>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Airline:

                                        </label>
                                        <input name="airline" className='form-control' maxLength="25"
                                            value={data.airline}
                                            onChange={this.handleChange}></input>
                                    </div>

                                </div>
                                <div className='form-row'>

                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Trip Type:

                                        </label>
                                        <select name="trip_type" className='form-control custom-select'
                                            value={data.trip_type}
                                            onChange={this.handleChange} >
                                            <option>One Way</option>
                                            <option>Round trip</option>
                                            <option value="Multi">Multiple Destinations</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Departure Airport:

                                        </label>
                                        <input type="text" name='departure_airport' className='form-control'
                                            value={data.departure_airport}
                                            onChange={this.handleChange}></input>

                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Arrival Airport:

                                        </label>
                                        <input type="" name='arrival_airport' className='form-control' value={data.arrival_airport}
                                            onChange={this.handleChange}></input>
                                    </div>

                                </div>
                                <div className='form-row'>


                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Departure Date:

                                        </label>
                                        <input type="date" name='departure_date' className='form-control'
                                            value={data.departure_date}
                                            onChange={this.handleChange}></input>
                                    </div>
                                    <div className='col-md-6 mb-3'></div>


                                </div>
                                <div className='form-row'>


                                    <div className='col-md-6 mb-3'>
                                        <label>
                                            Return Date:

                                        </label>
                                        <input type="date" name='return_date' className='form-control'
                                            value={data.return_date}
                                            onChange={this.handleChange}></input>
                                    </div>
                                    <div className='col-md-6 mb-3'></div>


                                </div>


                                <button onClick={this.handleSubmit}

                                    type="button" className="btn btn-primary btn-just-icon btn-lg  justify-content .justify-content-center"
                                >Submit</button>


                            </form>


                        </div>
                    </div>
                </div>

            </div>










        )

    }

}


export default AddForm;