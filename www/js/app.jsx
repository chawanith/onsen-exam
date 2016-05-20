var MyPage = React.createClass({
  renderToolbar: function() {
    return (
      <Ons.Toolbar>
        <div className='center'>Infinite scroll</div>
      </Ons.Toolbar>
    );
  },

  renderRow: function(row, index) {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
          y = 40 + Math.round(5 * (Math.random() - 0.5));

    const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel'];
    const name = names[Math.floor(names.length * Math.random())];

    return (
      <Ons.ListItem key={index}>
        <div className='left'>
          <img src={`http://placekitten.com/g/${x}/${y}`} style={{margin: 0}} className='list__item__thumbnail' />
        </div>
        <div className='center'>
          {name}
        </div>
      </Ons.ListItem>
    );
  },

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.List
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          renderRow={this.renderRow}
          renderHeader={() => <Ons.ListHeader>Cute cats</Ons.ListHeader>}
        />
      </Ons.Page>
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('app'));
});