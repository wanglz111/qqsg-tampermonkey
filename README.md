# qqsg-tampermonkey

## 自动登录qq三国高级查询

1. 原理是查询通过读取`localStorage.saveData`中的`token`值来判断是否有权限查询。
2. 作者提供token，使用油猴插件自动更新`localStorage.saveData`。
3. 只提供给会用的朋友，觉得我会盗号的自己买30的高级会员。

已经不能使用了，因为token暴露被连封两回，所以不再续费不再更新，如果想要了解token原理及数据解码原理可以提issue
