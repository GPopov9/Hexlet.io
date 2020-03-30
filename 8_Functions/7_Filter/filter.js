// @ts-check
// BEGIN (write your solution here)
const getGirlFriends = (users) => {
    const usersMap = users.map(( { friends }) => friends).flat();
    const usersFilter = usersMap.filter(({ gender }) => gender === 'female');
    return usersFilter;
  };
  
  export default getGirlFriends;
  // END
  