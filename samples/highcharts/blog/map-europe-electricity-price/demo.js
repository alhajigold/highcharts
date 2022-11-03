(async () => {
    const topology = await fetch(
        "https://code.highcharts.com/mapdata/custom/europe.topo.json"
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ["dk", 96.2],
        ["hr", 112.6],
        ["nl", 101.9],
        ["es", 118.2],
        ["it", 124.6],
        ["tr", 52.9],
        ["mt", 136.2],
        ["fr", 97],
        ["no", 69.4],
        ["de", 97.5],
        ["ie", 156.8],
        ["ua", 56.3],
        ["fi", 78.7],
        ["se", 69.7],
        ["gb", 151.8],
        ["pt", 118.4],
        ["lt", 100.0],
        ["ro", 113.5],
        ["at", 100.4],
        ["sk", 101.5],
        ["hu", 113.1],
        ["lu", 97.5],
        ["ch", 100.5],
        ["be", 97.7],
        ["lv", 99.7],
        ["cz", 99.9],
        ["pl", 89.0],
        ["ee", 97.7],
        ["bg", 110.5],
        ["gr", 119.4],
        ["rs", 113.4],
        ["si", 112.6],
        ["is", null],
        ["cy", null],
        ["ba", null],
        ["kv", null],
        ["al", null],
        ["mk", null],
        ["me", null],
        ["li", null],
        ["ad", null],
        ["md", null],
        ["fo", null],
        ["ru", null],
        ["mc", null],
        ["cnm", null],
        ["nc", null],
        ["by", null],
        ["sm", null],
        ["va", null]
    ];

    // Create the chart
    Highcharts.mapChart("container", {
        chart: {
            map: topology
        },

        title: {
            text: "Average wholesale baseload electricity prices (third quarter of 2022)",
            align: 'left'
        },

        subtitle: {
            text: 'Source map: <a href="https://energy.ec.europa.eu/system/files/2022-01/Quarterly%20Report%20on%20European%20Electricity%20markets%20Q3%202021_v1.2_1.pdf">europa.eu</a>',
            align: 'left'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: "bottom"
            }
        },

        colorAxis: {
            dataClasses: [{
                to: 60,
                color: "#92D14F"
            },
            {
                from: 80,
                to: 100,
                color: "#63C786"
            },
            {
                from: 100,
                to: 120,
                color: "#06AFED"
            },
            {
                from: 120,
                to: 140,
                color: "#4581E0"
            },
            {
                from: 140,
                color: "#e04581"
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
            pointFormat: "<tr><td>Electricity prices: </td>" +
        '<td style="text-align: right"><b>{point.value} EUR</b></td></tr>',
            footerFormat: "</table>"
        },

        legend: {
            valueDecimals: 0
        },
        mapView: {
            padding: 10
        },
        series: [{
            data: data,
            name: "Random data",
            dataLabels: {
                enabled: true,
                style: {
                    textOutline: 0
                },
                // format: '{point.name}',
                formatter: function () {
                    // return this.point['hc-key']
                    if (this.point.value === null) {
                        return null;
                    }
                    return this.point.value + "€";

                }
            }
        }]
    });
    console.log(Highcharts.charts[0].series[0].points[0].setVisible);
})();
