function LengthConverter(valNum) {

    let feet = parseFloat(0);
    let meters = parseFloat(0);
    let inches = parseFloat(0);
    let cm = parseFloat(0);
    let yards = parseFloat(0);
    let kilometers = parseFloat(0);
    let miles = parseFloat(0);
    let l_message = "";

    if (document.getElementById('feet').checked) {
        meters = valNum / 3.2808;
        l_message += "Meters: " + meters.toFixed(2) + "<br>";
        inches = valNum * 12;
        l_message += "Inches: " + inches.toFixed(2) + "<br>";
        cm = valNum / 0.032808;
        l_message += "cm: " + cm.toFixed(2) + "<br>";
        yards = valNum * 0.33333;
        l_message += "Yards: " + yards.toFixed(2) + "<br>";
        kilometers = valNum / 3280.8;
        l_message += "Kilometers: " + kilometers.toFixed(2) + "<br>";
        miles = valNum * 0.0018939;
        l_message += "miles: " + miles.toFixed(2) + "<br>";
    } else if (document.getElementById('meters').checked) {
        feet = valNum * 3.2808;
        l_message += "Feet:: " + feet.toFixed(2) + "<br>";
        inches = valNum * 39.370;
        l_message += "Inches: " + inches.toFixed(2) + "<br>";
        cm = valNum / 0.01;
        l_message += "cm: " + cm.toFixed(2) + "<br>";
        yards = valNum * 1.0936;
        l_message += "Yards: " + yards.toFixed(2) + "<br>";
        kilometers = valNum / 1000;
        l_message += "Kilometers: " + kilometers.toFixed(2) + "<br>";
        miles = valNum * 0.00062137;
        l_message += "miles: " + miles.toFixed(2) + "<br>";
    } else if (document.getElementById('inches').checked) {
        feet = valNum * 0.083333;
        l_message += "Feet:: " + feet.toFixed(2) + "<br>";
        meters = valNum / 39.370;
        l_message += "Meters: " + meters.toFixed(2) + "<br>";
        cm = valNum / 0.39370;
        l_message += "cm: " + cm.toFixed(2) + "<br>";
        yards = valNum * 0.027778;
        l_message += "Yards: " + yards.toFixed(2) + "<br>";
        kilometers = valNum / 39370;
        l_message += "Kilometers: " + kilometers.toFixed(2) + "<br>";
        miles = valNum * 0.000015783;
        l_message += "miles: " + miles.toFixed(2) + "<br>";
    } else if (document.getElementById('cm').checked) {
        feet = valNum * 0.32808;
        l_message += "Feet:: " + feet.toFixed(2) + "<br>";
        meters = valNum / 100;
        l_message += "Meters: " + meters.toFixed(2) + "<br>";
        inches = valNum * 0.39370;
        l_message += "Inches: " + inches.toFixed(2) + "<br>";
        yards = valNum * 0.010936;
        l_message += "Yards: " + yards.toFixed(2) + "<br>";
        kilometers = valNum / 100000;
        l_message += "Kilometers: " + kilometers.toFixed(2) + "<br>";
        miles = valNum * 0.0000062137;
        l_message += "miles: " + miles.toFixed(2) + "<br>";
    } else if (document.getElementById('yards').checked) {
        feet = valNum * 3;
        l_message += "Feet:: " + feet.toFixed(2) + "<br>";
        meters = valNum / 1.0936;
        l_message += "Meters: " + meters.toFixed(2) + "<br>";
        inches = valNum * 36;
        l_message += "Inches: " + inches.toFixed(2) + "<br>";
        cm = valNum / 0.010936;
        l_message += "cm: " + cm.toFixed(2) + "<br>";
        kilometers = valNum / 1093.6;
        l_message += "Kilometers: " + kilometers.toFixed(2) + "<br>";
        miles = valNum * 0.00056818;
        l_message += "miles: " + miles.toFixed(2) + "<br>";
    } else if (document.getElementById('kilometers').checked) {
        feet = valNum * 3280.8;
        l_message += "Feet:: " + feet.toFixed(2) + "<br>";
        meters = valNum * 1000;
        l_message += "Meters: " + meters.toFixed(2) + "<br>";
        inches = valNum * 39370;
        l_message += "Inches: " + inches.toFixed(2) + "<br>";
        cm = valNum * 100000;
        l_message += "cm: " + cm.toFixed(2) + "<br>";
        yards = valNum * 1093.6;
        l_message += "Yards: " + yards.toFixed(2) + "<br>";
        miles = valNum * 0.62137;
        l_message += "miles: " + miles.toFixed(2) + "<br>";
    } else if (document.getElementById('miles').checked) {
        feet = valNum * 5280;
        l_message += "Feet:: " + feet.toFixed(2) + "<br>";
        meters = valNum / 0.00062137;
        l_message += "Meters: " + meters.toFixed(2) + "<br>";
        inches = valNum * 63360;
        l_message += "Inches: " + inches.toFixed(2) + "<br>";
        cm = valNum / 0.0000062137;
        l_message += "cm: " + cm.toFixed(2) + "<br>";
        yards = valNum * 1760;
        l_message += "Yards: " + yards.toFixed(2) + "<br>";
        kilometers = valNum / 0.62137;
        l_message += "Kilometers: " + kilometers.toFixed(2) + "<br>";
    }
    document.getElementById("output_length").innerHTML = l_message;
}

function WeightConverter(valNum) {

    let pounds = parseFloat(0);
    let kilograms = parseFloat(0);
    let ounces = parseFloat(0);
    let grams = parseFloat(0);
    let stones = parseFloat(0);
    let w_message = "";

    if (document.getElementById('pounds').checked) {
        ounces = valNum * 16;
        w_message += "Ounces: " + ounces.toFixed(2) + "<br>";
        stones = valNum * 0.071429;
        w_message += "Stones: " + stones.toFixed(2) + "<br>";
        kilograms = valNum / 2.2046;
        w_message += "Kilograms: " + kilograms.toFixed(2) + "<br>";
        grams = valNum / 0.071429;
        w_message += "Kilograms: " + grams.toFixed(2) + "<br>";

    } else if (document.getElementById('ounces').checked) {
        pounds = valNum * 0.0625;
        w_message += "Pounds: " + pounds.toFixed(2) + "<br>";
        stones = valNum * 0.0044643;
        w_message += "Stones: " + stones.toFixed(2) + "<br>";
        kilograms = valNum / 35.274;
        w_message += "Kilograms: " + kilograms.toFixed(2) + "<br>";
        grams = valNum / 0.035274;
        w_message += "Kilograms: " + grams.toFixed(2) + "<br>";

    } else if (document.getElementById('stones').checked) {
        pounds = valNum * 14;
        w_message += "Pounds: " + pounds.toFixed(2) + "<br>";
        ounces = valNum * 224;
        w_message += "Ounces: " + ounces.toFixed(2) + "<br>";
        kilograms = valNum / 0.15747;
        w_message += "Kilograms: " + kilograms.toFixed(2) + "<br>";
        grams = valNum / 0.00015747;
        w_message += "Kilograms: " + grams.toFixed(2) + "<br>";

    } else if (document.getElementById('kilograms').checked) {
        pounds = valNum * 2.2046;
        w_message += "Pounds: " + pounds.toFixed(2) + "<br>";
        ounces = valNum * 35.274;
        w_message += "Ounces: " + ounces.toFixed(2) + "<br>";
        stones = valNum / 0.1574;
        w_message += "Stones: " + stones.toFixed(2) + "<br>";
        grams = valNum * 1000;
        w_message += "Grams: " + grams.toFixed(2) + "<br>";

    } else if (document.getElementById('grams').checked) {
        pounds = valNum * 0.0022046;
        w_message += "Pounds: " + pounds.toFixed(2) + "<br>";
        ounces = valNum * 0.035274;
        w_message += "Ounces: " + ounces.toFixed(2) + "<br>";
        stones = valNum * 0.00015747;
        w_message += "Stones: " + stones.toFixed(2) + "<br>";
        kilograms = valNum / 1000;
        w_message += "Kilograms: " + kilograms.toFixed(2) + "<br>";

    }

    document.getElementById("output_weight").innerHTML = w_message;
}

function SpeedConverter(valNum) {

    let mph = parseFloat(0);
    let knots = parseFloat(0);
    let kph = parseFloat(0);
    let mach = parseFloat(0);
    let s_message = "";

    if (document.getElementById('mph').checked) {
        knots = valNum / 1.150779;
        s_message += "Knots: " + knots.toFixed(2) + "<br>";
        kph = valNum * 1.609344;
        s_message += "KPH: " + kph.toFixed(2) + "<br>";
        mach = valNum / 761.207;
        s_message += "Mach: " + mach.toFixed(2) + "<br>";

    } else if (document.getElementById('knots').checked) {
        mph = valNum * 1.150779;
        s_message += "MPH: " + mph.toFixed(2) + "<br>";
        kph = valNum * 1.852;
        s_message += "KPH: " + kph.toFixed(2) + "<br>";
        mach = valNum / 661.4708;
        s_message += "Mach: " + mach.toFixed(2) + "<br>";

    } else if (document.getElementById('kph').checked) {
        mph = valNum / 1.609344;
        s_message += "MPH: " + mph.toFixed(2) + "<br>";
        knots = valNum / 1.852;
        s_message += "Knots: " + knots.toFixed(2) + "<br>";
        mach = valNum / 1225.044;
        s_message += "Mach: " + mach.toFixed(2) + "<br>";

    } else if (document.getElementById('mach').checked) {
        mph = valNum * 761.207;
        s_message += "MPH: " + mph.toFixed(2) + "<br>";
        knots = valNum * 1225.044;
        s_message += "Knots: " + knots.toFixed(2) + "<br>";
        kph = valNum * 661.4708;
        s_message += "KPH: " + kph.toFixed(2) + "<br>";

    }
    document.getElementById("output_speed").innerHTML = s_message;
}

function TemperatureConverter(valNum) {

    let fahrenheit = parseFloat(0);
    let kelvin = parseFloat(0);
    let celsius = parseFloat(0);
    let t_message = "";

    if (document.getElementById('fahrenheit').checked) {
        kelvin = ((valNum - 32) / 1.8) + 273.15;
        t_message += "Kelvin: " + kelvin.toFixed(2) + "<br>";
        celsius = (valNum - 32) / 1.8;
        t_message += "Celsius: " + celsius.toFixed(2) + "<br>";

    } else if (document.getElementById('kelvin').checked) {
        fahrenheit = ((valNum - 273.15) * 1.8) + 32;
        t_message += "Fahrenheit: " + fahrenheit.toFixed(2) + "<br>";
        celsius = valNum - 273.15;
        t_message += "Celsius: " + celsius.toFixed(2) + "<br>";

    }else if (document.getElementById('celsius').checked) {
        fahrenheit = (valNum * 1.8) + 32;
        t_message += "Fahrenheit: " + fahrenheit.toFixed(2) + "<br>";
        kelvin = parseFloat(valNum)+273.15;
        t_message += "Kelvin: " + kelvin.toFixed(2) + "<br>";

    }

    document.getElementById("output_temperature").innerHTML = t_message;
}