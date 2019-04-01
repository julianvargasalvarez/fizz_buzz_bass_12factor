function assertEqual(description, expected, actual) {
  if(expected===actual){
    console.log(description, ":", "OK")
  }
  else {
    console.log(description, ": F", expected, "was expected but got", actual)
  }
}

function fizz_buzz_bazz(number) {
  if(number % 3 === 0 && number % 5 === 0) {
    return 'Bazz'
  }
  if(number % 3 === 0) {
    return 'Fizz'
  }
  if(number % 5 === 0) {
    return 'Buzz'
  }
  return number
}

assertEqual("Returns 'Fizz' when 3 is given", "Fizz", fizz_buzz_bazz(3))
assertEqual("Returns 'Buzz' when 5 is given", "Buzz", fizz_buzz_bazz(5))
assertEqual("Returns 'Bazz' when 15 is given", "Bazz", fizz_buzz_bazz(15))
assertEqual("Returns 4 when 4 is given", 4, fizz_buzz_bazz(4))


var http = require('http')
var query = require('url')

var server = http.createServer(function(request, response) {
  const {headers, method, url} = request
  const params = query.parse(url, true)
  console.log(params.query.number)
  const result = fizz_buzz_bazz(params.query.number)
  response.end(result)
})

server.listen(8080)

