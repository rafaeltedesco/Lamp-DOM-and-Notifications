let lamp = document.querySelector('#lamp')
let isBroken = false
lamp.src = './src/desligada.jpg'
let btnOff = document.querySelector('#off')
let btnOn = document.querySelector('#on')
let statusNotification = 'Status da Lâmpada'
msgNotification = 'Lâmpada foi {%STATUS%}'
let permission

(async function() {
  permission = await Notification.requestPermission()
})()

function turnOn() {
  console.log(permission)
  if (!isBroken && permission == "granted") {
    lamp.src = './src/ligada.jpg'
    new Notification(statusNotification, {
      body: msgNotification.replace('{%STATUS%}', 'acesa')
    })
  }
}

function turnOff() {
  if (!isBroken && permission == "granted") {
    lamp.src = './src/desligada.jpg'
    new Notification(statusNotification, {
      body: msgNotification.replace('{%STATUS%}', 'desligada')
    })
  }
}

function breakLamp() {
  if (permission == "granted") {
    lamp.src = './src/quebrada.jpg'
    isBroken = true
    new Notification(statusNotification, {
        body: msgNotification.replace('{%STATUS%}', 'quebrada')
      })
    }
}

btnOn.addEventListener('click', turnOn)

btnOff.addEventListener('click', turnOff)

lamp.addEventListener('dblclick', breakLamp)