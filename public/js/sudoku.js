var binding = function($box){
	var $cell = $('.cell'),
		$button = $('.keypad button'),
		no;
		$activeCell = $cell.eq(0).addClass('active');
	$cell.click(function(){
		if (! ($(this).data('value')) ) {
			$cell.removeClass('active');
			$activeCell = $(this);
			$(this).addClass('active');
		};
	});

	$button.click(function(){
			no = $(this).data('id');
		if (validEntry( no ) ) {
			$activeCell.html( no ).data('valueState' , no ) ;
			console.log($activeCell.data());
			gameDataState[$activeCell.data('loc')] = no; 
		}else{
			alert('invalid entry');
		};			
	});

	$('#reset').click(function(){
		localStorage.setItem("gamestate", '' );
		location.reload();
	});
	$('#save').click(function(){
	
		localStorage.setItem("gamestate", gameDataState );
	});
};

var validEntry= function(no){
	var valid = true,
		rowValid,
		colValid;
	console.log( "putting the vaue "+ no +" in " + $activeCell.data('loc') );

	var sudu = 	[ 
					[0, 1, 2, 9, 10, 11, 18, 19, 20  ],
					[3, 4, 5 ,12, 13 , 14 , 21 , 22, 23], 
					[6, 7, 8, 15, 16, 17, 24, 25, 26 ],
					[27, 28, 29, 36, 37 , 38,  45, 46, 47],
					[30, 31, 32, 39, 40 ,41, 48 , 49, 50 ],
					[33, 34, 35, 42, 43, 44, 51, 52, 53],
					[54,55,56,63,64,65,72,73,74],
					[57, 58, 59, 66, 67, 68, 75, 76, 77 ],
					[60,61,62,69,70,71,78,79,80 ]
				];
	for (var i = 0; i < sudu.length; i++) {
		if ($.inArray( $activeCell.data('loc') , sudu[i] )>=0) {
			for (var el = 0; el < sudu[i].length; el++) {
				if ( gameDataState[ sudu[i][el] ] == no ) {
					valid = false ;
					break;
				};
					console.log(sudu[i][el]);
			};
		}; 
	};

	colValid = $activeCell.data('loc') % 9;
	for (; colValid < 81; colValid+=9) {
		if ( gameDataState[ colValid ] == no ) {
			valid = false ;
			break;
		};
	};

	rowValid = $activeCell.data('loc') / 9;
	console.log("row " +rowValid)
	for (; rowValid < 9; rowValid++) {
		if ( gameDataState[ rowValid ] == no ) {
			valid = false ;
			break;
		};
	};

	return valid;
};
