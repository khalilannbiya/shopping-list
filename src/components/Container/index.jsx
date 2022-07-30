import PropType from "prop-types";
const Container = (props) => {
   return <section className="container">{props.children}</section>;
};

Container.propType = {
   children: PropType.node,
};

export default Container;
