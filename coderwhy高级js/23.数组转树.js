var list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];
  


function changeData(arr, str = 1){
    return arr.filter((item) => {
        if (item.parentId === str) {
            item.children = changeData(arr,item.id)
        }
        return true
    })
}


console.log(changeData(list));