import { readLineAsync } from '../utils/missionUtils.js';
import { INPUT_MESSAGE } from '../constants/messages.js';

class UserInput {
  static async getLottoTickets() {
    const lottoTicketsByPrice = await readLineAsync(
      `${INPUT_MESSAGE.purchaseAmount}\n`,
    );
    return lottoTicketsByPrice;
  }

  static async getWinningNumbers() {
    const winningNumbers = await readLineAsync(
      `${INPUT_MESSAGE.winningNumbers}\n`,
    );
    return winningNumbers;
  }

  static async getBonusNumber() {
    const bonusNumber = await readLineAsync(`${INPUT_MESSAGE.bonusNumber}\n`);
    return bonusNumber;
  }
}

export default UserInput;
