export function calculateButtonHover(tailwindColor: string) {
  const [color, lightness] = tailwindColor.split('-')
  if (+lightness > 600) {
    return `${color}-${+lightness - 100}`
  }
  return `${color}-${+lightness + 100}`
}
