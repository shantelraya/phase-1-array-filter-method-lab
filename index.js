// Code your solution here
function findMatching(array, string) {
    const names = array.filter(name => name.toLowerCase() === string.toLowerCase());

    return names;
}
function fuzzyMatch(driver, testName) {
    return driver.filter(
        (match) => 
        match.toLowerCase().indexOf(testName.toLowerCase()) === 0
    );
}
function matchName(driver, string) {
    const match = driver.filter(details => details.name === string);

    return match;
}

console.log(matchName(drivers, "Shantel"));