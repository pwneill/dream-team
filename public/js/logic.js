
$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("Answers Saved")

    // var matchStatus = $('.modal-title');
    // var modalBody = $('.modal-body');
    // set responses to local variables
    var genLoc = parseInt($('#q1').val());
    var beerType = parseInt($('#q2').val());
    var abv = parseInt($('#q3').val());
    var ibu = parseInt($('#q4').val());
    // var ibu = parseInt($('#q5').val());
    // var partOfTown = parseInt($('#q6').val());


    var answer = {
        genLoc: genLoc,
        beerType: beerType,
        abv: abv,
        ibu: ibu
    }

    console.log(answer);

    var currentURL = window.location.origin;

    $.post(currentURL + "/api/beers", answer, function(res){
        console.log(res);
        }
    );


    // //if survey is filled out, continue...
    // if (answer.genLoc !== null && answer.beerType !== null && answer.abvIbu[0] !== null && answer.abvIbu[1] !== null){
    //     beerChooser();
    // } else {
    //     console.log("Error, need to fill out survey entirely.")
    // }

    // function beerChooser() {
    //     if (beerType === 1) {
    //         abv();
    //         ibu();

    //         // abvIbu.push(abvArr);
    //         // abvIbu.push(ibuArr);

    //         $.post(currentURL + "/api/beerAnswers", answer, function(res){
    //             console.log(res);
    //             }
    //         );
    //         // var breweryBeers = matches //from match function
    
    //         // console.log(breweryBeers);
    
    //         // for (var i = 0; i < breweryBeers.length; i++) {
    //         //     if (breweryBeers[i].beerType === "Cider") {
    //         //         beerArr.push(breweryBeers[i]);
    //         //     }
    //         // }
    //     } else if (beerType === 2) {
    //         //Return Kolsch Style Beer Type for randomBrewery
    //         abv();
    //         ibu();

    //         var breweryBeers = matches //from match function

    //         console.log(breweryBeers);

    //         for (var i = 0; i < breweryBeers.length; i++) {
    //             if (breweryBeers[i].beerType === "Kolsch") {
    //                 beerArr.push(breweryBeers[i]);
    //             }
    //         };


    //         randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
    //         console.log(randomBeer);

    //     } else if (beerType === 3) {
    //         //Return IPA Style Beer Type for randomBrewery
    //         abv();
    //         ibu();

    //         var breweryBeers = matches //from match function

    //         console.log(breweryBeers);

    //         for (var i = 0; i < breweryBeers.length; i++) {
    //             if (breweryBeers[i].beerType === "IPA") {
    //                 beerArr.push(breweryBeers[i]);
    //             }
    //         };


    //         randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
    //         console.log(randomBeer);

    //     } else if (beerType === 4) {
    //         //Return Stout Style Beer Type for randomBrewery

    //         abv();
    //         ibu();

    //         var breweryBeers = matches //from match function

    //         console.log(breweryBeers);

    //         for (var i = 0; i < breweryBeers.length; i++) {
    //             if (breweryBeers[i].beerType === "Stout") {
    //                 beerArr.push(breweryBeers[i]);
    //             }
    //         };


    //         randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
    //         console.log(randomBeer);

    //     } else if (beerType === 5) {
    //         //Return Brown Ale Style Beer Type for randomBrewery

    //         abv();
    //         ibu();

    //         var breweryBeers = matches //from match function

    //         console.log(breweryBeers);

    //         for (var i = 0; i < breweryBeers.length; i++) {
    //             if (breweryBeers[i].beerType === "Brown Ale") {
    //                 beerArr.push(breweryBeers[i]);
    //             }
    //         };


    //         randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
    //         console.log(randomBeer);

    //     } else if (beerType === 6) {
    //         //Return Lager Style Beer Type for randomBrewery

    //         abv();
    //         ibu();

    //         var breweryBeers = matches //from match function

    //         console.log(breweryBeers);

    //         for (var i = 0; i < breweryBeers.length; i++) {
    //             if (breweryBeers[i].beerType === "Lager") {
    //                 beerArr.push(breweryBeers[i]);
    //             }
    //         };


    //         randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
    //         console.log(randomBeer);

    //     }
    // }

    // function abv() {
    //     if (abv === 1) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].abv === 1) {
    //                 abvArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(abvArr);
    //         return abvArr;
    //     } else if (abv === 2) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].abv === 2) {
    //                 abvArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(abvArr);
    //         return abvArr;

    //     } else if (abv === 3) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].abv === 3) {
    //                 abvArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(abvArr);
    //         return abvArr;

    //     } else if (abv === 4) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].abv === 4) {
    //                 abvArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(abvArr);
    //         return abvArr;

    //     } else if (abv === 5) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].abv === 5) {
    //                 abvArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(abvArr);
    //         return abvArr;

    //     }
    // }

    // function ibu() {
    //     if (ibu === 1) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].ibu === 1) {
    //                 ibuArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(ibuArr);
    //         return ibuArr;

    //     } else if (ibu === 2) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].ibu === 2) {
    //                 ibuArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(ibuArr);
    //         return ibuArr;

    //     } else if (ibu === 3) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].ibu === 3) {
    //                 ibuArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(ibuArr);
    //         return ibuArr;

    //     } else if (abv === 4) {
    //         for (var i = 0; i < beerArr.length; i++) {
    //             if (beerArr[i].ibu === 1 || 2 || 3) {
    //                 ibuArr.push(beerArr[i])
    //             }
    //         }
    //         console.log(ibuArr);
    //         return ibuArr;
    //     }
    // }

    //Difference is a function that finds the difference between the abvArr.length and the ibuArr.length. 
    //Finding the difference in length will produce a number. That number could correspond to beers...

    // function difference(a, b) {
    //     var count = abs(a.length - b.length);
    //     console.log(count);
    //     return count;
    // }

    //difference2(ibuArr, abvArr)

    // *match err catch*

    // function match(a, b) {
    //     var matches = [];

    //     for (var i = 0; i < a.length; i++) {
    //         for (var i = 0; i < b.length; i++) {
    //             if (a[i] === b[i]) {
    //                 matches.push(a[i]);
    //             }
    //         }
    //     }
    //     return matches;
    // }


    
    //Below code is thinking/writing things out.
    // function subtract(a, b) {
    //     return a - b;
    // }

    // function difference(a, b) {
    //     var count = abs(a.reduce(subtract) - b.reduce(subtract));
    //     console.log(count);
    //     return count;
    // }

    //or

 

    //Instead of a match logic, create array difference logic. What is the difference between array a and array b - that difference would open the door for us to use the friend finder logic.

    //Create logic for "if the user doesn't match with a beer, here is a beer that everyone likes."

});
