import {DateUtil} from '../src/date-util';
import * as moment from 'moment';

describe('date-util', function() {
  it('badInput', function() {
    expect(DateUtil.isbetween("blabla", "blabla", "blabla")).toBe(false);
    expect(DateUtil.isbetween(null, "2018-01-01", "2018-01-01")).toBe(false);
  });
  it('isBetween', function() {
    expect(DateUtil.isbetween("2018-01-02", "2018-01-01", "2018-01-03")).toBe(true);
  });

});
