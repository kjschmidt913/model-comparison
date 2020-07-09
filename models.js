// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys, { epochs: 10 }).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([5], [1, 1])).print();
    // Open the browser devtools to see the output
});

// {
//     visorInstance = tfvis.visor();
//     visorInstance.surface({
//         name: 'Surface 1'
//     });
//     visorInstance.surface({
//         name: 'Surface 2'
//     });
//     visorInstance.surface({
//         name: 'Surface 3',
//         tab: 'Tab 2'
//     });
//     visorInstance.surface({
//         name: 'Just a surface',
//         tab: 'A really long tab name'
//     });
// }


{
    const headers = ['Col 1', 'Col 2', 'Col 3'];
    const values = [
        [1, 2, 3],
        ['4', '5', '6'],
        ['<strong>7</strong>', true, false]
    ];

    // Render to visor
    // const surface = {
    //     name: 'Table',
    //     tab: 'Charts'
    // };
    // tfvis.render.table(surface, {
    //     headers,
    //     values
    // });

    // Render to page
    const container = document.getElementById('table-cont');
    tfvis.render.table(container, {
        headers,
        values
    });
}

{
    const series1 = Array(100).fill(0).map(y => Math.random() * 100 - Math.random() * 50).map((y, x) => ({
        x,
        y
    }));
    const series2 = Array(100).fill(0).map(y => Math.random() * 100 - Math.random() * 150).map((y, x) => ({
        x,
        y
    }));
    const series = ['First', 'Second'];
    const data = {
        values: [series1, series2],
        series
    };
    const opts = {
        seriesColors: ['tomato', 'purple']
    };

    // Render to page
    const container = document.getElementById('linechart-colors-cont');
    tfvis.render.linechart(container, data, opts);
}