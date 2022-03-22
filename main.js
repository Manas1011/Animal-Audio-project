function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vNqSTIPT0/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }

    else{
        console.log(results);
    img1=document.getElementById("img1");
    document.getElementById("result_label").innerHTML="I Can Hear-"+ results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
    
    if(results[0].label=='BlackMamba'){
        img1.src="Black Mamba.png";
        }

    else if(results[0].label=='Cat'){
        img1.src="Cat.png";
        }

        else if(results[0].label=='Lion'){
            img1.src="Lion.png";
            }

            else if(results[0].label=='Horse'){
                img1.src="Horse.png";
                }

                else if(results[0].label=='Dog'){
                    img1.src="Golden Retriver.png";
                    }

    else{
        img1.src="Capture.png";
        
    }
    }}