import { CookieKey } from "@/constants";
import { setCookie } from "@/helpers";

const PRIVATE_KEY =
  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";

type Account = {
  password: string;
  phrase: string;
  privateKey: string;
};
let accounts: Account[] = [];

class AuthService {
  signUp(password: string, phrase: string) {
    accounts.push({ password, phrase, privateKey: PRIVATE_KEY });
    setCookie(CookieKey.PRIVATE_KEY, PRIVATE_KEY);
  }

  recovery(phrase: string, newPassword: string) {
    // const index = accounts.findIndex((v) => v.phrase === phrase);
    // if (index < 0) {
    //   throw new Error("일치하는 계정이 없습니다.");
    // }

    if (accounts.length === 0) {
      throw new Error("생성된 계정이 없습니다.");
    }

    const index = 0;

    const account = accounts[index];
    accounts = [
      ...accounts.slice(0, index),
      { ...account, password: newPassword },
      ...accounts.slice(index + 1),
    ];
  }
}

export default new AuthService();
