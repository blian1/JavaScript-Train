//object literals
const blogs = [
    {title: 'Why mac & cheess rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs:[
        {title: 'Why mac & cheess rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs');
        this.blogs.forEach(blogs=>{
            console.log(blogs.title,blogs.likes);
        })
    },
};


user.logBlogs();
