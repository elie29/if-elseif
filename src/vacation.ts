export class Vacation {
  public getNumberOfDaysOff(position: number, coefficient: number): number {
    let numberOfDaysOff = 25;
    if (position > 5 || coefficient > 420) {
      numberOfDaysOff = 30;
    } else if (position > 4 || coefficient > 310) {
      numberOfDaysOff = 29;
    } else if (position > 3 || coefficient > 200) {
      numberOfDaysOff = 28;
    } else if (position > 2 || coefficient > 180) {
      numberOfDaysOff = 27;
    } else if (position > 1 || coefficient > 130) {
      numberOfDaysOff = 26;
    }
    return numberOfDaysOff;
  }
}
