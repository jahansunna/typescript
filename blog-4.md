# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?


The four pillars of Object-Oriented Programming (OOP) manage logic and reduce complexity by turning messy, interconnected code into modular, predictable, and reusable pieces.

# Inheritance:
Inheritance allows a new class (subclass) to adopt the properties and methods of an existing class (base class). 
. How it helps: It eliminates repetitive code across similar systems, creating a clear, hierarchical organization.
. TypeScript Feature: The extends keyword.

# Example:
class User {
  constructor(public name: string, public email: string) {}
}

class Admin extends User {
  public deleteUser(userId: string) { /* Admin-only logic */ }
}


# Polymorphism:
 Polymorphism allows different classes to be treated as instances of the same parent class or interface, while each class implements its own specific behavior. 
. How it helps: It removes the need for massive, complex switch or if/else statements when dealing with different object types.
. TypeScript Feature: Method overriding and interface implementation.

# Example:
interface PaymentProcessor {
  process(amount: number): void;
}

class StripeProcessor implements PaymentProcessor {
  process(amount: number) { /* Stripe logic */ }
}

class PayPalProcessor implements PaymentProcessor {
  process(amount: number) { /* PayPal logic */ }
}

function checkout(processor: PaymentProcessor, total: number) {
  processor.process(total); 
}

# Encapsulation:
 Encapsulation bundles data (properties) and methods into a single unit (a class) and restricts direct access to internal states.

.How it helps: It prevents external code from accidentally corrupting an object's internal state.
.TypeScript Feature: Access modifiers (private, protected, public) and readonly properties. 

# Example:
class BankAccount {
  
  private balance: number = 0;

  public deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }
}


# Abstraction:
Abstraction hides complex implementation details and only exposes essential, high-level features.

.How it helps: Developers can interact with a module without needing to understand its thousands of lines of background code.
.TypeScript Feature: abstract classes and interface declarations. 

# Example:

interface Logger {
  log(message: string): void;
}

class CloudLogger implements Logger {
  log(message: string) { /* Complex AWS/GCP API call logic here */ }
}


