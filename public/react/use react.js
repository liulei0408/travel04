class Nickname extends React.Component {
    constructor(props) {
      super(props)
      this.state = {acc: '登陆'}

    }
    componentDidMount() {
      
      this.request = $.get(this.props.url, function (data) {
        console.log(data)
        this.setState({acc: data.nickname})
      }.bind(this))
      
    }
    componentWillUnmount() {
      this.request.abort();
    }
    render() {
      return (
        <div>
          
        <a href="login.html" className="hhh ">
         {this.state.acc}</a>
          <a href="register.html">注册      
           
          </a>

        </div>
      )
    }
  }
  ReactDOM.render(
    <Nickname url="/user/info" />,
    document.getElementById('yh')
  )
  