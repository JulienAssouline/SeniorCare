import React, {useState} from 'react'
import styles from '../../Styles/JobDashboardScreen/JobDashboardScreenStyle'
import BasicInformationTitle from './BasicInformationTitle'
import BasicInformationCalendar from './BasicInformationCalendar'
import BasicInformationAddress from './BasicInformationAddress'
import BasicInformationRate from './BasicInformationRate'

const BasicInformationBody = props => {

		let body;

    if (props.formPosition === 0) {
        body = <BasicInformationTitle />
    } else if (props.formPosition === 1) {
        body = <BasicInformationCalendar />
    } else if (props.formPosition === 2) {
        body = <BasicInformationAddress />
    } else if (props.formPosition === 3) {
        body = <BasicInformationRate />
    }

    return (
        body
    )
}

export default BasicInformationBody