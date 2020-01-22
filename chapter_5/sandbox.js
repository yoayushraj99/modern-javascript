// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    // access the blogs here
    // console.log(this);
    console.log('this user has written these blogs:');
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
};
//The JavaScript this keyword refers to the object it belongs to.
/*It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.*/
//one more thing we cannot use arrow function if we use this method it only works with usual function.
//short hand of usual function.
//eg:logout:function(){ }(long form of usual function).
//eg:logout(){}(shorthand of usual function).
// console.log(this);
user.logBlogs();
