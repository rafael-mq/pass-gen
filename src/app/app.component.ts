import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private password: string = '';

  passLength: number = 0;

  useLetters: boolean = true;
  useNumbers: boolean = true;
  useSpecial: boolean = true;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  private get default() {
    return 'bad_pass';
  }

  getPassword(): string {
    return this.password;
  }

  onChangeLength(target: any) {
    let val = parseInt(target.value);

    if (!isNaN(val)) {
      this.passLength = val;
    }
  }

  toggleUseLetters() {
    this.useLetters = !this.useLetters;
  }

  toggleUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  toggleUseSpecial() {
    this.useSpecial = !this.useSpecial;
  }

  randInt({ start = 0, end }: { start?: number; end: number }): number {
    const range = end - start;
    return Math.floor(Math.random() * range) + start;
  }

  randomPass(
    length: number,
    useLetters: boolean,
    useNumbers: boolean,
    useSpecial: boolean
  ): string {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ';
    const special = '?!&%$#@+-_';

    let valid = '';
    if (useLetters) {
      valid += letters;
    }
    if (useNumbers) {
      valid += numbers;
    }
    if (useSpecial) {
      valid += special;
    }

    const nextRandChar = () => {
      let rand = this.randInt({ end: valid.length });
      return valid[rand];
    };

    let pass = '';
    for (let index = 0; index < length; index++) {
      let char = nextRandChar();

      pass += char;
    }

    return pass;
  }

  generatePass() {
    this.password = '';
    this.password = this.randomPass(
      this.passLength,
      this.useLetters,
      this.useNumbers,
      this.useSpecial
    );
  }
}
