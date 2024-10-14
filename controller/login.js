

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    Users.findOne({username:username}).then((result)=>{
        if (password != result.password) {
            console.log('Wrong password')
            // res.redirect('/login-fail');
            res.end();
        } else {
            console.log('Login successful!')
            req.session.guest = false;
            req.session.user = username
            req.session.userID = result._id
            if (req.session.resDate) {
                res.redirect('/fee')
                res.end();
            } else {
                
                res.end();
            }
        }
    }).catch((err) => {
        console.log(err);
        // res.redirect('/login-fail');
        res.end();
    })
    
  }
  export default login