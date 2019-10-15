function showContent(name){
    $('.main-content').css('display', 'none');
    $('#' + name).css('display', 'block');
}

let socket = io();

/* Skidd'd from stackoverflow */
String.prototype.toHHMMSS = function () {
    let uptime = new Date(null);
    uptime.setSeconds(this);
    return uptime.toISOString().substr(11, 8);
}

socket.on('data', (data) => {
    console.log(data);

    $('#cpuInfo').text(data.cpu.data.manufacturer + data.cpu.data.brand);
    $('#uptimeInfo').text(String(data.time.uptime).toHHMMSS());

    cpuGauge.setValueAnimated(data.cpu.load.currentload, .2);
    ramGauge.setMaxValue(data.mem.total / 1e+9)
    ramGauge.setValueAnimated(data.mem.used / 1e+9, .2);

    cpuGaugeLoad.setValueAnimated(Math.round(65 + Math.random() * 10), .2);
    cpuGaugeClock.setValueAnimated(4 + Math.random() / 2, .2);
    cpuGaugeHeat.setValueAnimated(Math.round(69 + Math.random() * 7), .2);
    cpuGauge0Load.setValueAnimated(Math.round(65 + Math.random() * 10), .2);
    cpuGauge0Heat.setValueAnimated(Math.round(69 + Math.random() * 7), .2);
});