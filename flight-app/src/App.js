import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NavData from './models/NavData';
import flightData from './models/flightData';
import AddForm from './components/AddForm';
import { Switch, Route, BrowserRouter as Router, useParams } from 'react-router-dom'
import FlightList from './components/FlightList';
import Home from './components/Home';
import About from './components/About';
import colorData from './models/colorData';
import { Update } from './components/Edit';
import EditFlight from './components/EditFlight'
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navData: NavData, flightData: flightData, showdata: true, colorData: colorData,  };
    this.deleteFlight = this.deleteFlight.bind(this);
    this.addFlight = this.addFlight.bind(this);
    this.addColor = this.addColor.bind(this);
    this.editColor = this.editColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.updateColor = this.updateColor.bind(this);
 





  }
 

  showform = () => {


    this.setState({ showdata: !this.state.showdata })
    // if (this.state.showdata == true) { 
    //   this.setState({ showdata: false })

    // } else {
    //   this.setState({ showdata: true })
    // }

  }


  editColor(id, newcolor) {

    let index = this.state.colorData.findIndex(anyColor => anyColor.id == id)
    this.state.colorData[index] = newcolor
    this.setState({ colorData: this.state.colorData })



  }

  updateColor(event) {

    event.preventDefault();
    if (!this.error) {
      this.props.colorData(this.state.data)
      this.setState({
        data: {
          id: '', color: '', value: '',
        }
      });


    }

  }



  deleteColor(id) {
    let temp = this.state.colorData;
    let index = temp.findIndex(color => color.id === id);
    temp.splice(index, 1);
    this.setState({ colorData: temp });
    console.log(id);
  }


  addColor(newcolor) {
    let color = this.state.colorData;
    color.push(newcolor);
    this.setState({ colorData: color })


  }


  addFlight(newdata) {
    let data = this.state.flightData;
    data.push(newdata);
    this.setState({ data: data })


  }

  updateFlight = (index, updatedFlightData) => {

    const flightData = this.state.flightData;
    flightData[index] = updatedFlightData;
    this.setState({ flightData })
    this.isSubmitted = true;
    //localStorage.setItem('data',JSON.stringify(updatedFlightData))

  }

  deleteFlight(id) {

    let temp = this.state.flightData;
    let index = temp.findIndex(flight => flight.id === id);
    temp.splice(index, 1);
    this.setState({ flightData: temp });
    console.log(id);

  }
  show = false;




  render() {





    return (
      <div className="App">
        <Router>

          <Nav navData={this.state.navData} />
          

          {this.show}

          <Switch>
            <Route path="/edit/:id" >
              <EditFlight flightData={this.state.flightData}
                updateFlight={this.updateFlight}
                isSubmitted={this.isSubmitted}
                resetSubmit={this.resetSubmit}

              >

              </EditFlight>

            </Route>


            <Route path='/flight_table'>
              <FlightList flightData={this.state.flightData} username="me" show={this.state.showdata} showhideform={this.showform} deleteFlight={this.deleteFlight} />
            </Route>

            <Route path='/add_form'>
              <AddForm addFlight={this.addFlight} />
            </Route>

            {/* <Route>
              <FlightList flightData={this.state.flightData} deleteFligh={this.deleteFlight} />
            </Route> */}



            <Route path='/about'>

              <About colorData={this.state.colorData} />

            </Route>





            <Route path='/editColor/:id'>

              <Update colorData={this.state.colorData} updateColor={this.editColor} />

            </Route>

            <Route path='/'>

              <Home colorData={this.state.colorData} deleteColor={this.deleteColor} />

            </Route>




          </Switch>

        </Router>


        <Footer />
      </div>

    );
  }

}

export default App;
