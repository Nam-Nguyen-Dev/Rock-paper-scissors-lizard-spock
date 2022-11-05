/* document.querySelectorAll('img').forEach(elem => elem.addEventListener('click', makeReq))

async function makeReq(){

  const userChoice = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
} */

const userChoices = document.querySelectorAll('.player1')
userChoices.forEach(choice => {
  choice.addEventListener('click', async (e) => {
    let pick = e.currentTarget.id
    const res = await fetch(`/api?choice=${pick}`)
    const data = await res.json()
    console.log(data)

    
    document.querySelector('#status').innerText = `You ${data.status}!`
    //document.querySelector('#score').innerText = `Total Score: ${data.currentScore}`
  })
})