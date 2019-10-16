import React from 'react'
import styled from 'styled-components'




export const Project = () => {
    return(
        <div><h1>Projects</h1>
            <div>
                <h2>Personal Trainer Client Management System</h2>
                <ul>
                    <li>Create a database in MySQL to record client’s biometrics </li>
                    <li>Generate a nutrition and training plan tailored to client’s goal</li>
                    <li>Implement a graphical user interface using Python to display the information in an appealing manner</li>
                </ul>
            </div>
            <div>
            <h2>Autonomous RC Car</h2>
                <ul>
                    <li>Took apart an RC Car and added own hardware such as Arduino,Raspberry Pi,,L298N Motor Driver to control throttle
                         and steering </li>
                    <li>Upgraded to Raspberry Pi to control functionality of RC Car with Python, and started training and record throttle 
                        and steering</li>
                </ul>
            </div>
            <div>
                <h2></h2>
            </div>
            <div>
                <h2></h2>
            </div>
            
            
        </div>
    )
}