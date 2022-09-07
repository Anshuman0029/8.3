const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="drone/long_drone"
var message="My message" 
var drone = {battery:"100%", longitude:"38°",latitude:"32°", altitude:10,speed:15}
var topic1 ="";
client.on('connect', () =>
{
    
    console.log("MQTT connected  "+ client.connected);
    setInterval(function(){
          drone.battery = Math.floor((Math.random() * 100) + 1);
          topic1 = topic +"/battery";
          message =  `Battery : ${drone.battery}`;
          client.publish(topic1,message);
          console.log('published to Topic: ' + topic1 + " with Message: " +
          message);  
          
          drone.longitude = Math.floor((Math.random() * 180) + 1);
          drone.latitude = Math.floor((Math.random() * 90) + 1);
          topic1 = topic +"/position";
          message = `Longitude : ${drone.longitude} and Latitude:${drone.latitude}`;
          client.publish(topic1,message );
          console.log('published to Topic: ' + topic1 + " with Message: " +
          message); 
      
          drone.altitude = Math.floor((Math.random() * 100) + 1);
          topic1 = topic +"/altitude";
          message = `Altitude: ${drone.altitude} meter`;
          client.publish(topic1, message );
          console.log('published to Topic: ' + topic1 + " with Message: " +
          message); 
      
          drone.speed = Math.floor((Math.random() * 100) + 1);
          topic1 = topic+"/speed";
          message = `Speed : ${drone.speed} m/sec`;
          client.publish(topic1, message);
          console.log('published to Topic: ' + topic1 + " with Message: " +
          message);
          
    },5000);
                  
                    
                 
});
       



