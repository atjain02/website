import React from "react";

function IconDesc( {href, icon, desc} ) {
  return (
    <div className="flex flex-col items-center group">
      <a href={href}>
        {icon}
      </a>
      <a className="align-middle p-2 text-lg group-hover:text-xl group-hover:mt-4">{desc}</a>
    </div>
  );
}

export default IconDesc;
