function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    metatData = d3.json(url).then(function(data) {
      console.log(data);
    });

    d3.select("ul").selectAll("li");
    d3.json.select("sample-metadata")

    // Use `.html("") to clear any existing metadata
    jQuery('#sample-metadata').html("")
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    forEach()
    Object.keys(metaData).forEach(key => console.log(key));
    var li1 = d3.select("div").append("li");
    li1.text("I can't figure it out!");
    Object.keys(metaData).forEach(key => console.log(key));
    var li1 = d3.select("ul").append("li");
    li1.text("A new item has been added!");
    Object.keys(metaData).forEach(key => console.log(key));
    var li1 = d3.select("ul").append("li");
    li1.text("A new item has been added!");


    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(belly_button_data.csv).then(function(data) {
    console.log(data);
  });
    // @TODO: Build a Bubble Chart using the sample data
  plotly.py
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
