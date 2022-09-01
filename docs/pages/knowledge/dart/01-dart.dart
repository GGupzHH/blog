abstract class Actions {
  run();
  jump();
}

class Dog extends Actions {
  run() {
    print('这只狗在跑');
  }

  jump() {
    print('这只狗在跳');
  }
}

class Cat extends Actions {
  run() {
    print('这只猫在跑');
  }

  jump() {
    print('这只猫在跳');
  }
}

void main() {
  Dog dog = new Dog();
  Cat cat = new Cat();
  dog.run();
  cat.jump();
}
