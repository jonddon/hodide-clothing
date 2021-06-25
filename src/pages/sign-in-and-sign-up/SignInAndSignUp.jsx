import React, {Component} from 'react';
import SignIn from '../../components/sign-in/SignIn';
import { auth } from '../../firebase/firebase';


class SignInAndSignUp extends Component{
    constructor() {
        super();
        this.state = { currentUser: null}
        
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        //The subscription is always open
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user)
        });   

    }

    UNSAFE_componentWillMount() {
        //To close subscription
        this.unsubscribeFromAuth = null;
    }

    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn/>
            </div>
        )
    }
}  
    


export default SignInAndSignUp
