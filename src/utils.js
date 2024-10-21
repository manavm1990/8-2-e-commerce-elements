export function formatPrice(number) {
  return `$${number.toFixed(2)}`;
}

export function calcPriceWithTax(price, taxRate) {
  return price * (1 + taxRate);
}
