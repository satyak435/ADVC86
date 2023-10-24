var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    block_image_objct=Img;

    block_image_objct.scaleToWidth(700);
    block_image_objct.scaleToHeight(510);
    block_image_objct.set({
        top:0,
        left:0
    });
    canvas.add(block_image_objct);
});	
	
}

function playSound(){
	x.play();
}
