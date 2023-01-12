function my_Dictionary() {
    var family = {  // Names my dictionary 'family'
        Mom: "Omalley",
        Dad: "Solomon",
        Son1: "Logan",
        Son2: "Caiden",
        Dog: "Luna"
    };
    delete family.Dog;  // Deletes dog from the dictionary
    document.getElementById("Dictionary").innerHTML =  family.Dog; // Will return 'undefined' because dog is missing
}