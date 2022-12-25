import React from "react";

function ContactMe({ flipped }) {
  return (
    <div id="Contact Me" className="section">
      <div className={`sectionLabel order-${flipped}`}>Contact Me</div>
      <div className="sectionContent">
        <ul>
          <li>ati.jain02@gmail.com</li>
          <li href="www.linkedin.com/in/atishay-jain123">www.linkedin.com/in/atishay-jain123</li>
          <li href="www.github.com/atjain02">www.github.com/atjain02</li>
        </ul>   
      </div>
    </div>
  );
}

export default ContactMe;
