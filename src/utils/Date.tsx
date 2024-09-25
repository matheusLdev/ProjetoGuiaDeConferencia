/* eslint-disable prettier/prettier */
export const formatDate = (dateString: string) => {
    const [date] = dateString.split(' ');
    return date;
  }
  
  export const dateFormat = (dateString: string) => {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');
    return `${year}-${month}-${day}T${timePart}Z`;
  }