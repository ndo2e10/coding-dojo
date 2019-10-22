import * as moment from 'moment';

export class DateUtil {
  static isbetween(aStringDate : string, start: string, end: string): boolean {
    const [aMoment, startMoment, endMoment] = [aStringDate, start, end].map(d => moment(d, moment.ISO_8601));
    if([aMoment, startMoment, endMoment].some(m => !m.isValid())) return false;
    return aMoment.isBetween(startMoment, endMoment, null, "[]");
  }

}
