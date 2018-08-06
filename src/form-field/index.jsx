import React from 'react'

const FormField = (props) => <div className="form-field">
  <label htmlFor={props.name}>{ props.label }</label>
  <input
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={(e) => props.handleChange(e, props.attr)}
  />
</div>

export default FormField