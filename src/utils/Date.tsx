export const formatDate = (dateString: string) => {
  const [date, time] = dateString.split(' ');
  const [hours, minutes] = time.split(':');
  return `${date}, às ${hours}:${minutes}hs.`;
};

export const dateFormat = (dateString: string) => {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('/');
  return `${year}-${month}-${day}T${timePart}Z`;
};
