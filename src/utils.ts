import moment from "moment";

export const getTimeDifference = (from : Date) : Date => {
  const hoursDiff = moment().diff(moment(from), "hours");
  const minutesDiff = moment().diff(moment(from), "minutes");
  const secondsDiff = moment().diff(moment(from), "seconds");
  return moment().hours(hoursDiff).minutes(minutesDiff % 60).seconds(secondsDiff % 60).toDate();
}