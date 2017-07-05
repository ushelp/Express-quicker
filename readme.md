# Express-quicker

**Express-quicker** 是一个针对 [Express](http://expressjs.com/ "Express - Node.js web application framework") 的应用程序快速生成命令行工具。项目骨架基于 [Express-quickstart](https://github.com/ushelp/Express-quickstart "Express-quickstart")。


**Express-quiecker** is a [Express](http://expressjs.com/ "Express - Node.js web application framework") application generator tool, to quickly create an application skeleton based on [Express-quickstart](https://github.com/ushelp/Express-quickstart "Express-quickstart").



## 使用/Use

- 安装命令行工具 / Installs command-line tool:
	```
	npm install express-quicker -g
	```

- 创建 Express-quickstart 项目 / Creates an Express-quickstart app:
	```
	equicker -h
	equicker [app-name]
	equicker [-t <type>] [app-name]
	```
	- **type**
	
	     当前可用类型：[emp]
	   
	  The current allowable type in: [emp]
	  
	  ```
	  equicker -t emp [app-name]
	  ```

- 安装依赖 / Then install dependencies:
	```
	npm install
	```
	
- 启动 / Startup:
	```
	npm start
	```

- 访问 / Load:

 `http://localhost:3000/`

## 目录结构 / directory structure

- **equicker** [app-name]

	```sh
	.
	├── app.js
	├── package.json
	├── public
	│   ├── img
	│   ├── js
	│   └── css
	│       └── style.css
	│   └── favicon.ico
	│   └── upload.html
	├── routes
	│   ├── index.js
	│   └── users.js
	├── uploads
	└── views
	    ├── error.etj
	    ├── index.etj
	    └── users.etj
	```
  
- **equicker  -t  emp**  [app-name]
 
	```sh
	.
	├── app.js
	├── package.json
	├── entiy
	│   ├── Dept.js
	│   ├── Emp.js
	│   └── User.js
	├── filter
	│   └── user-filter.js
	├── public
	│   ├── img
	│   ├── js
	│   └── css
	│       └── style.css
	│   └── favicon.ico
	│   └── upload.html
	├── routes
	│   ├── depts.js
	│   ├── emps.js
	│   ├── index.js
	│   └── users.js
	├── service
	│   ├── dept-service.js
	│   ├── emp-service.js
	│   └── users-service.js
	├── uploads
	└── views
		├── admin
		│   └── admin.etj
		├── dept
		│   └── list.etj	
		├── emp
		│   └── list.etj
	    ├── error.etj
	    └── index.etj
	``` 
  
## Express-quickstart

### [Express-quickstart](https://github.com/ushelp/Express-quickstart "Express-quickstart")

  
## Express-quickstart-emp

### [Express-quickstart-emp](https://github.com/ushelp/express-quickstart-emp "Express-quickstart-emp")

## End

Email：<inthinkcolor@gmail.com>

[http://www.easyproject.cn](http://www.easyproject.cn "EasyProject Home")


**支付宝钱包扫一扫捐助：**

我们相信，每个人的点滴贡献，都将是推动产生更多、更好免费开源产品的一大步。

**感谢慷慨捐助，以支持服务器运行和鼓励更多社区成员。**

<img alt="支付宝钱包扫一扫捐助" src="http://www.easyproject.cn/images/s.png"  title="支付宝钱包扫一扫捐助"  height="256" width="256"></img>



We believe that the contribution of each bit by bit, will be driven to produce more and better free and open source products a big step.

**Thank you donation to support the server running and encourage more community members.**

[![PayPal](http://www.easyproject.cn/images/paypaldonation5.jpg)](https://www.paypal.me/easyproject/10 "Make payments with PayPal - it's fast, free and secure!")

