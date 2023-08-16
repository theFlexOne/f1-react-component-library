

export function colorContrastFromRGB(rgbString: string): "black" | "white" {
  const rgbArray = rgbString.replace(/[^\d,]/g, '').split(',');
  try {
    const r = rgbArray[0];
    const g = rgbArray[1];
    const b = rgbArray[2];
    const yiq = ((+r * 299) + (+g * 587) + (+b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  } catch (e) {
    console.error(e);
    return 'black';
  }
}
export function getColorBrightness(hexcolor: string): number {
  const startIndex = hexcolor.startsWith('#') ? 1 : 0;
  const cleanHex = hexcolor.slice(startIndex, startIndex + 6);
  try {
    const r = parseInt(cleanHex.slice(0, 2), 16);
    const g = parseInt(cleanHex.slice(2, 2), 16);
    const b = parseInt(cleanHex.slice(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq / 256;
  } catch (e) {
    throw new Error(`Invalid hex color: ${hexcolor}`);
  }
}

export function getHTMLElementTextColor(element: HTMLElement): string {
  return window.getComputedStyle(element).color;
}

export function getHTMLElementBackgroundColor(element: HTMLElement): string {
  return window.getComputedStyle(element).color;
}