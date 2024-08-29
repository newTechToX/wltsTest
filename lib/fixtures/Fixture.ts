import { arrayBypass, bypass, coinbaseBypass, personalSign, request, sendAsync, sendCallback, sendPromise } from '../utils';

export class Fixture {
  constructor(public method: string, public params: any[]) {}

  request() {
    return request(this.method, this.params);
  }

  sendAsync() {
    return sendAsync(this.method, this.params);
  }

  sendPromise() {
    return sendPromise(this.method, this.params);
  }

  personalSign() {
    console.log('personal.sign');
    return personalSign(this.method, this.params);
  }

  sendCallback() {
    return sendCallback(this.method, this.params);
  }

  bypass() {
    return bypass(this.method, this.params);
  }

  arrayBypass() {
    return arrayBypass(this.method, this.params);
  }

  coinbaseBypass() {
    return coinbaseBypass(this.method, this.params);
  }
}
