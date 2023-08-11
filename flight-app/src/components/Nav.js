import React from 'react';
import {Link} from 'react-router-dom'


function NavBarResponsive() {
    return (


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            className="navbar-toggler-icon"></span>
        </button>

    );
}

function NavMenu(props) {

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                {props.navData.map((data, index) => {
                    return (

                         

                            <li key={index} className={data.active ? "nav-item active" : "nav-item"}>
                                <Link className="nav-link " to={data.url}>{data.text}
                                    {/* {data.active &&
                                        <span className ="sr-only">(current)</span>
                                    } */}
                                </Link>

                            </li>
                    )      
                   
                })


                }

            </ul>
        </div>

    );

}




function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <Link className="navbar-brand" to="/">Start Bootstrap</Link>

                    <NavBarResponsive />
                    <NavMenu navData={props.navData} />


                </div>
            </nav>
        </div>
    );

}


export default Nav;