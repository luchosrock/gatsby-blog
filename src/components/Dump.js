import React from "react";
const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: "1px solid #efefef",
      padding: 10,
      background: "white"
    }}
  >
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <span role="img" aria-label="poo">
          <strong style={{ color: "white", background: "red" }}>
            {key} 💩
          </strong>
        </span>
        {JSON.stringify(val, "", " ")}
      </pre>
    ))}
  </div>
);
export default Dump;
