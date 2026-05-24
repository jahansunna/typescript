# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Normally, a function works with a fixed type. But this reduces flexibility.
If we use any, the function becomes flexible but unsafe because TypeScript cannot check types properly.Generics solve this problem by allowing us to use a placeholder type (like T).

# Reusability Concept
With generics, you can write one function and use it for many different data types.
Instead of creating separate functions for numbers, strings, or objects, you write one general function that adapts automatically based on input.

# Type Safety Concept
Even though the function is flexible, TypeScript still remembers the exact type used.
This means:
If you pass a string, the output is also treated as a string.
If you pass a number, it stays a number.
You cannot accidentally mix wrong types.

# How Type Inference Works
When you call a generic function, TypeScript automatically detects the type based on the argument you pass.So you usually don’t need to manually specify the type — it is inferred automatically.

# Working with Multiple Types
Generics can handle more than one type at the same time.
For example, you can combine two different types and still keep track of both separately.This is useful when working with objects or merging data.

# Interfaces and APIs
Generics are very useful when defining data structures like API responses.
You can create a single response structure that works with different types of data (user, product, order, etc.) while still keeping everything strongly typed.

