import {
    Container,
    Header,
    Aside,
    Main,
    Select,
    Option,
    Button,
    Loading,
    Carousel,
    CarouselItem,
    Timeline,
    TimelineItem,
    Card
} from "element-ui"
import * as echarts from 'echarts'
import theme from "assets/js/theme";
import 'echarts-liquidfill'
import animated from 'animate.css'


import particles from 'particles.js'


import VueTypedJs from 'vue-typed-js'

import { scrollBoard, capsuleChart, borderBox1, borderBox11 } from '@jiaminghi/data-view'

export default {
    install(Vue) {

        Vue.prototype.$echarts = echarts
        echarts.registerTheme("westeros", theme);

        Vue.prototype.$ELEMENT = { size: "small" }


        Vue.use(scrollBoard)
        Vue.use(capsuleChart)
        Vue.use(borderBox1)
        Vue.use(borderBox11)
        Vue.use(animated)

        Vue.use(VueTypedJs)

        Vue.use(particles)

        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Loading)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Button)
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Timeline)
        Vue.use(TimelineItem)
        Vue.use(Card)
    }
}