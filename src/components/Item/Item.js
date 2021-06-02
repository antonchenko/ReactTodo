import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {

	render () {
		const { value, isDone, onClickDone, onClickDelete, id } = this.props;

	  return (<div className={styles.wrap}>
		<Checkbox
			checked={isDone}
			style={{color:"DarkViolet"}}
			inputProps={{ 'aria-label': 'primary checkbox' }}
			onClick={() => onClickDone(id)}
		  />
		<label className = {
			classnames({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}> {value}
		</label>
			 <DeleteIcon className={styles.btn} fontSize="large"
			 onClick={() => onClickDelete(id)} />
	   </div>);
  }
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
};

export default Item;