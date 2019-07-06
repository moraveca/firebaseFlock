import React from "react";
import "./style.css";

function SignUp(props) {
    return (
        <div>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2> Registration Form </h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Re-type Password" required />
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field radio_option">
                                    <h3>Please choose one</h3>
                                    <input type="radio" name="radiogroup1" id="rd1" />
                                    <label for="rd1">Seeking Family</label>
                                    <input type="radio" name="radiogroup1" id="rd2" />
                                    <label for="rd2">Volunteer Family</label>
                                </div>

                                <input className="button" type="submit" value="Register" />
                                <p className="change_link">
                                    Already a member ?
                    <a href="#tologin" className="to_register"> Go and log in </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <br />
        </div>

            );
}

export default SignUp;
