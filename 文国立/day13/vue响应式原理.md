### vue响应式的原理

```
vue的响应式是通过object.definePropety对数据进行劫持，使用sette和getter的方法来进行拦截，并结合发布者订阅模式的实现

```

