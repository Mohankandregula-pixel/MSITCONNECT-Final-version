import React, {Component} from 'react'
import axios from '../axios'
import './Table.css'

export default class ViewLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:5000/viewLibrary`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    
                      
                        
                        <tr>
                        <td>{u.CompanyName}</td>
                        <td>{u.CompanyDomain}</td>
                        
                        <a href={u.CompanyResource}>{u.CompanyResource}</a>
                       
                        </tr> 
                       
                   
                    
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div >
                <div className="table">
                <table className="work">
                    <thead>
                    <tr>
                        <th>COMPANYNAME</th>
                        <th>COMPANYDOMAIN</th>
                        <th>COMPANYRESOURCES</th>
                 </tr>
                    </thead>
               
               <tbody> {this.state.users}</tbody> 
               </table>
            </div>
            </div>
        )
    }
}