import OutputView from '../views/OutputView.js';

const handlerErrorAndProceed = async (method, prams) => {
  let retryCount = 0;
  while (retryCount !== 10) {
    try {
      return await method.call(this, prams);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      retryCount += 1;
    }
  }
};

export default handlerErrorAndProceed;
