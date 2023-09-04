var isValid = function (s) {
  let obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stark = []
  for (let i of s) {
    if (i in obj) {
      stark.push(obj[i])
    } else {
      let res = stark.pop()
      if (res !== i) {
        return false
      }
    }
  }
  return stark.length ? false : true
}


console.log(isValid('{}()[{[]]}]'))