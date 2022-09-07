const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic = "drone/+/battery"                    // setting up the topic for receiving message related to battery of all drones

client.on('connect', () =>
{
        client.subscribe(topic);                 // subscribing to topic
        console.log('mqtt connected');
});

client.on('message', (topic, message) =>
{
        
        console.log("Topic is: " + topic)
        console.log("Message is: " + message)    // output the received message
   
});