export default function formatCurrency(decimal: number) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(decimal);

  return formattedValue;
}
