function startclassification() {

    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("", modelready)
}

function modelready() {

    classifier.classify(gotResults);
}

function gotResults(error, results) {

    if (error) {
        console.error(error);
    }
}