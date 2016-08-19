const obj = {"logoImg":"http://placekitten.com/g/680/190",
"des1":"Description: Lorem ipsum dolor sit amet",
"des2":"Great Britain Formula1.com","blurb":"My first Blurb is this. Its a very long blurb simply because its my first blurb. That is just the way I am. You got it!!"}

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key])
  }
}

const arrObj = [obj]
console.log(arrObj)
