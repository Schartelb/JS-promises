// Number Facts
const num = (Math.ceil(1 / Math.random())) ^ (Math.ceil(1 / Math.random()))


function numberFacts(num) {
    return new Promise((resolve, reject) => {
        let baseURL = "http://numbersapi.com/" + num + "/trivia?json"
        res = (axios.get(baseURL))
        resolve(res)
    })
}

numberFacts(num)
    .then(r => console.log(r.data.text))

function multiNumberFacts(multi) {
    return new Promise((resolve, reject) => {
        let baseURL = "http://numbersapi.com/" + multi + "/trivia?json"
        multires = (axios.get(baseURL))
        resolve(multires)
    })
}

multiNumberFacts("5,13,81,234")
    .then(r => {
        console.log(r.data)
    })

arrnum = []
let baseURL = "http://numbersapi.com/" + num + "/trivia?json"
for (let i = 0; i < 4; i++) {
    arrnum.push(axios.get(baseURL))
}
Promise.all(arrnum)
    .then(numArr => (
        numArr.forEach(num =>
            console.log(num.data.text))
    ))
