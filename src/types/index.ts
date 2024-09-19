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
  ticketPrice: string;
};