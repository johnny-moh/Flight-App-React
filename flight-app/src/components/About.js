

import React from 'react';
import { Link } from 'react-router-dom';
import colorData from '../models/colorData';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datacolor: {
                id: '', color: '', value: '',

            }
        }

    }

    render() {


        return (


            <div className="container ">

                <div className="row gx-4">

                    <h1 className="font-weight-light">About Page of FlightApp</h1>
                    <p>This is a template that is great for Every Airline Flights Scheduale.
                        It doesn't have too much fancy design , but it makes a great use of the standard Bootstrap core components.
                        Feel free to use this template for any Flight Reservation!</p>
                        <table className="table table-hover">
                    <thead className='table-borderless table-primary'>
                        <tr>
                            <th scope="col">Id.</th>
                            <th scope="col">color</th>
                            <th scope="col">Value</th>
                            <th scope="col" style={{ width: '150px' }}>Action</th>
                            <th>
                            </th>
                      </tr>
                    </thead>
                    <tbody>

                {this.props.colorData.map(color => {
                    return (

                        <tr key={color.id}>

                            <th scope='row'>{color.id}</th>
                            <td>{color.color}</td>
                            <td>{color.value}</td>
                             <td>

                                <Link type="button"
                                    className="btn btn-success btn-just-icon btn-sm"
                                    to={"/edit/" + color.id}>Edit</Link>

                                <button onClick={() => { this.props.addcolor()}}

                                    type="button" className="btn btn-sm btn-danger">
                                    Delete

                                </button>



                            </td>
                        </tr>
                    );

                })
                }


            </tbody>
            </table>
                    <Link to="/">Call to Action!</Link>

                </div>



                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-5">

                        <h2 className="title">See The Flight Lists </h2>
                        <p className="text">Chech our massive flight database to find yor best one!</p>
                    </div>
                    <div className="footer"><Link to="/FlightsList" >More Info</Link></div>
                </div>
            </div>








        );



    }

}
export default About;