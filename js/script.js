(function($) {

	var poller = new massrel.Poller(
	    {
	        frequency: 15
	    },

	   
	    function(data){
	    	$(".band-list li").remove();
	        var i;
	        var band;
	        	this.bands = [];
	            maxBands = 5;
	            for (i = 0; i < maxBands; i++) {
	                band = data[i];
	                console.log(band.name);
	                console.log(band.count);
	                band.row = $('<li class="band-row"><p class="band-name">'+band.name +'</p><div class="band-score"><span class="band-count">'+band.count+'</span> Mentions</div></li>');
	                $('.band-name', band.row).text(band.name);
	                band.row.appendTo('.band-list');
	                this.bands.push(band);
	                
	            }
            	$(".band-row").last().addClass("band-row-last");

	    }
	);

	poller.start();

}(jQuery));