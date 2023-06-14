import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h6 className="mb-3">{subtitle}</h6>
    </div>
  );
}
