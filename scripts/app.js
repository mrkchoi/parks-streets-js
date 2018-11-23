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


*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

// 3 parks total
class Park extends Element {
    constructor(name, buildYear, numTrees, parkArea) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        let treeDensity = parseFloat(this.numTrees / this.parkArea).toFixed(2);
        console.log(`${this.name} has a tree density of ${treeDensity} trees per square km`);
    }
    parkAge() {
        let age = new Date().getFullYear() - this.buildYear;
        return age;
    }
}

// 4 streets total
class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
    }
}

// Parks
let allParks = [new Park('Green Park', 1991, 173, 2.7),
                new Park('National Park', 1967, 3351, 6.8),
                new Park('Oak Park', 2007, 496, 1.4)];

// Streets
let allStreets = [  new Street('Ocean Avenue', 1999, 7.8, 4),
                    new Street('Evergreen Street', 2008, 2.6, 2), 
                    new Street('4th Street', 2015, 5.3),
                    new Street('Sunset Boulevard', 1982, 12.2, 5)];


// Calc function
function calc(arr) {
    const sum = arr.reduce((acc, cur, index) => {
        return acc + cur;
    }, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    // PARKS - Report header
    console.log('----PARKS REPORT----');

    // Run tree density report
    p.forEach(el => el.treeDensity());

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    // console.log(ages);

    const [totalYears, AvgAge] = calc(ages);
    console.log(`Our ${ages.length} parks have an average of ${AvgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => {
        return el.numTrees;
    }).findIndex(el => el > 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {
    // STREETS - Report header
    console.log('----STREET REPORT----');

    // Total and average length of town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());
}
    
reportParks(allParks);
reportStreets(allStreets);