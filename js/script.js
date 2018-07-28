function myFirstApp (name, age) {
  alert('Привет, меня зовут ' + name + 'и это моя первая программа')
  function showSkills () {
    let skills = ['HTML', 'CSS', 'JS', 'JQ']
    for (let i = 0; i < skills.length; i++) {
      alert('Я владею ' + skills[i] + '</br>')
    }
  }
  showSkills()
  function checkAge () {
    if (age > 18) {
      alert('Вы совершенннолетний')
    } else {
      alert('Вы еще молоды')
    }
  }
  function calcPow (num) {
    result = num * num
    return result
  }
  alert(calcPow(4))
}
myFirstApp('Yury', 35)
