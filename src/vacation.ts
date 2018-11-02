export class Vacation {
  protected position = 0;
  protected coefficient = 0;

  public getNumberOfDaysOff(position: number, coefficient: number): number {
    this.position = position;
    this.coefficient = coefficient;

    return Math.max(
      25,
      this.level1,
      this.level2,
      this.level3,
      this.level4,
      this.level5
    );
  }

  protected get level1(): number {
    return this.position > 1 || this.coefficient > 130 ? 26 : 0;
  }

  protected get level2(): number {
    return this.position > 2 || this.coefficient > 180 ? 27 : 0;
  }

  protected get level3(): number {
    return this.position > 3 || this.coefficient > 200 ? 28 : 0;
  }

  protected get level4(): number {
    return this.position > 4 || this.coefficient > 310 ? 29 : 0;
  }

  protected get level5(): number {
    return this.position > 5 || this.coefficient > 420 ? 30 : 0;
  }
}
