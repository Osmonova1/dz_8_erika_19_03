
const wrapper = document.querySelector('.wrapper')
const submit = document.querySelector('.submit')


const getUser = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await response.json()
  const userID = document.querySelector('.user').value
  const filtered = result.filter((user) => user.id === +userID)
  console.log(filtered,'filtered');
  filtered.forEach(user => {
      const block = document.createElement('div')
      block.innerHTML = `
      <div class="block">
      <p>${user.name}</p>
      <p>${user.username}</p>
        <p>${user.email}</p>
      </div>
      `
    wrapper.innerHTML = ''
    wrapper.append(block)
  });

  console.log(result,'result');

}

submit.addEventListener('click',getUser)



