const line  = "hello !!!!"
const line_ = "Yolo !!!!"
const numb  = 8
const ary   = ["Max", "Mus", "Dams"]

console.log('Vous dit %s', line_)
console.log('Vous dit %s', line)
console.log('Vous dit %d', numb, '\n')

setTimeout(() => {
  console.log('deux secondes plus tard')
}, 2000);

for (var index = 0; index < ary.length; index++) {
  setTimeout( function(){
    console.log('pour index:%s', index, ' %s',  ary[index-1], ' vous dit hello');
  }, 2000)

}

