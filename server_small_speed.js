const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");           // connecting with the broker
var topic = "drone/small_drone/speed"   //setting up the topic for receiving message related to speed of all short distance drones

client.on('connect', () =>
{
        client.subscribe(topic);                   //subscribing the topic
        console.log('mqtt connected');
});

client.on('message', (topic, message) =>
{
    
        console.log("Topic is: " + topic)
        console.log("Message is: " + message)       // output the received message
    
});