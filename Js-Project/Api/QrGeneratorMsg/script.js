


document.querySelector('#submit').addEventListener('click', function(e){
    let imgSection = document.getElementsByClassName("imgSection");
    let qrLink = "https://chart.googleapis.com/chart?cht=qr&chs=";
let myImg = document.getElementById("img");
let mySize = document.getElementById("size").value;
let myText = document.getElementById("text").value;
    
    if(myText !== ""){
        myImg.src = qrLink+mySize+"&chl="+myText;
        // imgSection.style.color="blue"
        // console.log(imgSection)
      
    }
    else{
       alert("enter text plz")
    }
}
)   