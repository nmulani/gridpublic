/* Using Datamaps framework for a map of legality for self-driving cars */


/*d3.json("/lawmap/gridincidents.geojson", function(error, json) {
  var conversion = d3.scale.linear().domain([800000, 1000000]).range([3,14]);
  var data;
  if (error) return console.warn(error);
  data = json;
  data.features.forEach(function(point){
  	point.radius = conversion(parseFloat(point.properties.number_of_customers_affected.replace(',','')));
  	point.latitude = point.properties.latitude;
  	point.longitude = point.properties.longitude;
  	point.size = point.properties.number_of_customers_affected;
  	point.respondent = point.properties.respondent;
  });*/



var lawmap = new Datamap({
		// Define layout attributes
        element: document.getElementById('lawmap'),
        scope: 'usa',
        height: 275,
        width: 400,
        geographyConfig: {
       		dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        	hideAntarctica: true,
        	borderWidth: 2,
        	borderColor: '#FFF',
        	popupTemplate: function(geography, data) { //this function should just return a string
        	// Custom styling for pop-up
          	return "<div class='hoverinfo' style='background:#f9f5dc;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;font-family: 'Computer Modern';'><strong>" + geography.properties.name + "</strong><br></br><strong>NERC Region" + ' : ' + data.fillKey +'</strong></div>';
        },
        popupOnHover: true,
        highlightOnHover: true,
        highlightFillColor: '#EC008C',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2
    	},
    	
    	// Color scheme
		fills: {
  			'WSCC': '#8dd3c7',
 			'ERCOT': '#ffffb3',
 			'MAAP': '#fb8072',
 			'SPP': '#bebada',
 			'SERC': '#fccde5',
 			'MAIN': '#80b1d3',
 			'ECAR': '#fdb462',
 			'NPCC': '#d9d9d9',
 			'MAAC': '#b3de69',
 			'Other': '#FFF',
		},
		
		
		// The data
		data:{
  "AZ": {
      "fillKey": "WSCC"
     },
  "CO": {
      "fillKey": "WSCC"  },
  "DE": {
  	  "fillKey": "MAAC"
      
  },
  "FL": {
  	  "fillKey": "SERC"
  },
  "GA": {
  	  "fillKey": "SERC"
  },
  "HI": {
      "fillKey": "Other"
  },
  "ID": {
      "fillKey": "WSCC"
  },
  "IL": {
  	  "fillKey": "MAIN"
  },
  "IN": {
  	  "fillKey": "ECAR",
      
  },
  "IA": {
  	  "fillKey": "MAAP"
      
  },
  "KS": {
  	    	  "fillKey": "SPP"
      
  },
  "KY": {
  	    	  "fillKey": "ECAR"
      
  },
  "LA": {
        	  "fillKey": "SPP"
  },
  "MD": {
        	  "fillKey": "ECAR"
  },
  "ME": {
  	    	  "fillKey": "NPCC"
      
  },
  "MA": {
  	    	  "fillKey": "NPCC"
      
  },
  "MN": {
        	  "fillKey": "MAAP"
  },
  "MI": {
        	  "fillKey": "ECAR"
  },
  "MS": {
  	    	  "fillKey": "SERC"
      
  },
  "MO": {
        	  "fillKey": "SPP"
  },
  "MT": {
      "fillKey": "WSCC"
      
  },
  "NC": {
  	    	  "fillKey": "SERC"
      
  },
  "NE": {
  	    	  "fillKey": "MAAP"
      
  },
  "NV": {
      "fillKey": "WSCC"
  },
  "NH": {
      "fillKey": "NPCC"      
  },
  "NJ": {
        	  "fillKey": "MAAC"
  },
  "NY": {
        	  "fillKey": "NPCC"
  },
  "ND": {
        	  "fillKey": "MAAP"
  },
  "NM": {
      "fillKey": "WSCC",
      
  },
  "OH": {
  	    	  "fillKey": "ECAR"
      
  },
  "OK": {
        	  "fillKey": "SPP"
  },
  "OR": {
      "fillKey": "WSCC"
  },
  "PA": {
  	    	  "fillKey": "MAAC"
      
  },
  "RI": {
  	    	  "fillKey": "NPCC"
      
  },
  "SC": {
  	    	  "fillKey": "SERC"
      
  },
  "SD": {
  	    	  "fillKey": "MAAP"
      
  },
  "TN": {
        	  "fillKey": "SERC"
  },
  "TX": {
  	    	  "fillKey": "ERCOT"
  },
  "UT": {
        	  "fillKey": "WSCC"
  },
  "WI": {
  	    	  "fillKey": "MAIN"
  },
  "VA": {
  	    	  "fillKey": "SERC"
  },
  "VT": {
  	    	  "fillKey": "NPCC"
  },
  "WA": {
      "fillKey": "WSCC"
  },
  "WV": {
  	    	  "fillKey": "ECAR"
  },
  "WY": {
      "fillKey": "WSCC"
  },
  "CA": {
      "fillKey": "WSCC"
  },
  "CT": {
        	  "fillKey": "NPCC"
  },
  "AL": {
  	    	  "fillKey": "SERC"
  },
  "AR": {
  	    	  "fillKey": "SPP"
  },
  "AK": {
  	    	  "fillKey": "Other"
  }
  
}
});
// Let's run
//lawmap.labels({fontFamily: 'Computer Modern'});
