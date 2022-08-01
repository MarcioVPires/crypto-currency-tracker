const formCurrency = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default formCurrency;
