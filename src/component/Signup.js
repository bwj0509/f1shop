import React, { useState } from "react";


function Signup(){
    let [logininfo, setLogininfo] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    });

    function onSubmit(){
        // let copy_obj = {...personalinfo};

        // if(document.querySelector('#form3Example4cg').value != document.querySelector('#form3Example4cdg').value ){
        //     alert('패스워드가 일치하지 않습니다.');
        //     document.querySelector('#form3Example4cg').value = null;
        //     document.querySelector('#form3Example4cdg').value = null;

        // }
        // else{
        //     copy_obj.name = document.querySelector('#form3Example1cg').value;
        //     copy_obj.email = document.querySelector('#form3Example3cg').value;
        //     copy_obj.passwd = document.querySelector('#form3Example4cg').value;
    
        //     document.querySelector('#form3Example1cg').value = null;
        //     document.querySelector('#form3Example3cg').value = null;
        //     document.querySelector('#form3Example4cg').value = null;
        //     document.querySelector('#form3Example4cdg').value = null;

        //     personalinfoChange(copy_obj);
        // }
        // console.log(personalinfo)
    }

    const onChange = (e) =>{
        console.log('작동')
        const {name, value} = e.target
        console.log(name, value)
        setLogininfo({
            ...logininfo,
            [name]:value
        })
        console.log(logininfo)
    }
    



    return(
        <>
            <section class="vh-100 bg-image" style={{backgroundImage: `url('../signup_background.jpg')`}}>
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style={{borderRadius: '15px'}}>
                            <div class="card-body p-5">
                            <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                            <form>

                                <div class="form-outline mb-4">
                                <input type="text" onChange={onChange} name='username' id="form3Example1cg" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                </div>

                                <div class="form-outline mb-4">
                                <input type="email" id="form3Example3cg" onChange={onChange} name='email' class="form-control form-control-lg" />
                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                </div>

                                <div class="form-outline mb-4">
                                <input type="password" onChange={onChange} name='password' id="form3Example4cg" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Example4cg">Password
                                    {(logininfo.password.length < 8 && logininfo.password.length >0) ? <span style={{color:'red'}}>  UNDER 8</span> : null }
                                </label>
                                </div>

                                <div class="form-outline mb-4">
                                <input type="password" onChange={onChange} name='confirmpassword' id="form3Example4cdg" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Example4cdg">Repeat your password
                                    {(logininfo.password !== logininfo.confirmpassword) && logininfo.confirmpassword.length >0? <span style={{color:'red'}}>  NOT SAME</span>:null  }
                                </label>
                                </div>
                                
                                <div class="form-check d-flex justify-content-center mb-5">
                                <input
                                    class="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="form2Example3cg"
                                />
                                <label class="form-check-label" for="form2Example3g">
                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                </label>
                                </div>

                                <div class="d-flex justify-content-center">
                                <button onClick={onSubmit} type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                </div>

                                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" class="fw-bold text-body"><u>Login here</u></a></p>
                                <p></p>
                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}export default Signup;