# Belly-Button-Biodiversity
Build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

## Getting Started
1. Create a new repository and title it as you please. I have given mine the title, Belly-Button-Biodiversity.

1. Clone the new repository to your computer.

1. Inside your local git repository, create a directory for the Belly-Button-Biodiversity.

1. Create an Index.Html file, a data folder which contains the samples.json dataset and then a static\js folder which will hold the app.js file.

1. Push the above changes to GitHub.

## Summary
The objective of this project was to create 4 visual representations of the Belly Button Biodiversity dataset. The visuals would be populated by the dataset and everytime a new Test Subject Id No. was choosen (via dropdown selection) the visuals would change and be populated by the data associated with the specified Id No.

1. Using the D3 library, the first visual to create would be a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. The horizontal bar chart was built using the following values:
    *sample_values as the values for the bar chart
    * otu_ids as the labels for the bar chart
    *otu_labels as the hovertext for the chart