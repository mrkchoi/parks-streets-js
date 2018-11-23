/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
// 3 parks total
class Park {
    constructor(name, buildYear, numTrees, parkArea) {
        this.name = name;
        this.buildYear = buildYear;
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        let treeDensity = parseFloat(this.numTrees / this.parkArea).toFixed(2);
        // console.log(`${this.name} has a tree density of ${treeDensity} trees per square km`);
        return treeDensity;
    }
    parkAge() {
        let age = new Date().getFullYear() - this.buildYear;
        return age;
    }
}

// 4 streets total
class Street {
    constructor(name, buildYear, length) {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
    }

    size() {
        let size;
        if(this.length > 10) {
            size = 'huge';
        } else if(this.length > 7.5) {
            size = 'big';
        } else if(this.length > 5) {
            size = 'normal';
        } else if(this.length > 2.5) {
            size = 'small';
        } else if(this.length > 1){
            size = 'tiny';
        }
        return size;
    }
}

// Parks
let greenPark = new Park('Green Park', 1991, 173, 2.7);
let natPark = new Park('National Park', 1967, 3351, 6.8);
let oakPark = new Park('Oak Park', 2007, 496, 1.4);

// Streets
let oceanAve = new Street('Ocean Avenue', 1999, 7.8);
let evergreenStreet = new Street('Evergreen Street', 2008, 2.6);
let fourthStreet = new Street('4th Street', 2015, 5.3);
let sunsetBlvd = new Street('Sunset Boulevard', 1982, 12.2);

// Data
let totalParks = [greenPark, natPark, oakPark];
let totalStreets = [oceanAve, evergreenStreet, fourthStreet, sunsetBlvd];

// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
let parkAvgAge = function() {
    let totalYears = 0;

    for(let park of totalParks) {
        totalYears += park.parkAge();
    }
    // console.log(totalYears);
    
    // Divide parkArea by # of parks
    let avgAge = parseFloat(totalYears / (totalParks.length)).toFixed(2);
    
    // return the output
    return avgAge;
}

// 3. The name of the park that has more than 1000 trees
let maxTrees = function() {
    // Iterate through parks and check the number of trees
    for(let park of totalParks) {
        // If number of trees is > 1000, return the name of the park
        if(park.numTrees > 1000) {
            return park.name;
        }
    }
}

// 4. Total and average length of the town's streets
let streetLength = function() {
    let lengthTotal = 0;
    let avgLength;

    for(let street of totalStreets) {
        lengthTotal += street.length;
    }

    avgLength = lengthTotal / totalStreets.length;
    
    return [lengthTotal, avgLength];
}

let displayData = function () {
    // PARKS - Report header
    console.log('----PARKS REPORT----');
    // PARKS - Avg age
    console.log(`Our ${totalParks.length} parks have an average age of ${parkAvgAge()} years.`);
    // PARKS - Tree density report
    for(let park of totalParks) {
        console.log(`${park.name} has a tree density of ${park.treeDensity()} tress per square km`);
    }
    // PARKS - Highest tree density
    console.log(`${maxTrees()} has more than 1000 trees.`);

    // STREETS - Report header
    console.log('----STREETS REPORT----');
    // STREETS - Total & Avg lengths
    console.log(`Our ${totalStreets.length} streets have a total length of ${streetLength()[0]} km, with an average of ${streetLength()[1]} km.`);
    // STREET - Size classifications
    for(let street of totalStreets) {
        console.log(`${street.name}, built in ${street.buildYear}, is a ${street.size()} street`);
    }


};
displayData();