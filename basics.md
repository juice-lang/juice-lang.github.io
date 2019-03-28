---
before: "/introduction"
after: "/custom-types"
math: true
---

# Basics

---

## Contents

1. [Variables and Constants](#variables-and-constants)
1. [Data Types](#data-types)
    1. [Scalar Types](#scalar-types)
    1. [Collection Types](#collection-types)

---

## Variables and Constants

### Variable Declaration

You declare variables using the `var` keyword. By default they are immutable.

```swift
var string = "Hello"
System.print(string) // Prints "Hello"
string = "Hello World!"
//This is a compile-time error, because a variable is immutable and cannot be changed
```
{: .erroneous}

You can declare multiple variables on a single line, separated by commas:

```swift
var x = 0, y = 0, z = 0
// `x`, `y` and `z` have each the value 0
```

If all values of this variables are the same, you can omit the redundant assignments, so the example above can be written as:

```swift
var x, y, z = 0
// `x`, `y` and `z` have each the value 0
```

In *juice*, the compiler guarantees that when you state that a value won’t change, it really won’t change. That means that when you’re reading and writing code, you don’t have to keep track of how and where a value might change. Your code is thus easier to reason through.

### Variable Mutability

But mutability can be very useful. Variables are immutable only by default, you can make them mutable by adding `mut` in front of the variable declaration:

```swift
mut var string = "Hello"
System.print(string) // Prints "Hello"
string = "Hello World!"
System.print(string) // Prints "Hello World!"
```

We’re allowed to change the value that `string` binds to from `"Hello"` to `"Hello World!"` when `mut` is used. In some cases, you’ll want to make a variable mutable because it makes the code more convenient to write than if it had only immutable variables.

> **Note:** If a stored value in your code won’t change, always declare it as a immutable variable. Use the `mut` keyword only for storing values that need to be able to change.

*juice* is a type-safe language so you can't set another type to a already declared variable:

```swift
mut var number = 3
//Type infered to be an Int
number = "Not a number"
//This is a compile-time error, because you can't set a variable of type Int to a String
```
{: .erroneous}

### Type Annotations

You can provide a ***type annotation*** when you declare a variable, to be clear about the type of values the variable can store (read more about types [here](#data-types)). Provide a type annotation by writing the type instead of the `var` keyword. This is rarely needed, for example when you want to declare a variable of type `Float` instead of `Double`:

```swift
var double = 5.0
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
var x = MAX_VALUE / 2
// This line gets changed to
// `var x = 1000 / 2`
// at compile time
```

> **Note:** As you have seen in the examples above *juice’s* naming conventions for variables and constants differ. The convention for variable names is `lowerCamelCase` whereas constants are normally written in C-macro styled `SCREAMING_SNAKE_CASE`.

### Tuples

Tuples group multiple values into a single compound value. The values within a tuple can be of any type and don’t have to be of the same type as each other. You can create tuples from any permutation of types, and they can contain as many different types as you like. There’s nothing stopping you from having a tuple of type `(Int, Int, Int)`, or `(String, Bool)`, or indeed any other permutation you require:

```swift
var http404Error = (404, "Not Found")
// Type infered to be (Int, String)
```

You can write the ***type annotation*** of a tuple variable exactly like with normal variables:

```swift
(Float, Float, Float) xyzCoordinate = (15.0, 20.0, 10.0)
// `xyzCoordinate` is of type (Float, Float, Float), instead of (Double, Double, Double)
```

You can decompose a tuple’s contents into separate constants or variables, which you then access as usual:

```swift
var xyzCoordinate = (15.0, 20.0, 10.0)
// `xyzCoordinate` is of type (Double, Double, Double)
var (x, y, z) = xyzCoordinate
// `x`, `y` and `z` are now each of type Double
System.print("x: \(x)") // Prints "x: 15.0"
System.print("y: \(y)") // Prints "y: 20.0"
System.print("z: \(z)") // Prints "z: 10.0"
```

Alternatively, access the individual element values in a tuple using index numbers starting at zero:

```swift
var http404Error = (404, "Not Found")

System.print("The status code is \(http404Error.0)")
// Prints "The status code is 404"
System.print("The status message is '\(http404Error.1)'")
// Prints "The status message is 'Not Found'"
```

---

## Data Types

Every value in *juice* is of a certain data type, which tells *juice* what kind of data is being specified so it knows how to work with that data. There are many basic built-in types in *juice’s* standard library.

### Scalar Types

A scalar type represents a single value. *juice* has four primary scalar types: integers, floating-point numbers, booleans, and characters. You may recognize these from other programming languages. Let’s jump into how they work in *juice*.

#### Integer Types

An integer is a number without a fractional component. There are many integer types, each either signed or unsigned and of a specific bit size. This table shows *juice’s* built-in integer types:

| Bit-size  | Signed    | Unsigned  |
| :-------- | :-------- | :-------- |
| 8-bit     | `Int8`    | `UInt8`   |
| 16-bit    | `Int16`   | `UInt16`  |
| 32-bit    | `Int32`   | `UInt32`  |
| 64-bit    | `Int64`   | `UInt64`  |
| 128-bit   | `Int128`  | `UInt128` |
| arch      | `Int`     | `UInt`    |
{: .table .w-75 .mx-auto}

Each variant can be either signed or unsigned and has an explicit size. Signed and unsigned refer to whether it’s possible for the number to be negative or positive — in other words, whether the number needs to have a sign with it (signed) or whether it will only ever be positive and can therefore be represented without a sign (unsigned). Signed numbers are stored using two’s complement representation.

Each signed variant can store numbers from $-(2^{n - 1})$ to $2^{n - 1} - 1$ inclusive, where $n$ is the number of bits that variant uses. So an `Int8` can store numbers from $-(2^7)$ to $2^7 - 1$, which equals $-128$ to $127$. Unsigned variants can store numbers from $0$ to $2^{n - 1}$, so a `UInt8` can store numbers from $0$ to $2^8 - 1$, which equals $0$ to $255$.

Additionally, the `Int` and `UInt` types depend on the kind of computer your program is running on: 64 bits if you’re on a 64-bit architecture and 32 bits if you’re on a 32-bit architecture.

You can write integer literals in any of the forms shown in following Table:

| Number literals | Example         |
| :-------------- | :-------------- |
| Decimal         | `5263`          |
| Hex             | `0xFF`          |
| Octal           | `0o54`          |
| Binary          | `0b10100101`    |
{: .table .w-75 .mx-auto}

Additionally you can add extra formatting to any of this literals using `_`, for example: `1_234_567` or `0xFC5D_61C4`.

So how do you know which type of integer to use? In most cases you will just use the normal `Int` type, because it‘s *juice‘s* default integer type and aids code consistency and interoperability.

##### Integer Overflow

Let’s say that you have a `UInt8`, which can hold values between zero and $255$. What happens if you try to change it to $256$? In *juice* it‘s considered an error to overflow an integer so when this happens, the program will stop and provide you an error message.

#### Floating-Point Types

*juice* also has two primitive types for floating-point numbers, which are represented according to the IEEE-754 standard: `Float` has single-precision and is 32 bits in size, and `Double`has double-precision and is 64 bits in size. The default type is `Double` because on modern CPUs it’s roughly the same speed as `Float` but is capable of more precision.

#### Numeric Operations

*juice* supports the basic mathematical operations you’d expect for all of the number types: addition, subtraction, multiplication, division, and remainder. The following code shows how you’d use each one in a var statement:

```swift
// addition
var sum = 5 + 10

// subtraction
var difference = 95.5 - 4.3

// multiplication
var product = 4 * 30

// division
var quotient = 56.7 / 32.2

// remainder
var remainder = 43 % 5
```

Each expression in these statements uses a mathematical operator and evaluates to a single value, which is then bound to a variable. [Appendix B]({{ '/appendix#collapseAppendixB' | relative_url }}) contains a list of all operators that *juice* provides.

#### The Boolean Type

*juice* has a basic Boolean type, called `Bool`. Boolean values are referred to as logical, because they can only ever be true or false. Swift provides two Boolean constant values, `true` and `false`:

```swift
var candyIsDelicious = true
var trumpIsStupid = false //definitely :D
```

The main way to use Boolean values is through conditionals, such as an **if-expression**. We’ll cover how **if-expressions** work in *juice* in the [Control Flow](#control-flow) section.

#### The Character type

So far we’ve worked only with numbers, but *juice* supports letters too. *juice‘s* `Char` type is the language’s most primitive alphabetic type, and the following code shows one way to use it. (Note that the `Char` literal is specified with single quotes, as opposed to string literals, which use double quotes.)

```swift
var exclamationMark = '!'
var emoji = '😎'
var newline = '\n'
```

Every instance of *juice‘s* `Char` type represents a single **extended grapheme cluster**, which means it can represent a lot more than just ASCII. Accented letters; Chinese, Japanese, and Korean characters; emoji; and zero-width spaces are all valid char values in *juice*. In fact extended grapheme clusters are a sequence of one or more Unicode scalars that (when combined) produce a single human-readable character.

Here’s an example. The letter `é` can be represented as the single Unicode scalar `é` (`LATIN SMALL LETTER E WITH ACUTE`, or `U+00E9`). However, the same letter can also be represented as a pair of scalars — a standard letter `e` (`LATIN SMALL LETTER E`, or `U+0065`), followed by the `COMBINING ACUTE ACCENT` scalar (`U+0301`).

```swift
var eAcute = '\u{E9}' // é
var combinedEAcute = '\u{65}\u{301}' // e followed by ́
// eAcute is é, combinedEAcute is also é
```

### Collection Types

Not written yet.
