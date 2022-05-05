import * as Yup from 'yup';

export class EmployeeForm {
  public avatarID: number | null;
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
      firstName: Yup.string().required('Please fill out this field'),
      lastName: Yup.string().required('Please fill out this field'),
      email: Yup.string().email('Please enter a valid email address')
        .required('Please fill out this field'),
      phone: Yup.string().max(15, 'No more than 15 characters')
        .min(10, 'At least 10 characters')
        .required(),
      position: Yup.string().required('Please fill out this field'),
      roleID: Yup.number().required('Please fill out this field'),
      hrID: Yup.number().nullable()
        .notRequired(),
      managerID: Yup.number().nullable()
        .notRequired(),
      leadID: Yup.number().nullable()
        .notRequired(),
      isOnboardingRequired: Yup.boolean().required()
    });
  }

  constructor() {
    this.avatarID = 1;
    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = '1861-02-19';
    this.email = '';
    this.phone = '';
    this.position = '';
    this.startsOn = '2022-04-26';
    this.roleID = 3;
    this.hrID = 1;
    this.managerID = 1;
    this.leadID = 1;
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
