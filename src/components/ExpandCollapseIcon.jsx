import React from 'react'
import { FcExpand, FcCollapse } from "react-icons/fc";

function ExpandCollapseIcon({ expanded, flipped }) {
    let expand = <FcCollapse className={"expandCollapseIcon float-" + (flipped==1 ? 'left' : "right")}/>;
    // expand = <FcCollapse className={"expandCollapseIcon float-right"}/>;
    const collapse = <FcExpand className={"expandCollapseIcon float-" + (flipped==1 ? 'left' : "right")}/>;

  return (
    expanded ? expand : collapse
  )
}

export default ExpandCollapseIcon