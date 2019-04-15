# zhantong-commons
基于vue、element-ui工作项目中经常使用的公共方法

em……湛瞳千呼万唤终于始出来。本以为这npm包还挺好弄的，真正一上手发现确实低估人家高估自己了，要考虑的确实还不少。不管怎样一个最low版公共方法npm包还是面世了，更新是一定会更新的，首先目录结构还没有很规范，另外现列入的外方法也没有很全，大家有建议或者是希望加入哪些方法请尽情提出来~~邮箱地址958150192@qq.com。

## 文档说明
### 安装
$ npm install zhantong-commons
### 使用
1. import email(方法名) from 'zhantong-commons'  
该方式会将包内所有的方法在build的过程中打包在内，不推荐。
2. import email(方法名) from 'zhantong-commons/email(方法名)'  
该方式在build的过程中只会打包在项目中使用的方法，相对方法1来说能够缩小项目编译后的体积，**推荐使用**。
### API
一、基于el-form的表单校验方法
```
template:
<el-form :model="formData" ref="formData" :rules="rules">
  <el-form-item>
    <el-input v-model="formData.email" placeholder="请输入邮箱""></el-input>
  </el-form-item>
</el-form>
```
```
javascript：
<script>
import email from 'zhantong-commons/email'
export default {
  data () {
    return {
      formData: {
        email: null
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { validator: email }      // 默认使用框架中的提示语
        ]
      },
    }
  }
}
</script>
```
更改校验提示语
```
javascript：
<script>
import email from 'zhantong-commons/email'
export default {
  data () {
    let checkEmailWithNewTip = (...params) => {
      return email(...params, '我是新的提示语')
    }
    return {
      formData: {
        email: null
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { validator: checkEmailWithNewTip }      // 使用自定义提示语
        ]
      },
    }
  }
}
</script>
```
1. mobilePhone 校验手机号  
默认提示语：请输入正确的手机号码
2. telephone 校验电话号  
默认提示语：请输入正确的电话号码
3. idCard 校验身份证号  
默认提示语：请输入正确的身份证号码
4. email 校验邮箱  
默认提示语：请输入正确的电子邮箱
5. bankCard 校验银行卡号  
默认提示语：请输入正确的银行卡号码
6. zeroTo100Decimal2Atmost 校验大于0并且小于100，最多支持两位小数  
使用场景：折扣  
默认提示语：请输入0-100之间的数，最多支持两位小数
7. moreThan0Decimal2Atmost 校验大于或者等于0，最多支持两位小数  
使用场景：套内资费  
默认提示语：请输入大于等于0的数字，最多支持两位小数
8. moreThan0Integer 校验大于0的整数  
默认提示语：请输入大于0的整数
9. moreThan1Integer 校验大于1的整数  
使用场景：卡片数量  
默认提示语：请输入大于1的整数
二、方法（filter方法）
1. throttle节流  
防止某函数调用次数过多阻塞渲染进程，采取的每间隔一段时间再次执行的机制。  
参数：
* fun 用于节流的函数
* wait 间隔的时间
使用场景：窗口resize监听事件……等
```
<script>
import throttle from 'zhantong-commons/throttle'
export default {
  data () {
    return {
      maxHeight: ' '    // 防止浏览器渲染异常要给el-table表单上绑定的max-height一个默认值，此处为空格符
    }
  },
  methods: {
    onResize () {
      this.maxHeight = this.$refs.outer.offsetHeight - 75
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', throttle(this.onResize, 500))
  },
  beforeDestroy () {
    window.removeEventListener('resize', throttle(this.onResize, 500))
  }
}
</script>
```
2. [toNumber](https://github.com/ZhantongJiang/-Notes-toNumber)  
完成Boolean、Null、String转换为Number类型，并支持以向上取整、向下取整、四舍五入的方式保留指定数位。  
参数：
* val 转换目标
* precision 精确数位，默认保留两位小数，暂定最多支持9位小数
* type 转换方式，默认round四舍五入，同时支持ceil向上取整、floor向下取整  
返回值：返回转换后的数字所对应的字符串。 
使用场景：数字、流量转换
```
filters方式
template:
<el-table-column label="套内资费/元" width="90">
  <template slot-scope="scope">
    {{ scope.row.lastshelvesStandardmealgoods ? (scope.row.lastshelvesStandardmealgoods.price | toNumber) : '--' }}
  </template>
</el-table-column>

script:
<script>
import toNumber from 'zhantong-commons/toNumber'
export default {
  filters: {
    toNumber
  }
}
</script>
```
```
methods方式
template:
<el-table-column label="套内资费/元" width="90">
  <template slot-scope="scope">
    {{ scope.row.lastshelvesStandardmealgoods ? toNumber(scope.row.lastshelvesStandardmealgoods.price, 1, 'ceil') : '--' }}
  </template>
</el-table-column>

script:
<script>
import toNumber from 'zhantong-commons/toNumber'
export default {
  methods: {
    toNumber
  }
}
</script>
```
未完待续（返回字符所占宽度）……
