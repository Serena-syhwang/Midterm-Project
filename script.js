var n,t=0,nex=0,q=new Array,step=new Array;
function createtable1(){
	n=document.getElementById("text-box").value;
	if (n==0||n==undefined)
		return;
	child=document.getElementById("Submit");
	parent=document.getElementById("list");
	parent.removeChild(child);
	var element=document.getElementById("container");
	var table=document.createElement("table");
	table.setAttribute("id","table");
	table.style.float="top";
	for (i=0;i<=n;i++)
	{
		var row=document.createElement("tr");
		for (j=0;j<=n;j++)
		{
			var div=document.createElement("div");
			div.setAttribute("class","table");
			div.style.position="relative";
			div.setAttribute("id",i*10+j);
			if (j==0&&i!=0)
			{
				node=document.createTextNode(i);
				div.appendChild(node);
			}
			if (i==0&&j!=0)
			{
				node=document.createTextNode(j);
				div.appendChild(node);
			}
			var col=document.createElement("td");
			col.appendChild(div);
			row.appendChild(col);
		}
		table.appendChild(row);
	}
	element.appendChild(table);
	for (i=1;i<=n;i++)
		q[i]=0;
	store1(1);
}
function store1(i){
	var j;
	if (i>n) return;
	else
	{
		for (j=1;j<=n;j++)
		{
			if (q[j]==0)
			{
				q[j]=1;
				var tmp={x:i,y:j,opr:"show"};
				step.push(tmp);
				store1(i+1);
				q[j]=0;
				tmp={x:i,y:j,opr:"hide"};
				step.push(tmp);
			}
		}
	}
}
function play1(t){
	nex=t;
	if (t>=step.length) {startover1();return;}
	if (step[t].opr=="show")
	{
		var check=document.getElementById(step[t].x*10+step[t].y);
		var num=document.createTextNode(step[t].y);
		$(document).ready(function(){
			$("td div#"+(step[t].x*10+step[t].y)).animate({height:'hide'},function(){check.appendChild(num);});
		});
		$(document).ready(function(){
			$("td div#"+(step[t].x*10+step[t].y)).animate({height:'show'},function(){play1(t+1);});
		});
	}
	else
	{
		var check=document.getElementById(step[t].x*10+step[t].y);
		var num=check.lastChild;
		$(document).ready(function(){
			$("td div#"+(step[t].x*10+step[t].y)).animate({height:'hide'},function(){check.removeChild(num);});
		});
		$(document).ready(function(){
			$("td div#"+(step[t].x*10+step[t].y)).animate({height:'show'},function(){play1(t+1);});
		});
	}
}
function stop1(){
	$(document).ready(function(){
		$(".table").stop(true,true);
	});
}
function continue1(){
	play1(nex);
}
function next1(){
	if (nex>=step.length) {startover();return;}
	if (step[nex].opr=="show")
	{
		var check=document.getElementById(step[nex].x*10+step[nex].y);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'hide'});
		});
		var num=document.createTextNode(step[nex].y);
		check.appendChild(num);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'show'});
		});
	}
	else
	{
		var check=document.getElementById(step[nex].x*10+step[nex].y);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'hide'});
		});
		var num=check.lastChild;
		check.removeChild(num);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'show'});
		});
	}
	nex++;
}
function back1(){
	nex--;
	if (nex<0)return;
	if (step[nex].opr=="show")
	{
		var check=document.getElementById(step[nex].x*10+step[nex].y);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'hide'});
		});
		var num=check.lastChild;
		check.removeChild(num);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'show'});
		});
	}
	else
	{
		var check=document.getElementById(step[nex].x*10+step[nex].y);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'hide'});
		});
		var num=document.createTextNode(step[nex].y);
		check.appendChild(num);
		$(document).ready(function(){
			$("td div#"+(step[nex].x*10+step[nex].y)).animate({height:'show'});
		});
	}
}
function startover1(){
	var i;
	var table=document.getElementById("table");
	var parent=document.getElementById("container");
	parent.removeChild(table);
	var button=document.createElement("input");
	button.setAttribute("type","Submit");
	button.setAttribute("value","Submit");
	button.setAttribute("id","Submit");
	button.setAttribute("onclick","createtable1()");
	parent=document.getElementById("list");
	parent.appendChild(button);
	var box=document.getElementById("text-box");
	$(function(){
		$("#text-box").val("");
	});
	box.setAttribute("placeholder","n=");
	for (i=0;i<step.length;i++)
		step.push();
}
function createtable2(){
	n=document.getElementById("text-box").value;
	if (n==0||n==undefined)
		return;
	child=document.getElementById("Submit");
	parent=document.getElementById("list");
	parent.removeChild(child);
	var element=document.getElementById("container");
	var child=document.createElement("div");
	child.setAttribute("id","boxes");
	child.style.position="relative";
	child.style.left="200";
	child.style.top="200";
	element.appendChild(child);
	element=child;
	for (i=1;i<=n;i++)
	{
		var box=document.createElement("div");
		box.setAttribute("class","table");
		box.setAttribute("id",i);
		box.style.clear="none";
		box.style.marginRight="10";
		var num=document.createTextNode(i);
		box.appendChild(num);
		element.appendChild(box);
	}
	store2(1,parseInt(n,10));
}
function swap(a,b){
	var tmp={x:a,y:b};
	step.push(tmp);
}
function store2(start,end){
	var i;
	if (start==end) return;
	else
	{
		for (i=start;i<=end;i++)
		{
			swap(start,i);
			store2(start+1,end);
			swap(start,i);
		}
	}
}
function play2(t){
	if (t>=step.length) {startover2();return;}
	var x=document.getElementById(step[t].x);
	var y=document.getElementById(step[t].y);
	var numx=x.lastChild;
	var numy=y.lastChild;
	$(document).ready(function(){
			$("div#"+(step[t].x)).animate({height:'hide'},function(){x.appendChild(numy);});
	});
	$(document).ready(function(){
			$("div#"+(step[t].y)).animate({height:'hide'},function(){y.appendChild(numx);});
	});
	$(document).ready(function(){
		$("div#"+(step[t].x)).animate({height:'show'});
	});
	$(document).ready(function(){
		$("div#"+(step[t].y)).animate({height:'show'},function(){play2(t+1);});
	});
}
function next2(){
	if (nex>=step.length){startover2();return;}
	var x=document.getElementById(step[nex].x);
	var y=document.getElementById(step[nex].y);
	var numx=x.lastChild;
	var numy=y.lastChild;
	$(document).ready(function(){
			$("div#"+(step[nex].x)).animate({height:'hide'},function(){x.appendChild(numy);});
	});
	$(document).ready(function(){
			$("div#"+(step[nex].y)).animate({height:'hide'},function(){y.appendChild(numx);});
	});
	$(document).ready(function(){
		$("div#"+(step[nex].x)).animate({height:'show'});
	});
	$(document).ready(function(){
		$("div#"+(step[nex].y)).animate({height:'show'});
	});
	nex++;
}
function back2(){
	nex--;
	if (nex<0)return;
	var x=document.getElementById(step[nex].x);
	var y=document.getElementById(step[nex].y);
	var numx=x.lastChild;
	var numy=y.lastChild;
	$(document).ready(function(){
			$("div#"+(step[nex].x)).animate({height:'hide'},function(){x.appendChild(numy);});
	});
	$(document).ready(function(){
			$("div#"+(step[nex].y)).animate({height:'hide'},function(){y.appendChild(numx);});
	});
	$(document).ready(function(){
		$("div#"+(step[nex].x)).animate({height:'show'});
	});
	$(document).ready(function(){
		$("div#"+(step[nex].y)).animate({height:'show'});
	});
}	
function startover2(){
	var parent=document.getElementById("container");
	var child=document.getElementById("boxes");
	parent.removeChild(child);
	var button=document.createElement("input");
	button.setAttribute("type","Submit");
	button.setAttribute("value","Submit");
	button.setAttribute("id","Submit");
	button.setAttribute("onclick","createtable2()");
	parent=document.getElementById("list");
	parent.appendChild(button);
	var box=document.getElementById("text-box");
	$(function(){
		$("#text-box").val("");
	});
	box.setAttribute("placeholder","n=");
	for (i=0;i<step.length;i++)
		step.push();
}