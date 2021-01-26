// document.querySelector('#sub').addEventListener('submit', function (e) {
//     e.preventDefault()
    
// })

const numOne = document.querySelector('#num_one')
const numTwo = document.querySelector('#num_two')



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

   let result;

   if(e.submitter.id=="add"){
        result = parseInt(a) + parseInt(b)
   }else if (e.submitter.id=="substract"){
        result = parseInt(a) - parseInt(b)
   }else if (e.submitter.id=="multiply"){
        result = parseInt(a) * parseInt(b)
   }else if (e.submitter.id=="divide"){
        result = parseInt(a) / parseInt(b)
   }

  document.querySelector('#answer').value = result
    
})

