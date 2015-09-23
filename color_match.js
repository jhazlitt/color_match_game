$(document).ready(function() {
	var cardTable = [];

	var matchCount = 0;
	
	function card(number,color) {
		this.number = number;
		this.color = color;
	}

	var colorArray = ["red","red","yellow","yellow","green","green","blue","blue","orange","orange","purple","purple","pink","pink","brown","brown"];

	for (var i = 1; i <= 16; i++) {
		cardTable[i] = new card("" + i + "", chooseColor());
		colorArray.splice(colorArray.indexOf(cardTable[i].color),1);
	}

	function chooseColor() {
		return colorArray[Math.floor(Math.random()*colorArray.length)];
	}

	// Format all card fronts
	for (var i = 1; i<=16; i++) {
		$('#front' + i).css("z-index","2");
	}	

	// Format all card backs
	for (var i = 1; i <= 16; i++) {
		$('#back' + i).css("background-color",cardTable[i].color);
		$('#back' + i).css("z-index","1");
	}

	var clickedCards = [];

	$('#front1').click(function() {
		cardFlip(1);
	});
	$('#front2').click(function() {
		cardFlip(2);
	});
	$('#front3').click(function() {
		cardFlip(3);
	});
	$('#front4').click(function() {
		cardFlip(4);
	});
	$('#front5').click(function() {
		cardFlip(5);
	});
	$('#front6').click(function() {
		cardFlip(6);
	});
	$('#front7').click(function() {
		cardFlip(7);
	});
	$('#front8').click(function() {
		cardFlip(8);
	});
	$('#front9').click(function() {
		cardFlip(9);
	});
	$('#front10').click(function() {
		cardFlip(10);
	});
	$('#front11').click(function() {
		cardFlip(11);
	});
	$('#front12').click(function() {
		cardFlip(12);
	});
	$('#front13').click(function() {
		cardFlip(13);
	});
	$('#front14').click(function() {
		cardFlip(14);
	});
	$('#front15').click(function() {
		cardFlip(15);
	});
	$('#front16').click(function() {
		cardFlip(16);
	});

	function cardFlip(cardNumber) {
		$('#front' + cardNumber).animate({ "width": "0px" }, 500);
		clickedCards.push(cardNumber);
		if (clickedCards.length === 2) {
			if (cardTable[clickedCards[0]].color === cardTable[clickedCards[1]].color){
				matchCount += 1;
				clickedCards = [];
			}
			else {
				hideCards(clickedCards);
			}
		}
	}

	function hideCards(cardNumbers) {
		for (index in cardNumbers) {
			$('#front' + cardNumbers[index] + '').animate({ "width": "150px"}, 500);
		} 
		clickedCards = [];
	}
});
