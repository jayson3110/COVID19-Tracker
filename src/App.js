import React from 'react';


import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/image.png';


class App extends React.Component {
	state = {
		data: {},

	}

	async componentDidMount() {
		const fetcData = await fetchData();
		this.setState({data: fetcData});
	}
	render() {
		const {data, country } = this.state;
		return (

			<div className={styles.container}>
			   <img className={styles.image} src={image} alt="COVID-19" />
			   <Cards data={this.state.data}/>
			   <CountryPicker />
			   <Charts  data={data} country={country}/>


			    
			</div>
		)
	}
}

export default App;