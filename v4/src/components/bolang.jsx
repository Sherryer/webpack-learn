import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'

// 波浪

const option2 = {
  // title: {
  //   text: '堆叠区域图'
  // },
  color: ['#4080FF', '#BED0FA', '#BED0FA'],
  tooltip: {
    padding: 10,
    trigger: 'axis',
    formatter: '{b0} <br /> {a0} <span style="color: black">{c0}</span> 万元<br /> 健康区间  <span style="color: black">{c1} ～ {c2}</span> 万元',
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
    data:  ['现金消耗趋势', '健康区间']
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },
  grid: {
    left: '0%',
    top: '2%',
    right: '0%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
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
      name: '现金消耗趋势',
      type: 'line',
      data: [820, 932, 901, 334, 1290, 1330, 1320],
      smooth: true,
    },
    {
      name: '健康区间',
      type: 'line',
      stack: '区间',
      data: [120, 132, 101, 134, 90, 230, 210],
      smooth: true,
    },
    {
      name: '健康区间',
      type: 'line',
      stack: '区间',
      areaStyle: {
        opacity: 0.2,
      },
      data: [320, 332, 301, 334, 390, 330, 320],
      smooth: true,
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
