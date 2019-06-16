import React, { Component } from "react"
import HubspotForm from 'react-hubspot-form'
import { X } from "react-feather"

import "./contact-form.scss"

class ContactForm extends Component {
  render() {
    const { showForm, closeForm } = this.props
    if (!showForm) return null

    return (
      <div className="modal pa3 ml2 mr2">
        <button className="modal__close button-reset pa1" onClick={closeForm}><X size={32} /></button>
        <legend className="center contact-form__title m0">
          <h2 className="tc f3 f2-l mt1">Get In Touch!</h2>
        </legend>
        <div className="mt0 pl3 pl4-l mr0 center">
          <HubspotForm
            portalId='6015195'
            formId='62e20095-fa40-4929-90dd-546378e287e6'
            // onSubmit={() => this.closeForm()}
            // onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />
        </div>
      </div>
    )
  }
}


export default ContactForm
