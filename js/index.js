window.onload=function(){
	let aside = $('.asi-box')[0];
	let lis=$('li',aside);
	let item=$('.item');
	
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let item=this.getElementsByClassName('item')[0];
			item.className='item block';
		}
		lis[i].onmouseout=function(){
			let item=this.getElementsByClassName('item')[0];
			item.className='item';
		}
	}
	
	let ban=$('.banner-ban')[0];
	let lia=$('li',ban);
	let bat=$('.banner-bo')[0];
	let bim=$('li',bat);
	let main=document.getElementsByTagName('main')[0];
	let imgw=parseInt(window.getComputedStyle(ban,null).width);
	console.log(bim);
	
	let now=0;
	let next=0;
	let t;
	t=setInterval(move, 3000);

	main.onmouseover=function(){
		clearInterval(t);
	}
	main.onmouseout=function(){
		t=setInterval(move, 3000);
	}

	
	function move(){
		next++;
		if(next==lia.length){
			next=0;
		}
		bim[next].style.background='#fff'
		bim[now].style.background='#a2a2a2'
		lia[next].style.left=`${imgw}px`;
		animate(lia[now],{left:-imgw});
		animate(lia[next],{left:0});
		now=next;
	}

	for(let i=0;i<bim.length;i++){
		bim[i].onclick=function(){
			if(next==i){return;}
			bim[i].style.background='#fff'
			bim[now].style.background='#a2a2a2'
			lia[i].style.left=imgw+'px';
			animate(lia[now],{left:-imgw});
			animate(lia[i],{left:0});
			now=next=i;
		}
	}

	
	
   

}

