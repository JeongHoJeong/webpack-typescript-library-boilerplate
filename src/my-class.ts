export class MySomeClass {
  constructor() {
    console.log('This must be called only once!')
  }

  public sayHello() {
    console.log('Hello!')
  }
}

export const myObject = new MySomeClass()
