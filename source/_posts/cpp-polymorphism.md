---
title: 2015.05.09 C++多态
date: 2015-05-09 02:04:49
categories:
  - dev
  - cpp
---
“调用’同名函数’却会因上下文不同会有不同的实现的一种机制”
C++中的多态根据运行时机制的不同分为静态多态与动态多态，下面是静态多态与动态多态的主要实现方式。
<!-- more -->

# 静态多态

静态多态指的是基于模板的多态，对所有可能出现的情况，把所有代码全部写好，最关键的是，这些关联处理处于编译期而非运行期。
常见的静态多态：函数多态，模板多态，宏多态。

# 函数多态/函数重载(overload)

不同参数，相同名字，返回值不看重即可对函数进行重载

```cpp
class overload{
public:
	void overload_test(){
		cout << "This is a test function!" << endl;
	}
	void overload_test(int a){
		cout << "This is an overload function!" << endl;
	}
	int overload_test(double a){
		cout << "This is also an overload function!" << endl;
		return 0;
	}
};
```

# 模板多态/模板函数/函数模板

执行相同内容，只是参数类型不同，返回值也随着参数类型不同而改变，使用模板函数是最恰当的。模板函数要是欲对某一个不同的参数类型想进行不同的操作还可以使用模板特例。

```cpp
class func_template{
public:
	template<typename X>
	X func_template_func(X a, X b){//function:return big one
		if (b>a) a = b;
		return a;
	}

	template<>//模板特例
	double func_template_func(double a, double b){
		cout << "This is a specfic template function" << endl;
		return 0;
	}

};
```

# 利用虚函数实现的多态

在父类中定义虚函数，在子类继承父类后对此函数进行覆盖，然后调用的时候一定要使用引用传递。
虚函数与指针/引用传递传递一个不能少，虚函数与指针传递共同配合形成一个父类指针指向所需要的子类函数，如果缺了任意一个，即使通过编译，也仍然只会调用父类的虚函数内容。

要注意的是，子类继承时一定要使用`public`继承，否则编译会报错，不允许对不可访问的基类进行转换。因为指针并不能指向一个`private`对象，`private`对象也并不能向上转换（理解`private`的意义）


![不允许对不可访问的基类进行转换](https://ooo.0o0.ooo/2017/05/24/592545c28b9b8.png)


```cpp
class father_class{
public:
	virtual void run(){
	};
	
};

class son_class :public father_class{
public:
	void run(){
		cout << "test" << endl;
	}

};



void output(father_class &a){
	a.run();
}
```

因为C++通过父类指针查找到子类函数，查找的过程，是在运行时完成的，所以这样的多态叫做动态多态。
以上


代码中涉及到的一些其他，请参见：
> 待填充

# Reference

> [C++多态](http://www.360doc.com/content/11/0710/17/1976682_132733496.shtml)
> [C++多态](http://www.cnblogs.com/hongzg1982/archive/2011/05/11/2042920.html)