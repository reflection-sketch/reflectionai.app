export function isBrowser() {
  return typeof window === 'object'
}

export function getCurrentTimeStamp(date?: Date | string | number) {
  return Number(((date ? new Date(date) : new Date()).getTime() / 1000).toFixed())
}

export default function isZero(hexNumberString: string) {
  return /^0x0*$/.test(hexNumberString)
}
