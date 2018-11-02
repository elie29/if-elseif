export class Vacation {
  public getNumberOfDaysOff(position: number, coefficient: number): number {
    let numberOfDaysOff = 25;
    const level1 = position > 1 || coefficient > 130;
    const level2 = position > 2 || coefficient > 180;
    const level3 = position > 3 || coefficient > 200;
    const level4 = position > 4 || coefficient > 310;
    const level5 = position > 5 || coefficient > 420;

    if (level5) {
      numberOfDaysOff = 30;
    } else if (level4) {
      numberOfDaysOff = 29;
    } else if (level3) {
      numberOfDaysOff = 28;
    } else if (level2) {
      numberOfDaysOff = 27;
    } else if (level1) {
      numberOfDaysOff = 26;
    }
    return numberOfDaysOff;
  }
}
