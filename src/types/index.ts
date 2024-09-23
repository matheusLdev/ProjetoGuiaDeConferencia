export type HeaderProps = {
  ButtonReturn: boolean;
  TitleHeader: string;
};

export type ButtonProps = {
  color?: string;
  text: string;
  onPress: () => void;
};

export type User = {
  name: string;
  surname: string;
  ticketPrice?: number;
};

export type ConferenceInfo = {
  initialRoulette?: number;
  finalRoulette?: number;
  totalPassenger?: number;
  gratuity?: number;
  transportVoucher?: number;
  noCard?: number;
  normalPassenger?: number;
  ticketPrice?: number;
  cashInHand?: number;
};
