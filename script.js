document.addEventListener('DOMContentLoaded', function() {
  const amountInput = document.getElementById('amount');
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  const convertButton = document.getElementById('convertButton');
  const resultElement = document.getElementById('result');

  convertButton.addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    const exchangeRates = {
      myCurrency: 1,
      dollar: 0.1,  // Ejemplo, ajustar los valores reales
      euro: 0.02,    // según los tipos de cambio actuales
      gbp: 0.01,
      yen: 0.01,
      won: 0.01
    };

    const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
    resultElement.textContent = `El equivalente es: ${convertedAmount.toFixed(2)} ${toCurrency}`;
  });
});