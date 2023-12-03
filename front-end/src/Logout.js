
const Logout = props =>{
    if (localStorage.getItem("token")){
        localStorage.removeItem("token");
    }
    
    return(
        <>
        <h1>You are logged out.</h1>
        </>
    )
}
export default Logout