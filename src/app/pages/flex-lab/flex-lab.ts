import { Component } from '@angular/core';
import { Demo } from '../../core/interface/demo.interface';
import { FlexDemo } from './component/flex-demo/flex-demo';

@Component({
  imports: [FlexDemo],
  selector: 'app-flex-lab',
  styleUrl: './flex-lab.css',
  templateUrl: './flex-lab.html',
})
export class FlexLab {
  // : tipar variable
  // <> tipar funcion
  protected readonly justify: Demo[] = [
    {
      code: 'justify-content: flex-start',
      variant: 'justify-start',
    },
    {
      code: 'justify-content: center',
      variant: 'justify-center',
    },
    {
      code: 'justify-content: flex-end',
      variant: 'justify-end',
    },
    {
      code: 'justify-content: space-between',
      variant: 'justify-between',
    },
    {
      code: 'justify-content: space-around',
      variant: 'justify-around',
    },
  ];

  protected readonly alignItems: Demo[] = [
    {
      code: 'align-items: flex-start',
      variant: 'align-flex-start',
    },
    { code: 'align-items: center', variant: 'align-center' },
    {
      code: 'align-items: flex-end',
      variant: 'align-flex-end',
    },
    {
      code: 'align-items: stretch',
      variant: 'align-stretch',
    },
    {
      code: 'align-items: baseline',
      variant: 'align-baseline',
    },
  ];

  protected readonly alignContent: Demo[] = [
    {
      code: 'align-content: flex-start',
      variant: 'align-content-flex-start',
    },
    {
      code: 'align-content: center',
      variant: 'align-content-center',
    },
    {
      code: 'align-content: flex-end',
      variant: 'align-content-flex-end',
    },
    {
      code: 'align-content: baseline',
      variant: 'align-content-baseline',
    },
    {
      code: 'align-content: stretch',
      variant: 'align-content-stretch',
    },
    {
      code: 'align-content: space-around',
      variant: 'align-content-space-around',
    },
    {
      code: 'align-content: space-between',
      variant: 'align-content-space-between',
    },
    {
      code: 'align-content: space-evenly',
      variant: 'align-content-space-evenly',
    },
  ];

  protected readonly flexDirection: Demo[] = [
    {
      code: 'flex-direction: row',
      variant: 'flex-direction-row',
    },
    {
      code: 'flex-direction: row-reverse',
      variant: 'flex-direction-row-reverse',
    },
    {
      code: 'flex-direction: column',
      variant: 'flex-direction-column',
    },
    {
      code: 'flex-direction: column-reverse',
      variant: 'flex-direction-column-reverse',
    },
  ];
}
