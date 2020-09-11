<template>
  <div class="mainContain">
    <el-row >
      <el-col :span="16" class="charBlock">
        <div ref="echart1"></div>
      </el-col>
      <el-col :span="8" class="charBlock">
        <div ref="echart2"></div>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="16" class="charBlock">
        <div ref="echart3"></div>
      </el-col>
      <el-col :span="8" class="charBlock">
        <div ref="echart4"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "bar-chart",
   data() {
    const option1 = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          toolbox: {
              feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
              }
          },
          legend: {
              data: ['蒸发量', '降水量', '平均温度']
          },
          xAxis: [
              {
                  type: 'category',
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                  axisPointer: {
                      type: 'shadow'
                  }
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '水量',
                  min: 0,
                  max: 250,
                  interval: 50,
                  axisLabel: {
                      formatter: '{value} ml'
                  }
              },
              {
                  type: 'value',
                  name: '温度',
                  min: 0,
                  max: 25,
                  interval: 5,
                  axisLabel: {
                      formatter: '{value} °C'
                  }
              }
          ],
          series: [
              {
                  name: '蒸发量',
                  type: 'bar',
                  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                  name: '降水量',
                  type: 'bar',
                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                  name: '平均温度',
                  type: 'line',
                  yAxisIndex: 1,
                  data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
          ]
      };
    const option2 = {
        title: {
            text: '饼状图',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ffffff'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 274, name: '联盟广告'},
                    {value: 235, name: '视频广告'},
                    {value: 400, name: '搜索引擎'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: '#ffffff'
                },
                labelLine: {
                    lineStyle: {
                        color: '#ffffff'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    const option3 = {
    title: {
          text: '堆叠柱状图',
          left: 'center',
          top: 0,
          textStyle: {
              color: '#ffffff'
          }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '16%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
        }
    ]
};
    const option4 = {
        title: {
            text: '极坐标系下的堆叠柱状图',
            left: 'center',
            bottom: 0,
            textStyle: {
                color: '#ccc'
            }
        },
        angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };

    return{
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
    }
  },
  created(){

  },
  mounted(){
    this.drawLine();
  },
  methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(this.$refs.echart1)
        let myChart2 = this.$echarts.init(this.$refs.echart2)
        let myChart3 = this.$echarts.init(this.$refs.echart3)
        let myChart4 = this.$echarts.init(this.$refs.echart4)
        // 绘制图表
        myChart1.setOption(this.option1);
        myChart2.setOption(this.option2);
        myChart3.setOption(this.option3);
        myChart4.setOption(this.option4);
      },
  },
};
</script>

<style scoped lang="scss">
  .mainContain{
    background: none;
    overflow-y: auto;
    .charBlock{
    >div{
        width: 100%;
        height:400px;
        background: #99a9bf;
        margin-top: 10px;
        border-radius: 10px;
    } 
  }
  }
  .mainContain::-webkit-scrollbar {
    border-radius: 2px;
    width: 4px;   /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
    background: white;
  }
  .mainContain::-webkit-scrollbar-thumb {
    height: 20px;    /* 滚动条滑块长度 */
    background-color: #ccc;
  }
  
</style>
