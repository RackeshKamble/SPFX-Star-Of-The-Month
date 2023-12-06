import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxStartOftheMonthPropertiesPaneWebPart.module.scss';
import * as strings from 'SpfxStartOftheMonthPropertiesPaneWebPartStrings';

export interface ISpfxStartOftheMonthPropertiesPaneWebPartProps {
  bio: string;
  name: string;
  department: string;
  imageUrl: string ;
  experience: number;

}

export default class SpfxStartOftheMonthPropertiesPaneWebPart extends BaseClientSideWebPart<ISpfxStartOftheMonthPropertiesPaneWebPartProps> {

  public render(): void {

    if(this.properties.department === '' || this.properties.department === undefined){
      this.properties.department= "Pornographic Actor";
    }
    //https://boroktimes.com/storage/2023/07/channels4_profile-696x696.jpeg

    this.domElement.innerHTML = `
      <div class="${ styles.spfxStartOftheMonthPropertiesPane }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
             <center> 
              <span class="${ styles.title }">Star of the Year!</span>
                <p class="${ styles.subTitle }">Congrats, You are our Start of the Year.</p>
                </br>
                <img class="${ styles.imgProfile }" src="${this.properties.imageUrl}" />
                </br>
                <p class="${ styles.starname }">${escape(this.properties.name)}</p>
                <p class="${ styles.description }">${escape(this.properties.bio)}</p>
                <p class="${ styles.description }">${escape(this.properties.department)}  </p>
                <p class="${ styles.description }">${escape(this.properties.experience.toString())} Years of Experience </p>
              </center>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('bio', {
                  label: "Bio"
                }),
                
                PropertyPaneTextField('name', {
                  label: "Name of the Star"
                }),

                PropertyPaneDropdown('department', {
                  label: "Professional Roles",
                  options:
                  [
                    {key : 'Pornographic Actor' , text :'Pornographic Actor'},
                    {key : 'Pornographic Director' , text :'Pornographic Director'},
                    {key : 'YouTuber' , text :'YouTuber'}
                  ],
                  selectedKey : 'Pornographic Actor'

                }),

                PropertyPaneTextField('imageUrl', {
                  label: "Photo URL of the Star"
                }),

                PropertyPaneSlider('experience', {
                  label: "Total Experience", min:0, max : 20
                }),






              ]
            }
          ]
        }
      ]
    };
  }
}
