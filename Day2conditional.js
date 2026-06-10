function launchBrowser(){

    let browserName = "Chrome"

    if (browserName == "Chrome"){

        console.log("It is Chrome browser")
    }
    else {

        console.log("It is default browser")
    }
}
launchBrowser()

function runTests(){

    let testType = "Smoke" 
    switch (testType) {
        case "Smoke":
            console.log("Execute the Smoke Test");
        break;
        case "Sanity":
            console.log("Execute the Sanity Test");
        break;
        case "Regression":
            console.log("Execute the Regression Test");
        break;
        default:
            console.log("Execute the Default Tests");
    }

    }
runTests()