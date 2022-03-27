import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'


const pieChartOption = {
    title: '各区域客户数占比',
    data: [
        {name: '张三', value: '111', color: '#e4ff3c'},
        {name: '李四', value: '222', color: '#72ff56'},
        {name: '王五', value: '333', color: '#70d1ff'},
        {name: '赵六', value: '444', color: '#b054ff'},
    ],
    seriesName: '客户数',
};

let createPieChartOption = ({ title, data, seriesName = '' }) => ({
    title: {
        text: title,
        subtext: '纯属虚构',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%',
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {},
    //     },
    // },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        // left: 10,
        bottom: 0,
        data: data.map(item => item.name),
    },
    series: [
        {
            name: seriesName,
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
            itemStyle: {
                normal: {
                    color(item) {
                        return item.data.color;
                    },
                },
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
})

var option2 = createPieChartOption(pieChartOption)

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
