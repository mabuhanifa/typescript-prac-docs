const poorUser: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "User",
  balance: 0,
  addBalance(money: number): number {
    return this.balance + money;
  },
};
