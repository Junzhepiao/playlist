fetch(`https://lit-fortress-6467.herokuapp.com/post`, {  
    method: 'POST',  
    headers: {  
      'auth': '1234'  
    },  
     body: JSON.stringify({
    name: 'dean',
    login: 'dean',
  })
})
.then(function (data) {  
  console.log('Request success: ', data);  
})  
.catch(function (error) {  
  console.log('Request failure: ', error);  
});