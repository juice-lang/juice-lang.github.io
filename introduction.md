---
before: "/"
after: "/basics"
math: false
---

# Introduction

---

**Welcome to the *juice* programming language documentation.**  
This documentation doesn’t aim to be 100% complete, because the implementation of the language didn’t even began, so it’s hard to know all difficulties, which this definition might bring into coding. Nonetheless it serves as a guide for developing *juice* and also gives a first impression of the language.

---

## How to read this documentation

In general, this documentation assumes that you’re reading it in sequence from front to back. Later parts build on concepts in earlier parts, and earlier parts might not delve into details on a topic.

The first part [Basics]({{ '/basics' | relative_url }}) describes the basic language features, which are very common to other languages. It covers everything from the **file structure** to **functions**, from **variables** and **constants** to the control flow.  
The next part describes [Custom Types]({{ '/custom-types' | relative_url }}) in *juice*. You will learn everything about **enums** and **structs**, **properties**, **methods** and **initializers**.  
Okay...after that you haven’t learned *everything* about types, because also the next part [Advanced Types]({{ '/advanced-types' | relative_url }}) deals with them. It covers some of the most important concepts of *juice*, like **protocols** and **generics**, and some type related topics, like **namespaces**, **access control** and **singletons**.  
In the penultimate part [Operators]({{ '/operators' | relative_url }}) *juice’s* operators are discussed in detail and you’ll also find out, how to make your custom **operator implementations** for custom types and even how to build a **custom operator** yourself.  
Finally, some [Appendixes]({{ '/appendix' | relative_url }}) contain useful information about the language in a more reference-like format. [Appendix A]({{ '/appendix#collapseAppendixA' | relative_url }}) covers *juice’s* **keywords**, [Appendix B]({{ '/appendix#collapseAppendixB' | relative_url }}) covers all **operators**, in [Appendix C]({{ '/appendix#collapseAppendixC' | relative_url }}) you’ll find **compiler protocols**, which add specific capabilities to your types and [Appendix D]({{ '/appendix#collapseAppendixD' | relative_url }}) contains a complete ABNF (Augmented Backus–Naur form) file, describing the lexical grammar of *juice*.

There is no wrong way to read this documentation: if you want to skip ahead, go for it! You might have to jump back to earlier parts if you experience any confusion. But do whatever works for you.

Be sure to always keep an eye out for such a code block:

```swift
// Some code, which doesn’t compile
```
{: .erroneous}

The bomb indicates, that something is wrong with this code. Make sure you read the surrounding text to see, why there is an error.

---

## Source code

The source files from which this website is generated can be found on [GitHub](https://github.com/juice-lang/juice-lang.github.io).
