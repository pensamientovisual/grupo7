$(document).ready(function(){
    var elementos = $(".elemento");
    $(elementos).fadeTo("fast",0.7)
    $(".txcinad").hide();
    $(".txcinat").hide();
    $(".txsilla").hide();
    $(".txairbag").hide();
    $("#cat1").hide();
    $("#cat2").hide();
    $("#cad1").hide();
    $("#cad2").hide();
    $("#s1").hide();
    $("#s2").hide();
    $("#a1").hide();
    $("#a2").hide();
    $(".semicirculo").hide();
    $(".triangulo").hide();
    $("#a2").hide();
    $(".vel1").hide();
    $(".vel2").hide();
    $(".vel3").hide();
    $(".vel4").hide();
    var ccinad=true;
    var ccinat=true;
    var csilla=true;
    var cairbag=true;
    var data1 =[89.97,80];
    var data2 =[89.3,85.8];
    var data3 =[30,-12];
    var data4 =[79.6,71.8];

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
        $("#cat1").hide();
        $("#cat2").hide();
        $("#cad1").show();
        $("#cad2").show();
        $("#s1").hide();
        $("#s2").hide();
        $("#a1").hide();
        $("#a2").hide();
        $(".semicirculo").show();
        $(".triangulo").show();   
        $(".vel1").show();
        $(".vel2").hide();
        $(".vel3").hide();
        $(".vel4").hide();
        $("#cad1").click(function(){
            $(".triangulo").css({"transform":"rotate(89.97deg)"});
            $(this).css({"background-color":"red"});
            $("#cad2").css({"background-color":"transparent"})
        });
        $("#cad2").click(function(){
            $(".triangulo").css({"transform":"rotate(80deg)"});
            $(this).css({"background-color":"red"});
            $("#cad1").css({"background-color":"transparent"});
            
        });
         
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
        $("#cat1").show();
        $("#cat2").show();
        $("#cad1").hide();
        $("#cad2").hide();
        $("#s1").hide();
        $("#s2").hide();
        $("#a1").hide();
        $("#a2").hide();  
        $(".semicirculo").show();
        $(".triangulo").show();  
        $(".vel1").hide(); 
        $(".vel2").show();
        $(".vel3").hide();
        $(".vel4").hide();
        $("#cat1").click(function(){
            $(".triangulo").css({"transform":"rotate(89.3deg)"});
            $(this).css({"background-color":"red"});
            $("#cat2").css({"background-color":"transparent"})
        });
        $("#cat2").click(function(){
            $(".triangulo").css({"transform":"rotate(85.8deg)"});
            $(this).css({"background-color":"red"});
            $("#cat1").css({"background-color":"transparent"})
        });
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
        $("#cat1").hide();
        $("#cat2").hide();
        $("#cad1").hide();
        $("#cad2").hide();
        $("#s1").show();
        $("#s2").show();
        $("#a1").hide();
        $("#a2").hide(); 
        $(".semicirculo").show();
        $(".triangulo").show(); 
        $(".vel1").hide();  
        $(".vel2").hide();
        $(".vel3").show();
        $(".vel4").hide();
        $("#s1").click(function(){
            $(".triangulo").css({"transform":"rotate(30deg)"});
            $(this).css({"background-color":"red"});
            $("#s2").css({"background-color":"transparent"})
        });
        $("#s2").click(function(){
            $(".triangulo").css({"transform":"rotate(-12deg)"});
            $(this).css({"background-color":"red"});
            $("#s1").css({"background-color":"transparent"})
        });
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
        $("#cat1").hide();
        $("#cat2").hide();
        $("#cad1").hide();
        $("#cad2").hide();
        $("#s1").hide();
        $("#s2").hide();
        $("#a1").show();
        $("#a2").show();
        $(".semicirculo").show();
        $(".triangulo").show(); 
        $(".vel1").hide();  
        $(".vel2").hide();
        $(".vel3").hide();
        $(".vel4").show();
        $("#a1").click(function(){
            $(".triangulo").css({"transform":"rotate(79.6deg)"});
            $(this).css({"background-color":"red"});
            $("#a2").css({"background-color":"transparent"})
        });
        $("#a2").click(function(){
            $(".triangulo").css({"transform":"rotate(71.8deg)"});
            $(this).css({"background-color":"red"});
            $("#a1").css({"background-color":"transparent"})
        });
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