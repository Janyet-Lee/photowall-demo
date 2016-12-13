/*
* @Author: Administrator
* @Date:   2016-12-13 11:35:48
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-13 14:09:39
*/

window.onload=function(){
 var items = document.getElementsByClassName('item');
 var cols =Math.floor(parseInt(document.body.clientWidth)/items[0].offsetWidth)-2;
 for (var i = 0; i <= items.length; i++) {
 	if(i<cols){
 	items[i].style.top = (Math.floor((i/cols))*300)+'px';
 	items[i].style.left =i*300+'px';
 }else{
 	items[i].style.top = Math.ceil((i/cols))*300+'px';
 	items[i].style.left =(i-cols)%cols*300+'px';
 }
 }
 items[index].onclick=function(){
 	this.style.transform=scale(3,3 );
 };
};