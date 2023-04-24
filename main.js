function preload() {
    classifier = ml5.imageClassifier("DoodleNet")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    background("#f0eddf")
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult)

}

function gotResult (error, results) {
    if (error) {
        console.error(error)
    }
    console.log(results)
    document.getElementById("label").innerHTML=results[0].label
    document.getElementById("confidence").innerHTML=results[0].confidence

    utterThis=new SpeechSynthesisUtterance(results[0].label)
    synth.speak(utterThis)
}

function draw() {
    strokeWeight(5)
    stroke("black")

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }

}

function clearButton() {
    background("#f0eddf")
}