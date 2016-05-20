var MyPage = React.createClass({
  displayName: 'MyPage',

  renderToolbar: function () {
    return React.createElement(
      Ons.Toolbar,
      null,
      React.createElement(
        'div',
        { className: 'center' },
        'Infinite scroll'
      )
    );
  },

  renderRow: function (row, index) {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
          y = 40 + Math.round(5 * (Math.random() - 0.5));

    const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel'];
    const name = names[Math.floor(names.length * Math.random())];

    return React.createElement(
      Ons.ListItem,
      { key: index },
      React.createElement(
        'div',
        { className: 'left' },
        React.createElement('img', { src: `http://placekitten.com/g/${ x }/${ y }`, style: { margin: 0 }, className: 'list__item__thumbnail' })
      ),
      React.createElement(
        'div',
        { className: 'center' },
        name
      )
    );
  },

  render: function () {
    return React.createElement(
      Ons.Page,
      { renderToolbar: this.renderToolbar },
      React.createElement(Ons.List, {
        dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        renderRow: this.renderRow,
        renderHeader: () => React.createElement(
          Ons.ListHeader,
          null,
          'Cute cats'
        )
      })
    );
  }
});

ons.ready(function () {
  ReactDOM.render(React.createElement(MyPage, null), document.getElementById('app'));
});