import { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'Título 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Título 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Título 3',
        body: 'Corpo 3'
      }
    ]
  };

  timeoutUpdate = null;

  // verifica se o componente foi montado;
  componentDidMount() {
    this.handleTimeout();
  }

  // verifica se o componente foi atualizado;
  componentDidUpdate() {
    this.handleTimeout();
  }

  // verifica se o componente foi desmontado;
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'Título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h2>{counter}</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}


export default App;
