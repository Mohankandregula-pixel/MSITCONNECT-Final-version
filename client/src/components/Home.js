import React, {useState, useEffect} from 'react'
import Tpostatus from './Tpostatus';
import Statusview from './Statusview';
import PostList from './PostList'
import PostListstud from './PostListstud'

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);
            setUserData(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h2>{userName}</h2>
                    
                </div>
            </div>
            <div>
            
            &nbsp;
            &nbsp;
            &nbsp;

            <div className="container-fluid">
                     <div className="row">
                     <div className="col-4">
                    <div class="card">
                        <img
                            src="https://lh3.googleusercontent.com/proxy/TPjr72fSbn7vOibOrhszfA8CySNejl2nPaUh5HF2vzFX9qMQHoid1nz5UYiDA2Fnc38oRlLFXr89lAoyLq0K1xcPlQs-WpmWlQx3h4xAEjArfI4UGRkN67PCGeMQ1gWxXimKXItZU1w"
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Recent Notifications</h5>
                            <p class="card-text">
                            You can find all new recent Notifications here.
                            </p>&nbsp;
                            <p></p>
                            <a href="#" class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-4">
                    <div class="card">
                        <img
                            src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg"
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Resource references</h5>
                            <p className="card-text">
                            Here you can find all the resources for your placement preparation.
                            </p>&nbsp;
                            <p></p>

                            <a href="/Resources"  class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>


                    <div className="col-4">
                    <div class="card">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08aea422-eab9-428b-82c9-9c04e411bb8c/dbf6lii-b673689b-63e0-42aa-b6cb-33fe86182ddc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4YWVhNDIyLWVhYjktNDI4Yi04MmM5LTljMDRlNDExYmI4Y1wvZGJmNmxpaS1iNjczNjg5Yi02M2UwLTQyYWEtYjZjYi0zM2ZlODYxODJkZGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e_i9F52lzHdKSrdANzIYe7qsXn_NR6jIiEX_jm4tCCo"
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Important dates</h5>
                            <p class="card-text">
                            Make a schedule and start your preparation right now.
                            </p>&nbsp;
                            <p></p>

                            <a href="https://www.google.com/calendar/about/" class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    {userData.work == "TPO" &&( 
                <div className="container emp-profile">

                    {/* <h1>TPO</h1> */}
                    <Tpostatus />
                    <br/>
                    {/* <h1>Posts</h1> */}
                    {/* <Statusview /> */}
                    <PostList />
                    
                 

                </div>
            )}
            {userData.work == "student" &&(
                    <div > 
                        <div className="container emp-profile">
                        {/* <h1>Posts</h1> */}
                       

                        <PostListstud />
                      
                        </div>
                    </div>
                )}
                  {userData.work == "Student" &&(
                    <div > 
                        <div className="container emp-profile">
                        {/* <h1>Posts</h1> */}
                       

                        <PostListstud />
                      
                        </div>
                    </div>
                )}
 
                
                
            </div>

       
        </>
    )
}

export default Home
