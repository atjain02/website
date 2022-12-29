import React from "react";
import ExpandCollapseIcon from "./ExpandCollapseIcon.jsx";

function Expandable({ children, initial, flipped }) {
  const [expanded, setExpanded] = React.useState(initial);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

//   const MyComp = ToExpand;

  return (
    <div className="group clickable" onClick={toggleExpanded}>
      {children(flipped, expanded, <ExpandCollapseIcon expanded={expanded} flipped={flipped} />)}
    </div>
  );
}

export default Expandable;
