var fontColor = '#333';
option ={
    title:{
        text:'分所销售水量占比',
        top:'5%',
        left:'center',
        textStyle:{
            color:'#FFF',
            align:'center',
        }
    },
        backgroundColor:'#FFF',
		grid: {
	        left: '9%',
            right: '10%',
            top:'20%',
	        bottom: '15%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			trigger: 'item'
		},
		legend: {
			show:true,
			x:'center',
			top:'12%',
			y:'35',
			icon: 'stack',
			itemWidth:10,
			itemHeight:10,
			textStyle:{
				color:'#333'
			},
			data:['02点-06点','06点-10点','10点-14点','14点-18点','18点-22点','22点-02点']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: fontColor
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#397cbc'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:false,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },
	            data : ['3月14日','3月15日','3月16日','3月17日','3月18日','3月19日','3月20日']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '辆',
				min:0,
				max:1000,
				axisLabel : {
					formatter: '{value}',
					textStyle:{
						color:'#333'
					}
				},
				axisLine:{
					lineStyle:{
						color:'#333'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:true,
					lineStyle:{
						color:'#11366e'
					}
				}
			}
		],
		series : [
			{
				name:'02点-06点',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
						color:'#0092f6',
			            lineStyle: {
							color: "#0092f6",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,146,246,0.9)'
							}]),
			            }
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				data:[120, 132, 101, 134, 90, 230, 210]
			},
			{
			    name:'06点-10点',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
				
	            itemStyle: {
			        normal: {
			            color:'#e75059',
			            lineStyle: {
							color: "#e75059",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,212,199,0.9)'
							}]),
			            }
			        }
				},
				data:[220, 182, 191, 210, 230, 270, 270]
			},
			{
				name:'10点-14点',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: '#8d44ad',
			            lineStyle: {
							color: "#8d44ad",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(114,144,89,0.9)'
							}]),
			            }
			        }
				},
				data:[150, 232, 201, 154, 190, 180, 210,150, 182, 201, 154, 190]
			},
			{
				name:'14点-18点',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: '#3A44FB',
			            lineStyle: {
							color: "#3A44FB",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,46,101,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,166,246,0.9)'
							}]),
			            }
			        }
				},
				data:[150, 232, 201, 154, 190, 180, 210,150, 182, 201, 154, 190]
			},
			{
				name:'18点-22点',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: '#6FE81A',
			            lineStyle: {
							color: "#6FE81A",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,212,199,0.9)'
							}]),
			            }
			        }
				},
				data:[150, 232, 201, 154, 190, 180, 210,150, 182, 201, 154, 190]
			},
			{
				name:'22点-02点',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: '#aecb56',
			            lineStyle: {
							color: "#aecb56",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,212,199,0.9)'
							}]),
			            }
			        }
				},
				data:[200, 232, 201, 200, 190, 190, 210,190, 182, 201, 154, 190]
			}
		]
	};