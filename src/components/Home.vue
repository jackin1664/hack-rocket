<template>
    <div class="home">
        <div class="home-content">
            <!--        标题部分-->
            <div class="home-title">
                The contracts supporting AavegotchiDAO were audited, However,it is still experimental software. Please
                use at
                your own risk.
            </div>
            <!--      内容部分-->
            <div class="nav">
                <!--        左边折线图-->
                <div class="home-chart">
                    <!--              上边部分-->
                    <div class="home-top">
                        <div class="home-top-list">
                            <div class="ht-text">Buy Price</div>
                            <div class="ht-num">0.541<span>DAI</span></div>
                        </div>
                        <div class="home-top-list">
                            <div class="ht-text">Reserve</div>
                            <div class="ht-num">5,579,890 <span>DAI</span></div>
                        </div>
                        <div class="home-top-list">
                            <div class="ht-text">Curve Issuance</div>
                            <div class="ht-num">15,692,960 <span>DAI</span></div>
                        </div>
                        <div class="home-top-list">
                            <div class="ht-text">Total Supply</div>
                            <div class="ht-num">23,192,960 <span>DAI</span></div>
                        </div>
                    </div>
                    <!--            下半部分-->
                    <div class="home-bottom">
                        <ve-line :x-axis="xAxis" :y-axis="yAxis" :data="chartData"
                                 :legend-visible="false" :tooltip-visible="false" :settings="chartSettings"></ve-line>
                    </div>
                </div>
                <!--        右边内容-->
                <div class="home-deal">
                    <!--          token下拉框-->
                    <div class="home-dropdown">
                        <div class="dropdown-text">token</div>
                        <div @click="dropicon=!dropicon" class="dropdown-content">
                            <div class="dropdown-content-text">{{dropname}}</div>
                            <div v-show="dropicon==1" class="dropdown-img">
                                <img src="../assets/drop-top.png"/>
                            </div>
                            <div v-show="dropicon!=1" class="dropdown-img">
                                <img src="../assets/drop-down.png"/>
                            </div>
                            <!--              下拉框-->
                            <div v-show="dropicon!=1" class="dropdown-bottom">
                                <div :class="dropname==item.namea?'droplist-change':'droplist'"
                                     @click="actionDrop(item)" class="" v-for="(item,index) in droplist" :key="index">
                                    <div class="droplist-name">{{item.namea}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--           tab切换-->
                    <div class="deal-tab">
                        <div class="tab">
                            <div @click="changeTab(0)" class="tab-text">BUY</div>
                            <div :class="tab==0?'tab-line-change':'tab-line'" class=""></div>
                        </div>
                        <div class="tab">
                            <div @click="changeTab(1)" class="tab-text">SELL</div>
                            <div :class="tab==1?'tab-line-change':'tab-line'" class=""></div>
                        </div>
                        <div @click="dialog=true" class="tab-btn">
                            <div class="tab-btn-c">
                                <div class="tab-btn-icon">
                                    <img src="../assets/create.png"/>
                                </div>
                                <div class="tab-btn-text">Create</div>
                            </div>
                        </div>
                    </div>
                    <!--          切换buy内容-->
                    <div v-show="tab==0" class="deal-buy">
                        <!--            dai-->
                        <div class="buy-content">
                            <div class="buy-icon">
                                <img src="../assets/dai.png"/>
                            </div>
                            <div class="buy-text">DAI</div>
                            <div class="buy-num">0.00<span>DAI</span></div>
                        </div>
                        <!--            ghst-->
                        <div class="buy-content">
                            <div class="buy-icon">
                                <img src="../assets/ghst.png"/>
                            </div>
                            <div class="buy-text"> BNB</div>
                            <div class="buy-num">0.00<span> BNB</span></div>
                        </div>
                        <!--            unlock-->
                        <div class="buy-unlock">
                            <div>Unlocked DAI : <span>0</span>DAI</div>
                        </div>
                        <!--            line-->
                        <div class="line">
                            <div class="buy-line"></div>
                        </div>
                        <!--                price-->
                        <div class="buy-price">
                            <div class="price-content">
                                <div class="price-text">PIRCE</div>
                                <div class="price-text">0</div>
                            </div>
                            <div class="price-content">
                                <div class="price-text">RECEIVE AMOUNT</div>
                                <div class="price-text">{{receive_amount}} BNB</div>
                            </div>
                            <div class="price-content">
                                <div class="price-text">SLIPPAGE</div>
                                <div class="price-text">0</div>
                            </div>
                        </div>
                        <!--            Max-->
                        <div class="buy-max">
                            <div  class="max-num input_num">
                                <input v-model="maxbuy"/>
                            </div>
                            <div class="max-text">MAX</div>
                            <div class="max-num">DAI</div>
                        </div>
                        <!--            btn-->
                        <div @click="actionBuy()" class="buy-btn">
                            <button class="btn-class">PERFORM KYC TO UNLOCK</button>
                        </div>
                    </div>
                    <!--          切换sell内容-->
                    <div v-show="tab==1" class="deal-buy">
                        <!--            dai-->
                        <div class="buy-content">
                            <div class="buy-icon">
                                <img src="../assets/dai.png"/>
                            </div>
                            <div class="buy-text">DAI</div>
                            <div class="buy-num">0.00<span>DAI</span></div>
                        </div>
                        <!--            ghst-->
                        <div class="buy-content">
                            <div class="buy-icon">
                                <img src="../assets/ghst.png"/>
                            </div>
                            <div class="buy-text"> BNB</div>
                            <div class="buy-num">0.00<span> BNB</span></div>
                        </div>
                        <!--            unlock-->
                        <div class="buy-unlock">
                            <div>Unlocked DAI : <span>0</span>DAI</div>
                        </div>
                        <!--            line-->
                        <div class="line">
                            <div class="buy-line"></div>
                        </div>
                        <!--                price-->
                        <div class="buy-price">
                            <div class="price-content">
                                <div class="price-text">PIRCE</div>
                                <div class="price-text">0</div>
                            </div>
                            <div class="price-content">
                                <div class="price-text">RECEIVE AMOUNT</div>
                                <div class="price-text">{{receive_amount}} BNB</div>
                            </div>
                            <div class="price-content">
                                <div class="price-text">SLIPPAGE</div>
                                <div class="price-text">0</div>
                            </div>
                        </div>
                        <!--            Max-->
                        <div class="buy-max">
                            <div class="max-num input_num">
                                <input v-model="maxsell"/>
                            </div>
                            <div class="max-text">MAX</div>
                            <div class="max-num">DAI</div>
                        </div>
                        <!--            btn-->
                        <div @click="actionSell()" class="buy-btn">
                            <button class="btn-class">PERFORM KYC TO UNLOCK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--          弹窗-->
        <div class="create-dialog" v-show="dialog">
            <div class="dialog-bg">
                <div class="dialog-content">
                    <div @click="dialog=false" class="dialog-error">
                        <img src="../assets/error.png"/>
                    </div>
                    <div class="dialog-input">
                        <div class="dialog-text">Name</div>
                        <div class="dialog-input-s">
                            <input placeholder="" v-model="name1"/>
                        </div>
                    </div>
                    <div class="dialog-input">
                        <div class="dialog-text">Symbol</div>
                        <div class="dialog-input-s">
                            <input placeholder="" v-model="name2"/>
                        </div>
                    </div>
                    <div class="dialog-input">
                        <div class="dialog-text">Decimal</div>
                        <div class="dialog-input-s">
                            <input placeholder="" v-model="name3"/>
                        </div>
                    </div>
                    <div class="dialog-input">
                        <div class="dialog-text">Base A</div>
                        <div class="dialog-input-s">
                            <input placeholder="" v-model="name4"/>
                        </div>
                    </div>
                    <div class="dialog-input">
                        <div class="dialog-text">Base B</div>
                        <div class="dialog-input-s">
                            <input placeholder="" v-model="name5"/>
                        </div>
                    </div>
                    <div @click="dialogBtn()" class="dialog-btn">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Decimal from 'decimal.js'
    const buyerContract = '0x0F5Ad0029901a9685e63A4747cc48d29cAe59bb9'
    // const tokenContract = '0x6Fb8A771DA0eE9F8a52f677E0579d308399E975e'
    const factoryContract = '0x3c87e51250e25281B6aA4E325aee585d85009808'
    const buyerABI = require('@/data/buyer.json');
    // const tokenABI = require('@/data/tokens.json');
    const factoryABI = require('@/data/factory.json');
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data() {
            this.chartSettings = {
                stack: {
                    '用户': ['data']
                },
                area: true,//是否显示为面积图
                itemStyle: { //面积图颜色设置
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 1.3,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#D60BF8', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#22B6FD' // 100% 处的颜色
                            },
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    lineStyle: {//折线颜色大小
                        type: 'solid',  //'dotted'虚线 'solid'实线
                        color: "#DA22FF",
                        borderColor: '#DA22FF',  //拐点边框颜色
                        width: 3, //折线宽度
                        //折线颜色渐变
                        //   color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        //   offset: 0,
                        //   color: 'rgba(45,105,249,1)'
                        // },
                        //   {
                        //     offset: 1,
                        //     color: 'rgba(89,205,253,1)'
                        //   }])
                    }
                },
            };
            this.yAxis = [
                {
                    splitLine: {show: false},
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#A6A6C9",//这里是改变字体颜色
                            fontSize: 11,//字体大小
                        }
                    },
                    axisLine: {
                        show: true,//是否显示Y轴线
                        lineStyle: {
                            color: "#A6A6C9",//Y轴线颜色
                            width: 1,//线的大小
                            type: "solid"//Y轴线的类型
                        }
                    },

                }
            ];
            this.xAxis = [
                {
                    splitLine: {show: false},
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#A6A6C9",//这里是改变字体颜色
                            fontSize: 11,//字体大小
                        }
                    }, axisLine: {
                        show: true,//是否显示Y轴线
                        lineStyle: {
                            color: "#A6A6C9",//Y轴线颜色
                            width: 1,//线的大小
                            type: "solid"//Y轴线的类型
                        }
                    },
                }
            ];
            return {
                receive_amount:0,
                dropname: '0x6Fb8A771DA0eE9F8a52f677E0579d308399E975e',//默认显示
                droplist: [
                    {
                        namea: '0x6Fb8A771DA0eE9F8a52f677E0579d308399E975e'
                    }
                ],
                dropshow: false,
                dropicon: 1,//箭头显示
                name1: "",//name输入框
                name2: "",
                name3: "",
                name4: "",
                name5: "",
                dialog: false, //弹框显示
                maxbuy: 0, //buy输入框
                maxsell: 0, //sell输入框
                tab: 0, //buy sell切换
                chartData: {
                    columns: ['date', 'price', '', ''],
                    rows: [
                        {'date': '0', 'price': 1,},
                        {'date': '1', 'price': 2,},
                        {'date': '4', 'price': 5,},
                        {'date': '6', 'price': 7,},
                        {'date': '8', 'price': 9,},
                        {'date': '10', 'price': 11,},
                    ]
                }
            }
        },
        watch: {
            maxbuy(){
                if(!this.maxbuy) return false;
                this.getPrice()
            },
            maxsell(){
                if(!this.maxsell) return false;
                this.getPrice()
            }
        },
        methods: {
            async getAllAddress(){
                let facContract = new this.myWeb3.eth.Contract(factoryABI, factoryContract);
                let tokens = await facContract.methods.getAllAddress().call()
                for(let it of tokens){
                    this.droplist.push(
                        {
                            namea: it
                        }
                    )
                }
            },
            //
            async getPrice(){
                let num = 0
                if(!this.tab){//买
                    num = new Decimal(this.maxbuy).toFixed()
                }else{//卖
                    num = new Decimal(this.maxsell).toFixed()
                }
                let buyContract = new this.myWeb3.eth.Contract(buyerABI, buyerContract);
                console.log(`num11111`,num)
                let amount = await buyContract.methods.calcultionBuyPrice(num,this.tab==0?1:0).call()
                this.receive_amount = new Decimal(amount).div(Math.pow(10,18)).toFixed()
                console.log(`sell amount`,amount)
            },
            actionDrop(item) {
                console.log(item)
                this.dropicon = false;
                this.dropname = item.namea
            },
            //sell里按钮
            async actionSell() {
                let addresses = await window.ethereum.enable()
                let local_address =  addresses[0]
                let buyContract = new this.myWeb3.eth.Contract(buyerABI, buyerContract);
                const data = buyContract.methods.sellToken(this.maxsell).encodeABI()
                console.log(`buyer data`,data)
                const rewardReceipt = await this.myWeb3.eth.sendTransaction({
                    from: local_address,
                    to: buyerContract,
                    value: 0,
                    data: data
                })
                console.log('Receipt', rewardReceipt);
            },
            //buy里按钮
            async actionBuy() {
                let addresses = await window.ethereum.enable()
                let local_address =  addresses[0]
                let buyContract = new this.myWeb3.eth.Contract(buyerABI, buyerContract);
                let value = new Decimal(this.receive_amount).mul(Math.pow(10,18)).toFixed()
                const data = buyContract.methods.buyToken(this.maxbuy).encodeABI()
                console.log(`buyer data`,data)
                const rewardReceipt = await this.myWeb3.eth.sendTransaction({
                    from: local_address,
                    to: buyerContract,
                    value: value,
                    data: data
                })
                console.log('Receipt', rewardReceipt);
            },
            //弹窗创建
            async dialogBtn() {
                let addresses = await window.ethereum.enable()
                let local_address =  addresses[0]
                let buyContract = new this.myWeb3.eth.Contract(factoryABI, factoryContract);
                console.log(`11111`,this.name1,this.name2)
                const data = buyContract.methods.deploy(this.name1,this.name2,"1","1").encodeABI()
                console.log(`buyer data`,data)
                const rewardReceipt = await this.myWeb3.eth.sendTransaction({
                    from: local_address,
                    to: factoryContract,
                    value: 0x0,
                    data: data
                })
                console.log('Receipt', rewardReceipt);
                this.getAllAddress()
                this.dialog = false;

            },
            changeTab(val){
                this.tab = val;
                this.maxbuy = 0
                this.maxsell = 0
                this.receive_amount = 0
            }
        },
        created() {
            this.getAllAddress()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .home {
        height: 100vh;
        background: #424867;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('../assets/bg.png');
        background-size: 100% 100%;

        .home-content {
            width: 88%;
            margin-top: 100px;
            //z-index: 1000;
            height: 100%;

            .home-title {
                text-align: center;
                padding: 22px 0 22px 0;
                font-size: 12px;
                font-family: Arial-BoldMT, Arial;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 14px;
                letter-spacing: 1px;
                color: white;
                background: #191932;
                border-radius: 9px;

            }

            .nav {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-top: 30px;

                .home-chart {
                    width: 56%;
                    background: #191932;
                    border-radius: 8px;

                    .home-top {
                        padding-left: 60px;
                        padding-right: 60px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;

                        .home-top-list {
                            padding-top: 50px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            .ht-text {
                                font-size: 13px;
                                font-family: ArialMT;
                                color: #A6A6C9;
                                line-height: 15px;
                            }

                            .ht-num {
                                padding-top: 18px;
                                font-size: 16px;
                                font-family: JDZhengHT-Regular, JDZhengHT;
                                font-weight: 400;
                                color: #FEFAFA;
                                line-height: 20px;

                                span {
                                    padding-left: 3px;
                                    font-size: 14px;
                                    font-family: ArialMT;
                                    color: #FEFAFA;
                                    line-height: 16px;
                                }
                            }
                        }
                    }

                    .home-bottom {
                        padding-left: 30px;
                        padding-right: 30px;
                        margin-top: 93px;
                    }
                }

                .home-deal {
                    padding: 30px 20px 30px 20px;
                    width: 38%;
                    background: #191932;
                    border-radius: 8px;

                    .home-dropdown {
                        margin-bottom: 20px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        .dropdown-text {
                            margin-right: 14px;
                            font-size: 14px;
                            font-family: Arial-BoldMT, Arial;
                            font-weight: normal;
                            color: #A6A6C9;
                            line-height: 16px;

                        }

                        .dropdown-content {
                            position: relative;
                            width: 80%;
                            height: 33px;
                            background: #191932;
                            border: 1px solid #3C3C60;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;

                            .dropdown-content-text {
                                margin-left: 20px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #E4E8FF;
                                line-height: 22px;
                            }

                            .dropdown-img {
                                cursor: pointer;
                                //flex: 1;
                                width: 18px;
                                height: 18px;
                                margin-right: 10px;

                                img {
                                    width: 18px;
                                    height: 18px;
                                }
                            }
                        }

                        .dropdown-bottom {
                            width: 100%;
                            position: absolute;
                            top: 30px;
                            left: 0;
                            right: 0;
                            text-align: right;

                            .droplist {
                                cursor: pointer;
                                border: 1px solid #3E3E69;
                                width: 100%;
                                height: 27px;
                                line-height: 27px;
                                background: #3C3C60;
                            }

                            .droplist-change {
                                cursor: pointer;
                                border: 1px solid #3E3E69;
                                width: 100%;
                                height: 27px;
                                line-height: 27px;
                                background: #515880;
                            }

                            .droplist:hover {
                                cursor: pointer;
                                border: 1px solid #3E3E69;
                                width: 100%;
                                height: 27px;
                                line-height: 27px;
                                background: #515880;
                            }

                            .droplist-name {
                                color: #ABB6F0;
                                padding-right: 20px;
                            }
                        }
                    }

                    .deal-tab {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-around;

                        .tab {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            .tab-text {
                                cursor: pointer;
                                font-size: 16px;
                                font-family: ArialMT;
                                color: #FFFFFF;
                                line-height: 18px;
                            }

                            .tab-line {
                                margin-top: 10px;
                                width: 80%;
                                height: 4px;
                                background-color: #414160;
                                border-radius: 4px;
                            }

                            .tab-line-change {
                                background: linear-gradient(63deg, #FFD120 0%, #FF7D05 100%);
                                margin-top: 10px;
                                width: 80%;
                                height: 4px;
                                border-radius: 4px;
                            }
                        }

                        .tab-btn {
                            display: flex;
                            flex-direction: row;

                            .tab-btn-c {
                                padding-top: 2px;
                                cursor: pointer;
                                width: 98px;
                                height: 33px;
                                background: linear-gradient(180deg, #D328FF 0%, #3AA2FD 100%);
                                border-radius: 22px;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;

                                .tab-btn-icon {
                                    margin-left: 5px;
                                    margin-top: 2px;

                                    img {
                                        width: 22px;
                                        height: 22px;
                                    }
                                }

                                .tab-btn-text {
                                    margin-left: 5px;
                                    font-size: 16px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 33px;
                                }
                            }
                        }
                    }

                    .deal-buy {
                        display: flex;
                        flex-direction: column;

                        .buy-content {
                            margin: 20px 20px 0 20px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;

                            .buy-icon {
                                margin-right: 10px;

                                img {
                                    width: 23px;
                                    height: 23px;
                                }
                            }

                            .buy-num {
                                font-size: 14px;
                                font-family: JDZhengHT-Regular, JDZhengHT;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 17px;
                            }

                            .buy-text {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 20px;
                                flex: 1;
                            }
                        }

                        .buy-unlock {
                            padding: 20px;
                            font-size: 12px;
                            font-family: Arial-ItalicMT, Arial;
                            font-weight: normal;
                            color: #FFFFFF;
                            line-height: 14px;

                            span {
                                margin-right: 5px;
                                color: #4DCBF0;
                            }
                        }

                        .line {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-top: 20px;
                            margin-bottom: 20px;

                            .buy-line {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                width: 80%;
                                background-color: #282D44;
                                height: 1px;
                            }
                        }

                        .buy-price {
                            .price-content {
                                padding-left: 20px;
                                padding-right: 20px;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;

                                .price-text {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 20px;
                                    padding-top: 15px;
                                }
                            }
                        }

                        .buy-max {
                            padding-left: 20px;
                            padding-right: 20px;
                            margin-top: 30px;
                            background-color: #101023;
                            padding: 15px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;

                            .max-text {
                                cursor: pointer;
                                width: 38px;
                                height: 22px;
                                text-align: center;
                                border-radius: 4px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #4D5A9C;
                                line-height: 20px;
                                background-color: #202646;
                                margin-right: 30px;
                            }

                            .max-num {
                                font-size: 14px;
                                font-family: JDZhengHT-Regular, JDZhengHT;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 17px;

                                input {
                                    cursor: pointer;
                                    outline: none;
                                    border: 0;
                                    color: white;
                                    background-color: #101023;
                                    padding: 5px;
                                }
                            }
                        }

                        .buy-btn {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            padding: 20px 20px 0 20px;

                            .btn-class {
                                border: 0;
                                outline: none;
                                cursor: pointer;
                                width: 80%;
                                height: 44px;
                                background: linear-gradient(180deg, #4CFDDF 0%, #4EA1FF 100%);
                                border-radius: 22px;
                            }
                        }
                    }
                }
            }
        }

        .create-dialog {
            .dialog-bg {
                display: flex;
                background: rgba(0, 0, 0, 0.7);
                position: fixed;
                z-index: 200;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .dialog-content {
                    width: 40%;
                    //height: 512px;
                    background: #424867;
                    border-radius: 8px;
                    padding: 20px;

                    .dialog-error {
                        margin-bottom: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        cursor: pointer;

                        img {
                            width: 21px;
                            height: 21px;
                        }
                    }

                    .dialog-input {
                        //margin-top: 10px;
                        margin-top: 20px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        .dialog-text {
                            font-size: 16px;
                            font-family: ArialMT;
                            color: #A6A6C9;
                            line-height: 18px;
                            margin-right: 20px;
                        }

                        .dialog-input-s {
                            cursor: pointer;
                            width: 60%;
                            height: 44px;
                            line-height: 44px;
                            padding-left: 20px;
                            background: #2A2E47;
                            border-radius: 4px;

                            input {
                                //color: #5B6389;
                                color: white;
                                outline: none;
                                border: 0;
                                width: 80%;
                                background: #2A2E47;
                            }
                        }
                    }

                    .dialog-btn {
                        margin-top: 50px;
                        margin-bottom: 60px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        button {
                            border: 0;
                            cursor: pointer;
                            width: 70%;
                            height: 44px;
                            background: linear-gradient(180deg, #4CFDDF 0%, #4EA1FF 100%);
                            border-radius: 22px;
                            font-size: 18px;
                            font-family: Arial-BoldMT, Arial;
                            font-weight: normal;
                            color: #424867;
                            line-height: 21px;
                        }
                    }
                }
            }
        }
    }
  .input_num{
    flex: 1;
    input{
      width: 90%;
    }
  }

</style>
