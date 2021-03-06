import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class SendBTc extends Base {
	constructor(props) {
		super(props)
		
	}
	
	fadeIn(){
		
			
		
	}


	render() {
	
		return (
			<div className='section features' id='section3'>
				<div className='inner container-centered text-right'>
						<div className=' animated '>
							<h1 className='content-title'>Instant Use</h1>
							<p className='content'>Download & start earning bitcoin by exploring your city & sharing the app. And like any bitcoin wallet, you’ll be able to transfer bitcoin to any other bitcoin address.</p>
						</div>
						<div className='app-container bottom'>
							<a href='https://play.google.com/store/apps/details?id=com.setmusic.setcoins&hl=en' >
								<i className='fa app-icons screen clickable fa-android'></i>
							</a>
							<a href='https://itunes.apple.com/us/app/setcoins/id1153859584?mt=8' >
								<i className='fa app-icons screen clickable fa-apple'></i>
							</a>	
						</div>
				</div>
			</div>	
		)
	}
}
