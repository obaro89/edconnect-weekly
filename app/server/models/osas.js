let arrObj = [
    {
        id: 1,
        name: "Osaretin",
        isGraduate: true
    },
    {
        id: 2,
        name: "Amaka",
        isGraduate: false
    },
    {
        id: 3,
        name: "Fedora",
        isGraduate: true
    },
    {
        id: 4,
        name: "Felix",
        isGraduate: false
    }
]

const update = (id, obj) => {
    let index = arrObj.findIndex(e => e.id === id)
    if (index !== -1) {
        res = arrObj[index]
        res = {
            ...res,
            ...obj
        }
        arrObj[index] = res
        return "updated"
    }else {
        return "Obj does not exist"
    }
}

const obj = {
    name: "Osaretin Igbinobaro",
    isGraduate: false,
    
}
console.log(update(90, obj))
update(2, {name: "Amaka Bernard"})
console.log(arrObj)