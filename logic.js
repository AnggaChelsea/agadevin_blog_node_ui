const data1 = [{
    id: 1,
    name: 'angga',
}]

const data2 = [{
    id:1,
    name: 'angga'
}]

const check1 = data1.slice().sort((a, b) => a.id - b.id)
const check2 = data2.slice().sort((a, b) => a.id - b.id)

const same = data1.length === data2.length && check1.every((value, index) => value === check2[index])
if(same){
    console.log('sama data sesuai silahkan masuk')
}else{
    console.log('tidak sama data tidak sesuai silahkan nanti kesini lagi')
}

const array1 = [1, 2, 3];
const array2 = [3, 2, 1];

const sortedArray1 = array1.slice().sort();
const sortedArray2 = array2.slice().sort();

const isSame = sortedArray1.length === sortedArray2.length && sortedArray1.every((value, index) => value === sortedArray2[index]);

if (isSame) {
  console.log("Elements in array1 and array2 are the same");
} else {
  console.log("Elements in array1 and array2 are different");
}

const date = 
console.log(date)