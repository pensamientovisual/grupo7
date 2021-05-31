$(document).ready(function(){
    $("#g1").hide();
    $("#g2").hide();
    $("#g3").hide();
    $("#g4").hide();
    $("#g5").hide();
    $("#causa1").click(function(){
        $("#g1").hide();
        $("#g2").show();
        $("#g3").hide();
        $("#g4").hide();
        $("#g5").hide();
    });
    $("#causa2").click(function(){
        $("#g1").hide();
        $("#g2").hide();
        $("#g3").show();
        $("#g4").hide();
        $("#g5").hide();
    });
    $("#causa3").click(function(){
        $("#g1").hide();
        $("#g2").hide();
        $("#g3").hide();
        $("#g4").show();
        $("#g5").hide();
    });
    $("#causa4").click(function(){
        $("#g1").hide();
        $("#g2").hide();
        $("#g3").hide();
        $("#g4").hide();
        $("#g5").show();
    });


    $("#inicio").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#inicio").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });      
    $("#sugerencias").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#sugerencias").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });  
    $("#tecnologia").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#tecnologia").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });    
    $("#historia").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#historia").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });      
});      
