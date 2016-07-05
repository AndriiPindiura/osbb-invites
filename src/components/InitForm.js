/// <reference path="../../typings/tsd.d.ts" />
'use strict';

require('./index/main.scss');

import React from 'react';
import {reduxForm} from 'redux-form';
let actions;

// let yeomanImage = require('../images/yeoman.png');

class InitForm extends React.Component {
	componentDidMount() {
		actions = this.props.actions;
		//console.log(actions);
	}

	parseFile(param) {
		//const {submit} = this.props;
		//console.log(param);
		let reader = new FileReader();
		reader.onload = function(progressEvent){
			// Entire file
			// console.log(this.result);

			// By lines
			let lines = this.result.split('\n');
			let coowners = [];
			for(let line = 0, length = lines.length; line < length; line++){
				let record = lines[line].split(';');
				if (record.length == 2) {
					coowners.push({ app: record[0], name: record[1]});
				}
			}
			param.coowners = coowners;
			console.log(param);
			actions.submit(param);
		};
		reader.readAsText(param.coowners[0]);

	}
	render() {
		
		const {fields:
			{
				city, street, building, feesaddress, feesbuilding, feesdate, feesquestions, coowners
			},
			handleSubmit
		} = this.props;
		//console.log(submit);
		return (
			<section className="index">
				<form onSubmit={handleSubmit(this.parseFile)}>
					<div>
						<div>
							<label>Місто: </label>
							<input type="text" placeholder="місто" {...city}/>
						</div>
						<div>
							<label>Вулиця: </label>
							<input type="text"placeholder="вулиця" {...street}/>
						</div>
						<div>
							<label>Будинок: </label>
							<input type="text" placeholder="будинок" {...building}/>
						</div>
						<div>
							<label>Місце проведення зборів: </label>
							<input type="text" placeholder="адреса проведення зборів" {...feesaddress}/>
						</div>
						<div>
							<label>Приміщення проведення зборів: </label>
							<input type="text" placeholder="будівля" {...feesbuilding}/>
						</div>
						<div>
							<label>Дата і час зборів: </label>
							<input type="datetime-local" {...feesdate}/>
						</div>
						<div>
							<label>Порядок денний: </label>
							<textarea rows="7" {...feesquestions}></textarea>
						</div>
						<div>
							<label>Список співвласників: </label>
							<input type="file" placeholder="файл з співвласниками" {...coowners} value={null}/>
						</div>
					</div>
					<input type="submit" value="Submit"/>

				</form>
			</section>
		);
	}
}

InitForm = reduxForm({
	form: 'osbb',
	fields: ['city', 'street', 'building', 'feesaddress', 'feesbuilding', 'feesdate', 'feesquestions', 'coowners']
})(InitForm);

// InitForm.defaultProps = {

// };

// InitForm.propTypes = {
// 	fields: React.PropTypes.object.isRequired,
// 	handleSubmit: React.PropTypes.func.isRequired,
// 	resetForm: React.PropTypes.func.isRequired,
// 	submitting: React.PropTypes.bool.isRequired
// }


export default InitForm;
// export default reduxForm({
//   form: 'osbb',
//   fields: ['city', 'street', 'building', 'feesaddress', 'feesbuilding', 'feesdate', 'feesquestions', 'coowners']
// })(InitForm)