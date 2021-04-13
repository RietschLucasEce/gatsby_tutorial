import React from "react"

export default function Header(props) {
  return (
  	<div>
	  	<h1 style={{color: 'red'}}>{props.headerText}</h1>
	  	<p>{props.pHeader}</p>
	</div>
  )
}