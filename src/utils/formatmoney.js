const formCurrency = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "US",
  minimumFractionDigits: 2,
});

export default formCurrency;
