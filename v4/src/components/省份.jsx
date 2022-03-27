import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'
import beijing from 'echarts/map/json/province/beijing'

Echarts.registerMap('北京', beijing)


var option2 = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    color: [], //
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'middle',
        color: ['#0057a4', '#e3ecff'], //  渐变颜色
        text: ['高', '低'],
        // textStyle: {  // '高' '低' 的样式，比如，字体颜色，大小
        //     color: '#ff0',
        // },
        calculable: true
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: '北京',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true,
                }
            },
            itemStyle: {
                emphasis: {
                    areaColor: '#b5bdff' // 鼠标移上去后的颜色
                }
            },
            data: [
                {name: '东城区', value: Math.round(Math.random() * 1000)},
                {name: '西城区', value: Math.round(Math.random() * 1000)},
                {name: '朝阳区', value: Math.round(Math.random() * 1000)},
                {name: '丰台区', value: Math.round(Math.random() * 1000)},
            ]
        },
    ]
}

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
