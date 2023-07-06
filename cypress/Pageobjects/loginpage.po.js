class LoginPage{

    usernameinput(){

        return '//input[@placeholder="Username"]'
    }

    passwordinput(){

        return 'input[type="password"]'
    }

    loginBtn(){

        return 'button[type="submit"]'
    }

    loginerrormessage(){

        return "Invalid credentials"
    }

}

const login = new LoginPage()

export default login