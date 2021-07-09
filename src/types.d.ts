interface CardType {
  cardName: string;
  cardNumber: string;
  confirmed: boolean;
  expirationMonth: number;
  expirationYear: number;
  id: string;
  main: boolean;
  userId: string;
}

type AllCardsType = CardType[];

interface Good {
  id: string;
  name: string;
}

type Goods = Good[];
