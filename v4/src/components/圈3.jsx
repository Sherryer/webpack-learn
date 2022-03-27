import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'


const data = [
    {name: '张三', value: '111', color: '#e4ff3c'},
    {name: '李四', value: '222', color: '#72ff56'},
    {name: '王五', value: '333', color: '#70d1ff'},
    {name: '赵六', value: '444', color: '#b054ff'},
    {name: '赵六1', value: '444', color: '#b054ff'},
    {name: '赵六2', value: '444', color: '#b054ff'},
    {name: '赵六3', value: '444', color: '#b054ff'},
    {name: '赵六4', value: '444', color: '#b054ff'},
    {name: '赵六5', value: '444', color: '#b054ff'},
    ]


var option2 = {
    title: {
        text: '标题 各区域客户数占比',
        subtext: '纯属虚构',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%',
    },
    legend: {
        bottom: '0',
        left: 'center'
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['30%', '50%'],
            center: ['50%', '50%'],
            label: {
                formatter: '{b|{b}：}{per|{d}%}',
                rich: {
                    b: {
                        color: '#333',
                    },
                    per: {
                        color: '#333',
                    },
                    c: {
                        color: '#333',
                    },
                },
            },
            data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
}

export default class extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={option2}
                style={{
                    height: 500,
                    width: 500
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
