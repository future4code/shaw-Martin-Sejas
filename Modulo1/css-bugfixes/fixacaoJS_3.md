```
function calculaNota(ex, p1, p2) {
  
  let total = (ex) + (p1 * 2 ) + (p2* 3)
  let average = total / 6
  
  if (average >= 9) return 'A'
  
  else if (average < 9 && average >= 7.5) return  'B'
  
  else if (average < 7.5 && average >= 6) return 'C'
  
  else return 'D'
  
}