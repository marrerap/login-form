import React from 'react' 

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                huxley: {
                    password:'password'
                }
            }
        }
    }

    render() {
        return(
            <div>
                {/* login form */}
            </div>
        )
    }

    _checkCredentials = (username, password) => {
            console.log("Checking Credentials")
            const userObj = this.state.credentials[username];
            if (userObj && (userobj.password === password)) {
                return {
                    isValid: true,
                    message: "Login Successfull"
                }
            } else {
                return {
                    isValid: false,
                    message: "Bad username or password"
                }
            } 
            
    }

}

export default Login