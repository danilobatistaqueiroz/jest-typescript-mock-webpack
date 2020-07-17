export function sum(a, b) {
  return a + b;
}

export function sum3(a, b, c) {
  return a + b + c;
}

export function sumAny(items: Array<number>) {
  return items.reduce((total,n) => total+n)
}

export function sum4(a, b, c, d) {
  return a + b + c + d;
}

export function sum5(a, b, c, d, e) {
  return a + b + c + d + e;
}