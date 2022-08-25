import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
})
export class PriorityColorPipe implements PipeTransform {
  transform(priority: string): unknown {
    let priorityColor = 'primary';
    switch (priority) {
      case (priority = 'Low'): {
        return (priorityColor = 'primary');
      }
      case (priority = 'Medium'): {
        return (priorityColor = 'secondary');
      }
      case (priority = 'High'): {
        return (priorityColor = 'warning');
      }
      case (priority = 'Urgent'): {
        return (priorityColor = 'danger');
      }
      default: {
        return priorityColor;
      }
    }
  }
}
