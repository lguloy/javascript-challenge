// from data.js
var tableData = data;

// YOUR CODE HERE!

//Select the reference of where we are putting the table
//in our case, it is "tbody" tag. This is is where the table is being added
var tbody = d3.select("tbody")

//This forEach function is going to loop through each index in the data array and perform a function
data.forEach(function(datum) {

    // We are appending a new row for each object in the data
    var row = tbody.append("tr")

    Object.entries(datum).forEach(function([key,value]) {
        console.log(key,value)
        //Now we append a new cell for each key-value pair
        var cell = row.append("td")
        cell.text(value)
    })
})

//Code for the search function

//Select the form and filter
var search = d3.select("form")
var filter = d3.select("#filter-btn")

//Event Handlers
search.on("submit", runEnter)
filter.on("click", runEnter)
//Function for the event
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Remove all tbody tr elements in tbody
    d3.select("tbody").selectAll(`tr`).remove();

    //Use d3 to select the input element and the value of the input element
    var input = d3.select("#datetime").property("value");
    console.log(input)

    // Rebuild table with matching dates from the input
    data.forEach(function(datum) {

        if (input === datum.datetime)
        // We are appending a new row for each object in the data
            var row = tbody.append("tr")
    
            Object.entries(datum).forEach(function([key,value]) {
                console.log(key,value)
                //Now we append a new cell for each key-value pair
                var cell = row.append("td")
                cell.text(value)
            })
    })
 
}
