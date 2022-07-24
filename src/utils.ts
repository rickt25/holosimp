import moment from 'moment';

export const getTimeDifference = (from: Date): Date => {
  const hoursDiff = moment().diff(moment(from), 'hours');
  const minutesDiff = moment().diff(moment(from), 'minutes');
  const secondsDiff = moment().diff(moment(from), 'seconds');
  return moment()
    .hours(hoursDiff)
    .minutes(minutesDiff % 60)
    .seconds(secondsDiff % 60)
    .toDate();
};

export const formatNumber = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
};
