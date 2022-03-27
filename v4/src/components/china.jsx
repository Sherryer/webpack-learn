import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'
import china from 'echarts/map/json/china'

Echarts.registerMap('china', china)


var option2 = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    // color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
            mapType: 'china',
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
                {name: '北京', value: Math.round(Math.random() * 1000)},
                {name: '天津', value: Math.round(Math.random() * 1000)},
                {name: '上海', value: Math.round(Math.random() * 1000)},
                {name: '重庆', value: Math.round(Math.random() * 1000)},
                {name: '河北', value: Math.round(Math.random() * 1000)},
                {name: '河南', value: Math.round(Math.random() * 1000)},
                {name: '云南', value: Math.round(Math.random() * 1000)},
                {name: '辽宁', value: Math.round(Math.random() * 1000)},
                {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                {name: '湖南', value: Math.round(Math.random() * 1000)},
                {name: '安徽', value: Math.round(Math.random() * 1000)},
                {name: '山东', value: Math.round(Math.random() * 1000)},
                {name: '新疆', value: Math.round(Math.random() * 1000)},
                {name: '江苏', value: Math.round(Math.random() * 1000)},
                {name: '浙江', value: Math.round(Math.random() * 1000)},
                {name: '江西', value: Math.round(Math.random() * 1000)},
                {name: '湖北', value: Math.round(Math.random() * 1000)},
                {name: '广西', value: Math.round(Math.random() * 1000)},
                {name: '甘肃', value: Math.round(Math.random() * 1000)},
                {name: '山西', value: Math.round(Math.random() * 1000)},
                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                {name: '陕西', value: Math.round(Math.random() * 1000)},
                {name: '吉林', value: Math.round(Math.random() * 1000)},
                {name: '福建', value: Math.round(Math.random() * 1000)},
                {name: '贵州', value: Math.round(Math.random() * 1000)},
                {name: '广东', value: Math.round(Math.random() * 1000)},
                {name: '青海', value: Math.round(Math.random() * 1000)},
                {name: '西藏', value: Math.round(Math.random() * 1000)},
                {name: '四川', value: Math.round(Math.random() * 1000)},
                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                {name: '海南', value: Math.round(Math.random() * 1000)},
                {name: '台湾', value: Math.round(Math.random() * 1000)},
                {name: '香港', value: Math.round(Math.random() * 1000)},
                {name: '澳门', value: Math.round(Math.random() * 1000)}
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
