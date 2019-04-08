import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('#JiSlider').JiSlider({color: '#fff', start: 3, reverse: true}).addClass('ff');
    $(window).load(function () {
    $('.flexslider').flexslider({
      animation: 'slide',
      start: function (slider) {
        $('body').removeClass('loading');
      }
    });
    });

    $('.counter').countUp();
  }

}
