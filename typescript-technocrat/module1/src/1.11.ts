{
  const age = 15;
  console.log({ result: age >= 18 ? "adult" : "minor" });

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({
    result1,
    result2,
  });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: String;
    };
  };

  const user: User = {
    name: "Rahim",
    address: {
      city: "Dahaka",
      road: "12",
      presentAddress: "",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address Found";
  console.log({ permanentAddress });
}
