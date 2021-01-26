// document.querySelector('#sub').addEventListener('submit', function (e) {
//     e.preventDefault()
    
// })

const numOne = document.querySelector('#num_one')
const numTwo = document.querySelector('#num_two')
const answer = document.querySelector('#answer')


// Get number 1 and number 2
document.querySelector('#form')
.addEventListener('submit', function (e) {
  e.preventDefault()
  let a = numOne.value
  let b = numTwo.value
  //console.log(a,b)
   // reset...
   numOne.value = ''
   numTwo.value = ''

   if(e.submitter.id=="add"){
        answer.value = parseInt(a) + parseInt(b)
   }else if (e.submitter.id=="substract"){
        answer.value = parseInt(a) - parseInt(b)
   }else if (e.submitter.id=="multiply"){
        answer.value = parseInt(a) * parseInt(b)
   }else if (e.submitter.id=="divide"){
        answer.value = parseInt(a) / parseInt(b)
   }
   

})

