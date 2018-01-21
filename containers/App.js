import { connect } from 'react-redux';
import { COMMENT, commented, ADD, add } from '../Actions/actions.js';
import ListWeb from '../components/listWeb';
const mapStatetoProps = (state) => {
    const { comment } = state
    return {
        data: comment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        comments: (id) => {
            dispatch(commented(id))
        }
    }

}

const Connect = connect(mapStatetoProps, mapDispatchToProps)(ListWeb)
export default Connect;