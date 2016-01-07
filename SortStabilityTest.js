var specialDuplicateKey = 1;

function testIfStable(arraySize) {
    var originalArray = generateTestArray(arraySize),
        isStable = false,
        sortedCopy = originalArray.slice().sort(function (a, b) {
            a.keyToSortBy - b.keyToSortBy
        });

    isStable = checkIfStable(originalArray, sortedCopy);
    appendResultsToHtml(arraySize, isStable)
}

function appendResultsToHtml(arraySize, result) {
    var listWithResults = document.getElementById('results'),
        elementToappend = document.createElement('li');
    elementToappend.textContent = 'array size: ' + arraySize + ' -- sort type: ' + (result ? 'Stable' : 'Unstable');

    listWithResults.appendChild(elementToappend)
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

        if (sortedItem.keyToSortBy === originalItem.keyToSortBy && sortedItem.keyToSortBy === specialDuplicateKey) {
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
        testObject.keyToSortBy = i % 3 === 0 ? i : specialDuplicateKey;
        testObject.index = i;

        arrayToTest.push(testObject);
    }

    return arrayToTest;
}

testIfStable(10);
testIfStable(1000);
