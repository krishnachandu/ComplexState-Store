import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    if (event.target.name === "fName") {
      fullName.fName = event.target.value;
      setFullName({ fName: event.target.value, lName: fullName.lName });
    } else {
      fullName.lName = event.target.value;
      setFullName({ lName: event.target.value, fName: fullName.fName });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
