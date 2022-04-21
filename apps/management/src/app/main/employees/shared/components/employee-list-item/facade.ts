import { LabelTheme } from '../label/component';

class EmployeeListItemFacade {
  public labelStatus(label: string): LabelTheme {
    switch (label) {
      case 'Pending':
        return 'danger';
      case 'HR':
        return 'neutral';
      case 'Completed':
        return 'success';
      case 'Onboarding':
        return 'progress';
      case 'You':
        return 'success';
      case 'Admin':
        return 'neutral';
      default:
        return 'neutral';
    }
  }
}

export const employeeListItemFacade = new EmployeeListItemFacade();
