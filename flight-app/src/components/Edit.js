import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import colorData from '../models/colorData';
import { useForm } from 'react-hook-form'
import { type } from '@testing-library/user-event/dist/type';






export function Update(props) {
    let { id } = useParams();
    console.log(id);
    let index = props.colorData.findIndex(color => color.id === (id));
    let colorData = props.colorData[index]
    //console.log(colorData);
    return <Edit id={id} index={index} colorData={colorData} updateColor={props.updateColor} />
}


const Edit = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(errors);
    


    function allFilled(props){
        return<h1>Thanks, We will get back to you</h1>
    }
    function allNotFilled(props){
        return<h1>You need to fillout every part</h1>
    }

    function isFilled(props){
        const isFilled = props.isFilled;
        if(isFilled){
            return <allFilled/>;
        }
        return<allNotFilled/>;

    }

    return (

        <div className="col-md-12 offset-md-5  ">
            {/* {this.submitted ?
                <p></p>
                : */}
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
                props.updateColor(props.id, data)
                props.updateColor(props.color, data)
            })}>

                <div className="form-row ">

                    <div className="col-md-3 mb-3 ">
                        <label>ID</label>
                        <input className="form-control"



                            {...register('id', {
                                required: "This filed is required", maxLength: {
                                    value: 10,
                                    message: 'Max lenght should be less than 10 char'
                                }, minLength: 2
                            })}

                        />
                    </div>
                </div>
                <p>{errors.id ? errors.id.message : ''}</p>


                <div className="form-row">

                    <div className="col-md-3 mb-3">
                        <label>color</label>
                        <input className="form-control"
                            {...register('color', {
                                required: "You can not use Numeric Numbers", minLength: {
                                    value: 2,

                                    message: 'You can not use Numeric Numbers'
                                }
                            })}

                        />
                    </div>
                </div>
                <p>{errors.color ? errors.color.message : ''}</p>
                <div className="form-row">

                    <div className="col-md-3 mb-3">
                        <label>Value</label>



                        <input className="form-control"

                            {...register('value', {
                                required: "this field is required", type: 'number', minLength: {
                                    value: 3,
                                    message: 'You need more than 3 digits'
                                }
                            })}


                        />
                    </div>
                </div>
                <p>{errors.value ? errors.value.message : ''}</p>

                <div className="col-md-3 mb-3 offset-md-0">
                    <button className="btn btn-primary"
                    onClick={props.isFilled}

                    >Submit</button>
                </div>

            </form>



        </div>




    )

}


// class Edit extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { colorData: this.props.colorData }

//     }



//     handleChange = (event) => {

//         let { name, value } = event.target;
//         let colorData = this.state.colorData;
//         colorData[name] = value;
//         this.setState({ colorData })

//     }

//     submitted = false;


//     handleSubmit = (event) => {

//         this.submitted = true;

//         event.preventDefault();
//         this.props.updateColor(this.props.id, this.state.colorData)
//         // this.setState({colorData })


//     }


//     render() {
//         return (
//             <div className="col-md-12 offset-md-5  ">
//                 {this.submitted ?
//                     <p></p>
//                     :
//                     <form onSubmit={this.handleSubmit}>

//                         <div className="form-row ">

//                             <div className="col-md-3 mb-3 ">
//                                 <label>ID</label>
//                                 <input className="form-control"

//                                     name="id"
//                                     type="Int"
//                                     value={this.state.colorData.id}
//                                     onChange={this.handleChange}

//                                 />
//                             </div>
//                         </div>


//                         <div className="form-row">

//                             <div className="col-md-3 mb-3">
//                                 <label>color</label>
//                                 <input className="form-control"

//                                     name="color"
//                                     type="string"
//                                     value={this.state.colorData.color}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>

//                         <div className="form-row">

//                             <div className="col-md-3 mb-3">
//                                 <label>Value</label>
//                                 <input className="form-control"

//                                     name="value"
//                                     type="Int"
//                                     value={this.state.colorData.value}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-md-3 mb-3 offset-md-0">
//                             <button className="btn btn-primary"

//                             >Submit</button>
//                         </div>

//                     </form>
//                 }


//             </div>

//         )


//     }

// }
