export const rgbToHex = (r: number, g: number, b: number) => {
  //rgb 转换成 十六进制
  const componentToHex= (c:number) =>{
    var hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export const isColorNearWhite =(color:number[])=> {
  // 将RGB颜色值转换为LAB颜色值
  const lab = rgbToLab(color)
  // 获取L值
  const l = lab[0]
  // 判断L值是否接近于100
  return l >= 90
}

function rgbToLab(color:number[]) {
  const r = color[0]
  const g = color[1]
  const b = color[2]
  // RGB颜色空间转换为XYZ颜色空间
  let x = 0.4124 * r + 0.3576 * g + 0.1805 * b
  let y = 0.2126 * r + 0.7152 * g + 0.0722 * b
  let z = 0.0193 * r + 0.1192 * g + 0.9505 * b
  // XYZ颜色空间转换为LAB颜色空间
  x /= 95.047
  y /= 100
  z /= 108.883
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]
}