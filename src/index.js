if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js").then(registration =>{
     console.log("SW Registered!");
     console.log(registration);
 }).catch(error =>{
    console.log("SW Registered!");
     console.log(error);
 })  
}
fetch('https://www.json-generator.com/api/json/get/bVKosksOSq?indent=2')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() =>{
    addDate(obj);
          });
    
   function addDate(obj){
    var elemsImg = document.getElementsByClassName("cimg");
    var elemsName = document.getElementsByClassName("jname");
    var elemsName2 = document.getElementsByClassName("jname2");
    var elemsJdate = document.getElementsByClassName("jdate");
    var elemsJdetails = document.getElementsByClassName("jdetails");
    var tmpstr="";
    var tmpstr2="";
    for(var i=0;i<obj.length;i++)
    {
    elemsImg[i].setAttribute("src",obj[i].img);
    elemsName[i].innerHTML=obj[i].name;
    elemsName2[i].innerHTML=obj[i].name;
    tmpstr=elemsJdate[i].innerHTML;
    tmpstr2="<img class=\"card-img-top border\" src=\""+obj[i].img+"\" alt=\"Card image cap\">";
    tmpstr=tmpstr2+"<p><b> Data: </b>"+obj[i].date+"<p><b>Godzina: </b>"+obj[i].hour+"<p><b>Krótki opis: </b>"+obj[i].short_desc+tmpstr;
    elemsJdate[i].innerHTML=tmpstr;
    elemsJdetails[i].innerHTML="<p><b>Ważne: </b>"+obj[i].details.wazne+"<p><b>Powtarzalne: </b>"+obj[i].details.powtarzalne+"<p><b>Powiadomienia: </b>"+obj[i].details.powiadomienia+"<p><b>Typ: </b>"+obj[i].details.type+"<p><b>Opis: </b>"+obj[i].details.desc;

    }
}