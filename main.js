let p = 18;
let promise = new Promise(function (resolve, reject) {
    if (p === 15){
        resolve('ура, вы угадали!')
    }else {
        reject ('не угадали, попробуйте еще раз.')
    }
})
promise.then((response) => console.log(response))
.catch((error) => console.log(error))
