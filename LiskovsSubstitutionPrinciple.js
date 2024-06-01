/**
 * The principle defines that objects of a superclass shall be replaceable
 * with objects of its subclasses without breaking the application.
 * That requires the objects of your subclasses to behave in the same way as the objects of your superclass.
 */

/* 
Liskov Substitution Principle Analysis

Substitutability: 
According to LSP, you should be able to replace an instance of Vehicle with an instance of Car, Bus, or Bicycle 
without changing the program's behavior in a meaningful way. 
However, the behavior of the start method is different for Bicycle compared to Car and Bus.

Semantic Consistency: 
 The start method in the Vehicle class implies starting an engine, which makes sense for Car and Bus, but not for Bicycle. 
 The Bicycle class changes this behavior to something entirely different, which can be confusing 
 and lead to incorrect assumptions in the client code.

Conclusion
The given code violates the Liskov Substitution Principle 
because the Bicycle class changes the expected behavior of the start method. 
If client code expects all Vehicle instances to "start the engine," substituting a Bicycle would lead to unexpected behavior.
*/

/*Method overriding in JavaScript.
Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.
In your code, the Bicycle class overrides the start method of the Vehicle class. */

class Vehicle {
  start() {
    console.log("Starting the engine..");
  }
}

class Car extends Vehicle {
  constructor() {
    super();
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
  }
}

class Bicycle extends Vehicle {
  constructor() {
    super();
  }
  start() {
    console.log("It started pedeling");
  }
}

const car1 = new Car();
const bus = new Bus();
const cycle = new Bicycle();
car1.start();
bus.start();
cycle.start();

class Vehicle {
  start() {}
}

class Car extends Vehicle {
  constructor() {
    super();
  }
  start() {
    console.log("Starting the engine..");
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
  }
  start() {
    console.log("Starting the engine..");
  }
}

class Bicycle extends Vehicle {
  constructor() {
    super();
  }
  start() {
    console.log("Ready for Pedeling");
  }
}

/*
LSP Compliance: 
From a strict LSP perspective, the different behavior of Bicycle
could be problematic if the client code expects all Vehicle objects to start an
engine. 

If the Vehicle class represents any kind of vehicle that might have
different starting mechanisms, then this is acceptable, provided the client code
can handle these differences.

However, if Vehicle is supposed to represent only
motorized vehicles (which seems implied by the start message "Starting the
engine.."), then Bicycle would violate LSP because it doesn't align with the
expectation set by Car and Bus.

Conclusion: 
The provided code may or may not
pass the LSP depending on the broader context of how Vehicle and its start
method are intended to be used.

If Vehicle is meant to include non-motorized
vehicles like bicycles, then the design is acceptable. If Vehicle is intended
only for motorized vehicles, Bicycle should not inherit from Vehicle to avoid
violating LSP. */

// More Correct way of preserving the Lishkov Substitution Principle

class Vehicle {
  start() {
    console.log("Starting the vehicle..");
  }
}

class MotorVehicle extends Vehicle {
  start() {
    console.log("Starting the engine..");
  }
}

class Car extends MotorVehicle {
  constructor() {
    super();
  }
}

class Bus extends MotorVehicle {
  constructor() {
    super();
  }
}

class Bicycle extends Vehicle {
  constructor() {
    super();
  }
  start() {
    console.log("It started pedaling");
  }
}
