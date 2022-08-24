# python调用dubbo接口传递枚举参数

* 背景：<br>
公司最近新找了一个合作伙伴，我们的产品要作为一个模块融合到他们到平台，使用平台提供的统一用户模块，因此权限和用户相关接口需要通过Dubbo RPC获取。
<br>
<br>
* 实现：<br>
平台服务采用nacos进行管理，调用时先从nacos查询对应接口的ip和端口，再请求对应地址的服务。
  * 已经写好了python调用dubbo的包，地址: `https://github.com/yuanhao1998/dubbo-python.git` 
<br>
<br>
* 问题：通过把Hessian协议将枚举参数序列化字节时发现问题
  * 普通的bool、int、long、float、double、java.lang.String此包已经支持
  * 自定义的入参类型可以通过包中的JavaObject类来构建
  ```python
        JavaObject(
            'com.cloudwise.douc.dto.DubboRegisterMultiTypeTreeDataReq',
            {
                'accountId': account_id or int(request().headers.get('accountid')),
                'createUserId': user_id or int(request().headers.get('userid')),
                'dataType': data_type,
                'dataItems': data
            }
        )
    ```
  * 当入参是枚举类型时，使用JavaObject会报错
<br>
<br>
* 解决：查询Java代码得知，Java在调用枚举类时，实际是调用了class中的name属性，因此传递枚举类时需要加上name
  ```python
    JavaObject(
        'com.cloudwise.douc.dto.DubboAccountChangeReportReq.Type',
        {"name": "DELETE"}
   )    
    ```
  注意：直接传递DELETE会报错，必须创建一个字典，key为name

<br>
<br>
<br>
其实是很简单的一个改动，但是不知道要加name的时候就怎么也调不通，反复查看Hessian协议也没有思路，最后看了Java枚举类的定义和使用方法之后才有灵感。
<br>
建议定义跨语言调用的接口时，尽量只使用基础功能。
