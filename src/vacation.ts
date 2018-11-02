export class Vacation {
  protected position = 0;
  protected coefficient = 0;

  public getNumberOfDaysOff(position: number, coefficient: number): number {
    this.position = position;
    this.coefficient = coefficient;

    return Math.max(
      25,
      this.numberOfDaysOffForLevel1,
      this.numberOfDaysOffForLevel2,
      this.numberOfDaysOffForLevel3,
      this.numberOfDaysOffForLevel4,
      this.numberOfDaysOffForLevel5
    );
  }

  protected get numberOfDaysOffForLevel1(): number {
    return this.position > 1 || this.coefficient > 130 ? 26 : 0;
  }

  protected get numberOfDaysOffForLevel2(): number {
    return this.position > 2 || this.coefficient > 180 ? 27 : 0;
  }

  protected get numberOfDaysOffForLevel3(): number {
    return this.position > 3 || this.coefficient > 200 ? 28 : 0;
  }

  protected get numberOfDaysOffForLevel4(): number {
    return this.position > 4 || this.coefficient > 310 ? 29 : 0;
  }

  protected get numberOfDaysOffForLevel5(): number {
    return this.position > 5 || this.coefficient > 420 ? 30 : 0;
  }
}
