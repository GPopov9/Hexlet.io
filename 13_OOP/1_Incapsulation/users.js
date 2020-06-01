// @ts-check
/* eslint-disable import/prefer-default-export */

// BEGIN (write your solution here)
const getMutualFriends = (user1, user2) => {
    const friendsUser1 = user1.getFriends();
    const friendsUser2 = user2.getFriends();
    const id2 = friendsUser2.map((friend) => friend.id);
    const id1 = friendsUser1.filter((friend) => id2.includes(friend.id));
    return id1;
  };
  
  export { getMutualFriends };
  // END