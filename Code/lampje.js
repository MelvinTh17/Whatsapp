const mqtt = require('mqtt')


function lampjeespaan(){
const host = 'gb55f60f.eu-central-1.emqx.cloud'
const port = '15481'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'Fontys',
    password: 'Fontys123!@#',
    reconnectPeriod: 1000,
})
  const topic = 'aan'
  client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
  client.publish(topic, 'aan', { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error)
    }
  })
})
client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
})
}
function lampjeespuit(){
  const host = 'gb55f60f.eu-central-1.emqx.cloud'
  const port = '15481'
  const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
  const connectUrl = `mqtt://${host}:${port}`
  const client = mqtt.connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      username: 'Fontys',
      password: 'Fontys123!@#',
      reconnectPeriod: 1000,
  })
    const topic = 'uit'
    client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`)
    })
    client.publish(topic, 'uit', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
    })
  })
  client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
  })
  }

module.exports = {
  lampjeespaan,
  lampjeespuit
}
