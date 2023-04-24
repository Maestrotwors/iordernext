import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(
    ':enter',
    [
      style({ opacity: 0, transform: 'translateY(7px)' }),
      animate(
        '{{time}}ms {{delay}}ms ease-in',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
    ],
    { params: { time: 200, delay: 0 } }
  ),
]);
