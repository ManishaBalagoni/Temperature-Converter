const calculateTemp = () => { 
    const inputTempElement = document.getElementById('temp').value;
    const tempSelectedElement = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelectedElement.selectedIndex].value;

    // converting celsius to fahrenheit

    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // converting fahrenheit to celsius

    const fahToCal = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML ="-->  " + celToFah(inputTempElement) + "&#176; Fahrenheit" + "  <--";
    }

    else{
        document.getElementById("result").innerHTML ="-->  " + fahToCal(inputTempElement) + "&#176; Celsius" + "  <--" ;
    }

}
