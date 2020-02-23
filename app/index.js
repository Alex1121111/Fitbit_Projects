import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import userActivity from "user-activity";
import { today } from "user-activity";
import * as util from "../common/utils";
import { battery } from "power";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myHours");
const myMinl=document.getElementById("myMinl");
const myMinm=document.getElementById("mym");
const myLabel1 = document.getElementById("myMinutes");
const myDate =document.getElementById("date");
const myWeather=document.getElementById("weather");
const myDate2=document.getElementById("date2");
const mySteps = document.getElementById("steps");
const myWeather=document.getElementById("weather");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();

  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
let day = today.getDate();
let mon = (today.getMonth())+1;
myDate.text = `${day}`;
myDate2.text=`/${mon}`;
let mins = today.getMinutes();

myLabel.text = `${hours}`;

if(mins<10)
{
      myLabel1.text=`0${mins}`;
}
else
{
myLabel1.text= `${mins}`;
}
    if(mins==0)
{
  myMinl.text=59;
}
else if(mins<10)
{
 myMinl.text= `0${mins-1}`;         
}
else
{
  myMinl.text= `${mins-1}`;
}
if(mins==59)
{
    myMinm.text=`00`
}
else if(mins<9)
{
    myMinm.text=`0${mins+1}`;
}
else
{
myMinm.text=`${mins+1}`;
}

let steps = userActivity.today.adjusted.steps || 0;
mySteps.text=steps;
myWeather.text=`30°C`;
  
}

