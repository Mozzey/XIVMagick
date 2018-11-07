import React, { Component } from 'react';

class CharacterJobs extends Component {
  constructor() {
    super();
    this.state = {
      dohJobs: [
        {
          id: 1,
          jobName: 'Carpenter',
          jobLevel: '70',
          jobIcon: 'Icon Placeholder'
        },
        {
          id: 2,
          jobName: 'Blacksmith',
          jobLevel: '70',
          jobIcon: 'Icon Placeholder'
        }
      ],
      dolJobs: [
        {
          id: 1,
          jobName: 'Botanist',
          jobLevel: '70',
          jobIcon: 'Icon Placeholder'
        },
        {
          id: 2,
          jobName: 'Miner',
          jobLevel: '70',
          jobIcon: 'Icon Placeholder'
        }
      ]
    };
  }
  render() {
    const { dohJobs, dolJobs } = this.state;
    // const { id, jobName, jobLevel, jobIcon } = dohJobs;
    return (
      <React.Fragment>
        <ul>
          {dohJobs.map(job => (
            <li key={job.id}>
              {job.jobName} - {job.jobLevel} - {job.jobIcon}
            </li>
          ))}
        </ul>
        <ul>
          {dolJobs.map(job => (
            <li key={job.id}>
              {job.jobName} - {job.jobLevel} - {job.jobIcon}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default CharacterJobs;
