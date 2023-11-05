import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import LottoMachine from "../Model/LottoMachine.js";
import Lotto from "../Lotto.js";
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  constructor() {
    this.lotto = new Lotto();
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoMachine = new LottoMachine();
  }

  async handlePurchase() {
    const purchaseAmount = await this.inputView.promptPurchaseAmount();
    const numberOfLottos = this.lottoMachine.calculateLottoCount(purchaseAmount);
    this.outputView.printLottoCounts(numberOfLottos);
    
    this.lotto.generateLottoNumbers(numberOfLottos);
    const lottoNumbersArray = this.lotto.printLottoNumbersArray();
    this.outputView.printLottos(lottoNumbersArray);
  }
}

export default LottoController;