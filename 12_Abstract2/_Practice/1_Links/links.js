// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

import { URL } from 'url';

/* // BEGIN (write your solution here) Tutor
export const make = (link) => new URL(link);

export const toString = (link) => link.href;
export const getProtocol = (link) => link.protocol;
export const getHost = (link) => link.host;
export const getPath = (link) => link.pathname;

export const setProtocol = (link, prot) => {
  link.protocol = prot;
  return link;
};

export const setHost = (link, host) => {
  link.host = host;
  return link;
};

export const setPath = (link, path) => {
  link.pathname = path;
  return link;
};

export const getQueryParam = (link, param) => link.searchParams.get(param);
export const setQueryParam = (link, key, value) => link.searchParams.set(key, value);
// END

// BEGIN
const make = (urlAddress) => {
    const data = new URL(urlAddress);
  
    return data;
  };
  
  const getProtocol = (data) => data.protocol;
  const getHost = (data) => data.host;
  const getPath = (data) => data.pathname;
  
  const getQueryParam = (data, paramName, defaultValue = null) => (
    data.searchParams.get(paramName) || defaultValue
  );
  
  const setHost = (data, host) => {
    data.host = host;
  };
  
  const setPath = (data, path) => {
    data.pathname = path;
  };
  
  const setProtocol = (data, protocol) => {
    data.protocol = protocol;
  };
  
  const setQueryParam = (data, key, value) => {
    data.searchParams.set(key, value);
  };
  
  const toString = (data) => data.toString();
  
  export {
    make,
    getProtocol,
    getHost,
    getPath,
    setProtocol,
    setHost,
    setPath,
    getQueryParam,
    setQueryParam,
    toString,
  }; */
  // END