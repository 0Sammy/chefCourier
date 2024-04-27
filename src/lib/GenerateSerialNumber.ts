export const generateRandomSerial = (): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomAlphabets = Array.from({ length: 3 }, () => alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
    const randomAlphabetsBack = Array.from({ length: 2 }, () => alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  
    return randomAlphabets.join('') + randomNumbers.join('') + randomAlphabetsBack.join('');
  };
  