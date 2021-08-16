


let formulario = document.getElementById('Formulario')

formulario.addEventListener('submit', event => {
  event.preventDefault();
  pesquisa()
});

City_name = "Recife"


cidade = 'recife'
iniciar()

function iniciar() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&APPID=3c8d3fead51892c0f08921deb0391696`)
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      weather2 = response.main.temp
      simbolo = response.weather
      let sensa = response.main.feels_like
      let humidade = response.main.humidity

      nome = response.name
      cityname(nome)
      TratamentodeData(simbolo, weather2, sensa, humidade)
    })
    .catch(error => window.alert('cidade não encontrada no banco de dados'))
}
/*Sistema de pesquisa */
function pesquisa() {
  cidade = document.getElementById('pesquisa').value
  if (cidade == 123) {
    alert('erro ensira uma cidade por favor')
  } else iniciar()

}


function TratamentodeData(simbolo, weather, sensação, humidade) {
  /*Tratamento de data dos simbolos */
  tiro = simbolo[0]
  let clim = tiro.id

  simbolos(clim)
  /*clima convertido*/
  clim2 = tiro.main

  /*clima */
  clima = weather.toFixed(0)
  valorclima(clima)

  /*Sensação */
  let sen = sensação.toFixed(0)


  /*enviando para tela */
  escrevertrio(sen, clim2, humidade)
}


function escrevertrio(sen, clin, humidade) {
  let sensa = document.getElementById('sensação')
  let clim = document.getElementById('clima')
  let umid = document.getElementById('umidade')
  sensa.innerHTML = `SensaçãoT: ${sen}°C`
  umid.innerHTML = `Umidade: ${humidade}%`
  clim.innerHTML = `Clima: ${clin}`

}

function cityname(variavel) {
  let city = document.getElementById('cidade')
  city.innerHTML = variavel
}
function valorclima(valor) {
  let celsius = document.getElementById('celsius')
  celsius.innerHTML = `${valor}°C`
}



function simbolos(Clima) {

  if (Clima >= 801 && Clima <= 805) {
    nuvem()
  } else if (Clima >= 500 && Clima <= 531) {
    chuva()
  } else if (Clima === 800) {
    ensolarado()
  }
}

function nuvem() {
  let sol = document.getElementById('ensolarado').style.display = 'none'
  let nuvem = document.getElementById('nuvem').style.display = 'flex'
  let chuva = document.getElementById('chuva').style.display = 'none'
  document.querySelector('body').style.backgroundImage = "url('https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"

}
function ensolarado() {
  let sol = document.getElementById('ensolarado').style.display = 'flex'
  let nuvem = document.getElementById('nuvem').style.display = 'none'
  let chuva = document.getElementById('chuva').style.display = 'none'

  document.querySelector('body').style.backgroundImage = "url('https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"

}
function chuva() {
  let sol = document.getElementById('ensolarado').style.display = 'none'
  let nuvem = document.getElementById('nuvem').style.display = 'none'
  let chuva = document.getElementById('chuva').style.display = 'flex'
  document.querySelector('body').style.backgroundImage = "url('https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
}
