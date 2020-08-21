//头部导行
$("#nav li").hover(
		function(){
			//clearTimeout(setTimeout("0")-1);
			$("#nav .kind_menu").hide(); 
			$("#nav li .v .sele").attr("class","shutAhover");
			if($(this).attr("class") == "nav_lishw"){
				$(this).attr("id","nav_hover");
			//$(this).attr("class","")
			$("#nav_hover .v a").attr("class","sele");				
			$("#nav_hover .kind_menu").show(); 
			}else{
				$(this).attr("id","nav_hover");
			$(this).attr("class","")
			$("#nav_hover .v a").attr("class","sele");				
			$("#nav_hover .kind_menu").show(); 
			}
			
		//	alert($(this).html());
		},
		function(){
			
			//$("#nav_hover .kind_menu").show(); 
			//if($(this).attr("class") != "nav_lishw"){
				$("#nav_hover .v .sele").attr("class","");
				$("#nav_hover .kind_menu").hide(); 
			//}
			$(this).attr("id","")
			$("#nav li .v .shutAhover").attr("class","sele");
			setTimeout(function(){
				//$(".nav_lishw .kind_menu").show();
				$(".nav_lishw .v a").attr("class","sele");
			},50);  
		}
	);
	
//头部导行结局	
//理财产品基金切换
function showFirstLevelMenu(menuId){
		var menus=document.getElementById("lqayay").getElementsByTagName("li");
		var menus1=document.getElementById("lqayay1").getElementsByTagName("font");
		for(i=0;i<menus.length;i++){
			if(menus[i].id==menuId){
				menus[i].className='hongdi';
			}else{
				menus[i].className='huidi';
			}
			if(menus1[i].id==menuId+1){
				menus1[i].style.display='block';
			}else{
				menus1[i].style.display='none';
			}

		}
}

//top_rigth_menu
$(document).ready(function(){
  
  $('div.mainlevel').mousemove(function(){
  $(this).find('div').slideDown();//you can give it a speed
  });
  $('div.mainlevel').mouseleave(function(){
  $(this).find('div').slideUp("fast");
  });
  
});

//滚动图片特效
//滚动图片特效
$('.slidePanel').flexslider({
    animation: "slide",
	directionNav: false,
	slideshowSpeed: 7000,
	animationSpeed: 1000,
    start: function (slider) {
    }
 }); 

//快捷菜单特效
		$("#jcNewProduct").jCarouselLite({
			btnNext: "#next",
			btnPrev: "#prev",
			visible:8,
			scroll:8,
			auto:false,
			speed:1500
		});

//菜单"更多”特效
		$(".gengduo").mouseenter(function(){						  								  				
	  				$(this).hide().siblings().show();							  				
			 });
		$(".gengduo").parent().mouseleave(function(){			  									  										  			
	  				$(this).children().hide().eq(0).show();
	  	 });