import React from 'react';
import { Input, List } from 'antd';
import { produce } from 'immer';
// class TodoItem extends React.Component {
//   render() {
//     const { todo } = this.props;
//     return <li>{todo}</li>;
//   }
// }

const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ['파이썬 익히기', 'django 익히기'],
    current: '',
  };
  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      current: value,
    });
  };
  onKeyDown = (e) => {
    if (e.keyCode == 13) {
      this.setState(
        produce((draft) => {
          const current = draft.current.trim();
          if (current.length > 0) {
            draft.current = '';
            draft.todoList.push(current);
          }
        }),
      );

      //   const { todoList, current } = this.state;
      //   if (current.trim().length > 0) {
      //     this.setState({
      //       current: '',
      //       todoList: [...todoList, current.trim()],
      //     });
      //   }
    }
  };

  render() {
    return (
      <div style={{ width: '500px', margin: '30px auto' }}>
        <List
          header={'Todo List'}
          dataSource={this.state.todoList}
          bordered={true}
          style={{
            marginBottom: '4px',
          }}
          renderItem={(todo) => <List.Item>{todo}</List.Item>}
        />
        <Input
          type="text"
          value={this.state.current}
          placeholder={'할일을 입력해주세요.'}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        {/* <ul>
          {this.state.todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
        <input
          type="text"
          placeholder="할일을 입력해주세요."
          value={this.state.current}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <button>submit</button>
        <hr />
        {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

export default TodoList;
