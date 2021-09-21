export function fetchCount(amount = 0) {
  return new Promise<{ data: number }>((resolve, rejected) =>
    setTimeout(
      () => (amount ? resolve({ data: amount }) : rejected('error')),
      2000
    )
  );
}
