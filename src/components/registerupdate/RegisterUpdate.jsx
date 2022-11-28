import axios from "axios";
import joi from "joi";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./registerupdate.module.scss";

function Register() {
  const errRef = useRef();
  const nameRef = useRef();
  const lastRef =useRef();
  const emailRef =useRef();
  const passRef = useRef();
  const ageRef = useRef();
  const compassRef = useRef();

  let navigate = useNavigate();

  const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const AGE_REGEX = /^[2-4][0-9]|50$/;
  const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [loading, setloading] = useState(false)

  const [firstName, setfirstName] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [FirstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setlastName] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [LastNameFocus, setLastNameFocus] = useState(false);

  const [email, setemail] = useState("");
  const [validemail, setValidemail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [age, setage] = useState("");
  const [validage, setValidage] = useState(false);
  const [ageFocus, setageFocus] = useState(false);

  const [pass, setpass] = useState("");
  const [validpass, setValidpass] = useState(false);
  const [passFocus, setpassFocus] = useState(false);

  const [passmatch, setpassmatch] = useState("");
  const [validpassmatch, setValidpassmatch] = useState(false);
  const [passmatchFocus, setpassmatchFocus] = useState(false);

  const [errorMsg, seterrorMsg] = useState("");


  useEffect(() => {
    nameRef.current.focus();
  }, []);

  /* Field of firstName */
  useEffect(() => {
    const result = NAME_REGEX.test(firstName);

    setValidFirstname(result);
  }, [firstName]);

  /* Field of lastName */
  useEffect(() => {
    const result = NAME_REGEX.test(lastName);

    setValidLastname(result);
  }, [lastName]);

  /* Field of Email */
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);

    setValidemail(result);
  }, [email]);

  /* Field of  Phone */
  useEffect(() => {
    const result = AGE_REGEX.test(age);

    setValidage(result);
  }, [age]);

  /* Field of  Pass */
  useEffect(() => {
    const result = PASS_REGEX.test(pass);

    setValidpass(result);
  }, [pass]);

  /* Field of  Passmatch */
  useEffect(() => {
    const result = pass === passmatch;

    setValidpassmatch(result);
  }, [pass, passmatch]);

  let resetForm = ()=>{

    nameRef.current.value =""
    lastRef.current.value =""
    emailRef.current.value =""
     passRef.current.value =""
     ageRef.current.value =""
     compassRef.current.value=""
  }

  let goToLogin = () => {
    resetForm();
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 2000);
  };

  let user = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: pass,
    age: age,
  };


  let DatatoAPi = async () => {
    const { data } = await axios.post(
      `https://route-egypt-api.herokuapp.com/signup`,
      user
    );
    if (data.message == "success") {
      seterrorMsg(`Congratulation ${email} You Can Entered`);
      setloading(false)
      goToLogin();
    } else {
      seterrorMsg(data.message);
      setloading(false)
    }
  };

  let InsertData = (e) => {
    e.preventDefault();
    setloading(true)
    const v1 = NAME_REGEX.test(firstName);
    const v3 = EMAIL_REGEX.test(email);
    const v2 = AGE_REGEX.test(age);
    const v4 = PASS_REGEX.test(pass);
    const v5 = pass === passmatch;
    const v6 = NAME_REGEX.test(lastName);
    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6) {
      seterrorMsg("Please Enter Your Valid Enteries");
      return;
    } else {
      DatatoAPi();
    }
  };


  return (
    <>
      <div className={`${styled.register_home} container-fluid my-5`}>
        <form action="" onSubmit={InsertData}>
          <h2 className="text-center my-4 ">REGISTER</h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            </div>
          </div>
          <div className="row justify-content-center align-items-center ">
            <div className="col-md-5">
              <div className="mb-3 position-relative">
                <div className="form-floating ">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your first name"
                    ref={nameRef}
                    autoComplete="off"
                    onChange={(e) => setfirstName(e.target.value)}
                    onFocus={() => setFirstNameFocus(true)}
                    onBlur={() => setFirstNameFocus(false)}
                  />
                  <label
                    htmlFor="exampleInputName"
                    className="form-label text-danger"
                  >
                    First_Name
                  </label>
                </div>
                <div className="my-2 position-absolute top-100 right-100" style={{"z-index":"999"}}>
                  <div
                    className={`${
                      FirstNameFocus && firstName && !validFirstname
                        ? `${styled.onscreen}`
                        : `${styled.offscreen}`
                    }  alert alert-danger `}
                    ref={errRef}
                  >
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                    <br />
                    <span style={{ color: "red" }}>Ex:Abdallah</span>
                  </div>
                </div>
              </div>

              <div className="mb-3 position-relative">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your last name"
                    name="last_name"
                    ref={lastRef}
                    autoComplete="off"
                    onChange={(e) => setlastName(e.target.value)}
                    onFocus={() => setLastNameFocus(true)}
                    onBlur={() => setLastNameFocus(false)}
                  />
                  <label
                    htmlFor="exampleInputName"
                    className="form-label text-danger"
                  >
                    Last_Name
                  </label>
                </div>

                <div className="my-2 position-absolute top-100 right-100" style={{"z-index":"999"}}>
                  <div
                    className={`${
                      LastNameFocus && lastName && !validLastname
                        ? `${styled.onscreen}`
                        : `${styled.offscreen}`
                    }  alert alert-danger `}
                    ref={errRef}
                  >
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                    <br />
                    <span style={{ color: "red" }}>Ex:Abdallah</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 position-relative">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="enter your mail"
                    name="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setemail(e.target.value)}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <label
                    htmlFor="exampleInputName"
                    className="form-label text-danger"
                  >
                    Email
                  </label>
                </div>

                <div className="my-2 position-absolute top-100 right-100" style={{"z-index":"999"}}>
                  <div
                    className={`${
                      emailFocus && email && !validemail
                        ? `${styled.onscreen}`
                        : `${styled.offscreen}`
                    }  alert alert-danger `}
                    ref={errRef}
                  >
                    You have entered an invalid email address!.
                    <br />
                    Valid email{" "}
                    <span style={{ color: "red" }}>Ex:abdallah@yahoo.com</span>
                  </div>
                </div>
              </div>
              <div className="mb-3 position-relative">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Age"
                    name="age"
                    ref={ageRef}
                    autoComplete="off"
                    onChange={(e) => setage(e.target.value)}
                    onFocus={() => setageFocus(true)}
                    onBlur={() => setageFocus(false)}
                  />
                  <label
                    htmlFor="exampleInputName"
                    className="form-label text-danger"
                  >
                    Age
                  </label>
                </div>

                <div className="my-2 position-absolute top-100 right-100" style={{"z-index":"999"}}>
                  <div
                    className={`${
                      ageFocus && age && !validage
                        ? `${styled.onscreen}`
                        : `${styled.offscreen}`
                    }  alert alert-danger `}
                    ref={errRef}
                  >
                    <span style={{ color: "red" }}>
                      Your Age Must Between 20 :50
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="mb-3 position-relative">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Password"
                    name="password"
                    ref={passRef}
                    autoComplete="off"
                    onChange={(e) => setpass(e.target.value)}
                    onFocus={() => setpassFocus(true)}
                    onBlur={() => setpassFocus(false)}
                  />
                  <label
                    htmlFor="exampleInputName"
                    className="form-label text-danger"
                  >
                    Password
                  </label>
                </div>

                <div className="my-2 position-absolute top-100 right-100" style={{"z-index":"999"}}>
                  <div
                    className={`${
                      passFocus && pass && !validpass
                        ? `${styled.onscreen}`
                        : `${styled.offscreen}`
                    }  alert alert-danger `}
                    ref={errRef}
                  >
                    You have entered a Strong password!.
                    <br />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters,
                    <br />
                    a number and a special character.
                    <br />
                    (@#$%^&*0aA) <br />
                    <span style={{ color: "red" }}>Ex:I*******5@</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3 position-relative">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Password"
                    name="password"
                    ref={compassRef}
                    autoComplete="off"
                    onChange={(e) => setpassmatch(e.target.value)}
                    onFocus={() => setpassmatchFocus(true)}
                    onBlur={() => setpassmatchFocus(false)}
                  />
                  <label
                    htmlFor="exampleInputName"
                    className="form-label text-danger"
                  >
                    ConfirmationPassword
                  </label>
                </div>

                <div className="my-2 position-absolute top-100 right-100" style={{"z-index":"999"}}>
                  <div
                    className={`${
                      passmatchFocus && passmatch && !validpassmatch
                        ? `${styled.onscreen}`
                        : `${styled.offscreen}`
                    }  alert alert-danger `}
                    ref={errRef}
                  >
                    <span style={{ color: "red" }}>
                      Sorry, Password Not Match Try Again{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center py-5 w-25 m-auto">
            <button
              type="submit"
              disabled={
                !validemail ||
                !validage ||
                !validFirstname ||
                !validpass ||
                !validpassmatch ||
                !validLastname
                  ? true
                  : false
              }
              className={
                !validemail ||
                !validage ||
                !validFirstname ||
                !validpass ||
                !validpassmatch ||
                !validLastname
                  ? `${styled.disabled} btn `
                  : `${styled.enabled} btn`
              }
            >
            {loading ?  <i class="fa-solid fa-sync fa-spin"></i>:""}  REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
