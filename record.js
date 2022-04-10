//record collection
var collection = {
    "1": {
        "album": "slippery when wet",
        "artist": "1",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "little red corevette"
        ]
    },
}
// keep a copy of the collection for tests
// makes a copy of the object
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords (id, prop, value) {
    // if value is blank, delete that property
    if (value === "") {
        delete collection[id][prop]; {
            delete collection[id][prop];
        }
    // if property is tracks add value onto end of array
    } else if (prop === "tracks") {
        // if the track already exists set it to itself
        // OR create it
        collection[id][prop] = collection[id][prop] || [];
        // add value to prop
        collection[id][prop].push(value);
    // if value isnt blank and the prop isnt track
    // add value 
    } else {
        collection[id][prop] = value;
    }

    return collection;
}
// removes artist
console.log(updateRecords("1", "artist", ""));
// adds artist
console.log(updateRecords("1", "artist", "bon who"));
//adds track
console.log(updateRecords("1", "tracks", "blablabla"));
console.log(updateRecords("1", "band", "bandy"));