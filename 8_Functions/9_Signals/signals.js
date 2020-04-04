// @ts-check

import { get } from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

// BEGIN (write your solution here)
const getFreeDomainsCount = (domains) => {
  // const removeAfter = domains.indexOf('@');
  const domainsStripped = domains
    .map((domain) => domain.substring(domain.indexOf('@') + 1))
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = get(acc, domain, 0) + 1;
      return { ...acc, [domain]: count }; 
    }, {});

  return domainsStripped;
};

export default getFreeDomainsCount;
// END

/* // BEGIN Tutor
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;
// END */
