
import { computed, observable } from "mobx";

export default class ForgotPasswordStore {

  @observable private _loading: boolean = false;
  @computed get loading(): boolean { return this._loading; }
  set loading(loading: boolean) { this._loading = loading; }

  @observable private _email: string = "";
  @computed get email(): string { return this._email; }
  set email(email: string) { this._email = email; }

  public async submit(): Promise<void> {
    this.loading = true;
    try {
      if (this.email === "") {
        throw new Error("Please provide email address.");
      }
      // await Firebase.auth.sendPasswordResetEmail(email);
      this.loading = false;
    } catch (e) {
      this.loading = false;
      throw e;
    }
  }

}
