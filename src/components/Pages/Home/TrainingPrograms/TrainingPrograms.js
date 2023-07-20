import React from 'react';
import './TrainingProgram.css';
import { trainingProgramData } from '../../../infoData.config';
import TrainingProgramCard from './TrainingProgramCard';

const TrainingPrograms = () => {
    return (
        <section>
            <div className="container ">
                <h2 className='f-os text-center training-header'>TRAINING <span className='brand-c'>PROGRAMS</span></h2>
                <div className="row">
                    {
                        trainingProgramData.map(data => <TrainingProgramCard data={data}></TrainingProgramCard>)
                    }
                
                </div>
            </div>
        </section>
    );
};

export default TrainingPrograms;