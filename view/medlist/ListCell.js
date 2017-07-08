class ListCell extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <SomeOtherWidget
        {...this.props}
        onPress={this._onPress}
      />
    )
  }
}
