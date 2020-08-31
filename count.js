/*
* 03/05/2020
* vida CAIO	    20/10/1993	03/05/2020	9.692	  318	26	26 A 6  M 13 D 	170 dias para mais 1 ano
* vida THAIANA	06/05/1992	03/05/2020	10.224	335	27	27 A 11 M 27 D 	3   dias para mais 1 ano
*/
var cla = 'class="'
var color = {
  blue: cla+'blue"',
  green: cla+'green"',
  purple: cla+'purple"',
  orange: cla+'orange"',
  lightblue: cla+'lightblue"'
}
var boxs = document.querySelectorAll("div");
var i;
  for (i=0; i < boxs.length; i++) { 
    begin(boxs[i].title, boxs[i].id, boxs[i].innerText);
  }
  
function begin(myDate, myId, myName) { 
  // Set the target date
  var tg = new Date(myDate);
  var id = myId;
  var name = myName;
  // Begin and update the count every 1 second
  perSecond()
  var x = setInterval(perSecond, 1000);

  function perSecond() {
    // Get today's date and time
    var n = new Date();

    var years = n.getFullYear()-tg.getFullYear();
    var months = n.getMonth()-tg.getMonth();
    var days = n.getDate()-tg.getDate();
    var hours = n.getHours()-tg.getHours();
    var minutes = n.getMinutes()-tg.getMinutes();
    var seconds = n.getSeconds()-tg.getSeconds();

    if (seconds < 0) {minutes -= 1;seconds += 60;}
    if (minutes < 0) {hours -= 1;minutes += 60;}
    if (hours < 0) {days -= 1;hours += 24;}
    if (days < 0) { months -= 1; days +=30;}
    if (months < 0) {years -= 1; months += 12;}    
    
    var result =
    `<span ${color.blue}>${years}a </span>
    <span ${color.green}>${months}m </span>
    <span ${color.purple}>${days}d </span>
    <span ${color.orange}>${hours}h </span>
    <span ${color.lightblue}>${minutes}min </span>
    <span >${seconds}s</span>`;
  
      // Output the result in an element with an id
        document.getElementById(id).innerHTML = `${name}'s lifetime:<br>${result}`;
        
  }
}