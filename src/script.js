function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }
   let data_temp = httpGet('https://gsak.azurewebsites.net/api/HttpExample?code=1JNt852Jomsc0CSJ3QcK1lDQS0lIbdYXXCQwcAKr6qGqAzFuYXaiTg==')
   let data = JSON.parse(data_temp);
  var vehicle = data[0] 
  var vehicles = vehicle["VehicleCount"]
  var entries = vehicle["EntryCount"]
  var exits = vehicle["ExitCount"]
  console.log(vehicle)
  document.querySelector('#test').innerHTML = vehicles
  document.querySelector('#test2').innerHTML = entries
  document.querySelector('#test3').innerHTML = exits