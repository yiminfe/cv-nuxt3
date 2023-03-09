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

export function ossImageToWebp(url) {
  if (typeof url !== 'string') {
    throw new Error('url must be a string')
  }
  if (!url.startsWith('https://')) {
    throw new Error('url must start with https://')
  }
  return `${url}?x-oss-process=image/format,webp`
}

export function isMobile(): boolean {
  const userAgent = navigator.userAgent
  const isIOS = /iPhone|iPad|iPod/.test(userAgent)
  const isAndroid = /Android/.test(userAgent)
  const isWindowsPhone = /Windows Phone/.test(userAgent)
  const isBlackBerry = /BlackBerry|BB10/.test(userAgent)
  const isOperaMini = /Opera Mini/.test(userAgent)

  return isIOS || isAndroid || isWindowsPhone || isBlackBerry || isOperaMini
}
