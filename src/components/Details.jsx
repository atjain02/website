import React from "react";

function Details({ title, org, date, location, content }) {
  return (
    <div className='mb-8'>
      <div className="flex flex-row justify-between flex-nowrap">
        <a className="font-bold text-left">{title}</a>
        <i className="text-right text-sm">{date}</i>
      </div>
      <div className="flex flex-row justify-between flex-nowrap">
        <i className="text-left">{org}</i>
        <i className="text-right text-sm">{location}</i>
      </div>
      {content}
    </div>
  );
}

export default Details;
