var gameData,
	gameDataState=[],
	gameStyle= [ 3, 4, 5 ,12, 13 , 14 , 21 , 22, 23, 
				27, 28, 29, 36, 37 , 38,  45, 46, 47,
				33, 34, 35, 42, 43, 44, 51, 52, 53,
				57, 58, 59, 66, 67, 68, 75, 76, 77 ],
	$box = $('<div id="sudoku"></div>').addClass('box'),
	$keypad = $(".keypad"),
	$activeCell;

$.getJSON( "/game-data", function( data ) {
	gameData = data;
	gameDataState = localStorage.gamestate.split(',')[0] ? localStorage.gamestate.split(',') : gameData.values;
	console.log( localStorage.gamestate.split(',') );
	generateSudoku();	
});

var generateSudoku = function(){
	var $row,
		cell,
		dataLoc,
		$butt;
	for (var rowCount = 0; rowCount < 9; rowCount++) {
		$row = $('<div></div>').addClass('row').data('row', rowCount)
		for (var col = 0; col < 9; col++) {
			dataLoc = rowCount * 9 + col;
			$cell = $('<span></span>').addClass('cell').data({
				'row': rowCount,
				'col': col,
				'value': gameData.values[dataLoc],
				'valueState' : gameDataState[dataLoc],
				'loc' : dataLoc
			})
			.html(  gameDataState[dataLoc] || '.')
			// .html(  dataLoc )
			.addClass( gameData.values[dataLoc] ? 'fix' : 'variable' )
			.addClass( $.inArray( dataLoc , gameStyle ) >=0 ? 'bg' : 'white-bg' );
			$row.append($cell);
		};
		$box.append($row);
	};
	$('body').append($box);

	for (var i = 1; i < 10; i++) {
		$butt = $("<button></button>").data('id', i).html(i);	
		$keypad.append($butt);
	};

	binding($box);
};


