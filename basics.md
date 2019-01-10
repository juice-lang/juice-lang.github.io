---
before: "/introduction"
after: "/custom-types"
---

# Basics

---

## Contents

1. [Variables and Constants](#variables-and-constants)

---

## Variables and Constants

### Variable Declaration

You declare variables using the `let` keyword. By default they are immutable.

```swift
let string = "Hello"
System.print(string) // Prints "Hello"
string = "Hello World!"
//This is a compile-time error, because a variable is immutable and cannot be changed
```
{: .erroneous}

You can declare multiple variables on a single line, separated by commas:

```swift
let x = 0, y = 0, z = 0
// `x`, `y` and `z` have each the value 0
```

If all values of this variables are the same, you can omit the redundant assignments, so the example above can be written as:

```swift
let x, y, z = 0
// `x`, `y` and `z` have each the value 0
```

In *juice*, the compiler guarantees that when you state that a value won’t change, it really won’t change. That means that when you’re reading and writing code, you don’t have to keep track of how and where a value might change. Your code is thus easier to reason through.

### Variable Mutability

But mutability can be very useful. Variables are immutable only by default, you can make them mutable by adding `mut` in front of the variable declaration:

```swift
mut let string = "Hello"
System.print(string) // Prints "Hello"
string = "Hello World!"
System.print(string) // Prints "Hello World!"
```

We’re allowed to change the value that `string` binds to from `"Hello"` to `"Hello World!"` when `mut` is used. In some cases, you’ll want to make a variable mutable because it makes the code more convenient to write than if it had only immutable variables.

> **Note:** If a stored value in your code won’t change, always declare it as a immutable variable. Use the `mut` keyword only for storing values that need to be able to change.

*juice* is a type-safe language so you can't set another type to a already declared variable:

```swift
mut let number = 3
//Type infered to be an Int
number = "Not a number"
//This is a compile-time error, because you can't set a variable of type Int to a String
```
{: .erroneous}

### Type Annotations

You can provide a ***type annotation*** when you declare a variable, to be clear about the type of values the variable can store (read more about types [here](#data-types)). Provide a type annotation by writing the type instead of the `let` keyword. This is rarely needed, for example when you want to declare a variable of type `Float` instead of `Double`:

```swift
let double = 5.0
//Type infered to be a Double
Float float1 = 5.0
// `float1` is of type Float
mut Float float2 = 5.0
// `float2` is of type Float
```

It's possible to omit the assignment of a variable when it's declared, but it must not be used until it's first assignment (obviously an immutable variable can only be assigned once). When the assignment is omitted you have to provide a ***type annotation***:

```swift
Int number

// `System.print(number)`
// would be a compile-time error now

number = 5

System.print(number) // Prints "5"
```

It was mentioned above, that you can declare many variables at once. The same rules also apply to the ***type annotation***:

```swift
Double x, y, z = 5
// `x`, `y` and `z` are all of type Double and each have the value 5.0
```

### Constants

Being unable to change the value of a variable might have reminded you of another programming concept that most other languages have: ***constants***. *juice* also supports constants but their behavior is much more similar to ***macros*** in C.

You declare constants using the `const` keyword. They may be set only to a constant expression, not the result of a function call or any other value that could only be computed at runtime:

```swift
const MAX_VALUE = 1000
```

If you use a constant in your code, it gets replaced with the value at compile time:

```swift
let x = MAX_VALUE / 2
// This line gets changed to
// `let x = 1000 / 2`
// at compile time
```

> **Note:** As you have seen in the examples above *juice’s* naming conventions for variables and constants differ. The convention for variable names is `lowerCamelCase` whereas constants are normally written in C-macro styled `SCREAMING_SNAKE_CASE`.

### Tuples

Tuples group multiple values into a single compound value. The values within a tuple can be of any type and don’t have to be of the same type as each other. You can create tuples from any permutation of types, and they can contain as many different types as you like. There’s nothing stopping you from having a tuple of type `(Int, Int, Int)`, or `(String, Bool)`, or indeed any other permutation you require:

```swift
let http404Error = (404, "Not Found")
// Type infered to be (Int, String)
```

You can write the ***type annotation*** of a tuple variable exactly like with normal variables:

```swift
(Float, Float, Float) xyzCoordinate = (15.0, 20.0, 10.0)
// `xyzCoordinate` is of type (Float, Float, Float), instead of (Double, Double, Double)
```

You can decompose a tuple’s contents into separate constants or variables, which you then access as usual:

```swift
let xyzCoordinate = (15.0, 20.0, 10.0)
// `xyzCoordinate` is of type (Double, Double, Double)
let (x, y, z) = xyzCoordinate
// `x`, `y` and `z` are now each of type Double
System.print("x: \(x)") // Prints "x: 15.0"
System.print("y: \(y)") // Prints "y: 20.0"
System.print("z: \(z)") // Prints "z: 10.0"
```

Alternatively, access the individual element values in a tuple using index numbers starting at zero:

```swift
let http404Error = (404, "Not Found")

System.print("The status code is \(http404Error.0)")
// Prints "The status code is 404"
System.print("The status message is '\(http404Error.1)'")
// Prints "The status message is 'Not Found'"
```
