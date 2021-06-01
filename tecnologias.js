$(document).ready(function(){
    var elementos = $(".elemento");
    $(elementos).fadeTo("fast",0.7)
    $(".txcinad").hide();
    $(".txcinat").hide();
    $(".txsilla").hide();
    $(".txairbag").hide();
    var ccinad=true;
    var ccinat=true;
    var csilla=true;
    var cairbag=true;
    $("#gr1").hide();
    $("#gr2").hide();
    $("#gr3").hide();
    $("#gr4").hide();


    $("#cinad").mouseenter(function(){
        $(this).fadeTo("fast",1);
    });
    $("#cinad").mouseleave(function(){
        if (ccinad==true){
            $(this).fadeTo("fast",0.7);
        }
    });
    $("#cinad").click(function(){
        $("#cad1").css({"background-color":"transparent"});
        $("#cad2").css({"background-color":"transparent"});
        $(".triangulo").css({"transform":"rotate(0deg)"});
        $(this).fadeTo("fast",1);
        ccinad=false;
        $("#cinat").fadeTo("fast",0.7);
        $("#silla").fadeTo("fast",0.7);
        $("#airbag").fadeTo("fast",0.7);
        ccinat=true;
        csilla=true;
        cairbag=true;
        $("#cinat").fadeTo("fast",0.7);
        $(".txcinad").show();
        $(".txcinat").hide();
        $(".txsilla").hide();
        $(".txairbag").hide();
        $("#gr1").show();
        $("#gr2").hide();
        $("#gr3").hide();
        $("#gr4").hide();
         
    });

    $("#cinat").mouseenter(function(){
        $(this).fadeTo("fast",1);
    });
    $("#cinat").mouseleave(function(){
        if (ccinat==true){
            $(this).fadeTo("fast",0.7);
        }
    });
    $("#cinat").click(function(){
        $("#cat1").css({"background-color":"transparent"});
        $("#cat1").css({"background-color":"transparent"});
        $(".triangulo").css({"transform":"rotate(0deg)"});
        $(this).fadeTo("fast",1);
        ccinat=false;
        $("#cinad").fadeTo("fast",0.7);
        $("#silla").fadeTo("fast",0.7);
        $("#airbag").fadeTo("fast",0.7);
        ccinad=true;
        csilla=true;
        cairbag=true;
        $(".txcinad").hide();
        $(".txcinat").show();
        $(".txsilla").hide();
        $(".txairbag").hide();
        $("#gr1").hide();
        $("#gr2").show();
        $("#gr3").hide();
        $("#gr4").hide();
    });

    $("#silla").mouseenter(function(){
        $(this).fadeTo("fast",1);
    });
    $("#silla").mouseleave(function(){
        if (csilla==true){
            $(this).fadeTo("fast",0.7);
        }
    });
    $("#silla").click(function(){
        $("#s1").css({"background-color":"transparent"});
        $("#s2").css({"background-color":"transparent"});
        $(".triangulo").css({"transform":"rotate(0deg)"});
        $(this).fadeTo("fast",1);
        csilla=false;
        $("#cinad").fadeTo("fast",0.7);
        $("#cinat").fadeTo("fast",0.7);
        $("#airbag").fadeTo("fast",0.7);
        ccinad=true;
        ccinat=true;
        cairbag=true;
        $(".txcinad").hide();
        $(".txcinat").hide();
        $(".txsilla").show();
        $(".txairbag").hide();
    });

    $("#airbag").mouseenter(function(){
        $(this).fadeTo("fast",1);
    });
    $("#airbag").mouseleave(function(){
        if (cairbag==true){
            $(this).fadeTo("fast",0.7);
        }
    });
    $("#airbag").click(function(){
        $("#a1").css({"background-color":"transparent"});
        $("#a2").css({"background-color":"transparent"});
        $(".triangulo").css({"transform":"rotate(0deg)"});
        $(this).fadeTo("fast",1);
        cairbag=false;
        $("#cinad").fadeTo("fast",0.7);
        $("#silla").fadeTo("fast",0.7);
        $("#cinat").fadeTo("fast",0.7);
        ccinad=true;
        ccinat=true;
        csilla=true;
        $(".txcinad").hide();
        $(".txcinat").hide();
        $(".txsilla").hide();
        $(".txairbag").show();
        $("#gr1").hide();
        $("#gr2").hide();
        $("#gr3").hide();
        $("#gr4").show();
    });

    $("#historia").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#historia").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });      
    $("#sugerencias").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#sugerencias").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });  
    $("#inicio").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#inicio").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });    
    $("#accidentes").mouseenter(function(){
        $(this).fadeTo("fast",0.5);
                    
    });
                    
    $("#accidentes").mouseleave(function(){
        $(this).fadeTo("fast",1);
                    
    });            

});