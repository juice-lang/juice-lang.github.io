---
before: "/"
after: "/basics"
---

# Introduction

---

**Welcome to the *juice* programming language documentation.**  
This documentation doesn’t aim to be 100% complete, because the implementation of the language didn’t even began, so it’s hard to know all difficulties, which this definition might bring into coding. Nonetheless it serves as a guide for developing *juice* and also gives a first impression of the language.

---

## How to read this documentation

In general, this documentation assumes that you’re reading it in sequence from front to back. Later parts build on concepts in earlier parts, and earlier parts might not delve into details on a topic.

The first part <a href="{{ '/basics' | relative_url }}">Basics</a> describes the basic language features, which are very common to other languages. It covers everything from the **file structure** to **functions**, from **variables** and **constants** to the control flow.  
The next part describes <a href="{{ '/custom-types' | relative_url }}">Custom Types</a> in *juice*. You will learn everything about **enums** and **structs**, **properties**, **methods** and **initializers**.  
Okay...after that you haven’t learned *everything* about types, because also the next part <a href="{{ '/advanced-types' | relative_url }}">Advanced Types</a> deals with them. It covers some of the most important concepts of *juice*, like **protocols** and **generics**, and some type related topics, like **namespaces**, **access control** and **singletons**.  
In the penultimate part <a href="{{ '/operators' | relative_url }}">Operators</a> *juice’s* operators are discussed in detail and you’ll also find out, how to make your custom **operator implementations** for custom types and even how to build a **custom operator** yourself.  
Finally, some <a href="{{ '/appendix' | relative_url }}">Appendixes</a> contain useful information about the language in a more reference-like format. <a href="{{ '/appendix#collapseAppendixA' | relative_url }}">Appendix A</a> covers *juice’s* **keywords**, <a href="{{ '/appendix#collapseAppendixB' | relative_url }}">Appendix B</a> covers all **operators**, in <a href="{{ '/appendix#collapseAppendixC' | relative_url }}">Appendix C</a> you’ll find **compiler protocols**, which add specific capabilities to your types and <a href="{{ '/appendix#collapseAppendixD' | relative_url }}">Appendix D</a> contains a complete ABNF (Augmented Backus–Naur form) file, describing the lexical grammar of *juice*.

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
