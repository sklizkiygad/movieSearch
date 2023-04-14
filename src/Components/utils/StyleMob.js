
export const StyleMobile = (initial, styleName, val1, val2) => {
   let resultStyle = styleName
   if(val1) resultStyle+= ' ' + initial.active
   if(val2) resultStyle+= ' ' + initial.dark
   return resultStyle
}