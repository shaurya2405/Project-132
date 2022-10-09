Status="";
AC="";

function preload()
{
    AC = loadImage("AC.jpg");
}

function setup()
{
    canvas = createCanvas(870, 400);
    canvas.position(460, 300);
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded Successfully!");
    Status = true;
    object_detector.detect(AC, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}

function draw()
{
    image(AC, 0, 0, 500, 400);
}

function back()
{
    window.location("index.html");
}