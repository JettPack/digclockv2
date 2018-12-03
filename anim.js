

function digclock(){
    var d = new Date()
    var hr24 = d.getHours();
    var hr12 = hr24;
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var Md = "PM";
    if(hr24 >= 13) {
        hr12 = hr24 - 12;
        Md = "AM";
    };
    if(hr12 = 12){
        Md = "AM";
    };
    if(min < 10){
        "0" + min;
    };

    if(sec < 10){
        "0" + sec;
    };

    //var time = hr12 + ':' + min + ':' + sec + ' ' + Md;
    document.querySelector("#hr-min").innerHTML = `${hr24}:${min} ${Md}`
    document.querySelector("#sec").innerHTML = `${sec}`
    
} 
 setInterval(digclock, 0);



