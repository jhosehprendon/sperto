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

  renderDropdown = ({options, label, meta, input}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    const renderSelectOptions = (key, index) => {
      return (
        <option
          key={`${index}-${key}`}
          value={key}
        >
          {options[key]}
        </option>
      );
    }
    if (options) {
      return (
        <div className={className}>
          <p><strong>{label}</strong></p>
          <select {...input} style={{height: '40px'}}>
            <option value="">Selecciona una opción</option>
            {Object.keys(options).map(renderSelectOptions)}
          </select>
          {this.renderError(meta)}
        </div>
      )
    }
    return <div></div>
  }

  checkDropdown = () => {
    if(this.props.from) {
      return (
        <Field
        name="leadType"
        label="Como te describes"
        component={this.renderDropdown}
        options={{
          manager: 'Manejo el presupuesto de Marketing (CEO, Founder, Owner)',
          employee: 'Soy empleado (Media Buyer, Marketer)'
        }}
      />
      )
    }
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
            {this.checkDropdown()}

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
        errors.fullName = 'Debes ingresar un nombre'
    }

    let validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if(!validateEmail(formValues.email)) {
        errors.email = 'Por favor ingresa un email válido'
    }

    if(!formValues.leadType) {
      errors.leadType = 'Por favor seleciona una opción'
    }

    if(!formValues.email) {
        errors.email = 'Debes ingresar un email'
    }
    return errors
}


export default reduxForm({
  form: 'LeadForm',
  validate: validate
})(LeadForm)