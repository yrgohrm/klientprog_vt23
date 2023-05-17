console.log("Hello, world!")

function getCount(substr: string, str: string): number {
  let position = 0
  let count = 0
  while ((position = str.indexOf(substr, position)) >= 0) {
    count++
    position++
  }

  return count
}


console.log(getCount("apa", "apapapapapa"))


function foo(): [number, string, number] {
  return [12, "hej", 99]
}

function beginsWith(strings: string[], ch: string): string[] {
  let res: string[] = []

  for (const str of strings) {
    if (str.startsWith(ch)) {
      res.push(str)
    }
  }

  return res
}


let [count, message, value] = foo()



function format(person: { name: string; alias?: string; email?: string }): void {
  const alias = person.alias ?? "<unknown>"
  const email = person.email ?? "<unknown>"
  console.log("Name:", person.name)
  console.log("Alias:", alias)
  console.log("E-mail:", email)
}

const bosse = { name: "Bosse", email: "bosse@lammindustries.com" }
format(bosse)

enum SomeEnum {
  APA = "apa",
  APPLAPP = "saattduslapp",
  BEPA = "bepa",
  CEPA = "cepa"
}

const fooBar = SomeEnum.BEPA

// console.log("fooBar", JSON.stringify(fooBar))


// let elem = document.getElementById("app")
// if (elem != null) {
//   elem.querySelector("")
// }


function baz(): string | null {
  return ""
}

const barBaz = baz()
if (barBaz != null) {
  console.log("whooo! not null!!")
}
else {
  console.log("bu, null!")
}

const myStuff = { apa: 0 }

// 0 == false
// undefined == false
// null == false

// 1 != false

// this is bad since "apa" could be a so called
// falsy value, i.e. an actual value that evaluates
// to false
if (myStuff.apa) {
  console.log("xxxxxxx")
}
else {
  console.log("bad stuff")
}

// this is good since falsy values do not
// get converted to null, but undefined
// gets converted to null
if (myStuff.apa != null) {
  console.log("xxxxxxx")
}
else {
  console.log("bad stuff")
}

