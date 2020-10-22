$(function(){
	//地区选择
		var pro_city = sessionStorage.getItem('city_pro');
		if(pro_city){
			$("#city").html(pro_city);
			 
		}
		var city =$("#city").html();
		$(".city_choose").on('tap',function(e){
			e.stopPropagation();
			window.location.href = 'test.html';
		})
		var loanTitle = '';
		var loanDetial = '';
		//机构类型选择
		$('.mechanism-type').on('tap',function(e){
			var This = $(this).find('span').eq(3);
			e.stopPropagation();
			$('.mask-all').css('display','block');
			$('.mechanism-choose li').on('click',function(e){
				var lastHtml = $(".mechanism-choose li:last-of-type").html();
				var thisHtml = $(this).html();
					e.stopPropagation();
					$('.mask-all').css('display','none');
					if(lastHtml != thisHtml){
						This.html($(this).html());
					}
			})
		})
		//选择产品类型
		$(".product_type").on('tap',function(e){
			e.stopPropagation();
			$(".mask-all1").css('display','block');
			//选择具体类型
			$(".title1 span").on('click',function(e){
				e.stopPropagation();
				$(this).addClass("active").siblings().removeClass('active');
				$(".loan-type ul").hide().eq($(this).index()).show();
			})
			$('.loan-type li').on('click',function(e){
					e.stopPropagation();
					$('.loan-type li').removeClass('active');
					$(this).addClass('active').siblings().removeClass('active');
			})
			//取消
			$('.choose span:first-of-type').on('click',function(e){
					e.stopPropagation();
					$(".mask-all1").hide();
			})
			//确定
			$('.choose span:last-of-type').on('click',function(e){
					e.stopPropagation();
					 loanTitle = $('.title1').find('.active').html();
					var index =  $('.title1').find('.active').index();
					loanDetial = $(".loan-type ul").eq(index).find('.active').html();
					if(loanTitle != 'undefined' && loanDetial != "undefined"){
						$('.product_type span:last-of-type').html(loanTitle+":"+loanDetial)
					}
					$(".mask-all1").hide();
					var house_loan = $(".house_loan");
					var car_loan = $(".car_loan");
					if(house_loan.hasClass('active')){
						$(".menudown").css('display','block');
						$('.housecar').html('房产');
					}
					if(car_loan.hasClass('active')){
						$(".menudown").css('display','block');
						$('.housecar').html('汽车');
					}
					
					//点击房产类型
					$(".menudown").on('click',function(e){
						e.stopPropagation();
						var html = $(".housecar").html();
						if(html == "房产"){
							$(".type_house").css('display','block');
						}
					})
			})
		})
//		//房产选择
			$(".type_house li").on('click',function(e){
				e.stopPropagation();
				$(this).addClass('active').siblings().removeClass('active');
			})
			$('.save1').on('click',function(e){
				e.stopPropagation();
				$(".type_house").css('display','none');
				var value = $(".list").find('.active').html();
				$('.type_housecar').html(value);
				
			})
			//还款方式选择
			$(".pay_type").on('tap',function(e){
				e.stopPropagation();
				$(".mask-all2").css('display','block');
				$(".mask-all2").find('.choose').removeClass('choose').addClass('no_choose');
			})
			//放款时间
			$(".paytime").on('tap',function(e){
				timeonoff = false;
				e.stopPropagation();
				setTimeout(function(){
					$("#pay_time").css('display','block');
				},100)
				var offHtml = $("#pay_time").find('li').eq(9).html();
				var selfHtml =$("#pay_time").find('li').eq(8).html();
				$("#pay_time li").on('click',function(e){
					var thisHtml = $(this).html();
					e.stopPropagation();
					if(thisHtml != offHtml&&thisHtml !=selfHtml ){
					
						$(".paytime").find('span').eq(2).html(thisHtml);
						$(".paytime").find('span').eq(2).css('background','none');
					}
					if(thisHtml != selfHtml){
						$("#pay_time").css('display','none');
					}
					if(thisHtml == selfHtml){
						$("#pay_time").find('ul').css('display','none');
						$("#pay_time").find('.edtion_box').css('display','block');
						$(".off").on("click",function(e){
							e.stopPropagation();
//							$("#pay_time").css('display','none');
							$("#pay_time").find('ul').css('display','block');
							$("#pay_time").find('.edtion_box').css('display','none');
						})
						$(".sure").on('click',function(e){
							e.stopPropagation();
							var value = $("#pay_time .edtion").val();
							if(value){
								$("#pay_time").css('display','none');
								$("#pay_time").find('.edtion_box').css('display','none');
								$(".paytime").find('span').eq(2).html(value);
								$(".paytime").find('span').eq(2).css('background','none');
							}
						})
					}
				})
			})
			//还款方式
			$(".mask-all2 li").on('click',function(e){
					e.stopPropagation();
					var lastHtml = $(".mask-all2 li:last-of-type").find('span').eq(0).html();
					var spanHtml = $(this).find('span').eq(0).html();
					var onoff = $(this).find('span:first-of-type').hasClass('choose');
					if(spanHtml != lastHtml){
						if(onoff){
							$(this).find('span:first-of-type').addClass('no_choose').removeClass("choose");
							
						}else{
							$(this).find('span:first-of-type').addClass('choose').removeClass("no_choose");
						}
					}
				})
				//取消
				var pay_metod = '';
				$(".mask-all2 .off").on('click',function(e){
					e.stopPropagation();
					$(".mask-all2").css('display','none');
				})
				//确定
				$(".mask-all2 .sure").on('touchstart',function(e){
					e.stopPropagation();
					$(".mask-all2").css('display','none');
					var value = $(".mask-all2 li").find('.choose').next().html();
					var choose = document.querySelectorAll('.mask-all2 .choose');
					var str = '';
					for(var i = 0;i<choose.length;i++){
						str+=choose[i].nextElementSibling.innerHTML+',';
					}
					$('.pay_metod').html(value);
					pay_metod = str.split(',');
					pay_metod.pop();
				})
				//添加特色标签
				var Tags = '';
				$(".add").on('tap',function(e){
					e.stopPropagation();
					$(".advantage").css('display','block');
				})
				$(".advantage li").on('touchstart',function(e){
					var num = $(".advantage").find('.active').length;
					if(num<5){
						$(this).toggleClass("active");
					}else{
						$(this).removeClass('active');
					}
				})
				$('.save').on('touchstart',function(e){
					e.stopPropagation();
					$('.advantage').css('display','none');
					$('.add').find('p').eq(1).css('background','none');
					$('.add').find('p').eq(1).empty();
					var str = '';
					var html;
					var active = document.querySelectorAll(".advantage .active");
					for(var i = 0;i<active.length;i++){
						html =active[i].innerHTML;
						str += active[i].innerHTML+',';
					}
//					console.log(str);
					Tags = str.split(',');
					Tags.pop();
//					console.log(Tags);
					$('.add').find('p').eq(1).html('已添加');
				})
				//产品简述
				 var projs =  sessionStorage.getItem('projs')
				$(".projs").on('tap',function(e){
					e.stopPropagation();
					window.location.href = 'projs.html';
				})
				if(projs){
					$(".projs").find('p').eq(1).html('已添加');
				}
			//流程
			$(".applyprocess").on('tap',function(e){
				e.stopPropagation();
				window.location.href = 'applyprocess.html';
			})
				
				//申请条件
				$(".applyconditon").on('tap',function(e){
					e.stopPropagation();
					$("#applyconditon").css('display','block');
					var i = 0;
					var onoff = true;
					$('.add_condition').on('touchstart',function(){
						if(onoff){
							i++;
							var condition = $("<div class='condition'><span>"+i+"</span><p>请输入申请条件</p></div>");
							
							$('#boxconditon').append(condition);
						}
						onoff = false;
						$(".condition").on('click',function(e){
							onoff = false;
							var This = $(this);
							e.stopPropagation();
							$(".mask_all").css('display','block');
							if($(".edtion").val()){
								if($(this).find('p').html() == '请输入申请条件'){
									$(".edtion").val('');
								}else{
									$(".edtion").val($(this).find('p').html());
								}
							}
							$(".off").on('click',function(e){
								e.stopPropagation();
								$(".mask_all").css('display','none');
							})
							$(".sure").unbind("click").click(function(e){
								var value = $(".edtion").val();
								if(value){
									This.find('p').html(value);
									onoff =true;
								}else{
									onoff = false;
									This.find('p').html('请输入申请条件');
								}
								$(".mask_all").css('display','none');
							})
							$(".save").on('click',function(e){
								e.stopPropagation();
								$("#applyconditon").css('display','none');
								$(".applyconditon").find('p').eq(1).html("已添加");
								var conditionP = document.querySelectorAll('#applyconditon .condition p');
								var conditionSpan = document.querySelectorAll('#applyconditon .condition span');
								var html = '';
								if(conditionP.innerHTML !='请输入申请条件' ){
									for(var i= 0;i<conditionP.length;i++){
										html+= conditionSpan[i].innerHTML+"."+ conditionP[i].innerHTML + "</n>";
									}
									console.log(html);
								}
								entrycriteria = entrycriteria;
							})
						})
					})
				})
				//添加所需资料
				$('.needdata').on('tap',function(e){
					var i = 0;
					var onoff = true;
					$("#needdata").css('display','block');
					$('#needdata li').eq(1).on('click',function(){
						if(onoff){
							i++;
						
							var condition = $("<div class='condition'><span>"+i+"</span><p>请输入所需材料</p></div>");
							
							$('.list').append(condition);
						}
						onoff = false;
						$(".condition").on('click',function(e){
							onoff = false;
							var This = $(this);
							e.stopPropagation();
							$(".mask_all").css('display','block');
							if($(".edtion").val()){
								if($(this).find('p').html() == '请输入所需材料'){
									$(".edtion").val('');
								}else{
									$(".edtion").val($(this).find('p').html());
								}
							}
							$(".off").on('click',function(e){
								e.stopPropagation();
								$(".mask_all").css('display','none');
							})
							$(".sure").unbind("click").click(function(e){
								var value = $("#needdata .edtion").val();
								if(value){
									This.find('p').html(value);
									onoff =true;
								}else{
									onoff = false;
									This.find('p').html('请输入所需材料');
								}
								$(".mask_all").css('display','none');
							})
						})
					})
					$("#save").on('click',function(e){
						var conditonSpan = document.querySelectorAll('#needdata .condition span');
						var conditonP = document.querySelectorAll('#needdata .condition p');
						var str = '';
						for(var i=0;i<conditonP.length;i++){
							str += conditonSpan[i].innerHTML+"."+conditonP[i].innerHTML+"/n";
						}
						applymaterial = str;
						console.log(str)
						e.stopPropagation();
						$("#needdata").css('display','none');
						$(".needdata").find('p').eq(1).html("已添加");
						
					})
					$('#needdata li').eq(0).on('click',function(e){
						e.stopPropagation();
						$("#list_box").css('display','block');
					})
					$(".list1 li").on('click',function(e){
						e.stopPropagation();
						$(this).toggleClass('active').siblings().removeClass('active');
						
					})
					$("#list_box .save").on('click',function(e){
						e.stopPropagation();
						i++;
						var liActive = document.querySelectorAll("#list_box .active");
						for(var j = 0;j<liActive.length;j++){
							var value = liActive[j].innerHTML;
							condition = $("<div class='condition'><span>"+i+"</span><p>"+value+"</p></div>");
						}
						
						$('.list').append(condition);
						$("#list_box").css('display','none');
					})
				})
				//更多
				$('.more').on('tap',function(e){
					e.stopPropagation();
					$(".morelist").toggle();
						myScroll.refresh();
				})
				//利息
				$(".lixi").on('tap',function(e){
					e.stopPropagation();
					$("#lixi").css('display','block');
					$(".save").on('click',function(e){
						e.stopPropagation();
						$("#lixi").css('display','none');
						$('.lixi').find('p').eq(1).html('已添加');
					})
				})
				//提前还款
				$(".beforepay").on('tap',function(e){
					e.stopPropagation();
					$("#beforepay").css('display','block');
					$(".save").on('click',function(e){
						e.stopPropagation();
						$("#beforepay").css('display','none');
						$('.beforepay').find('p').eq(1).html('已添加');
					})
				})
				//相关费用
				$(".about_pay").on('tap',function(e){
					e.stopPropagation();
					$("#about_pay").css('display','block');
					$(".save").on('click',function(e){
						e.stopPropagation();
						$("#about_pay").css('display','none');
						$('.about_pay').find('p').eq(1).html('已添加');
					})
				})
				//成功案例
				$(".success_ex").on('tap',function(e){
					e.stopPropagation();
					$("#success_ex").css('display','block');
					$(".save").on('click',function(e){
						e.stopPropagation();
						$("#success_ex").css('display','none');
						$('.success_ex').find('p').eq(1).html('已添加');
					})
				})
				//常见问题
				$(".problem_pub").on('tap',function(e){
					e.stopPropagation();
					$("#commonproblem").css('display','block');
					var onoff = true;
					$("#problem p").on('click',function(e){
						e.stopPropagation();
						if(onoff){
							var condition = $("<li class='condition'>请输入问题</li>");
							$('.list').append(condition);
						}
						onoff = false;
						$(".condition").on('click',function(e){
							onoff = false;
							var This = $(this);
							e.stopPropagation();
							$(".mask_all").css('display','block');
							if($(".edtion").val()){
								if($(this).find('p').html() == '请输入问题'){
									$(".edtion").val('');
								}else{
									$(".edtion").val($(this).find('p').html());
								}
							}
							$(".off").on('click',function(e){
								e.stopPropagation();
								$(".mask_all").css('display','none');
							})
							$(".sure").unbind("click").click(function(e){
								var value = $("#commonproblem .edtion").val();
								if(value){
									This.html(value);
									
									onoff =true;
								}else{
									onoff = false;
									This.find('p').html('请输入问题');
								}
								$(".mask_all").css('display','none');
							})
							$(".save").on('click',function(e){
								e.stopPropagation();
								$("#commonproblem").css('display','none');
								$(".problem_pub").find('p').eq(1).html("已添加");
							})
						})
					})
				})
				//职业类型选择
				$(".job_type").on('tap',function(e){
					e.stopPropagation();
					$("#job_type").css('display','block');
					$("#job_type").find('.off').on('click',function(e){
						e.stopPropagation();
						$("#job_type").css('display','none');
					})
				})
				$("#job_type li").on('click',function(e){
					var choose = $(this).find('span').eq(0);
					e.stopPropagation();
					if(choose.hasClass('choose')){
						choose.addClass('no_choose').removeClass("choose");
					}else{
						choose.addClass('choose').removeClass("no_choose");
					}
				})
				$("#job_type").find('.on').on('click',function(e){
					e.stopPropagation();
					var length = $("#job_type").find('.choose').next().length;
					var spanHtml = $("#job_type").find('.choose').next().text();
					var choose = document.querySelectorAll('#job_type .choose');
					var str = '';
					for(var i=0;i<choose.length;i++){
						str+=choose[i].nextElementSibling.innerHTML+',';
					}
					occupationTypes = str.split(',');
					occupationTypes.pop();
					$("#job_type").css('display',"none");
					$(".job_type").find('p').eq(1).empty();
					$(".job_type").find('p').eq(1).css('background','none');
						$(".job_type").find('p').eq(1).html(str);
				})
				//特殊职业
				$(".job_T").on('tap',function(e){
					e.stopPropagation();
					setTimeout(function(){
						$("#job_T").css('display','block');
					},300)
					$("#job_T").find('.off').on('click',function(e){
						e.stopPropagation();
						$("#job_T").css('display','none');
							var spanChoose = $("#job_T").find('span').hasClass('choose');
						if(spanChoose){
							$(".job_T").find('p').eq(1).html('已添加');
						}else{
							$(".job_T").find('p').eq(1).html('未添加');
						}
					})
				})
				$("#job_T li").on('click',function(e){
					var choose = $(this).find('span').eq(0);
					e.stopPropagation();
					if(choose.hasClass('choose')){
						choose.addClass('no_choose').removeClass("choose");
					}else{
						choose.addClass('choose').removeClass("no_choose");
					}
				})
				$("#job_T").find('.on').on('click',function(e){
					e.stopPropagation();
					var spanChoose = $("#job_T").find('span').hasClass('choose');
					if(spanChoose){
						$("#job_T").css('display',"none");
						$(".job_T").find('p').eq(1).html('已添加');
					}
					var choose = document.querySelectorAll('#job_T .choose');
					var str = "";
					for(var i =0;i<choose.length;i++){
						str+=choose[i].nextElementSibling.innerHTML+',';
					}
					specialOccupations = str.split(',');
					specialOccupations.pop();
				})
				//马上发布
				var organizationtype,organizationname,name,type,ratetype,minrate,maxrate,repaymentmethod,maxlendinglimit,minlendinglimit,
				mincreditperiod,maxcreditperiod,maxapprovalloanday,minapprovalloanday,tags,city,typeDetail,occupationTypes,specialOccupations,intro,entrycriteria,applymaterial;
				var operatorId = sessionStorage.getItem('advier_sign');
				$('.footer').on("click",function(e){
					e.stopPropagation();
					//id
					operatorId:operatorId;
					//城市
					city:city;
					//机构类型
					organizationtype = $("#organizationtype").html();
					//机构名称
					organizationname = $(".organizationname").val();
					//利息
					name = $(".pro_name").val();
					type = loanTitle;
					typeDetail =loanDetial;
					if($(".ratetype").val() == '综合月息'){
						ratetype = 0;
					}else if($(".ratetype").val() == '月利率'){
						ratetype = 1;
					}
					minrate = $("#ratetype_minimum").val();
					maxrate = $("#ratetype_max").val();
					repaymentmethod = pay_metod;
					console.log(repaymentmethod);
					//贷款额度
					maxlendinglimit = $("#maxlendinglimit").val();
					minlendinglimit = $("#minlendinglimit").val();
					//贷款期限
					mincreditperiod = $("#mincreditperiod").val();
					maxcreditperiod = $("#maxcreditperiod").val();
					//放款时间
					var time = $('.approvalloanday').html()
					time = time.substring(0,time.length-1);
					time = time.split('-');
					minapprovalloanday = time[0];
					maxapprovalloanday = time[1];
//					特色标签
					tags = Tags
					//职业类型
					occupationTypes = occupationTypes;
					//特殊职业
					specialOccupations = specialOccupations;
					//产品简述
					intro = projs
					//申请条件
					entrycriteria =entrycriteria;
//					申请材料
					applymaterial = applymaterial;
				})
})