import Color from "color";

const WHITE = Color("#FFF");

export const Colors = {
  WHITE,
  DARKEST: Color("#0C0C12"),
  DARK_SECONDARY: Color("#0C0C12").mix(WHITE, 0.3),
  DARK_TERTIARY: Color("#0C0C12").mix(WHITE, 0.6),
  TRACE: Color("#0C0C12").mix(WHITE, 0.8),
  GREY: Color("#EBEBED"),
  CLOUD: Color("#EBEBED").mix(WHITE, 0.5),
  LINK: Color("#0000FF"),
};
