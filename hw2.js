Array.prototype.sum = function () {
    return this.reduce((a, c) => a + c);
  };
  
  const findDividers = (number) => {
    const dividers = [];
    const half = Math.floor(number / 2);
    for (let i = 1; i <= half; i++) {
      if (number % i == 0) dividers.push(i);
    }
    return dividers;
  };
  
  const isPrime = (number) => {
    return findDividers(number).length == 1;
  };
  
  const findPrimes = (...numbers) => {
    const primes = numbers.filter(isPrime);
    return primes;
  };
  
  const isFriendlyNumbers = (n, m) => {
    const nDividers = findDividers(n);
    const mDividers = findDividers(m);
    return nDividers.sum() == m && mDividers.sum() == n;
  };
  
  const findPrimeNumbers = (upTo) => {
    const primes = [];
    for (let i = 2; i <= upTo; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };
  
  const perfectNumbers = (upTo) => {
    let perfectNumber = 0;
    const perfectNumbers = [];
    for (let i = 2; ; i++) {
      if (isPrime(2) && isPrime(2 ** i - 1)) {
        perfectNumber = 2 ** (i - 1) * (2 ** i - 1);
        if (perfectNumber > upTo) break;
        perfectNumbers.push(perfectNumber);
      }
    }
    return perfectNumbers;
  };
  
  console.log(findPrimes(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14));
  console.log(isFriendlyNumbers(220, 284));
  console.log(findPrimeNumbers(1000));
  console.log(perfectNumbers(1000));
  