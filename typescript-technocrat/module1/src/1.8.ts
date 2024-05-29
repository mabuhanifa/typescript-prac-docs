{
  const user = {
    id: 145,
    name: {
      first: "Rahim",
      last: "Khan",
    },
    contact: "01584675062",
    address: "Dania",
  };
  const {
    id,
    name: { first, last },
  } = user;

  const myFriends = ["chandler", "joey", "ross", "rachel"];

  const [a, b, ...c] = myFriends;
}
