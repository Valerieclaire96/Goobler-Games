import React from "react"

export default function Title({ title, subtitle }) {

    return (
      <div>
        <h1>{title}</h1>
        <h6 className="mb-3">{subtitle}</h6>
      </div>
    )
  }
  