//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
//Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
/*A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when 
the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.*/
/*  */
const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4){
        reject('could not fetch the data');
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  });

};

getTodos('json/luigi.json').then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});

// promise example
const getSomething = () => {

  return new Promise((resolve, reject) => {
    // do something (fetch data)
    // resolve('some data');
    reject('some error');
  });

};

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

