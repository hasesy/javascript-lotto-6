import {
  MATCHED_COUNT,
  PRIZE_AMOUNT,
  LIMITS,
} from '../constants/fixedValue.js';

class LottoStatistics {
  constructor() {
    this.rankingCounts = [0, 0, 0, 0, 0];
  }

  countMatchingNumbers(lottoNumbers, winningNumbers) {
    const matchedCount = lottoNumbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;

    return matchedCount;
  }

  calculateLottoRank(count, array, bonusNumber) {
    if (count === MATCHED_COUNT.fifthPlace) {
      this.rankingCounts[0] += 1;
    }

    if (count === MATCHED_COUNT.fourthPlace) {
      this.rankingCounts[1] += 1;
    }

    if (count === MATCHED_COUNT.secondAndThirdPlace) {
      this.rankingCounts[array.includes(bonusNumber) ? 3 : 2] += 1;
    }

    if (count === MATCHED_COUNT.firstPlace) {
      this.rankingCounts[4] += 1;
    }
  }

  resultLottoRank(generateNumbers, winningNumbers, bonusNumber) {
    generateNumbers.forEach((array) => {
      const count = this.countMatchingNumbers(array, winningNumbers);
      this.calculateLottoRank(count, array, bonusNumber);
    });

    return this.rankingCounts;
  }

  calculateProfitPercentage(inputPrice) {
    const price = Number(inputPrice);
    const totalPrizeAmount = this.rankingCounts.reduce(
      (total, count, index) =>
        total + count * PRIZE_AMOUNT[Object.keys(PRIZE_AMOUNT)[index]],
      0,
    );
    const protitability = (totalPrizeAmount / price) * 100;
    const result = protitability
      .toFixed(LIMITS.decimalPlaces)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return result;
  }
}

export default LottoStatistics;