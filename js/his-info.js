// JavaScript Document
window.onload=function()
{
	var oTab=document.getElementById("cen_right_top");
	var aH3=oTab.getElementsByTagName("h3");
	var aDiv=oTab.getElementsByTagName("div");
	for(var i=0;i<aH3.length;i++)
	{
		aH3[i].index=i;
		aH3[i].onclick=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH3[i].className="";
				aDiv[i].style.display="none";
			}
			this.className="active";
			aDiv[this.index].style.display="block";
		}
	}
	// var oList=document.getElementById("list-info");
	// var pages=oList.getElementsByClassName("pages");
	// var info=oList.getElementsByClassName("info-list");
	
	// for(var i=0;i<pages.length;i++)
	// {
	// 	pages[i].index=i;
	// 	pages[i].onclick=function()
	// 	{
	// 		console.log(pages[i]);
			 
	// 		for(var i=0;i<pages.length;i++)
	// 		{
	// 			pages[i].className="";
	// 			info[i].style.display="none";
	// 		}
	// 		this.className="active";
	// 		info[this.index].style.display="block";
	// 	}
	// }


}

