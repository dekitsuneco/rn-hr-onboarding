export class EmployeeForm {
  public profile_image: string;
  public first_name: string;
  public last_name: string;
  public date_of_birth: string;
  public email: string;
  public phone_number: string;
  public position: string;
  public starts_on: string;
  public role: string;
  public hr: string;
  public manager: string;
  public lead: string;
  public onboarding_isRequired: boolean;
  public onboarding_scripts: Array<string>;

  constructor() {
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
    this.onboarding_scripts = [];
  }
} // TODO temporary form, change it later

type FormInputs = Array<{ placeholder: string; name: keyof EmployeeForm; type?: string }>;

export const employeeDetailsInputs: FormInputs = [
  { placeholder: 'First Name', name: 'first_name' },
  { placeholder: 'Last Name', name: 'last_name' },
  { placeholder: 'Date of Birth', name: 'date_of_birth', type: 'date' },
  { placeholder: 'Email Address', name: 'email' },
  { placeholder: 'Phone number', name: 'phone_number' },
  { placeholder: 'Position', name: 'position' },
  { placeholder: 'Starts on', name: 'starts_on', type: 'date' }
];

export const teamInputs: FormInputs = [
  { placeholder: 'HR', name: 'hr' },
  { placeholder: 'Manager', name: 'manager' },
  { placeholder: 'Lead', name: 'lead' }
];

export const scripts = ['Office Tour - Omsk', 'Office Tour - Krasnodar', 'Work Tools', 'Meet Your Colleagues'];
