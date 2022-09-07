const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");  // connecting with the MQTT broker

var topic = "drone/long_drone/position"          // setting up the topic for recieving message

client.on('connect', () =>
{
        client.subscribe(topic);                // subscribing to the topic
        console.log('mqtt connected');
});

client.on('message', (topic, message) =>
{
        console.log("Topic is: " + topic)          // output the received message
        console.log("Message is: " + message)
   
});