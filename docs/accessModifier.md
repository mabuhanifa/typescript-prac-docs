In TypeScript, access modifiers are keywords that you can use to control the visibility and accessibility of class members (properties and methods) within a class. They help enforce encapsulation and define how different parts of your code can interact with the class's internals. TypeScript provides three main access modifiers: `public`, `private`, and `protected`.

1. **Public (default)**:
   The `public` access modifier is the default one. Members declared as `public` can be accessed from anywhere, both within the class and from external code that has an instance of the class. Here's an example:

   ```typescript
   class MyClass {
     public publicProperty: number;
     public constructor() {
       this.publicProperty = 42;
     }
     public publicMethod() {
       return "This is a public method.";
     }
   }

   const instance = new MyClass();
   console.log(instance.publicProperty); // Accessing a public property
   console.log(instance.publicMethod()); // Calling a public method
   ```

2. **Private**:
   Members marked as `private` are only accessible from within the class itself. They cannot be accessed or modified from external code or subclasses. This provides strong encapsulation.

   ```typescript
   class MyClass {
     private privateProperty: string;
     constructor() {
       this.privateProperty = "Private!";
     }
     private privateMethod() {
       return "This is a private method.";
     }
     public usePrivateMethod() {
       return this.privateMethod();
     }
   }

   const instance = new MyClass();
   // Cannot access instance.privateProperty or instance.privateMethod() here
   console.log(instance.usePrivateMethod()); // Calling a private method indirectly
   ```

3. **Protected**:
   Members declared as `protected` are accessible within the class itself and in its subclasses. This allows for inheritance-related behaviors without exposing the member to external code.

   ```typescript
   class BaseClass {
     protected protectedProperty: string;
     constructor() {
       this.protectedProperty = "Protected!";
     }
     protected protectedMethod() {
       return "This is a protected method.";
     }
   }

   class SubClass extends BaseClass {
     public useProtected() {
       return this.protectedProperty + " Accessed from SubClass.";
     }
   }

   const subInstance = new SubClass();
   // Cannot access subInstance.protectedProperty directly
   console.log(subInstance.useProtected()); // Accessing protected property indirectly
   ```

Access modifiers help maintain the integrity of your codebase by preventing unauthorized access to class members and promoting good software design principles, such as encapsulation and information hiding.
