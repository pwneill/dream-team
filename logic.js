console.log("Answers Saved")
$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    // var matchStatus = $('.modal-title');
    // var modalBody = $('.modal-body');
    // set responses to local variables
    var genLoc = parseInt($('#q1').val());
    var beerType = parseInt($('#q2').val());
    var abv = parseInt($('#q3').val());
    var ibu = parseInt($('#q4').val());
    // var ibu = parseInt($('#q5').val());
    // var partOfTown = parseInt($('#q6').val());

    var beerArr = [];
    var randomBeer;

    var answer = {
        genLoc,
        beerType,
        abv,
        ibu
    }


    //Think of this as matching the user to a beer and then telling them that this is the brewery that it is at, etc... Ask questions about how hoppy they like the beer and how how alcoholic they like the beer, etc...
    console.log(answer);

    //What type of beer/cider do you want to drink --- choose preferred alcohol
    if (beerCider === 1) {
        beerChooser();
    } else {
        var breweryCiders = ciders
        var ciderArr = [];
        console.log(breweryCiders);

        for (var i = 0; i < breweryCiders.length; i++) {
            ciderArr.push(breweryCiders[i]);
        };
        var randomCider = ciderArr[Math.floor(Math.random() * ciderArr.length)];
        console.log(randomCider);
    }

    function beerChooser() {
        if (beerType === 2) {
            //Return Kolsch Style Beer Type for randomBrewery
            abv();
            ibu();
            match(abvArr, ibuArr);

            var breweryBeers = matches //from match function

            console.log(breweryBeers);

            for (var i = 0; i < breweryBeers.length; i++) {
                if (breweryBeers[i].beerType === "Kolsch") {
                    beerArr.push(breweryBeers[i]);
                }
            };


            randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
            console.log(randomBeer);

        } else if (beerType === 3) {
            //Return IPA Style Beer Type for randomBrewery
            abv();
            ibu();
            match(abvArr, ibuArr);

            var breweryBeers = matches //from match function

            console.log(breweryBeers);

            for (var i = 0; i < breweryBeers.length; i++) {
                if (breweryBeers[i].beerType === "IPA") {
                    beerArr.push(breweryBeers[i]);
                }
            };


            randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
            console.log(randomBeer);

        } else if (beerType === 4) {
            //Return Stout Style Beer Type for randomBrewery

            abv();
            ibu();
            match(abvArr, ibuArr);

            var breweryBeers = matches //from match function

            console.log(breweryBeers);

            for (var i = 0; i < breweryBeers.length; i++) {
                if (breweryBeers[i].beerType === "Stout") {
                    beerArr.push(breweryBeers[i]);
                }
            };


            randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
            console.log(randomBeer);

        } else if (beerType === 5) {
            //Return Brown Ale Style Beer Type for randomBrewery

            abv();
            ibu();
            match(abvArr, ibuArr);

            var breweryBeers = matches //from match function

            console.log(breweryBeers);

            for (var i = 0; i < breweryBeers.length; i++) {
                if (breweryBeers[i].beerType === "Brown Ale") {
                    beerArr.push(breweryBeers[i]);
                }
            };


            randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
            console.log(randomBeer);

        } else if (beerType === 6) {
            //Return Lager Style Beer Type for randomBrewery

            abv();
            ibu();
            match(abvArr, ibuArr);

            var breweryBeers = matches //from match function

            console.log(breweryBeers);

            for (var i = 0; i < breweryBeers.length; i++) {
                if (breweryBeers[i].beerType === "Lager") {
                    beerArr.push(breweryBeers[i]);
                }
            };


            randomBeer = beerArr[Math.floor(Math.random() * beerArr.length)];
            console.log(randomBeer);

        }
    }

    function abv() {
        var abvArr = [];
        if (abv === 1) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].abv === 1) {
                    abvArr.push(beerArr[i])
                }
            }
            console.log(abvArr);
            return abvArr;
        } else if (abv === 2) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].abv === 2) {
                    abvArr.push(beerArr[i])
                }
            }
            console.log(abvArr);
            return abvArr;

        } else if (abv === 3) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].abv === 3) {
                    abvArr.push(beerArr[i])
                }
            }
            console.log(abvArr);
            return abvArr;

        } else if (abv === 4) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].abv === 4) {
                    abvArr.push(beerArr[i])
                }
            }
            console.log(abvArr);
            return abvArr;

        } else if (abv === 5) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].abv === 5) {
                    abvArr.push(beerArr[i])
                }
            }
            console.log(abvArr);
            return abvArr;

        }
    }

    function ibu() {
        var ibuArr = [];
        if (ibu === 1) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].ibu === 1) {
                    ibuArr.push(beerArr[i])
                }
            }
            console.log(ibuArr);
            return ibuArr;

        } else if (ibu === 2) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].ibu === 2) {
                    ibuArr.push(beerArr[i])
                }
            }
            console.log(ibuArr);
            return ibuArr;

        } else if (ibu === 3) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].ibu === 3) {
                    ibuArr.push(beerArr[i])
                }
            }
            console.log(ibuArr);
            return ibuArr;

        } else if (abv === 4) {
            for (var i = 0; i < beerArr.length; i++) {
                if (beerArr[i].ibu === 1 || 2 || 3) {
                    ibuArr.push(beerArr[i])
                }
            }
            console.log(ibuArr);
            return ibuArr;
        }
    }

    function match(a, b) {
        var matches = [];

        for (var i = 0; i < a.length; i++) {
            for (var i = 0; i < b.length; i++) {
                if (a[i] === b[i]) {
                    matches.push(a[i]);
                }
            }
        }
        return matches;
    }

    function subtract(a, b) {
        return a - b;
    }

    function difference(a, b) {
        var count = abs(a.reduce(subtract) - b.reduce(subtract));
        console.log(count);
        return count;
    }

    //difference(ibuArr, abvArr)

    //Instead of a match logic, create array difference logic. What is the difference between array a and array b - that difference would open the door for us to use the friend finder logic.

    //Create logic for "if the user doesn't match with a beer, here is a beer that everyone likes."

});
