import * as React from 'react';
import pnp from 'sp-pnp-js';
import  { Carousel }   from "react-responsive-carousel";
import { ISliderItemReactProps } from './ISliderItemReactProps';
import { ClassSlider } from './ClassSlider';
import { ISlider } from './ISlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styling from './slider.module.scss';


export default class Gallery extends React.Component<ISliderItemReactProps, any> {
    public constructor(props:ISliderItemReactProps,any)

      {
        super(props);
        this.state={
            items:[]
        };
        }
       

         public   render() {
          return(
            <>
                <Carousel autoPlay>        
          {
                     this.state.items.map((item:ISlider)=>{
                return(
                         <>
                          <div>
              <img alt="Events" src={item.Image} />
                <p className={styling.Text}>{item.Title}</p>
                </div>
                     
                        </>
                      );
    
                  })
      
         }
         </Carousel>  
       </>
          );
  }
  public componentDidMount()
  {
      // debugger;
      this._EventsList();
  }
  private _EventsList():void
  {
      pnp.sp.web.lists.getByTitle(`Event`).items.get().then
      ((response)=>{
          let EventsCollection=response.map(item=> new ClassSlider(item)).reverse();
          this.setState({items:EventsCollection});
      }
  
      );
  }
}

