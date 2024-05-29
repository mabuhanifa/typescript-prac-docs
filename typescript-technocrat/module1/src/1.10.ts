{
  type UnionType = "Dev" | "QA";
  type Gender = "Male" | "Female";
  const employee: UnionType = "Dev";
  const employee2: UnionType = "QA";
  type User = {
    name: string;
    age: number;
    gender: Gender;
  };
  const user: User = {
    name: "Kabir",
    age: 25,
    gender: "Male",
  };
}
