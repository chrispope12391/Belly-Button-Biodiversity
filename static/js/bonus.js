console.log("bonus.js loaded");

function washData(sampleId) {
    console.log(`washData(${sampleId})`);

    d3.json("data/samples.json").then(data => {

        var metadata = data.metadata;
        var metaArray = metadata.filter (m => m.id == sampleId);
        var meta = metaArray[0];

        var meta_wfreq = meta.wfreq;

        console.log(`yo${meta_wfreq}`);

        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: meta_wfreq,
                title: { text: "SBelly Button Washing Frequency" },
                type: "indicator",
                mode: "gauge+number"
            }
        ];
        
        var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data, layout);

    });
};

function initDashboard() {
    console.log("initDashboard()");

    //populate the dropdown
    var selector = d3.select("#selDataset");

    // comes from office hours with Dom
    d3.json("data/samples.json").then(data => {
        console.log(data);

        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append("option")
            .text(sampleId)
            .property("value", sampleId);

        });

        var id = sampleNames[0];

        // Draw the graphs and the metadata
        washData(id);

    });
};
initDashboard();