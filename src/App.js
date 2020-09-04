import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from "axios"
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};

    this.login = this.login.bind(this)
  }

  login() {

  }

  render() {
    return (
          <div className="card text-center pt-5 pb-5">
            <form>
              <label>
                Email:
                <input type="email" name="email" />
              </label> <br />
              <label>
                Password:
                <input type="password" name="password" />
              </label> <br />
              <button type="submit" onClick={this.login}>Login</button>
            </form>

             <nav>
              <Link to='/register'>Register</Link>
            </nav>
          </div>
        )
  }
}

class Register extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      fieldRegister: {
        email: 'begusibrahim000@gmail.com',
        password: 'begus',
        username: 'begus ibrahim'
      }
    };

    this.register = this.register.bind(this);
  }

  register() {
    // const dataRegister = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: this.state.fieldRegister.email, password: this.state.fieldRegister.password, username: this.state.fieldRegister.username })
    // };

    // fetch("http://18.141.178.15:8080/register", dataRegister)
    // .then(response => console.log(response))
    // .catch(error => alert(error))


  }

  render() {
    return (
          <div className="card text-center pt-5 pb-5">
            <form>
              <label>
                Username:
                <input type="text" name="username" />
              </label> <br />
              <label>
                Email:
                <input type="email" name="email" />
              </label> <br />
              <label>
                Password:
                <input type="password" name="password" />
              </label> <br />
              <button type="submit" onClick={this.register}>Register</button>
            </form>

             <nav>
              <Link to='/'>Login</Link>
            </nav>
          </div>
    )
  }
}

class ChecklistControllers extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      dataChecklistControllers: []
    }
  }

  componentDidMount() {
    // fetch("http://18.141.178.15:8080/checklist")
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({ dataChecklistControllers: data })
    // })
    // .catch(error => alert(error))

    axios.get('http://18.141.178.15:8080/checklist')
    .then(data => {
      console.log(data)
      this.setState({ dataChecklistControllers: data })
    })
    .catch(error => alert(error))
  }

  render() {
    const { dataChecklistControllers } = this.state


    return (
      <div>
        <ul>
          { dataChecklistControllers.map((item,index) => <li>{item}</li> )}
        </ul>
      </div>  
    )
  }
}

function HalamanTidakDitemukan() {
  return (
    <div>
      <h1>Halaman tidak di termukan</h1>
          <Link to='/'>Kembali ke halaman utama</Link>
    </div>
  )
}

class App extends Component {
  render() {
    return (


      <BrowserRouter>

          <main>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/checklist" exact component={ChecklistControllers} />
                <Route exact component={HalamanTidakDitemukan} />
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}

export default App
