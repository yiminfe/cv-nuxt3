export function debounce<T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
) {
  let timerId: ReturnType<typeof setTimeout> | null = null
  return function debouncedFn(this: unknown, ...args: T) {
    if (timerId !== null) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn.apply(this, args)
      timerId = null
    }, delay)
  }
}

export function isWeChat() {
  if (!process.client) return false
  return /MicroMessenger/i.test(navigator.userAgent)
}
