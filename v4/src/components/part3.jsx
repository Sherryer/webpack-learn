import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'

// 波浪

const option2 = {
  // title: {
  //   text: '堆叠区域图'
  // },
  color: ['#4080FF', '#4080FF', '#BED0FA', '#BED0FA'],
  tooltip: {
    padding: 10,
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: '{b0} <br /> {a0} <span style="color: black">{c0}</span> 天<br /> {a1} <span style="color: black">{c1}</span> 天<br /> {a2} <span style="color: #FA8E00">{c2}</span> 天<br /> {a3} <span style="color: #FA8E00;\n">\< {c3}</span> 天',
    backgroundColor: '#ffffff',
    borderWidth:'1',
    borderColor:'#eee',
    textStyle:{
      color:'#666',
    },
  },
  legend: {
    left: 'center',
    bottom: '4px',
    data:  ['现金可用天数', '信用金可用天数', '合计可用天数', '合计健康区间']
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },
  grid: {
    top: '5px',
    left: '0%',
    right: '10px',
    bottom: '40px',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        lineStyle: {
          color: '#E6E8ED',
          // type: 'dashed',
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#626366'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#E6E8ED',
        }
      },
      axisLabel: {
        textStyle: {
          color: '#626366'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#E6E8ED'
        }
      }
    }
  ],
  series: [
    {
      name: '现金可用天数',
      type: 'line',
      // stack: '总量',
      // label: {
      //   normal: {
      //     show: true,
      //     position: 'top'
      //   }
      // },
      data: [820, 932, 901, 334, 790, 530, 320],
    },
    {
      name: '信用金可用天数',
      type: 'bar',
      // stack: '总量',
      // areaStyle: {},
      data: [20, 32, 101, 34, 90, 30, 10],
    },
    {
      name: '合计可用天数',
      type: 'bar',
      // stack: '总量',
      // areaStyle: {},
      data: [20, 32, 101, 34, 90, 30, 10],
    },
    {
      name: '合计健康区间',
      type: 'line',
      stack: '总量',
      areaStyle: {
        opacity: 0.2,
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
  ]
};


export default class extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={option2}
                style={{
                    height: 800,
                    width: 800,
                }}
                // onEvents={{
                //     'finished': () => {
                //         console.log(123123)
                //     },
                // }}
            />
        )
    }
}
