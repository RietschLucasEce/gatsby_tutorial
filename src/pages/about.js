import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <h1>About Gatsby</h1>
      <Header headerText="HeaderProps" pHeader="paragraph from x"/>
      <p>Such wow. Very React.</p>
    </div>
  )
}