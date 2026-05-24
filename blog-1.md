# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

any is a TypeScript type that disables type checking completely. When a variable is marked as any, TypeScript allows it to behave like any type without restrictions.

# Why any is called a “type safety hole”
any is called a type safety hole because it removes TypeScript’s type protection system.

This means:
You can call any method on it.
You can assign any type to it.
TypeScript will not show error.

# Unknown: 
Unknown is a safer type used for values whose type is not known in advance.
Unlike any, TypeScript does not allow you to use an unknown value directly without checking its type first.

# Narrowing:
Type narrowing is the process of refining a broad type into a more specific type using checks.It helps TypeScript understand the exact type of a variable inside a condition.
# Example of Type Narrowing:
TypeScript uses conditions like typeof, instanceof, or custom checks to narrow types.

Example concept:
Before check → type is unknown
After check → type becomes string or number