$(document).ready(function(){
    $("#g1").hide();
    $("#g2").hide();
    $("#g3").hide();
    $("#g4").hide();
    $("#g5").hide();
    $("#tg1").hide();
    $("#tg2").hide();
    $("#tg3").hide();
    $("#tg4").hide();
    $("#tg5").hide();

    $("#causa").click(function(){
        $("#g1").show();
        $("#tg1").show();
        $("#g2").hide();
        $("#g3").hide();
        $("#g4").hide();
        $("#g5").hide();
        $("#tg2").hide();
        $("#tg3").hide();
        $("#tg4").hide();
        $("#tg5").hide();
    });
    $("#causa1").click(function(){
        $("#g1").hide();
        $("#g2").show();
        $("#tg2").show();
        $("#g3").hide();
        $("#g4").hide();
        $("#g5").hide();
        $("#tg1").hide();
        $("#tg3").hide();
        $("#tg4").hide();
        $("#tg5").hide();
    });
    $("#causa2").click(function(){
        $("#g1").hide();
        $("#g2").hide();
        $("#g3").show();
        $("#tg3").show();
        $("#g4").hide();
        $("#g5").hide();
        $("#tg2").hide();
        $("#tg1").hide();
        $("#tg4").hide();
        $("#tg5").hide();
    });
    $("#causa3").click(function(){
        $("#g1").hide();
        $("#g2").hide();
        $("#g3").hide();
        $("#g4").show();
        $("#tg4").show();
        $("#g5").hide();
        $("#tg2").hide();
        $("#tg3").hide();
        $("#tg1").hide();
        $("#tg5").hide();
    });
    $("#causa4").click(function(){
        $("#g1").hide();
        $("#g2").hide();
        $("#g3").hide();
        $("#g4").hide();
        $("#g5").show();
        $("#tg5").show();
        $("#tg2").hide();
        $("#tg3").hide();
        $("#tg4").hide();
        $("#tg1").hide();
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
    
    $("#causa").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#causa").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });      
    $("#causa1").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#causa1").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });  
    $("#causa2").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#causa2").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });    
    $("#causa3").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#causa3").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    }); 
    $("#causa4").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#causa4").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    }); 


});      
