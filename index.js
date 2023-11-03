const body = document.body

const h1 = document.createElement(`h1`)
body.append(h1)
h1.textContent = `Freelance Forum`

const h4 = document.createElement(`h4`)
body.append(h4)
h4.textContent = `The average starting price is $30.`

const h2 = document.createElement(`h2`)
body.append(h2)
h2.textContent = `Available Freelancers`

/*const para = document.createElement(`li`)
body.append(li)
li.textContent = `testing`
*/

/*const ol = document.createElement(`ol`)
body.append(ol)
ol.textContent = `hello`
*/


const div = document.createElement(`div`)
body.append(div)

div.innerText = 
const freelancers = [30, 50, 70];

const findSum = () => {
    let sum = 0
    for(let i = 0; i < freelancers.length; i++) {
        sum += freelancers[i];
    }
    return sum / freelancers.length;
}
findSum(freelancers)



//const freelancers = [30, 50, 70];

/*const findSum = () => {
    let sum = 0
    for(let i = 0; i < freelancers.length; i++) {
        sum += freelancers[i];
    }
    return sum / freelancers.length;
}
findSum(freelancers)
//console.log(freelancers)
*/




