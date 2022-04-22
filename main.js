async function setup() {
    let httpResponse = await fetch("dunkinDonuts.json");
    httpResponse = await httpResponse.json();
    let data = httpResponse.data;

    console.log(data);

    let state = data.map((x) => x.state);
    console.log(state);

    let storeCount = state.reduce((obj, value) => {
        if (value in obj) {
            obj[value]++;
        } else {
            obj[value] = 1
        }

        return obj;
    }, {});
    console.log(storeCount);


    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(storeCount),
            datasets: [{
                label: 'Dunkin Donuts By State',
                data: Object.values(storeCount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });}
    setup();