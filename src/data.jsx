import Person from "./Person";

export function retArr() {
    let arr = [];
    let arr1 = ['John', 'Naval', 'Ameer', 'Robert', 'Jeevan'];
    let arr2 = ['John@yahoo.com', 'Naval@yahoo.com', 'Ameer@yahoo.com', 'Robert@yahoo.com', 'Jeevan@yahoo.com'];
    for (let i = 0; i < arr1.length; i++) {
        let per = new Person(i+50,arr1[i], arr2[i]);
        arr.push(per);
    }
    return arr;
}

export function retStr(a) {
    let arr = retArr();
    let s = arr.filter(n => n.id == a).pop();
    return (JSON.stringify(s))
}