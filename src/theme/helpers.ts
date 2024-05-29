export const helpers = {
  colorWithOpacity: (color: string, opacity: number): string => {
    return `${color}${Math.round(opacity * 255)
      .toString(16)
      .toUpperCase()}`
  },
}
