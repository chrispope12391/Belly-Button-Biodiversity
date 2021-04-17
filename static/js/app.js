console.log("app.js loaded");

function initDashboard() {
    console.log("initDashboard()");

    //populate the dropdown
    var selector = d3.select("#seldataset");

    // comes from office hours with Dom
    d3.json("data/samples.json").then(data => {
        console.log(data);

        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append("option")
            .text(sampleId)
            .property("value", sampleId);

        });
    });

    //updated the bargraph
    //update the bubblechart
    //updated the demographic information
};

initDashboard();