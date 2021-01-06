import * as React from 'react';
import styles from './Events.module.scss';
import style from './axa.module.scss';
import { IEventsProps } from './IEventsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Gallery from './Slider/Slider';

export default class Events extends React.Component<IEventsProps, {}> {
  public render(): React.ReactElement<IEventsProps> {
    return (
      <div className={style.eventsCenter}>
      <div className={style.timeline}>
          <div className={style.eventhead}> Events</div>
          {/* <a>See all</a> */}
      </div>
        <Gallery /> 
  </div>
    );
  }
}
