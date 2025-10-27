export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "tb";
  }

  if (query.toLowerCase().includes("what is your andrew id")) {
     return "tbouri";
   }

  // Handle queries asking for the largest number
    if (query.toLowerCase().includes("largest") || query.toLowerCase().includes("biggest")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
        const max = Math.max(...numbers.map(Number));
        return max.toString();
    }
}

  // Handle addition queries
  if (query.toLowerCase().includes("plus") || query.toLowerCase().includes("add")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
      return sum.toString();
    }
  }

  // Handle subtraction queries
  if (query.toLowerCase().includes("minus") || query.toLowerCase().includes("subtract")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => a - b);
      return result.toString();
    }
  }

  // Handle multiplication queries
  if (query.toLowerCase().includes("multiplied") || query.toLowerCase().includes("multiply") || query.toLowerCase().includes("times")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers.map(Number).reduce((a, b) => a * b, 1);
      return product.toString();
    }
  }

  // Handle division queries
  if (query.toLowerCase().includes("divided") || query.toLowerCase().includes("divide")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => a / b);
      return result.toString();
    }
  }

  // Handle power/exponentiation queries
  if (query.toLowerCase().includes("power") || query.toLowerCase().includes("exponent")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const base = Number(numbers[0]);
      const exponent = Number(numbers[1]);
      const result = Math.pow(base, exponent);
      return result.toString();
    }
  }

  // Handle queries about numbers that are both squares and cubes
  if (query.toLowerCase().includes("square and") && query.toLowerCase().includes("cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      const isPerfectSquare = (n: number) => {
        const sqrt = Math.round(Math.sqrt(n));
        return sqrt * sqrt === n;
      };
      const isPerfectCube = (n: number) => {
        const cbrt = Math.round(Math.cbrt(n));
        return cbrt * cbrt * cbrt === n;
      };

      const result = numbers.map(Number).filter(n => isPerfectSquare(n) && isPerfectCube(n));

      if (result.length > 0) {
        return result.join(", ");
      }
    }
  }

  // Handle queries about prime numbers
  if (query.toLowerCase().includes("prime")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      const isPrime = (n: number) => {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
          if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
      };

      const primes = numbers.map(Number).filter(n => isPrime(n));

      if (primes.length > 0) {
        return primes.join(", ");
      }
    }
  }

  return "";
}
