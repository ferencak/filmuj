export const getImageWithRes = (imageUri: string, res: number): string => {
  const split = imageUri.split('_V1')
  return `${split[0]}_V1_SX${res}.jpg`
}

export const getImageByDevice = (imageUri?: string): string => {
  if (!imageUri) return ''
  const res = window.innerWidth > 1920 ? 1920 : window.innerWidth
  return getImageWithRes(imageUri, res)
}
