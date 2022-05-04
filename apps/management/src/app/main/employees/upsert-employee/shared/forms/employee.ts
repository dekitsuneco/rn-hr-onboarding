import * as Yup from 'yup';

export class EmployeeForm {
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public email: string;
  public phone: string;
  public position: string;
  public startsOn: string;
  public roleID: number;
  public hrID: number | null;
  public managerID: number | null;
  public leadID: number | null;
  public isOnboardingRequired: boolean;

  public static get validationSchema(): Yup.AnySchema {
    return Yup.object().shape({
      first_name: Yup.string().required('Please fill out this field'),
      last_name: Yup.string().required('Please fill out this field'),
      date_of_birth: Yup.string().required('Please fill out this field'),
      email: Yup.string().email('Please enter a valid email address')
        .required('Please fill out this field'),
      phone: Yup.string().max(15, 'No more than 15 characters')
        .min(10, 'At least 10 characters')
        .required(),
      position: Yup.string().required('Please fill out this field'),
      starts_on: Yup.string().required('Please fill out this field'),
      role_id: Yup.number().required('Please fill out this field'),
      hr_id: Yup.number(),
      manager_id: Yup.number(),
      lead_id: Yup.number(),
      is_onboarding_required: Yup.boolean().required()
    });
  }

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = '';
    this.email = '';
    this.phone = '';
    this.position = '';
    this.startsOn = '';
    this.roleID = 3;
    this.hrID = null;
    this.managerID = null;
    this.leadID = null;
    this.isOnboardingRequired = false;
  }
} // TODO temporary form, change it later

type FormInputs = Array<{ placeholder: string; name: keyof EmployeeForm }>;

export const employeeDetailsInputs: FormInputs = [
  { placeholder: 'First Name', name: 'firstName' },
  { placeholder: 'Last Name', name: 'lastName' },
  { placeholder: 'Date of Birth', name: 'dateOfBirth' },
  { placeholder: 'Email Address', name: 'email' },
  { placeholder: 'Phone number', name: 'phone' },
  { placeholder: 'Position', name: 'position' },
  { placeholder: 'Starts on', name: 'startsOn' }
];

export const teamInputs: FormInputs = [
  { placeholder: 'HR', name: 'hrID' },
  { placeholder: 'Manager', name: 'managerID' },
  { placeholder: 'Lead', name: 'leadID' }
];

export const scripts = ['Office Tour - Omsk', 'Office Tour - Krasnodar', 'Work Tools', 'Meet Your Colleagues'];
