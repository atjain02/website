import React from "react";

function IconDesc( {href, icon, desc} ) {
  return (
    <div className="flex flex-col items-center group hover:scale-125 duration-500">
      <a href={href}>
        {icon}
      </a>
      <a className="align-middle p-2 text-lg">{desc}</a>
    </div>
  );
}

export default IconDesc;
