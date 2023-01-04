/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
    * return the appropriate object here. */
    
    /*
    Inputs:
        searchTerm (str): term to search for within scannedTextObj
        scannedTextObj (array): array of dictionaries of books to search through
    Returns:
        result (dict): contains the search term and relevant books
    */

    // initialize return values
    const rv = [];
    var result = {
        "SearchTerm": searchTerm, 
        "Results": rv
    };

    // check that inputs are valid
    if (scannedTextObj.length == 0) {
        console.log("Empty scanned text object provided.\n",
            "Please try a different scanned text object.");
        return result;
    }
    if (typeof(searchTerm) != "string") {
        console.log("Please provide the search term as a string.");
        return;
    }
    

    // find search term
    for(var i=0; i<scannedTextObj.length; i++) {
        var cont = scannedTextObj[i].Content;
        for(var j=0; j<cont.length; j++){
            if (cont[j].Text.includes(searchTerm)) {
                rv.push({"ISBN": scannedTextObj[i].ISBN,
                        "Page": cont[j].Page,
                        "Line": cont[j].Line
                });
            }
        }
    };

    // notify user that no search results were found
    if (rv.length == 0) {
        console.log("No results found for the following search term and text:\n",
            "Search term:", searchTerm, "\n",
            "Scanned Text:", scannedTextObj);
    }

    return result; 
}



/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// create scannedTextObjs test3in and test3out for test 3
// I put this constant outside of the runAdditionalTests function
// to make the function more readable.
const test3in = [
    {
        "Title": "Book 1",
        "ISBN": "9780000512345",
        "Content": [
            {
                "Page": 2,
                "Line": 4,
                "Text": "this is a sample line of text, & This"
            },
            {
                "Page": 9,
                "Line": 2,
                "Text": "...A long time ago in a galaxy far, far away..."
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "An apple a day keeps the doctor away."
            } 
        ] 
    },
    {
        "Title": "Book 2",
        "ISBN": "9780000512346",
        "Content": [
            {
                "Page": 1,
                "Line": 18,
                "Text": "It was the best of times, it was the worst"
            },
            {
                "Page": 3,
                "Line": 30,
                "Text": "of times, it was the age of wisdom, it was"
            },
            {
                "Page": 6,
                "Line": 20,
                "Text": "the age of foolishness, it was the epoch of"
            },
            {
                "Page": 11,
                "Line": 10,
                "Text": "belief, it was the epoch of incredulity, it"
            }, 
        ] 
    },
    {
        "Title": "Book 3",
        "ISBN": "9780000512347",
        "Content": [
            {
                "Page": 1,
                "Line": 20,
                "Text": "The quick brown fox jumps over the lazy dog."
            }
        ]
    }
]
// Correct output for test 3 when searchTerm = "the"
const test3correct = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000512345",
            "Page": 31,
            "Line": 10
        },
        {
            "ISBN": "9780000512346",
            "Page": 1,
            "Line": 18
        },
        {
            "ISBN": "9780000512346",
            "Page": 3,
            "Line": 30
        },
        {
            "ISBN": "9780000512346",
            "Page": 6,
            "Line": 20
        },
        {
            "ISBN": "9780000512346",
            "Page": 11,
            "Line": 10
        },
        {
            "ISBN": "9780000512347",
            "Page": 1,
            "Line": 20
        }
    ]
};

/* Additional unit tests. */
function runAdditionalTests(runTest3, runTest4, runTest5, runTest6, runTest7, runTest8) {

    /****** TEST 3 ******/

    if (runTest3) {
        // Checks if output is correct and that outside for loop works
        const test3out = findSearchTermInBooks("the", test3in);
        if (JSON.stringify(test3out) == JSON.stringify(test3correct)) {
            console.log("PASS: Test 3, 1/4");
        } else {
            console.log("FAIL: Test 3, 1/4");
            console.log("Expected:", test3correct);
            console.log("Received:", test3out);
        }

        // Checks if input length is correct 
        if (test3out.Results.length == 6) {
            console.log("PASS: Test 3 (len), 2/4");
        } else {
            console.log("FAIL: Test 3 (len), 2/4");
            console.log("Expected:", 6);
            console.log("Received:", test3out.Results.length);
        }

        // Check that we are finding terms correctly
        const test3outSearch1 = findSearchTermInBooks("hello", test3in)
        if (test3outSearch1.Results.length == 0) {
            console.log("PASS: Test 3 Search, 3/4");
        } else {
            console.log("FAIL: Test 3 Search, 3/4");
            console.log("Expected:", 0);
            console.log("Received:", test3outSearch1.Results.length);
        }

        const test3outSearch2 = findSearchTermInBooks("fox", test3in)
        if (test3outSearch2.Results.length == 1) {
            console.log("PASS: Test 3 Search, 4/4");
        } else {
            console.log("FAIL: Test 3 Search, 4/4");
            console.log("Expected:", 1);
            console.log("Received:", test3outSearch2.Results.length);
        }
    }

    /****** TEST 4 ******/
    // Pass empty array as scanned text object

    if (runTest4) {
        const test4in = []
        const test4out = findSearchTermInBooks("the", test4in)

        if (test4out.Results.length == 0) {
            console.log("PASS: Test 4");
        } else {
            console.log("FAIL: Test 4");
            console.log("Expected:", 0);
            console.log("Received:", test4outSearch.Results.length);
        }
    }

    /****** TEST 5 ******/
    // Pass empty strings
    if (runTest5) {
        const test5in = [
                {
                    "Title": "Book 1",
                    "ISBN": "9780000512345",
                    "Content": [
                        {
                            "Page": "",
                            "Line": "",
                            "Text": ""
                        }
                    ]
                }
            ]

        const test5out = findSearchTermInBooks("that", test5in)
        if (test5out.Results.length == 0) {
            console.log("PASS: Test 5");
        } else {
            console.log("FAIL: Test 5");
            console.log("Expected:", 0);
            console.log("Received:", test5out.Results.length);
        }
    }

    /****** TEST 6 *****/
    // Pass non-string object as searchTerm
    if (runTest6) {
        const test6out = findSearchTermInBooks(6, twentyLeaguesIn)
        if (typeof test6out === 'undefined') {
            console.log("PASS: Test 6");
        } else {
            console.log("FAIL: Test 6");
            console.log("Expected:", 'undefined');
            console.log("Received:", test6out);
        }
    }

    /***** TEST 7 *****/
    // Check case
    if (runTest7) {
        const test7outUpper = findSearchTermInBooks("Her", twentyLeaguesIn)
        const test7outLower = findSearchTermInBooks("her", twentyLeaguesIn)
        if (test7outUpper.Results.length == 0 && test7outLower.Results.length==1) {
            console.log("PASS: Test 7, 1/2");
        } else {
            console.log("FAIL: Test 7, 1/2");
            console.log("Expected: 0, 1");
            console.log("Received:", test7outUpper.Results.length, test7outLower.Results.length);
        }

        const test7out2Upper = findSearchTermInBooks("Doctor", test3in)
        const test7out2Lower = findSearchTermInBooks("doctor", test3in)
        if (test7out2Upper.Results.length == 0 && test7out2Lower.Results.length == 1) {
            console.log("PASS: Test 7, 2/2");
        } else {
            console.log("FAIL: Test 7, 2/2");
            console.log("Expected: 0, 1");
            console.log("Received:", test7out2Upper.Results.length, test7out2Lower.Results.length);
        }
    }

    /***** TEST 8 *****/
    // Check symbols, check that there's no double counting
    if (runTest8) {
        const test8out1 = findSearchTermInBooks("...", test3in)
        if (test8out1.Results.length==1) {
            console.log("PASS: Test 8, 1/2");
        } else {
            console.log("FAIL: Test 8, 1/2");
            console.log("Expected:", 1);
            console.log("Received:", test8out1.Results.length);
        }

        const test8out2 = findSearchTermInBooks("'", twentyLeaguesIn)
        if (test8out2.Results.length==1) {
            console.log("PASS: Test 8, 2/2");
        } else {
            console.log("FAIL: Test 8, 2/2");
            console.log("Expected:", 1);
            console.log("Received:", test8out2.Results.length);
        }
    }
}
//                   3      4     5      6      7      8
runAdditionalTests(true, true, true, true,   true,  true)

