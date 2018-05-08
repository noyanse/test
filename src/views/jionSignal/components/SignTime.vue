<template>
  <div class="signTime">
    <p class="title"><i class="iconfont icon-signal3"></i>信号时分图</p>
    <div id="signTime"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "sign-time",
    mounted() {
      this.print()
    },
    methods: {
      print() {
        // 制作假数据
        let getData = () => {
          let xAxisData = [];
          let data = [];
          let value = 100 + ~~(Math.random() * 11);
          for (let i = 0; i < 40; i++) {
            let random = ~~(Math.random() * 8) * (Math.random() > .5 ? 1 : -1)
            random = value < 50 ? Math.abs(random) : random
            value += random
            xAxisData.push(i)
            data.push(value)
          }
          return {xAxisData, data}
        };

        let {xAxisData, data} = getData()

        let chanageData = () => {
          xAxisData.shift()
          xAxisData.push(xAxisData[xAxisData.length - 1] + 1)
          data.shift()
          let value = data[data.length - 1]
          let random = ~~(Math.random() * 8) * (Math.random() > .5 ? 1 : -1)
          random = value < 50 ? Math.abs(random) : random
          data.push(value + random)
          return {xAxisData, data}
        }
        let myChart = echarts.init(document.getElementById('signTime'));
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: false,
            data: ['Step Start']
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            top: 0,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: xAxisData,
            show: false,
            axisTick: {
              show: false,
              // color:'#fff',
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false
              //color:'#fff',
            },
            splitLine: {
              show: false,
              // color:'#fff',
            }
          },
          yAxis: {
            type: 'value',
            show: false,
            axisTick: {
              show: false,
              // color:'#fff',
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false
              //color:'#fff',
            },
            splitLine: {
              show: false,
              // color:'#fff',
            }
          },
          series: [
            {
              name: 'Step Start',
              type: 'line',
              step: 'start',
              showSymbol: false,
              lineStyle: {
                color: '#05DEB9'
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(5, 161, 231, .7)'
                    },
                      {
                        offset: 1,
                        color: 'rgba(5, 161, 231, .04)'
                      }
                    ]
                  )
                }
              },
              data: data
            }
          ]
        };
        myChart.setOption(option);
        setInterval(function () {
          chanageData()
          option.xAxis.data = xAxisData;
          option.series[0].data = data;
          myChart.setOption(option);
        }, 2100)
      }
    }
  }
</script>

<style lang="scss">
  .signTime {
    background: #252A31;
    min-height: 700px;
    margin-top: 5px;
    .title {
      color: #fff;
      padding: 16px 0;
      .iconfont {
        color: #05E7BB;
        font-size: 26px;
        padding: 0 15px;
      }
    }
    #signTime {
      width: 100%;
      height: 450px;
    }
  }
</style>
