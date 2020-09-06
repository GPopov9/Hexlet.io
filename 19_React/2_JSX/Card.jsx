// @ts-check
/* eslint-disable react/display-name */
/* import React from 'react';
 */
// BEGIN (write your solution here)
/* const getCard = (params) => {
  const vdomTitle = params.hasOwnProperty('title') ? <h4 className="card-title">{params.title}</h4> : null;
  const vdomText = params.hasOwnProperty('text') ? <p className="card-text">{params.text}</p> : null;
  const vdom = (vdomText || vdomTitle) ? <div className="card"><div className="card-body">{vdomTitle}{vdomText}</div></div> : null;
  return vdom;
};

export default getCard; */

// END

// BEGIN - Tutor
export default ({ title, text }) => {
  if (!title && !text) {
    return null;
  }

  const titleDom = title && <h4 className="card-title">{title}</h4>;
  const textDom = text && <p className="card-text">{text}</p>;

  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
      </div>
    </div>
  );
};
// END