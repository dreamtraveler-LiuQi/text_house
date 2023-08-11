;(function () {
    let data;
    async function getData() {
        try {
            const response = await ajax('https://vr.huijiaw.com/22/hftong/oa/index.php/Hua/Shouse/sell_one?PropertyID=230724142434C88B5EAD9BFC2F30E57C&EmpID=1907101521482AAD178CB066A8B66ED8');
            data = response.data;
        } catch (error) {
            console.error(error);
            const mainStyle = document.createElement('li');
            mainStyle.textContent = '数据加载失败！';
            mainStyle.style.margin = '0 auto'
            document.querySelector('.main').appendChild(mainStyle);
        }
        const dialog = document.querySelector('#loadingContainer');
        dialog.style.display = "none";
    }
    getData().then(() => {
        // 数据重组
        let propsData = [{
                title: "交 易",
                text: data.Trade
            },
            {
                title: "状 态",
                text: data.Status
            },
            {
                title: "户 型",
                text: data.PropertyName
            },
            {
                title: "面 积",
                text: data.Square
            },
            {
                title: "朝 向",
                text: data.PropertyDirection
            },
            {
                title: "梯 户",
                text: data.propertylift
            },
            {
                title: "电梯情况",
                text: data.pIsElevator
            },
            {
                title: "装 修",
                text: data.PropertyDecoration
            },
            {
                title: "总 价",
                text: data.Price
            },
            {
                title: "底 价",
                text: data.PriceLine
            },
            {
                title: "购入价",
                text: ' ' + ' 万'
            },
            {
                title: "单 价",
                text: data.PriceUnit
            },
            {
                title: "套内面积",
                text: data.RentPriceLine + ' m²'
            },
            {
                title: "楼 层 ",
                text: data.Floor + '，共' + data.FloorAll + '层'
            },
            {
                title: "类 型",
                text: data.phousestructure
            },
            {
                title: "结 构",
                text: ''
            },
            {
                title: "建筑结构",
                text: ''
            },
            {
                title: "来 源",
                text: data.PropertySource
            },
            {
                title: "年 代",
                text: data.CompleteYear
            },
            {
                title: "房屋现状",
                text: data.PropertyOccupy
            },
            {
                title: "产权性质",
                text: data.PropertyOwn
            },
            {
                title: "产权所属",
                text: ''
            },
            {
                title: "房屋证件",
                text: data.PropertyCertificate
            },
            {
                title: "抵押情况",
                text: data.DiYa
            },
            {
                title: "抵押金额",
                text: ''
            },
            {
                title: "房本年限",
                text: data.PropertyBuy
            },
            {
                title: "用 途",
                text: data.PropertyUsage
            },
            {
                title: "是否唯一",
                text: ''
            },
            {
                title: "可落户",
                text: ''
            },
            {
                title: "有学籍 ",
                text: ''
            },
            {
                title: "对口学校",
                text: ''
            },
            {
                title: "阁楼面积",
                text: '' + ' m²'
            },
            {
                title: "车库面积",
                text: '' + ' m²'
            },
            {
                title: "车库价格",
                text: '' + ' 元'
            },
            {
                title: "花园面积",
                text: ' ' + ' m²'
            },
            {
                title: "地下面积",
                text: ' ' + ' m²'
            },
        ];
        // 追加数据
        propsData.forEach((element, index) => {
            const firstLevelTag = document.createElement('li');
            const secondLevelTag1 = document.createElement('p');
            const secondLevelTag2 = document.createElement('p');
            secondLevelTag1.textContent = `${element.title}：`;
            secondLevelTag2.textContent = `${element.text}`;
            firstLevelTag.appendChild(secondLevelTag1);
            firstLevelTag.appendChild(secondLevelTag2);
            document.querySelector('.main').appendChild(firstLevelTag);
        });

        // 滚动到顶部
        const scrollToTop = document.getElementById('scrollToTop');
        const container = document.querySelector('.main-dialog');

        scrollToTop.addEventListener('click', () => {
            scrollToTopWithDelay(container, 0, 50);
        });

        function scrollToTopWithDelay(element, delay, step) {
            const scrollStep = -element.scrollTop / (delay / step);
            scrollToTop();

            function scrollToTop() {
                if (element.scrollTop === 0) {
                    return;
                }
                element.scrollTop += scrollStep;
                setTimeout(scrollToTop, step);
            }
        }

    });
})()