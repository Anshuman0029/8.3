const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="drone/+/#"        //setting up the topic for receving all messages related to both drones

client.on('connect', () =>
{
        client.subscribe(topic);              //subscribing to the topic
        console.log('mqtt connected');
});

client.on('message', (topic, message) =>
{
    
        console.log("Topic is: " + topic)
        console.log("Message is: " + message)       //output the message
   
   
});