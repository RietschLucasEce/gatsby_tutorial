import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
	<div>
      <h1 style={{ color: `orange` }}>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/oQl0eVYd_n8/400x250" alt="" />
      <br/><br/>
      <Link to="/contact/">Contact us !</Link>
    </div>
  	)
}
