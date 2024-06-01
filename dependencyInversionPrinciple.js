/**
 * The main idea of the dependency inversion principle is that any class that
 * uses a dependency should only ever use the dependency through a predefined
 * interface/wrapper.
 
 *  This makes it so that your code will never directly depend
 * on a low level API for its operations. 
 * 
 * The reason this is so important is
 * because if you ever need to change or remove that dependency it becomes
 * really difficult when it is used all over your code. By wrapping this
 * dependency in an interface you can depend on the interface you created which
 * will make changing out the dependency painless.
 * 
 * 
 * 
 */

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of Gil${amountInCents * 100} with Stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDolars) {
    console.log(`${user} made payment of $ ${amountInDolars} with Paypal`);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInGil) {
    this.paypal.makePayment(this.user, amountInGil);
  }
}

const store = new Store(new StripePaymentProcessor("Akram"));
store.purchaseBike(2);
store.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor("Akram"));
store.purchaseBike(2);
store.purchaseHelmet(2);

// Any higher classes should always depend upon the abstraction of the class rather than the detail
