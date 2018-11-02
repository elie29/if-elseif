export class Vacation {
  protected position = 0;
  protected coefficient = 0;

  public getNumberOfDaysOff(position: number, coefficient: number): number {
    this.position = position;
    this.coefficient = coefficient;

    let numberOfDaysOff = 25;

    if (this.level5) {
      numberOfDaysOff = 30;
    } else if (this.level4) {
      numberOfDaysOff = 29;
    } else if (this.level3) {
      numberOfDaysOff = 28;
    } else if (this.level2) {
      numberOfDaysOff = 27;
    } else if (this.level1) {
      numberOfDaysOff = 26;
    }
    return numberOfDaysOff;
  }

  protected get level1(): boolean {
    return this.position > 1 || this.coefficient > 130;
  }

  protected get level2(): boolean {
    return this.position > 2 || this.coefficient > 180;
  }

  protected get level3(): boolean {
    return this.position > 3 || this.coefficient > 200;
  }

  protected get level4(): boolean {
    return this.position > 4 || this.coefficient > 310;
  }

  protected get level5(): boolean {
    return this.position > 5 || this.coefficient > 420;
  }
}
