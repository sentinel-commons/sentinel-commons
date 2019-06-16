import React, { Component } from "react"
import "./contact-form.scss"

class ContactForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  }
  onInputChange(type) {
    return value => this.setState({ [type]: value })
  }
  onSubmit(e) {
    // e.stopPropagation();
    e.preventDefault()
    const { firstname, lastname, email, phonenumber, message } = this.state
    const body = {
      firstname,
      lastname,
      email,
      phonenumber,
      message,
    }
    fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/6015195/62e20095-fa40-4929-90dd-546378e287e6",
      {
        mode: 'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then(console.log)
  }
  render() {
    const { showForm } = this.props
    if (!showForm) return null

    return (
      <div className="modal pa3 ml2 mr2">
        <form className="contact-form pa3" action="https://api.hsforms.com/submissions/v3/integration/submit/6015195/62e20095-fa40-4929-90dd-546378e287e6">
          <legend className="center contact-form__title m0">
            <h2 className="tc f3 f2-l mt0">Get In Touch!</h2>
          </legend>
          <Input
            name="email"
            type="email"
            prettyName="Email"
            onChange={this.onInputChange.bind(this)}
          />
          <Input
            name="firstname"
            prettyName="First Name"
            onChange={this.onInputChange.bind(this)}
          />
          <Input
            name="lastname"
            prettyName="Last Name"
            onChange={this.onInputChange.bind(this)}
          />
          <Input
            name="phone"
            prettyName="Phone Number"
            onChange={this.onInputChange.bind(this)}
          />
          <label className="contact-form__label mb1 f5" htmlFor="message-input">
            Message
          </label>
          <textarea
            className="contact-form__textarea pa2 mb4"
            id="message-input"
            name="message"
            rows="3"
          />
          <button
            className="contact-form__submit button-reset pa2 f4 fw6 ttu"
            onSubmit={e => this.onSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function Input({ name, prettyName, type = "text", onChange }) {
  const onInputChange = onChange(name)
  return (
    <React.Fragment>
      <label className="contact-form__label mb1 f5" htmlFor={`${name}-input`}>
        {prettyName}
      </label>
      <input
        onChange={e => onInputChange(e.target.value)}
        className="contact-form__input pa2 mb2 mb3-l bb1 f5"
        id={`${name}-input`}
        type={type}
        name={name}
      />
    </React.Fragment>
  )
}

export default ContactForm
