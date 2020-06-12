const promiseFirst = Promise.resolve('First resolve');
const promiseSecond = 10;
const promiseThree = new Promise((resolve, reject) => 
        setTimeout(resolve, 2000, 'Done')
   ); 
const promiseFour = fetch('www.google.com.br').then(res => res.json());

Promise.all([promiseFirst, promiseSecond, promiseThree, promiseFour])
        .then(value => {
            console.log(values);
        });