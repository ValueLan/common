描述|块级元素|内联元素|联块级元素  
-|-|-|-
默认占满一行 | 是 | 否 | 否 
1   | 1| 1 | 
宽高设置 | 有效 | 无效 | 有效


# 块级元素
1. 默认占满一行 (设置了 position float display:flex 除外)
2. 设置宽高有效
3. 任何元素都可以转换 块级元素 `display: block;`

# 内联元素
1. 默认不会占满一行 (内联元素跟着非块级紧跟着内联元素布局)
2. 设置宽高无效
3. 任何元素都可以转换 内联元素 `display: inline`

# 内联块级元素
1. 默认不会占满一行 
2. 设置宽高有效
3. 任何元素都可以转换 内联块级元素 `display: inline-block`


# 盒子类(块级元素)
    width: 10px; /* 宽度10px|10% */
    height: 10px; /* 高度10px|10% */
    box-shadow: 10px 10px 5px #888888; /* 需要记box-shadow 值我也是自己调 */
# 布局类
## flex 布局
    display: flex; 
    /* flex布局 盒子 需要是 flex|inline-flex inline-flex 会让自身变成内联元素属性子类排列按flex布局  见上文 */ 
    
    align-items: flex-start;
    /*
    align-items 默认盒子子类Y轴排列方式
    可选值 flex-start|center|flex-end|baseline 
    flex-start Y轴顶部排列
    center  Y轴居中排列
    flex-end Y轴底部排列
    */ 
    
    justify-content: flex-start;
    /*
    justify-content 默认盒子子类X轴排列方式
    可选值 flex-start|center|flex-end|space-between|space-around
    flex-start 默认左侧排列
    center  默认居中排列
    flex-end 默认右侧排列
    space-between 子类等分排列（最左最右不等分）
    space-around 子类等分排列（最左最右等分）
    */
## position布局
    等待写

# 文字类
    color : #999;  /* 文字颜色 rgb|rgba|hex*/
    font-family : sans-serif; /*文字字体*/
    font-size : 9pt; /*文字大小*/
    font-style:itelic; /* 文字斜体 itelic|normal*/
    line-height : 200%; /*设置行高 100%|100px */
    font-weight:bold; /*文字粗体 bold|normal|100  数值不常用*/

    text-decoration:underline; /*加下划线*/
    text-decoration:none; /*删除链接下划线*/

    text-align:right; /*文字对齐 left|right|center*/ 

# 填充边距
    margin: 10px 10px 10px 10px; /* top right bottom left  间距*/
    padding: 10px 10px 10px 10px; /* top right bottom left  填充*/

# 背景类
    background:transparent; /*透视背景*/ 
    background-color:#F5E2EC; /*背景颜色*/ 
    background-image : url(/image/bg.gif); /*背景图片*/

    background-repeat : repeat; /*背景图片重复排列-网页默认*/
    background-repeat : no-repeat; /*不重复排列*/
    background-repeat : repeat-x; /*在x轴重复排列*/
    background-repeat : repeat-y; /*在y轴重复排列*/

    background-position : 90% 90%; /* 定义背景图片x与y轴的位置 x可选值: top|center|bottom|10px  y可选值: left|center|right|10px*/
    background-position : top left; /*向上对齐 x y */
    background-position : buttom; /*向下对齐 可选一个*/    
    background-position : right; /*向右对齐*/
