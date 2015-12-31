d3.csv('esigdata.csv', function(data) {
data = MG.convert.number(data,'Time');

data = MG.convert.number(data,'Power');

var markers = [{
        'Time': 5,
        'label': 'Refigerator'
    }, {
        'Time': 18,
        'label': 'Oven'
    }, {
        'Time': 29,
        'label': 'Refigerator+Stove'
    }];
    
    MG.data_graphic({
        chart_type: 'line',
        title: '&emsp;&emsp;Power Consumption Over Time',
        data: data,
        width: 500,
        height: 300,
        left: 150,
        bottom: 50,
        target: document.getElementById('esig'),
        markers: markers,
        x_accessor: 'Time',
        y_accessor: 'Power',
        x_label: 'Time (Min)',
        y_label: 'Power (KW)'
    });
});