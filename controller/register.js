import Users from '../models/Users.js';
import 'dotenv/config'


const register =  async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const user = new Users({username: username, 
                  password: password,
                  name: name, 
                  email: email,
                  isGuest: false
                });

    Users.findOne({username:username}).then((result)=>{
        if(!result){
            //console.log('User does NOT exist.');
            try {
                user.save( async(err, newUserResult) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('New user created!');
                    }
                    res.redirect('/login')
                    res.end();
                });
            } catch(err) {
                console.log(err);
                res.redirect('/register-fail')
                res.end('User could not be added!');
            }
        } else {
            console.log('User already exists!');
            res.redirect('/register-fail')
            res.end();
        }
    }).catch((err) => {
        console.log(err);
    })
};

export default register