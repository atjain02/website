import React from "react";

function Details({ title, org, date, location, content, expanded }) {
  return (
    <div className='mb-8'>
      <div className="flex flex-row justify-between flex-nowrap">
        <a className="font-bold text-left text-lg">{title}</a>
        <i className="text-right text-base">{date}</i>
      </div>
      <div className="flex flex-row justify-between flex-nowrap">
        <i className="text-lef text-base">{org}</i>
        <i className="text-right text-sm">{location}</i>
      </div>
      {expanded ? content : ""}
    </div>
  );
}

export default Details;
