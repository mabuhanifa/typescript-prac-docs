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

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  const user: User = {
    name: "Kabir",
    age: 25,
    gender: "Male",
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
