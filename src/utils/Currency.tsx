/* eslint-disable prettier/prettier */
export const formatCurrency = (value: number): string => {
  const numericValue = value.toString().replace(/[R$\s]/g, '');

  return `R$ ${numericValue.replace('.', ',')}`;
};

export const cleanFormatCurrency = (value: string): number => {
  const cleanTicketPrice = Number(value.replace(/[R$\s]/g, '').replace(',', '.'));
  return cleanTicketPrice;
};
