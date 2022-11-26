export const truncateText = (str: string, n: number = 30) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};
