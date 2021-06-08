const Tab = (props) => {
  const onClick = () => {
    props.onClick(props.label);
  };

  let className = "image-tab-list-item";

  if (props.activeTab === props.label) {
    className += " image-tab-list-active";
  }

  return (
    <li className={className} onClick={onClick}>
      {props.label}
    </li>
  );
};

export default Tab;
