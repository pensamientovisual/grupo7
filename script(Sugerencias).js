$(document).ready(function(){
    $(".maloizquierda").hide();
    $(".maloderecha").hide();
    $(".medianoderecha").hide();
    $(".medianoizquierda").hide();
    $(".buenoderecha").hide();
    $(".buenoizquierda").hide();
    $(".tr").hide();
    $(".ta").hide();
    $(".tv").hide();
    let br = document.getElementById("rojo");
    let bv = document.getElementById("verde");
    let ba = document.getElementById("amarillo");
$("#rojo").click(function(){
    document.getElementById("rojo").style.backgroundColor= "red";
    document.getElementById("amarillo").style.backgroundColor= "BBA308";
    document.getElementById("verde").style.backgroundColor= "#1E8B08";
    $(".tr").show();
    $(".ta").hide();
    $(".tv").hide();
    $(".maloizquierda").show();
    $(".maloderecha").show();
    $(".medianoderecha").hide();
    $(".medianoizquierda").hide();
    $(".buenoderecha").hide();
    $(".buenoizquierda").hide();
    });
$("#amarillo").click(function(){
    document.getElementById("amarillo").style.backgroundColor= "yellow";
    document.getElementById("rojo").style.backgroundColor= "#BB0808";
    document.getElementById("verde").style.backgroundColor= "#1E8B08";
    $(".ta").show();
    $(".tr").hide();
    $(".tv").hide();
    $(".medianoderecha").show();
    $(".medianoizquierda").show();
    $(".maloizquierda").hide();
    $(".maloderecha").hide();
    $(".buenoderecha").hide();
    $(".buenoizquierda").hide();
    });
$("#verde").click(function(){
    $(".tv").show();
    $(".tr").hide();
    $(".ta").hide();
    document.getElementById("verde").style.backgroundColor= "#2EDF0A";
    document.getElementById("rojo").style.backgroundColor= "#BB0808";
    document.getElementById("amarillo").style.backgroundColor= "BBA308";
    $(".buenoderecha").show();
    $(".buenoizquierda").show();
    $(".maloizquierda").hide();
    $(".maloderecha").hide();
    $(".medianoderecha").hide();
    $(".medianoizquierda").hide();
    });


    $("#historia").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#historia").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });      
    $("#inicio").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#inicio").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });  
    $("#tecnologia").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#tecnologia").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });    
    $("#accidentes").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#accidentes").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });    
    
});