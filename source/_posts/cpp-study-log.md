---
title: 2015.04.24 C++近期学习小结
date: 2015-04-24 02:05:32
categories:
  - dev
  - cpp
---

函数参数传递，类的构造函数，类的可见性，类的继承
都是一些碎片化的东西，做做笔记防止自己忘记
<!-- more -->

# 函数参数传递

只贴改过的代码了，其实程序和讲解这篇文章写得很棒，我就不当个复制粘贴的了

> [C/C++中函数参数传递详解](http://www.cnblogs.com/Romi/archive/2012/08/09/2630014.html)

  
```cpp
#include <cstdio>
#include <iostream>

using namespace std;

void swap1(int a, int b){	//value capture
	int temp = a;
	a = b;
	b = temp;
}

void swap2(int *a, int *b){ //pointer capture
	int temp = *a;
	*a = *b;
	*b = temp;	
}

void swap3(int *a, int *b){  //pointer capture another 
	int *temp;
	temp = a;
	a = b;
	b = temp;
}

void swap4(int &a, int &b){		//reference capture
	int temp;
	temp = a;
	a = b;
	b = temp;
}

void main(){
	int a = 1, b = 2;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	swap1(a, b);
	cout << "值传递后:" << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	cout << "值传递只直接传递值，并不对原本实参有任何影响" << endl;
	cout << endl;
	cout << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	swap2(&a, &b);
	cout << "指针传递A后:" << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	cout << "对指针内容中进行交换，值变更" << endl;
	cout << endl;
	cout << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	swap3(&a, &b);
	cout << "指针传递B后:" << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	cout << "只对指针指向地址进行交换，而且也仅限于函数内的叫a,b的指针交换" << endl;
	cout << endl;
	cout << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	swap4(a, b);
	cout << "引用传递后:" << endl;
	cout << "a=" << a << "\t" << "b=" << b << endl;
	cout << "直接对变量进行操作" << endl;
	system("pause");
}
```

# 类的构造函数
## 默认构造函数
类的默认构造函数是一个与类名相同，参数为空的函数，当对象被创建时，将会自动调用类的默认构造函数。如果类没有定义默认构造函数时，编译器会自动给类创建一个函数体为空的默认构造函数。
## 重载/一般构造函数
可以为类自定义构造函数，构造函数名与类名相同，参数可以定义，当参数不为空时，则会对类的构造函数进行重载，在创建对象时，需要使用new语句，并输入参数，否则将使用默认构造函数。有参数的与类名相同的函数，称为重载构造函数，或一般构造函数。

# 类的可见性

## public
`public`可见性可以在创建类对象的时候直接被对象调用，调用方法为`object_name.variable`/`function`
## private
`private`可见性只能在本类定义中被使用，子类无法继承，对象无法直接调用
## protected
`protected`可见性在无子类的情况下与`private`一致，有子类的情况下，能被子类继承，在子类定义中使用，但不能被子类的对象直接引用。子类继承的仍然是`protected`类型，也就是说能被子类的子类继承。

## 疑问
《C++ Primer》其中关于protected 成员的描述是这样的：

> protected Members
>   
> The protected access label can be thought of as a blend of private and public :
>    
> * Like private members, protected members are inaccessible to users of the class.
> * Like public members, the protected members are accessible to classes derived from this class.
>    
> In addition, protected has another important property:
> A derived object may access the protected members of its base class only through a derived object. The derived class has no special access to the protected members of base type objects.

奇怪的就是，难道是理解有误吗？明显`protected`就算被继承后也是`protected`类型，然而书上则说父类的`protected`成员只能通过子类的对象进行访问，然而即使是`public`成员，子类对象也无法直接访问父类的成员（如果已被覆盖），更何况是`protected`了，根本没法直接访问，通不过编译，不明白啊。

# 类的继承
子类继承父类，使用 `derived_class_name:base_class_name`进行继承，继承时，先执行父类默认构造函数，再执行子类构造函数。析构时，先析构子类构造函数，再析构父类析构函数。
　　子类继承父类的`public`, `protected`成员函数与成员变量，继承下来的成员仍然是`public`与`protected`可见性的（public继承），子类可以对父类中的成员进行覆盖，在子类（对象）中优先调用子类成员。在子类定义中，即使成员已覆盖，也可以使用父类的成员，只需要在定义中使用`father_class_name::member_name`，就可以使用父类成员，但在子类对象中不能调用父类成员

# 类的操作的实现

```cpp
#include <iostream>
using namespace std;

class father_class{

public:
	father_class(){//父类默认构造函数
		public_print();
		private_print();
		protected_print();
	}
	father_class(int a){//父类自定义构造函数
		cout << "father class constructed function overloaded." << endl;
	}
	int father_public_variable = 100;
	void public_print(){
		cout << "This is a public function." << endl;
	}
private:

	void private_print(){
		cout << "This is a private function." << endl;
	}
protected:
	int father_protected_variable = 2;
	void protected_print(){
		cout << "This is a protected function." << endl;
	}
};

class son_class :father_class{
public:
	son_class(){//子类默认构造函数
		public_print();
		//private_print();基类不可访问父类的private
		protected_print();		
	}
	int father_public_variable = 200;
	
	void public_print(){//覆盖父类中的public_print
		cout << "I'am son_public_print function." << endl;

		//print public variable
		cout << father_public_variable << endl;
		cout << father_class::father_public_variable << endl;
		
		father_protected_variable = 50;
		cout << father_protected_variable << endl;
		cout << father_class::father_protected_variable << endl;
	}
};

void main(){
	father_class father_object;
	cout << endl;
	cout << "father object created." << endl;
	cout << endl;
	father_class* father_object_2 = new father_class(0);
	cout << endl;
	son_class son_object;
	cout << endl;
	cout << "son object created." << endl;
	cout << endl;

	
	son_object.father_public_variable = 500;
	father_object.father_public_variable = 300;//不影响son_object
	//son_object.father_protected_variable = 10;子类对象不能对protected变量进行直接操作
	son_object.public_print();
	
	delete father_object_2;
	system("pause");
}
```

# Reference

[C/C++中函数参数传递详解](http://www.cnblogs.com/Romi/archive/2012/08/09/2630014.html)
[C++中protected的访问权限](http://blog.csdn.net/luoruiyi2008/article/details/7179788)