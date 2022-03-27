import React, {PureComponent} from "react"
import ReactEcharts from "echarts-for-react"
import Echarts from 'echarts'

var option2 = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: '0',
        left: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
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
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'},
                {value: 300, name: '视频广告1'},
                {value: 300, name: '视频广告2'},
                {value: 300, name: '视频广告3'},
                {value: 300, name: '视频广告4'},
                {value: 300, name: '视频广告5'},
                {value: 300, name: '视频广告6'},
            ]
        }
    ]
};

export default class extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={option2}
                style={{
                    height: 400,
                    width: 600
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
