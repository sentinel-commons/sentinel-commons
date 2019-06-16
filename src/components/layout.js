/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import ContactForm from "./contact-form"
import "tachyons/css/tachyons.min.css"
import "../styles/layout.scss"

class Layout extends Component {
  state = {
    showForm: false,
  }

  setShowForm() {
    this.setState(({ showForm }) => ({ showForm: !showForm }))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              setShowForm={() => this.setShowForm(true)}
              siteTitle={data.site.siteMetadata.title}
            />
            <div className={`App ${this.state.showForm && "modal-open"}`}>
              <main>{this.props.children}</main>
              <Footer />
            </div>
            <ContactForm
              closeForm={() => this.setShowForm(false)}
              showForm={this.state.showForm}
            />
          </>
        )}
      />
    )
  }
}

// = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header showForm={() => setShowForm(true)} siteTitle={data.site.siteMetadata.title} />
//         <div className="App">
//           <main>{children}</main>
//           <Footer />
//           <ContactForm showForm={showForm} />
//         </div>
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
