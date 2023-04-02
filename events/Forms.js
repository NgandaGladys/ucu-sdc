import React from "react";
import "./Form.css";

export function MyForm() {
  return (
    <div>
    <h1>Please provide your info to register for the event</h1>
    
    <div id="form1">
      
      <form onSubmit={""}>
        <div className="name">
          <label>Name: </label>
          <input type="text" value="Enter name"  />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value="Enter email"/>
        </div>
        <div>
          <label>Contact: </label>
          <input type="text" value="Enter contact" />
        </div>
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

// const [showForm, setShowForm] = useState("");

// return (
//   <div className="App">
//     <div className="disp">
//       <div>
//         <div className="event-image">
//           <img src={download} />
//         </div>
//         <div className="event-description">
//           <h2>
//             <a href="#">Web development Bootcamp 2023</a>
//           </h2>
//           <p>
//             We designed and built studio-style scenery that set the virtual
//             stage for executive presentations, differentiating this new
//             experience from the original live conference. We put into place a
//             video graphics system that could handle multiple sources on screen
//             at one time so that we could marry the presenter image with their
//             speaker support. This gives an upleveled finish to the final product
//             vs. simply cutting back and forth between presenter and PowerPoint
//             slides. We also provided video playback capabilities to allow
//             seamless roll-ins that added an entirely different layer of content
//             delivery than what was happening on the main stage. We're proud of
//             how quickly the plan came together, but it couldn’t have happened
//             without a team that’s done this many, many times before.
//           </p>
//         </div>
//         <button className="register" onClick={() => setShowForm("form")}>
//           Register
//         </button>
//         {showForm === "form" && <MyForm />}
//       </div>
//     </div>
//   </div>
// );
