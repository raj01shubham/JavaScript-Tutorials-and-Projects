# JavaScript Tutorials and Projects - AI Agent Instructions

This repository contains JavaScript tutorial code and exercises organized around core programming concepts. Here's what you need to know to work effectively in this codebase:

## Project Structure

The codebase is organized into three main sections:

- `Contents/` - Tutorial implementations organized by concept
  - `Basics/` - Core JavaScript concepts (variables, types, objects, etc.)
  - `ControlFlow/` - Control structures and loops
  - `Operators/` - JavaScript operators
  - `Objects/` - Object-oriented programming concepts
- `Exercises/` - Practice problems implementing the concepts
- `Source Code/js-basics/` - Reference implementations

## Key Patterns and Conventions

### Code Organization
- Each concept has both a tutorial implementation in `Contents/` and exercise implementations in `Exercises/`
- Exercise files are named after their core functionality (e.g., `FizzBuzz.js`, `PrimeNumbers.js`)
- Source code follows a numbered pattern (e.g., `1-max.js`, `2-landscape.js`)

### Implementation Patterns
1. Function-based implementations with clear single responsibilities
   ```js
   // Example from PrimeNumbers.js
   function showPrimes(limit) {
     // Main function logic
   }
   
   function isPrime(input) {
     // Helper function for checking prime numbers
   }
   ```

2. Consistent parameter naming and validation
   ```js
   // Example from FizzBuzz.js
   function fizzBuzz(input) {
     if (typeof input !== 'number')
       return NaN;
     // Rest of implementation
   }
   ```

3. Clear commenting for exercise requirements
   ```js
   // Speed Limit = 70
   // Every 5 kmph -> 1 Point
   // 12 Points -> Suspended
   ```

### Running Code
1. HTML files (`index.html`) are set up to run JavaScript files through script tags
2. Each exercise can be run independently by updating the script source
3. Console output is the primary method of displaying results

## Common Tasks

1. Running an exercise:
   - Update `index.html` to point to the desired exercise file
   - Open in browser to see console output

2. Creating new exercises:
   - Place in `Exercises/` directory
   - Follow existing naming patterns
   - Include requirement comments at the top
   - Use function-based implementation

3. Adding tutorial content:
   - Place in appropriate subfolder under `Contents/`
   - Include examples and explanations in comments
   - Follow consistent code structure patterns

## Reference Examples
- Clean function implementation: `Exercises/FizzBuzz.js`
- Parameter validation: `Source Code/js-basics/control-flow/3-fizzBuzz.js` 
- Helper function pattern: `Exercises/PrimeNumbers.js`
- Complex logic example: `Exercises/DemeritPoints.js`