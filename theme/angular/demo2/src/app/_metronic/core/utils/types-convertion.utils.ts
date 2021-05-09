/**
 * Convert string to Date
 *
 * @param dateInStr: string (format => 'MM/dd/yyyy')
 */
export function getDateFromString(dateInStr: string = ''): Date {
  if (dateInStr && dateInStr.length > 0) {
    const dateParts = dateInStr.trim().split('/');
    const year = toInteger(dateParts[2]);
    const month =  toInteger(dateParts[0]);
    const day = toInteger(dateParts[1]);
    // tslint:disable-next-line:prefer-const
    let result = new Date();
    result.setDate(day);
    result.setMonth(month - 1);
    result.setFullYear(year);
    return result;
  }

  return new Date();
}

/**
 * Covert value to number
 *
 * @param value: any
 */
export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}
