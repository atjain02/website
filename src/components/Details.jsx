import React from "react";

function Details({ title, org, date, location, content, expanded }) {
  const bottomPadding = expanded ? 8 : 6;
  return (
    <div className={`mb-${bottomPadding}`}>
      <div className="flex flex-row justify-between flex-nowrap">
        <a className="font-bold text-left text-lg">{title} + {(expanded).toString()}</a>
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
