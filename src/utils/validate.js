export const validate1=(emailvar,passvar)=>{
    const emailvalidate=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailvar);
    const passwordvalidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passvar);

    if(!emailvalidate) return "Email is invalid";
    if(!passwordvalidate) return "Password is invalid";
    return null;

}
export const validate2=(uservar,emailvar,passvar)=>{
    const uservalidate=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(uservar);
    const emailvalidate=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailvar);
    const passwordvalidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passvar);
    if(!uservalidate) return "Username is invalid";
    if(!emailvalidate) return "Email is invalid";
    if(!passwordvalidate) return "Password is invalid";
    return null;

}
