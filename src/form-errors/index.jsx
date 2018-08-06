import React from 'react'

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const FormErrors = ({ errors }) => <div className="form-errors">
  <h4>There was problems with your form:</h4>
  <ul>
  {
    Object.keys(errors).map(error => <li>{error.capitalize()} { errors[error] }</li>)
  }
</ul>
</div>

export default FormErrors