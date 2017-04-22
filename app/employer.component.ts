import { Component } from '@angular/core';

@Component({
    template: `
    <div class="component-title">
        You have chosen to learn more about the company you work for.
    </div>
    <div class="component-header">
        (Organization Name) - (Locality, region:code) (1st phone #)
    </div>
    <div class="component-header-container">
        <img class="component-header-image" />
    </div>
    <div class="component-content">
        <div class="component-content-left">
            <div class="component-content-data-header">Online since: </div>
            <div class="component-content-data-header">Keywords: </div>
            <div class="component-content-data-header">Traffic Ranking: </div>
        </div>
        <div class="component-content-right">
            <div class="component-content-data">Online since: </div>
            <div class="component-content-data">Keywords: </div>
            <div class="component-content-data">Traffic Ranking: </div>
        </div>
    </div>
    <div class="component-button-container">
        <button>test</button>
        <button>test</button>
        <button>test</button>       
    </div>
    `
})
export class EmployerComponent { 

}