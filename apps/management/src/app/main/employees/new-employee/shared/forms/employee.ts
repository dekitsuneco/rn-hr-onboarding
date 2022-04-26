import { Employee } from 'features/data';

export class EmployeeForm extends Employee {
  constructor() {
    super();
    this.profile_image = '';
    this.first_name = '';
    this.last_name = '';
    this.date_of_birth = '';
    this.email = '';
    this.phone_number = '';
    this.position = '';
    this.starts_on = '';
    this.role = '';
    this.hr = '';
    this.manager = '';
    this.lead = '';
    this.onboarding_isRequired = false;
    this.onboardingScripts = [];
  }
}

type FormInputs = Array<{ placeholder: string; name: keyof EmployeeForm }>;

export const employeeDetailsInputs: FormInputs = [
  { placeholder: 'First Name', name: 'first_name' },
  { placeholder: 'Last Name', name: 'last_name' },
  { placeholder: 'Date of Birth', name: 'date_of_birth' },
  { placeholder: 'Email Address', name: 'email' },
  { placeholder: 'Phone number', name: 'phone_number' },
  { placeholder: 'Position', name: 'position' },
  { placeholder: 'Starts on', name: 'starts_on' }
];

export const teamInputs: FormInputs = [
  { placeholder: 'HR', name: 'hr' },
  { placeholder: 'Manager', name: 'manager' },
  { placeholder: 'Lead', name: 'lead' }
];

export const scripts = ['Office Tour - Omsk', 'Office Tour - Krasnodar', 'Work Tools', 'Meet Your Colleagues'];
