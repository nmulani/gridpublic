d3.csv('lawmap/blackoutnew.csv', function(data) {
var format = d3.time.format("%m-%d-%Y");
data.forEach(function(x){
	x['Date Event Began'] = format.parse(x['Date Event Began']);
});

    data = MG.convert.number(data, 'Number of Customers Affected');
    console.log(data);
    MG.data_graphic({
        chart_type: 'point',
        data: data,
        width: 500,
        height: 300,
        left: 80,
        bottom: 90,
        target: document.getElementById('blackoutchart'),
        color_accessor: 'NERC Region',
        color_domain: ['WSCC', 'ERCOT', 'SPP', 'MAAP', 'MAIN', 'ECAR', 'MAAC', 'SERC', 'NPCC'],
        color_range: ['#8dd3c7', '#ffffb3', '#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9'],
        color_type:'category',
        x_accessor: 'Date Event Began',
        y_accessor: 'Number of Customers Affected',
        x_label: 'Date of Blackout',
        y_label: 'Number of People Affected',
        x_rug: true,
        y_rug: true
    });
});