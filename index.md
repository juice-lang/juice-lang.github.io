---
before: null
after: "/introduction"
---

# The *juice* documentation

![Status: in development](https://img.shields.io/badge/status-in%20development-blue.svg?style=flat) ![Platforms: macOS / Linux](https://img.shields.io/badge/platforms-macOS%20%7C%20Linux-F28D00.svg?style=flat)

---

*juice* is an open source programming language, currently in development, which is statically typed, has a clean and modern syntax and is easy to use. It’s very likely, that it will in the end generate executables using LLVM, but right now there is only a VM-based prototype in work. *juice’s* type system guarantees memory-safety and thread-safety, which helps you to find many classes of bugs at compile-time. The syntax of *juice* is heavily inspired by Swift, but also introduces some elements from C/C++, Rust and Python. The code looks like this:

```swift
namespace Geometry {
    // A 2-dimensional point
    public struct Point {
        Double x, y
    }

    // A 2-dimensional size
    public struct Size {
        Double width, height
    }

    // A 2-dimensional rectangle
    public struct Rect {
        Point origin
        Size size

        init(Point #origin, Size #size) {
            self.origin = origin
            self.size = size
        }

        init(Point center, Size #size) {
            let originX = center.x - (size.width / 2)
            let originY = center.y - (size.height / 2)
            self.init(Point(x: originX, y: originY), size)
        }

        Point center {
            /*
            It’s not neccessary to write self every time.
            I just like to do it.
            */
            let centerX = self.origin.x + (self.size.width / 2)
            let centerY = self.origin.y + (self.size.height / 2)
            return Point(x: centerX, y: centerY)
        }

        Rect scaledBy(Double #multiplicator) {
            let newWidth = self.size.width * multiplicator
            let newHeight = self.size.height * multiplicator
            let newSize = Size(width: newWidth, height: newHeight)
            return Rect(center: self.center, newSize)
        }
    }
}

let point = Geometry::Point(x: 30.0, y: 50.0)
let size = Geometry::Size(width: 20.0, height: 20.0)

let rect = Geometry::Rect(center: point, size)

System.print(rect.origin)
// Prints "Geometry::Point(x: 20.0, y: 40.0)"

let scaledRect = rect.scaledBy(4.0)

System.print(scaledRect.origin)
// Prints "Geometry::Point(x: -10.0, y: 10.0)"
```
