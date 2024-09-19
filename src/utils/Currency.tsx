/* eslint-disable prettier/prettier */
export const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/[R$\s]/g, '');
  
    return `R$ ${numericValue.replace('.', ',')}`;
  };
  
  export const cleanFormatCurrency = (value: string): string => {
    return value.replace(/[R$\s]/g, '').replace(',', '.');
  };
  