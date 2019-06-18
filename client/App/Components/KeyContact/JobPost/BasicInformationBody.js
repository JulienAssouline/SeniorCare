import React, {useState} from 'react'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import BasicInformationTitle from './BasicInformationTitle'
import BasicInformationCalendar from './BasicInformationCalendar'
import BasicInformationAddress from './BasicInformationAddress'
import BasicInformationRate from './BasicInformationRate'

const BasicInformationBody = props => {

		let body;

    if (props.currentPosition === 0) {
        body = <BasicInformationTitle />
    } else if (props.currentPosition === 1) {
        body = <BasicInformationCalendar />
    } else if (props.currentPosition === 2) {
        body = <BasicInformationAddress />
    } else if (props.currentPosition === 3) {
        body = <BasicInformationRate />
    }

    return (
        body
    )
}

export default BasicInformationBody