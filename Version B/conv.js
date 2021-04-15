/* Lenght Converter */
var feet = parseFloat(0);
var meters = parseFloat(0);
var inches = parseFloat(0);
var cm = parseFloat(0);
var yards = parseFloat(0);
var kilometers = parseFloat(0);
var miles = parseFloat(0);

function FeetCoverter(val) {
    meters = val / 3.2808;
    inches = val * 12;
    cm = val / 0.032808;
    yards = val * 0.33333;
    kilometers = val / 3280.8;
    miles = val * 0.0018939;
    document.getElementById("meters").value = meters.toFixed(2);
    document.getElementById("inches").value = inches.toFixed(2);
    document.getElementById("cm").value = cm.toFixed(2);
    document.getElementById("yards").value = yards.toFixed(2);
    document.getElementById("kilometers").value = kilometers.toFixed(2);
    document.getElementById("miles").value = miles.toFixed(2);
}

function MetersConverter(val) {
    feet = val * 3.2808;
    inches = val * 39.370;
    cm = val / 0.01;
    yards = val * 1.0936;
    kilometers = val / 1000;
    miles = val * 0.00062137;
    document.getElementById("feet").value = feet.toFixed(2);
    document.getElementById("inches").value = inches.toFixed(2);
    document.getElementById("cm").value = cm.toFixed(2);
    document.getElementById("yards").value = yards.toFixed(2);
    document.getElementById("kilometers").value = kilometers.toFixed(2);
    document.getElementById("miles").value = miles.toFixed(2);
}

function InchesConverter(val) {
    feet = val * 0.083333;
    meters = val / 39.370;
    cm = val / 0.39370;
    yards = val * 0.027778;
    kilometers = val / 39370;
    miles = val * 0.000015783;
    document.getElementById("feet").value = feet.toFixed(2);
    document.getElementById("meters").value = meters.toFixed(2);
    document.getElementById("cm").value = cm.toFixed(2);
    document.getElementById("yards").value = yards.toFixed(2);
    document.getElementById("kilometers").value = kilometers.toFixed(2);
    document.getElementById("miles").value = miles.toFixed(2);
}

function CmConverter(val) {
    feet = val * 0.32808;
    meters = val / 100;
    inches = val * 0.39370;
    yards = val * 0.010936;
    kilometers = val / 100000;
    miles = val * 0.0000062137;
    document.getElementById("feet").value = feet.toFixed(2);
    document.getElementById("meters").value = meters.toFixed(2);
    document.getElementById("inches").value = inches.toFixed(2);
    document.getElementById("yards").value = yards.toFixed(2);
    document.getElementById("kilometers").value = kilometers.toFixed(2);
    document.getElementById("miles").value = miles.toFixed(2);
}

function YardsConverter(val) {
    feet = val * 3;
    meters = val / 1.0936;
    inches = val * 36;
    cm = val / 0.010936;
    kilometers = val / 1093.6;
    miles = val * 0.00056818;
    document.getElementById("feet").value = feet.toFixed(2);
    document.getElementById("meters").value = meters.toFixed(2);
    document.getElementById("inches").value = inches.toFixed(2);
    document.getElementById("cm").value = cm.toFixed(2);
    document.getElementById("kilometers").value = kilometers.toFixed(2);
    document.getElementById("miles").value = miles.toFixed(2);
}

function KilometersConverter(val) {
    feet = val * 3280.8;
    meters = val * 1000;
    inches = val * 39370;
    cm = val * 100000;
    yards = val * 1093.6;
    miles = val * 0.62137;
    document.getElementById("feet").value = feet.toFixed(2);
    document.getElementById("meters").value = meters.toFixed(2);
    document.getElementById("inches").value = inches.toFixed(2);
    document.getElementById("cm").value = cm.toFixed(2);
    document.getElementById("yards").value = yards.toFixed(2);
    document.getElementById("miles").value = miles.toFixed(2);
}

function MilesConverter(val) {
    feet = val * 5280;
    meters = val / 0.00062137;
    inches = val * 63360;
    cm = val / 0.0000062137;
    yards = val * 1760;
    kilometers = val / 0.62137;
    document.getElementById("feet").value = feet.toFixed(2);
    document.getElementById("meters").value = meters.toFixed(2);
    document.getElementById("inches").value = inches.toFixed(2);
    document.getElementById("cm").value = cm.toFixed(2);
    document.getElementById("yards").value = yards.toFixed(2);
    document.getElementById("kilometers").value = kilometers.toFixed(2);
}

/* Weight Converter */
var pounds = parseFloat(0);
var kilograms = parseFloat(0);
var ounces = parseFloat(0);
var grams = parseFloat(0);
var stones = parseFloat(0);

function PoundsCoverter(val) {
    ounces = val * 16;
    stones = val * 0.071429;
    kilograms = val / 2.2046;
    grams = val / 0.071429;
    document.getElementById("ounces").value = ounces.toFixed(2);
    document.getElementById("stones").value = stones.toFixed(2);
    document.getElementById("kilograms").value = kilograms.toFixed(2);
    document.getElementById("grams").value = grams.toFixed(2);
}

function OuncesConverter(val) {
    pounds = val * 0.0625;
    stones = val * 0.0044643;
    kilograms = val / 35.274;
    grams = val / 0.035274;
    document.getElementById("pounds").value = pounds.toFixed(2);
    document.getElementById("stones").value = stones.toFixed(2);
    document.getElementById("kilograms").value = kilograms.toFixed(2);
    document.getElementById("grams").value = grams.toFixed(2);
}

function StonesConverter(val) {
    kilograms = val / 0.15747;
    pounds = val * 14;
    grams = val / 0.00015747;
    ounces = val * 224;
    document.getElementById("kilograms").value = kilograms.toFixed(2);
    document.getElementById("pounds").value = pounds.toFixed(2);
    document.getElementById("grams").value = grams.toFixed(2);
    document.getElementById("ounces").value = ounces.toFixed(2);
}

function KilogramsConverter(val) {
    stones = val / 0.1574;
    pounds = val * 2.2046;
    grams = val * 1000;
    ounces = val * 35.274;
    document.getElementById("stones").value = stones.toFixed(2);
    document.getElementById("pounds").value = pounds.toFixed(2);
    document.getElementById("grams").value = grams.toFixed(2);
    document.getElementById("ounces").value = ounces.toFixed(2);
}

function GramsConverter(val) {
    stones = val * 0.00015747;
    pounds = val * 0.0022046;
    kilograms = val / 1000;
    ounces = val * 0.035274;
    document.getElementById("stones").value = stones.toFixed(2);
    document.getElementById("pounds").value = pounds.toFixed(2);
    document.getElementById("kilograms").value = kilograms.toFixed(2);
    document.getElementById("ounces").value = ounces.toFixed(2);
}

/* Speed Converter */
var mph = parseFloat(0);
var knots = parseFloat(0);
var kph = parseFloat(0);
var mach = parseFloat(0);

function MphCoverter(val) {
    knots = val / 1.150779;
    kph = val * 1.609344;
    mach = val / 761.207;
    document.getElementById("knots").value = knots.toFixed(2);
    document.getElementById("kph").value = kph.toFixed(2);
    document.getElementById("mach").value = mach.toFixed(2);
}

function KnotsConverter(val) {
    mph = val * 1.150779;
    kph = val * 1.852;
    mach = val / 661.4708;
    document.getElementById("mph").value = mph.toFixed(2);
    document.getElementById("kph").value = kph.toFixed(2);
    document.getElementById("mach").value = mach.toFixed(2);
}

function KphConverter(val) {
    mph = val / 1.609344;
    knots = val / 1.852;
    mach = val / 1225.044;
    document.getElementById("mph").value = mph.toFixed(2);
    document.getElementById("knots").value = knots.toFixed(2);
    document.getElementById("mach").value = mach.toFixed(2);
}

function MachConverter(val) {
    mph = val * 761.207;
    knots = val * 1225.044;
    kph = val * 661.4708;
    document.getElementById("mph").value = mph.toFixed(2);
    document.getElementById("knots").value = knots.toFixed(2);
    document.getElementById("kph").value = kph.toFixed(2);
}

/* Temperature Converter */
var fahrenheit = parseFloat(0);
var kelvin = parseFloat(0);
var celsius = parseFloat(0);

function FahrenheitCoverter(val) {
    kelvin = ((val - 32) / 1.8) + 273.15;
    celsius = (val - 32) / 1.8;
    document.getElementById("kelvin").value = kelvin.toFixed(2);
    document.getElementById("celsius").value = celsius.toFixed(2);
}

function KelvinConverter(val) {
    fahrenheit = ((val - 273.15) * 1.8) + 32;
    celsius = val - 273.15;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("celsius").value = celsius.toFixed(2);
}

function CelsiusConverter(val) {
    fahrenheit = (val * 1.8) + 32;
    kelvin = parseFloat(val + 273.15);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
}