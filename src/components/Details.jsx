import React from "react";

function Details({ title, org, date, location, content, expanded }) {
  return (
    <div className={'mb-8'}>
      <div className="flex flex-row justify-between flex-nowrap">
        <a className="textLabel">{title}</a>
        <i className="text-right text-base">{date}</i>
      </div>
      <div className="flex flex-row justify-between flex-nowrap">
        <i className="text-left text-lg">{org}</i>
        <i className="text-right text-sm">{location}</i>
      </div>
      {expanded ? content : ""}
    </div>
  );
}

export default Details;
