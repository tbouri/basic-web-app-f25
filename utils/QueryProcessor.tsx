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

  return "";
}
