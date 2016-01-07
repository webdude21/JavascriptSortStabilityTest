var SPECIAL_DUPLICATE_KEY = 1;

function testIfStable(arraySize) {
    var originalArray = generateTestArray(arraySize),
        result,
        isStable = false,
        sortedCopy = originalArray.slice().sort(function (a, b) {
            return a.keyToSortBy - b.keyToSortBy;
        });

    isStable = checkIfStable(originalArray, sortedCopy);
    result = getResultAsString(arraySize, isStable);

    if (typeof document !== 'undefined') {
        appendResultsToHtml(result);
    }

    console.log(result);
}

function getResultAsString(arraySize, isStable){
    return 'array size: ' + arraySize + ' -- sort type: ' + (isStable ? 'Stable' : 'Unstable');
}

function appendResultsToHtml(result) {
    var listWithResults = document.getElementById('results'),
        span = document.createElement('span'),
        listItem = document.createElement('li');
    listItem.appendChild(span)

    span.textContent = result;

    listWithResults.appendChild(listItem)
}

function printArrays(originalArray, sortedCopy) {
    console.log(originalArray);
    console.log("------------");
    console.log(sortedCopy);
}

function checkIfStable(originalArray, sortedCopy) {
    var sortedItem, originalItem;

    for (var i = 0; i < originalArray.length; i++) {
        sortedItem = sortedCopy[i];
        originalItem = originalArray[i];

        if (sortedItem.keyToSortBy === originalItem.keyToSortBy && sortedItem.keyToSortBy === SPECIAL_DUPLICATE_KEY) {
            if (sortedItem.index < originalItem.index) {
                return false;
            }
        }
    }

    return true;
}

function generateTestArray(arraySize) {
    var arrayToTest = [],
        testObject = {};

    for (var i = 0; i < arraySize; i++) {
        testObject = {};
        testObject.keyToSortBy = i % 3 === 0 ? i : SPECIAL_DUPLICATE_KEY;
        testObject.index = i;

        arrayToTest.push(testObject);
    }

    return arrayToTest;
}

testIfStable(10);
testIfStable(15);
