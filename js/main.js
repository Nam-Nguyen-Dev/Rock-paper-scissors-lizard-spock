const userChoices = document.querySelectorAll('.player1')
userChoices.forEach(choice => {
  choice.addEventListener('click', async (e) => {
    let pick = e.currentTarget.id
    const res = await fetch(`/api?choice=${pick}`)
    const data = await res.json()
    console.log(data)

    document.querySelector('#choice1').innerText = `You chose ${pick}!`
    document.querySelector('#choice2').innerText = `Your opponent chooses...${data.computer}!`
    document.querySelector('#status').innerText = `You ${data.status}!`
    if(data.status === 'Win'){
      document.querySelector('body').style.backgroundColor = "green"
    } else if(data.status === 'Lose'){
      document.querySelector('body').style.backgroundColor = "red"
    } else if(data.status === 'Tie'){
      document.querySelector('body').style.backgroundColor = "orange"
    }
  })
})