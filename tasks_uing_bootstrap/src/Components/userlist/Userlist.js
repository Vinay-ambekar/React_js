import React, { Component } from 'react';

class Userlist extends Component {
    constructor() {
        super();
        console.log('constructor Executed');
    }

    state = {
        users: []
    };

    static getDerivedStateFromProps() {
        console.log('static getDerivedStateFromProps executed');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getUsersData();
    }

    getUsersData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            this.setState({ users: data });
            console.log('users:', this.state.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        return (
            <div className="table-responsive">
                
                <table className="container table list-group-flush">
                
                    <thead>
                    <h2>Users-List</h2>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Userlist;
