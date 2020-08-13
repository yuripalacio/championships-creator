interface IRequest {
  items: string[];
}

export default function GenerateCombinations({ items }: IRequest): string[][] {
  let first;
  let last;

  const combinations = [];
  for (first = 0; first < items.length; first += 1) {
    for (last = first + 1; last < items.length; last += 1) {
      combinations.push([items[first], items[last]]);
    }
  }

  Promise.all(combinations);

  return combinations;
}
