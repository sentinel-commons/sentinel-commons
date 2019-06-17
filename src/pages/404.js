import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Home } from "react-feather"

const NotFoundPage = () => (
  <Layout>
    <div className="mt6" style={{minHeight: '50vh'}}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>Wanna <Link to="/">go back home</Link>?</p>
      <p><Link className="black" to="/"><Home alt="home icon" /></Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
