import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LeadForm extends React.Component {

  renderError = ({ error, touched }) => {
    if(touched && error) {
      return (
        <div className="ui error message">
            <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues, sequenceId) => {
      this.props.onSubmit(formValues, sequenceId)
  }

  renderSpinner = () => {
    if(this.props.loading) {
      return (
        <div style ={{margin: 'auto'}} class="ui active centered inline loader"></div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="ui card" style={{ marginTop: '50px'}}>
        <div className="content">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> 
            <Field name="fullName" component={this.renderInput} label="Nombre y Apellido"/>
            <Field name="email" component={this.renderInput} label="Email"/>
            <button className="ui button primary">{this.props.buttonText}</button>
            {this.renderSpinner()}
          </form>
          <p style={{marginTop: '3px', color: 'red'}}>{this.props.message}</p>
        </div>
      </div>
    )
  }  
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.fullName) {
        errors.fullName = 'You must enter a name'
    }

    let validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if(!validateEmail(formValues.email)) {
        errors.email = 'Please enter a valid email'
    }

    if(!formValues.email) {
        errors.email = 'You must enter an email'
    }
    return errors
}


export default reduxForm({
  form: 'LeadForm',
  validate: validate
})(LeadForm)