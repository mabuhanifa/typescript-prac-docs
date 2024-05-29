{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  };

  const student: Student = {
    name: "Rahim",
    age: 20,
    gender: "male",
    address: "Dhaka",
    contactNo: "01721544312",
  };

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
