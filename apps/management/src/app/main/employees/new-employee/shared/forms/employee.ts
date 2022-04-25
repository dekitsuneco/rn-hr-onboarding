import { Employee } from 'features/data';

export class EmployeeForm extends Employee {
  constructor() {
    super();
    this.profile_image = '';
    this.first_name = '';
    (this.last_name = ''),
    (this.date_of_birth = ''),
    (this.email = ''),
    (this.phone_number = ''),
    (this.position = ''),
    (this.starts_on = '');
    this.role = '';
    this.team = {
      hr: '',
      manager: '',
      lead: ''
    };
    (this.onboarding_isRequired = false), (this.onboardingScripts = []);
  }
}
