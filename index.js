// Promise.all = function(promiseList){
//     return new Promise((resolve , reject)=>{
//         let count = 0;
//         let fullCount = 0;
//         let res = [];
//         try{
//             promiseList.forEach(item=>{
//                 let i = count;
//                 count++;
//                 Promise.resolve(item).then((data)=>{
//                     fullCount++;
//                     res[i] = data;
//                     if(fullCount === promiseList.length){
//                         resolve(res[res.length-1]);
//                     }
//                 },reject)
//             })
//             if(count === 0){
//                 reject(res);
//             }
//         }catch(err){
//             reject(err)
//         }
//     })
// }

Promise.all = function (promiseList) {
    return new Promise((resolve, reject) => {
        try {
            let count = 0;
            let fullCount = 0;
            let res = [];
            promiseList.forEach(item => {
                let i = count;
                count++;
                Promise.resolve(item).then(data => {
                    fullCount++;
                    res[i] = data;
                    if (fullCount === promiseList.length) {
                        resolve(res)
                    }
                }, reject)
            })
        } catch (err) {
            reject(err);
        }
    })
}

// Promise.resolve(4).then(res=>console.log(res))

/*******test all *******/

/**
 * 不仅可以传数组，还可以传递迭代器。不是所有迭代器都支持for循环，所以。。。
 */
Promise.all([
    6,
    //   Promise.reject(1),
    Promise.resolve(2),
    Promise.resolve(3),
    4,
]).then(
    (data) => {
        // data:[1,2,3,4]
        // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
        console.log("成功", data);
    },
    (reason) => {
        // reason:reason2
        console.log("失败", reason);
    }
);

function JSON2DOM(obj) {
    let div = document.createElement(obj.tag);
    if (obj.attrs) {
        Object.entries(([k, v]) => {

        })
    }
}


let obj = {
    tag: 'DIV',
    attrs: {
        id: 'app'
    },
    children: [
        {
            tag: 'SPAN',
            children: [
                { tag: 'A', children: [] }
            ]
        },
        {
            tag: 'SPAN',
            children: [
                { tag: 'A', children: [] },
                { tag: 'A', children: [] }
            ]
        }
    ]
}


// let obj1 = {
//     a:1,
//     b:2,
//     c:3
// }

// Object.entries(obj1).forEach(([k,v])=>{
//     console.log(k,v);
// })

const data = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1,
                children: [
                    {
                        id: 2,
                        text: '节点1_1',
                        parentId: 1,

                    }
                ]
            }
        ]
    },
    {
        id: 3,
        text: '节点12',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1
            }
        ]
    }
]

function tree2arr(data) {
    let res = [];
    let arr = [...data]
    while (arr.length) {
        let len = arr.length;
        for (let i = 0; i < len; ++i) {
            let t = arr.shift();
            res.push({
                id: t.id,
                text: t.text,
                parentId: t.parentId
            })
            t.children && arr.push(...t.children)
        }
    }
    // data.forEach(item=>{
    //     if(item.children){
    //         tree2arr(item.children , res);
    //         delete item.children;
    //     }
    //     res.push(item);
    // })

    return res;
}

console.log(tree2arr(data));

let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
]
function get_tree(arr) {
    const list = []

    arr.forEach(element => {
        const chiildren_arr = arr.filter(ele => {
            return element.id === ele.pid
        })

        if (chiildren_arr.length > 0) {
            element.chiildren = chiildren_arr
        }

        if (element.pid === 0) {
            list.push(element)
        }
    });

    return list
}
console.log(get_tree(arr));


// Promise.resolve(1).then(data => {
//     console.log(data);
// }).then(data => {
//     console.log(123123);
// })

// function p1() {
//     return new Promise((resolve, reject) => {
//         resolve(1)
//         console.log(2)
//     })
// }

// function p2() {
//     return new Promise((resolve, reject) => {
//         reject(3)
//     })
// }

// p1().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// }).finally(() => {
//     console.log(('finally1'))
// })


// p2().then(res => {
//     console.log(res)
//     return 123;
// }).then(res=>{
//     console.log('12312');
// }).catch(err => {
//     console.log(err)
// }).finally(() => {
//     console.log(('finally2'))
// })


function fun(init , arr = []){
    let goldNum = 0;
    let max = -1;
    arr.sort((a,b)=>a-b);
    arr.forEach((item , index)=>{
        if(init >= item){
            goldNum++;
        }else{
            while(1){
                if(goldNum < 0){
                    break;
                }
                goldNum--;
                init++;
                if(init >= item){
                    goldNum++;
                    break;
                }
            }
        }
        if(goldNum>max){
            max = goldNum;
        }
    })
    return max;
}

console.log(fun(87,[1,2,2,2,3,3,3,3,3,3,4,88]));