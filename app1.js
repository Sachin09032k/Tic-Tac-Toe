var count=1;
var a;
var b;
var start=0;
        
function select1(){
    b="X";
    c="O";
    start=1;
    putdata('result','');
}
function select2(){
    b="O";
    c="X";
    start=1;
    putdata('result','');
}
function fill(control)
{
    if(getdata(control.id)=='')
    {
        putdata('result','');
        if(start==0){
            putdata('result','Please select any one.');
        }
        else if(count<=10 && start==1)
        {
            if(count%2!=0){
                putdata(control.id,b);
            }
            else{
                    putdata(control.id,c);
                }
                count++;
                
                if(checkwin())
                {
                    if(count%2==0)
                    {
                        a=b;
                    }
                    else
                    {
                        a=c;

                    }
                    putdata('result','Winner is '+a);
                    
                }
        } 
        if(start==1 && count>=10 && !checkwin()){
            putdata('result','Match Draw.');
        }
    }
    else{
        putdata('result','Already filled.');
    }
}
function reset()
{
    for(var i=1;i<=9;i++)
    {
        putdata('div'+i,"");
    }
    count=1;
    b="";
    c="";
    start=0;
    putdata('result','');
}

function checkwin()
{
    if(checkcond('div1','div2','div3') ||checkcond('div4','div5','div6') || checkcond('div7','div8','div9')|| checkcond('div1','div4','div7')||checkcond('div2','div5','div8') ||checkcond('div3','div6','div9') ||checkcond('div1','div5','div9') ||checkcond('div3','div5','div7') )
    {
        return true;
    }
}
function checkcond(div1,div2,div3)
{
    if(getdata(div1)!="" && getdata(div2)!="" &&getdata(div3)!="" && getdata(div1)== getdata(div2) && getdata(div1)==getdata(div3))
    {
        return true;
    }
}
function getdata(div){
    return document.getElementById(div).innerHTML;
}
function putdata(div,data)
{
    document.getElementById(div).innerHTML=data;
}



