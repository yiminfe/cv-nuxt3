export const useDarkTheme = () => useState<boolean>('darkThemeKey', () => true)

export const useOpenMenu = () => useState<boolean>('openMenuKey', () => false)
