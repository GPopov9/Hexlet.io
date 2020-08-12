// @ts-check

// BEGIN (write your solution here)

const mapping = {
  guest: (user) => `Nice to meet you ${user.getName()}!`,
  user: (user) => `Hello ${user.getName()}!`,
};

export default (user) => (
  mapping[user.getOption()](user)
);
// END