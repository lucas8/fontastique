export const getFontWeightName = (weight: number) => {
  switch (weight) {
    case 100:
      return 'Thin';
    case 200:
      return 'Extra Light';
    case 300:
      return 'Light';
    case 400:
      return 'Regular';
    case 500:
      return 'Medium';
    case 600:
      return 'Semibold';
    case 700:
      return 'Bold';
    case 800:
      return 'Extra Bold';
    case 900:
      return 'Black';
    default:
      return weight;
  }
};
