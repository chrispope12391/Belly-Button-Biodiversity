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

#### Horizontal Bar Char
Using the D3 library, the first visual to create would be a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. The horizontal bar chart was built using the following values:

* sample_values as the values for the bar chart
* otu_ids as the labels for the bar chart
* otu_labels as the hovertext for the chart

Once populated the bar chart would look as follows:

![hw01](https://user-images.githubusercontent.com/75814760/115807425-3728f480-a3ae-11eb-934e-140e705d4ee7.png)

#### Bubble Chart
The next visual would be a bubble chart which displays each sample with each bubble ranging in color and size. The bubble chart was built using the following values:

* otu_ids for the x values as well as the marker colors
* sample_values for the y values as well as the marker size
* Use otu_labels for the text values

Once populated the bubble chart would look as follows:

<img width="1416" alt="bubble_chart" src="https://user-images.githubusercontent.com/75814760/115807713-c33b1c00-a3ae-11eb-9c31-7f59f68954fe.png">

#### Demographic Display
The next visual would be a demographic info section which displays the individual's information associated with the selected Id No. Each Id No. would show:

* Id Number
* Ethinicity
* Gender
* Age
* Location
* Belly Button Type
* Wash Frequency

Once populated the demographic section would look as follows:

![hw03](https://user-images.githubusercontent.com/75814760/115808211-afdc8080-a3af-11eb-87d2-68eaa5003dbc.png)

#### Gauge Chart
The final visual would be a gauge chart that plots the weekly washing frequency of the individual. The gauge chart would be populated using the Wash Frequency value. Once populated the gauge chart would look similarly to this:

<img width="384" alt="gauge" src="https://user-images.githubusercontent.com/75814760/115808584-56288600-a3b0-11eb-9814-09f244b9d332.png">

## Dataset

* [samples.json](https://github.com/chrispope12391/Belly-Button-Biodiversity/blob/main/data/samples.json)