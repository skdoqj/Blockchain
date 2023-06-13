interface User {
  firstName: string;
  lastName: string;

  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}
//extends 대신 implements, interface를 중복으로 상속할 수 있다
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hi ${name} my name is ${this.fullName}`;
  }
}

const gg = new Player("suwan", "park", 70);
