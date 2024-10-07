document.querySelector('#js-add-btn').onclick = getValue

const nums = []
let valor

function getValue() {
  elementoInput = document.querySelector('#js-input')
  valor = elementoInput.value
  
  nums.push(valor)
  console.log(nums)

  exibir()
  elementoInput.value = ''
}

function exibir() {
  const exibirTela = document.querySelector('#js-exibir')
  exibirTela.innerHTML = '' //limpa todo o html anterior, quando chega no loop que loopa várias vezes, printa tudo dnv

  for (let i = 0; i < nums.length; i++) {
    valor = nums[i]
    exibirTela.innerHTML += `<span class="exibir">
    <p>${valor}</p>
    <button onclick="deletar(${i})">deletar</button>
    </span>`
  }
}

function deletar(i) {
  nums.splice(i, 1)
  exibir()

}