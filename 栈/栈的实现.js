/*
 * @Description: 栈的实现
 * @Author: Mogy
 * @Date: 2021-12-20 15:06:48
 * @LastEditors: Mogy
 * @LastEditTime: 2021-12-20 15:24:17
 */

class Stack {
    constructor() {
        this.items = []
    }

    // 1.添加新元素
    push (element) {
        this.items.push(element)
        return this.items.length
    }
    // 2.删除栈顶元素
    pop () {
        return this.items.pop()
    }
    // 3.返回栈顶元素
    peek () {
        return this.items[this.items.length - 1]
    }
    // 4.判断栈是否为空
    isEmpty () {
        return this.items.length === 0
    }
    // 5.返回栈的元素个数
    size () {
        return this.items.length
    }
    // 6.清除栈中的所有元素
    clear () {
        this.items = []
    }
}

let stack = new Stack()

stack.push('Mogy')
stack.push('Lq')

console.log(stack.size());
console.log(stack.isEmpty());

let a = stack.pop()
console.log(stack.size());
console.log(a);

let b = stack.peek()
console.log(stack.size());
console.log(b);

stack.push('Mogy')
stack.push('Lq')
stack.clear()
console.log(stack.size());


