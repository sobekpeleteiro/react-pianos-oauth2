import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PianoService from '../service/PianoService';

class PianoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: null
        }

        this.state = {
            id: this.props.match.params.id,
            name: '',
            model: '',
            text: ''
        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        PianoService.getItem(this.state.id)
            .then(response => this.setState({
                id: response.data.pianoId,
                name: response.data.name,
                model: response.data.model,
                text: response.data.text
            }))
        
        
            
    }

    onSubmit(values) {
        PianoService.updateItem(values.id, values.text, values.model, values.name)
            .then(
                response => {
                    this.setState({ message: `Updated piano ${values.id}: OK` })
                }
            
        )

    }

    validate(values) {
        let errors = {}
        if (!values.text) {
            errors.text = 'Enter a text'
        } 
        if (!values.model) {
            errors.model = 'Enter a model'
        } 
        if (!values.name) {
            errors.name = 'Enter a name'
        } 
    
        return errors
    }

    goBack = () => {
        this.props.history.push(`/pianos/`)
      }


    render() {

        let { name, model, text, id } = this.state
        console.log("NAME:" + name + " MODEL:" + model)
        /*return (
            <div>
                <h3>Piano</h3>
                <div>{id}</div>
                <div>{name}</div>
                <div>{model}</div>
                <div>{text}</div>
                
            </div>
        )*/
            
        return (
            
            <div>
                <h3>&nbsp;&nbsp;Piano</h3>
                
                <div className="container">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <ErrorMessage name="text" component="div" className="alert alert-warning" />
                        <ErrorMessage name="model" component="div" className="alert alert-warning" />
                        <ErrorMessage name="name" component="div" className="alert alert-warning" />
                        

                    <Formik  
                            initialValues={{ id, text, model, name }} 
                            onSubmit={this.onSubmit} 
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}
                            >
                        

                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                        <Field className="form-control" type="text" name="name" />
                                        
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Model</label>
                                        <ErrorMessage name="model" component="div" className="alert alert-warning" />
                                        <Field className="form-control" type="text" name="model" />
                                        
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Text</label>
                                        <ErrorMessage name="text" component="div" className="alert alert-warning" />
                                        <Field className="form-control" type="text" name="text" />
                                        
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                    &nbsp;<button className="btn btn-secondary" type="button" onClick={this.goBack}>Done</button>
                                    
                                </Form>
                                
                                
                            )
                        }
                    </Formik>  
    
                </div>
            </div>
            
        )
                        
    }
    
}


export default PianoComponent