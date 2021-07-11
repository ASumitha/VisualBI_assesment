var inputData = {
  "dimensions": [{
    "id": "dimension_re",
    "values": ["East", "East", "West", "West", "South"]
  }, {
    "id": "dimension_cnt",
    "values": ["London", "Italy", "Germany", "Germany", "Russia"]
  },{
    "id": "measure_sales",
    "values": [100, 156, 432, 462, 25]
  }, {
    "id": "measure_qty",
    "values": [85, 34, 153, 434, 52]
  }, {
    "id": "measure_profit",
    "values": [123, 45, 421, 465, 451]
  }],
  "metadata": [{
    "id": "dimension_re",
    "label": "Region"
  }, {
    "id": "dimension_cnt",
    "label": "County"
  }, {
    "id": "measure_sales",
    "label": "Sales"
  }, {
    "id": "measure_qty",
    "label": "Quantity"
  }, {
    "id": "measure_profit",
    "label": "Profit"
  }]
}


var tempOP = []; // temp array to store the iterated value
var expectedData = []; // actual output
 for(let i in inputData.dimensions) {
     tempOP = []
      for(let j in inputData.metadata) {
       tempOP[inputData.metadata[j].label] = inputData.dimensions[j].values[i]; // the labels are added based on the metada and values are assigned corresponding to it
      }
expectedData[i]= tempOP
 }
console.log(expectedData)

