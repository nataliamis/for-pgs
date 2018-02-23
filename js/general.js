$(document).ready(function () {
    //initial
    $('#content').load('content/about.html');
    //handle menu clicks
    $('ul#menu li a').click(function () {
        var page = $(this).attr('href');
        //alert(page);
        $('#content').load(page);
        return false;
    });
    //loading ski cams
    camReq = [
        $.ajax({
            url: 'https://makevoid-skicams.p.mashape.com/cams.json',
            type: 'GET',
            headers: {'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'}
        })
    ];
    camReq.done(function(resp) {
        console.log(resp);
    });
    var andAlo = document.getElementById('cam1');
    var montBond = document.getElementById('cam2');
    var camera1 = {data:[14], name: "Andalo", prov: "TN", cams:[{name: "Paganella: partenza Albi de Mez", url: "http://srv2.realcam.it/live/pub/5-1.jpg"}]};
    var camera2 = {data:[159], name:"Monte Bondone", prov: "TN", cams: [{name: "Pista Canalon", url: "http://srv2.realcam.it/live/pub/6-1.jpg"}]};

    console.log(camera1, camera2);

    // for (var x in camera1) {
    //   text = text + camera1[x];
    //}
    // alert(text);
    var camera = ['Monte Bondone','Andalo'];
    for ( var i = 0; i < camReq.length; i++ ) {
        if (camReq[i] === camera[0]){
            console.log(camReq[i]);
            return montBond.append(camReq[i]);
        } else if (camReq[i] === camera[1]) {
            console.log(camReq[i]);
            return andAlo.append(camReq[i]);
        }
    }

});
