module.exports = function () {
  var _view =
    <div className="type-box">
      {this.state.data.name}
      /
      {this.state.data.title}
      <button onClick={this.editMode}>EDIT</button>
    </div>;
  var _edit =
    <div className="type-box">
      <FancyInput provider={this} name="name"/>
      /
      <FancyInput provider={this} name="title"/>
      <button onClick={this.save}>SAVE</button>
      <button onClick={this.cancelEditMode}>CANCEL</button>
    </div>;
  return this.state.editMode ? _edit : _view;
};