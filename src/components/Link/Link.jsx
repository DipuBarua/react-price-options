import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div>
            <li className=" mr-10 hover:bg-white px-10 py-1 rounded-xl" ><a href={`routes.path`}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object,
}
export default Link;