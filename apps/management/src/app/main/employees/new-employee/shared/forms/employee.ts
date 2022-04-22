import { Employee } from 'features/data';

export class EmployeeForm extends Employee {
  constructor() {
    super();
    this.profile_image = '';
    this.details = {
      first_name: '',
      last_name: '',
      date_of_birth: '',
      email: '',
      phone_number: '',
      position: '',
      starts_on: ''
    };
    this.role = '';
    this.team = {
      hr: '',
      manager: '',
      lead: ''
    };
    this.onboarding = {
      isRequired: false,
      onboardingScripts: []
    };
  }
}
