// comes from office hours with Dom
console.log("app.js loaded");

function DrawBargraph(sampleId) {
    console.log(`DrawBargraph(${sampleId})`);

    d3.json("data/samples.json").then(data => {
        console.log(data);

        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        var barData = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h"
        }

        var barArray = [barData];

        var barLayout = {
            title: "Top 10 bacteria culutres found",
            margin: {t:30, l:150}

        };

        Plotly.newPlot("bar", barArray, barLayout);

    });
}

function DrawBubblechart(sampleId) {
    console.log(`DrawBubblechart(${sampleId})`);

    d3.json("data/samples.json").then(data => {

        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        var bubbleData = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker : {
                size: sample_values,
                color: otu_ids
            }
        };

        var bubbleArray = [bubbleData];

        var bubbleLayout = {
            title: "Sample Values vs OTU Ids",
            xaxis: { title: "OTU ID"},
            yaxis: { title: "Sample Value"}
        }

        Plotly.newPlot("bubble", bubbleArray, bubbleLayout);

    });
}

function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})`);

    d3.json("data/samples.json").then(data => {

        var metadata = data.metadata;
        var metaArray = metadata.filter (m => m.id == sampleId);
        var meta = metaArray[0];

        var meta_id = meta.id;
        var meta_ethnicity = meta.ethnicity;
        var meta_gender = meta.gender;
        var meta_age = meta.age;
        var meta_location = meta.location;
        var meta_bbtype = meta.bbtype;
        var meta_wfreq = meta.wfreq;

        var ul = d3.select("#sample-metadata").append("ul")
        .selectAll("li")
        .each(function(d, i) {
            console.log("element", this);
            console.log("data", d);
            console.log("index", i);
        });
    });
}

function optionChanged(newSampleId) {
    console.log(`User Selected ${newSampleId}`);

    DrawBargraph(newSampleId);
    DrawBubblechart(newSampleId);
    ShowMetadata(newSampleId);
}

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
        DrawBargraph(id);
        DrawBubblechart(id);
        ShowMetadata(id);


    });

    //updated the bargraph
    //update the bubblechart
    //updated the demographic information
};

initDashboard();