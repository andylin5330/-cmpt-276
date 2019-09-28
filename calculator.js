
//Percent
function percentage(){
    var grade11 = document.getElementById("grade11").value;
    var grade12 = document.getElementById("grade12").value;
    var grade1 = (grade11/grade12);
    if(grade11.trim() != ''&&grade12.trim() != ''){
        document.getElementById("percent1").innerHTML=grade1.toFixed(5)*100+"%";
    }
    var grade21 = document.getElementById("grade21").value;
    var grade22 = document.getElementById("grade22").value;
    var grade2 = (grade21/grade22);
    if(grade21.trim() != ''&&grade22.trim() != ''){
        document.getElementById("percent2").innerHTML=grade2.toFixed(5)*100+"%";
    }
    var grade31 = document.getElementById("grade31").value;
    var grade32 = document.getElementById("grade32").value;
    var grade3 = (grade31/grade32);
    if(grade31.trim() != ''&&grade32.trim() != ''){
        document.getElementById("percent3").innerHTML=grade3.toFixed(5)*100+"%";
    }
    var grade41 = document.getElementById("grade41").value;
    var grade42 = document.getElementById("grade42").value;
    var grade4 = (grade41/grade42);
    if(grade41.trim() != ''&&grade42.trim() != ''){
        document.getElementById("percent4").innerHTML=grade4.toFixed(5)*100+"%";
    }
}

//Mean
function calMean(){
    var num = 4;   
    if(document.getElementById("grade11").value==""&&document.getElementById("grade12").value==""){
        mgrade1=0;
        num=num-1;
    }
    else if(document.getElementById("grade11").value==""||document.getElementById("grade12").value==""){
        window.alert("MISSING VALUES FOR THE OTHER HALF OF ACTIVITY 1.");
    }
    else{
        var mgrade1 = document.getElementById("grade11").value/document.getElementById("grade12").value;
    }
    if(document.getElementById("grade21").value==""&&document.getElementById("grade22").value==""){
        mgrade2=0;
        num=num-1;
    }
    else if(document.getElementById("grade21").value==""||document.getElementById("grade22").value==""){
        window.alert("MISSING VALUES FOR THE OTHER HALF OF ACTIVITY 2.");
    }
    else{
        var mgrade2 = document.getElementById("grade21").value/document.getElementById("grade22").value;
    }
    if(document.getElementById("grade31").value==""&&document.getElementById("grade32").value==""){
        mgrade3=0;
        num=num-1;
    }
    else if(document.getElementById("grade31").value==""||document.getElementById("grade32").value==""){
        window.alert("MISSING VALUES FOR THE OTHER HALF OF ACTIVITY 3.");
    }
    else{
        var mgrade3 = document.getElementById("grade31").value/document.getElementById("grade32").value;
    }
    if(document.getElementById("grade41").value==""&&document.getElementById("grade42").value==""){
        mgrade4=0;
        num=num-1;
    }    
    else if(document.getElementById("grade41").value==""||document.getElementById("grade42").value==""){
        window.alert("MISSING VALUES FOR THE OTHER HALF OF ACTIVITY 4.");
    }
    else{
        var mgrade4 = document.getElementById("grade41").value/document.getElementById("grade42").value;
    }
    if(num==0){
        window.alert("PLEASE TYPE IN SOMETHING FOR CALCULATION.");
    }
    else{
        document.getElementById("rmean").innerHTML="Mean = "+(((mgrade1+mgrade2+mgrade3+mgrade4)/num)).toFixed(5)*100+"/"+"100";
    }
}

//Weight
function calWeight(){
    var weight=4;
    var weight1=document.getElementById("weight1").value;
    var weight2=document.getElementById("weight2").value;
    var weight3=document.getElementById("weight3").value;
    var weight4=document.getElementById("weight4").value;
    var mgrade11=document.getElementById("grade11").value;
    var mgrade12=document.getElementById("grade12").value;
    var mgrade21=document.getElementById("grade21").value;
    var mgrade22=document.getElementById("grade22").value;
    var mgrade31=document.getElementById("grade31").value;
    var mgrade32=document.getElementById("grade32").value;
    var mgrade41=document.getElementById("grade41").value;
    var mgrade42=document.getElementById("grade42").value;
    var mgrade1=mgrade11/mgrade12;
    var mgrade2=mgrade21/mgrade22;
    var mgrade3=mgrade31/mgrade32;
    var mgrade4=mgrade41/mgrade42;
    if(document.getElementById("weight1").value==""&&document.getElementById("grade11").value==""&&document.getElementById("grade12").value==""){
        weight=weight-1;
        weight1=0;
        mgrade1=0;
    }
    else if(document.getElementById("weight1").value==""||document.getElementById("grade11").value==""||document.getElementById("grade12").value==""){
        window.alert("PLEASE TYPE IN APPROPRICIATE VALUE FOR THE OTHER HALF OF ACTIVITY 1.");
    }

    if(document.getElementById("weight2").value==""&&document.getElementById("grade21").value==""&&document.getElementById("grade22").value==""){
        weight=weight-1;
        weight2=0;
        mgrade2=0;
    }
    else if(document.getElementById("weight2").value==""||document.getElementById("grade21").value==""||document.getElementById("grade22").value==""){
        window.alert("PLEASE TYPE IN APPROPRICIATE VALUE FOR THE OTHER HALF OF ACTIVITY 2.");
    }

    if(document.getElementById("weight3").value==""&&document.getElementById("grade31").value==""&&document.getElementById("grade32").value==""){
        weight=weight-1;
        weight3=0;
        mgrade3=0;
    }
    else if(document.getElementById("weight3").value==""||document.getElementById("grade31").value==""||document.getElementById("grade32").value==""){
        window.alert("PLEASE TYPE IN APPROPRICIATE VALUE FOR THE OTHER HALF OF ACTIVITY 3.");
    }

    if(document.getElementById("weight4").value==""&&document.getElementById("grade41").value==""&&document.getElementById("grade42").value==""){
        weight=weight-1;
        weight4=0;
        mgrade4=0;
    }
    else if(document.getElementById("weight4").value==""||document.getElementById("grade41").value==""||document.getElementById("grade42").value==""){
        window.alert("PLEASE TYPE IN APPROPRICIATE VALUE FOR THE OTHER HALF OF ACTIVITY 4.");
    }
    var wgrade1=mgrade1*parseInt(weight1);
    var wgrade2=mgrade2*parseInt(weight2);
    var wgrade3=mgrade3*parseInt(weight3);
    var wgrade4=mgrade4*parseInt(weight4);

    var tolweight= parseInt(weight1)+parseInt(weight2)+parseInt(weight3)+parseInt(weight4);
    if(weight==0){
        window.alert("PLEASE TYPE IN SOME WEIGHT FOR CALCULATION");
    }
    document.getElementById("rweight").innerHTML="Weighted grade= "+(((wgrade1+wgrade2+wgrade3+wgrade4)/tolweight)*100).toFixed(3)+"/"+"100";
}

//Clear
function calClear(){
    if(document.getElementById("grade11").value==""&&
    document.getElementById("grade12").value==""&&
    document.getElementById("grade21").value==""&&
    document.getElementById("grade22").value==""&&
    document.getElementById("grade31").value==""&&
    document.getElementById("grade32").value==""&&
    document.getElementById("grade41").value==""&&
    document.getElementById("grade42").value==""&&
    document.getElementById("weight1").value==""&&
    document.getElementById("weight2").value==""&&
    document.getElementById("weight3").value==""&&
    document.getElementById("weight4").value==""&&
    document.getElementById("percent1").innerHTML==""&&
    document.getElementById("percent2").innerHTML==""&&
    document.getElementById("percent3").innerHTML==""&&
    document.getElementById("percent4").innerHTML==""&&
    document.getElementById("rmean").innerHTML==""&&
    document.getElementById("rweight").innerHTML=="")
    {
        window.alert("NOTHING NEED TO BE CLEARED!")
    }
    document.getElementById("grade11").value="";
    document.getElementById("grade12").value="";
    document.getElementById("grade21").value="";
    document.getElementById("grade22").value="";
    document.getElementById("grade31").value="";
    document.getElementById("grade32").value="";
    document.getElementById("grade41").value="";
    document.getElementById("grade42").value="";
    document.getElementById("weight1").value="";
    document.getElementById("weight2").value="";
    document.getElementById("weight3").value="";
    document.getElementById("weight4").value="";
    document.getElementById("percent1").innerHTML="";
    document.getElementById("percent2").innerHTML="";
    document.getElementById("percent3").innerHTML="";
    document.getElementById("percent4").innerHTML="";
    document.getElementById("rmean").innerHTML="";
    document.getElementById("rweight").innerHTML="";
}