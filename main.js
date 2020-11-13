var change_img= ["the family book.png","Me.jpg", "Mom.JPG", "Papa.JPG", "Bro.jpg"];
var change_name= [" ","Sunidhi", "Parvati", "Santosh", "Sagar"];
var j=0;
var k=0;
function change(){
    document.getElementById("img1").src= change_img[j];
    j++;
    if (j==5){
        j=0;
    }
    document.getElementById("name").innerHTML= change_name[k];
    k++;
    if (k==5){
        k=0;
    }
}