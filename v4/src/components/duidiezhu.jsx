import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'

// 堆叠柱

const option2 = {
    tooltip: {
        padding: 10,
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b0} <br /> {a0} <span style="color: black">{c0}</span> 万元<br /> {a1} <span style="color: black">{c1}</span> 万元<br /> {a2} <span style="color: black">{c2}</span> 万元<br />  ',
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
        data:  ['现金消耗', '信用金余额', '赠送金余额']
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
    },
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
    color: ['#4080FF', '#6EDB37', '#FFAC40' ],
    grid: {
        top: '5px',
        left: '0%',
        right: '10px',
        bottom: '40px',
        containLabel: true
    },
    series: [
        {
            name: '现金消耗',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            // showBackground: true,
        },
        {
            name: '信用金余额',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'Ad',
            // showBackground: true,
        },
        {
            name: '赠送金余额',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'Ad',
            // showBackground: true,
        }
    ]
};

export default class extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={option2}
                style={{
                    height: 800,
                    width: 800
                }}
                onEvents={{
                    'finished': () => {
                        console.log(123123)
                    },
                }}
            />
        )
    }
}
