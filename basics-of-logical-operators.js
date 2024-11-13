/* Logical operators */
/* ================================================================================= */

// 1. How can we compare if two values are equal?
/* To compare if two values are equal, we use == (loose equality) 
or === (strict equality). */
/* ==: Compares the values without considering the data types 
(it may perform type conversion). (loose equality). */
/* ===: Compares both the values and the data types 
(no type conversion). (strict equality). */

// Code example:
let x = 5;
let y = '5';

console.log(x == y);   // true (because type conversion happens)
console.log(x === y);  // false (because they have different data types)

// 2. How can we compare/check if two values are different?
/* To check if two values are different, we use != (loose inequality) 
or !== (strict inequality). */
// !=: Compares the values without considering data types. (loose inequality). 
// !==: Compares both the values and the data types. (strict inequality).

// Code example:
let a = 5;
let b = '5';

console.log(a != b);   // false (because type conversion happens)
console.log(a !== b);  // true (because they have different data types)

// 3. How can we check if one value is greater/less than another?
/* To compare if one value is greater or less than another, we use 
<, >, <=, and >=. */
// <: Less than
// >: Greater than
// <=: Less than or equal to
// >=: Greater than or equal to

// Code example:
let a = 10;
let b = 20;

console.log(a < b);  // true (a is less than b)
console.log(a > b);  // false (a is not greater than b)
console.log(a <= 10);  // true (a is equal to 10)
console.log(b >= 15);  // true (b is greater than or equal to 15)

/* 4. How can we check if a value is greater than or equal to another value? */
/* To check if a value is greater than or equal to another, we use >=. */
// >=: This operator checks if a value is greater than or equal to another value.

// Code example:
let a = 15;
let b = 10;

console.log(a >= b);  // true (a is greater than b)

/* 5. Which operator is used to check if two (or more) conditions are true? */
/* To check if multiple conditions are true at the same time, 
we use && (logical AND). */

// Code example:
let a = 10;
let b = 20;
let c = 30;

console.log(a < b && b < c);  // true (both conditions are true)

/* 6. Which operator is used to check if one condition or the other is true? */
/* To check if one or the other condition is true, we use || (logical OR). */

// Code example:
let a = 10;
let b = 5;
let c = 15;

console.log(a > b || c < b);  // true (because a > b is true)
console.log(c < b || a === 10);  // true (because a === 10 is true)

// ======================================================================================= /

/* And then there is some more... */

/* 7. Object.is() method */

/* The Object.is() method is used to compare two values for equality. 
It behaves like the strict equality (===), but with a few important 
differences, particularly when dealing with special cases such as 
NaN and -0. */

/* Object.is(): Compares two values and returns true if they are the same, 
and false if they are different. It behaves similarly to === but treats 
NaN as equal to NaN (where === would return false), and it distinguishes 
between +0 and -0 (where === treats them as the same). */

// Code example:
console.log(Object.is(5, 5));          // true (same value)
console.log(Object.is(5, '5'));        // false (different types)
console.log(Object.is(NaN, NaN));      // true (NaN is considered equal to NaN in Object.is)
console.log(Object.is(+0, -0));        // false (distinguishes between +0 and -0)
console.log(Object.is(0, -0));         // false (same as above)

/* 8. == (Loose Equality) vs. === (Strict Equality)
As mentioned earlier, == and === are the basic ways 
to compare values for equality, but it's important 
to understand their difference:

== (Loose Equality): 
Performs type coercion before comparing, 
meaning it tries to convert the values to 
the same type before making a comparison.

=== (Strict Equality): Does not perform 
type coercion and compares both the value 
and the type. This is typically recommended 
because it avoids unexpected results. */

// Code example:
console.log(0 == false);    // true (because 0 is converted to false)
console.log(0 === false);   // false (different types)
console.log('' == false);   // true (empty string is coerced to false)
console.log('' === false);  // false (different types)

/* 9. String.prototype.localeCompare() */
/* If you need to compare strings in a way that respects 
locale-specific sorting (for example, case-insensitive 
or language-specific rules), you can use the 
localeCompare() method. */

/* localeCompare(): Compares two strings and returns:
0 if the strings are equal,
A negative value if the first string is less than the second,
A positive value if the first string is greater than the second. */

// Code example: 
let str1 = 'apple';
let str2 = 'banana';

console.log(str1.localeCompare(str2));  // negative value (apple comes before banana)
console.log(str2.localeCompare(str1));  // positive value (banana comes after apple)
console.log('apple'.localeCompare('apple')); // 0 (strings are equal)

/* 10. Comparing Objects */
/* When comparing objects, keep in mind that JavaScript 
compares the references (memory addresses), 
not the actual content. This means two objects with the 
same content are still considered different if they do 
not refer to the same memory location. */

// Code example:
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };
let obj3 = obj1;

console.log(obj1 === obj2);  // false (different references)
console.log(obj1 === obj3);  // true (same reference)

/* What ChatGPT said: "To compare the contents of objects, 
you would need to manually compare their properties or use 
libraries like Lodash's _.isEqual()." */

/* 11. Array.prototype.includes() */
/* If you're working with arrays and want to check if a 
certain element is present, you can use includes(), 
which returns true if the array contains the 
specified element. */

// Code example:
let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3));  // true (array contains 3)
console.log(arr.includes(6));  // false (array does not contain 6)
