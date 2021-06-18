import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const Tpostatus = () => {
    const [status, setStatus] = useState({
        post: ""
    });
    

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value
        
        setStatus({...status, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { post } = status;

   
        const res = await fetch("/status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                post
            })
        });

        const data = await res.json();

        // I need to change the data to res 
       
             window.alert(" post Successfull");
            console.log("post Registration");

            // history.push("/login");
        
    }


    
    
    
    
    
    return(
        <>
        <form method="POST">
        <div className="form-group">
                                    {/* <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label> */}
                                    <input type="text" name="post" id="post" autoComplete="off"
                                        value={status.post}
                                        onChange={handleInputs}
                                        placeholder="Data to post"
                                    />
                                </div>
            <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Post" onClick={PostData}/>
                                    </div>
        
                                    </form>


        </>
    )
}

export default Tpostatus
