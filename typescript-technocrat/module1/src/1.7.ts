{
  const bros1: string[] = ["Rahim", "Karim", "Abdul"];
  const bros2: string[] = ["Manir", "Rabbi", "Jabbar"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend));
  };
  greetFriends("a", "b", "c");
}
