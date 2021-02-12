function counselor() {
    // INPUT: Getting the weather that the user has entered and store it in a value
    let weather = document.getElementById('weather-select').value;
    
    /* 
    PROCESSING:
    Checking what wearther the user has entered
    Assining the weather an appropriate footwear
    */ 
    let footwear;

    switch (weather) {
        case "hot":
            footwear = "sandals";
            break;
        case "rain":
            footwear = "galoshes";
            break;
        case "snow":
            footwear = "boots";
            break;
        case "unknown":
            footwear = "shoes";
            break;           
    } 

    // OUTPUT: Storing the footwear to the output div
    document.getElementById('output').innerHTML = footwear; 
}