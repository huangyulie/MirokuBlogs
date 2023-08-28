Promise.all = function(promiseList){
    return new Promise((resolve , reject)=>{
        let count = 0;
        let fullCount = 0;
        let res = [];
        try{
            promiseList.forEach(item=>{
                let i = count;
                count++;
                Promise.resolve(item).then((data)=>{
                    fullCount++;
                    res[i] = data;
                    if(fullCount === promiseList.length){
                        resolve(res[res.length-1]);
                    }
                },reject)
            })
            if(count === 0){
                reject(res);
            }
        }catch(err){
            reject(err)
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

function JSON2DOM(obj){
    let div = document.createElement(obj.tag);
    if(obj.attrs){
        Object.entries(([k , v])=>{

        })
    }
}


let obj = {
    tag: 'DIV',
    attrs:{
    id:'app'
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

