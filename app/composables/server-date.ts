import { Temporal } from 'temporal-polyfill'
export function useServerDate() {
  const zonedDate = Temporal.Now.plainDate('ethiopic')
  const ethiopicDateString = zonedDate.toLocaleString('am-ET', { calendar: 'ethiopic' })
  const displayTime = ethiopicDateString.replaceAll('/', '-')
  return shallowReadonly({ethiopicDateString, zonedDate, displayTime})
}