import { Entity } from 'features/data/base-entity/config';
import { DateTime } from 'luxon';
import { useTranslation } from 'utils/i18n';
import * as Yup from 'yup';

const translateValidation = useTranslation('MAIN.EMPLOYEES.UPSERT_EMPLOYEE.EMPLOYEE_FORM.VALIDATION');

export class EmployeeForm {
  public id?: Entity['id'];
  public avatarID: number;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: DateTime | null;
  public email: string;
  public phone: string;
  public position: string;
  public startsOn: DateTime | null;
  public roleID: number;
  public hrID: number | null;
  public managerID: number | null;
  public leadID: number | null;
  public isOnboardingRequired: boolean;

  public static get validationSchema(): Yup.AnySchema {
    return Yup.object().shape({
      firstName: Yup.string().required(translateValidation('TEXT_REQUIRED')),
      lastName: Yup.string().required(translateValidation('TEXT_REQUIRED')),
      dateOfBirth: Yup.date().nullable(),
      email: Yup.string().email(translateValidation('TEXT_EMAIL'))
        .required(translateValidation('TEXT_REQUIRED')),
      phone: Yup.string()
        .max(15, translateValidation('TEXT_MAX_CHAR', { max: 15 }))
        .min(10, translateValidation('TEXT_MIN_CHAR', { min: 10 }))
        .required(translateValidation('TEXT_REQUIRED')),
      position: Yup.string().required(translateValidation('TEXT_REQUIRED')),
      startsOn: Yup.date().nullable(),
      roleID: Yup.number().required(translateValidation('TEXT_REQUIRED')),
      hrID: Yup.number().nullable(),
      managerID: Yup.number().nullable(),
      leadID: Yup.number().nullable(),
      isOnboardingRequired: Yup.boolean().required()
    });
  }

  constructor(employee?: Partial<EmployeeForm>) {
    this.avatarID = employee?.avatarID || 1; //TODO fix so that avatarID can accept null
    this.firstName = employee?.firstName;
    this.lastName = employee?.lastName;
    this.dateOfBirth = employee?.dateOfBirth;
    this.email = employee?.email;
    this.phone = employee?.phone;
    this.position = employee?.position;
    this.startsOn = employee?.startsOn;
    this.roleID = employee?.roleID;
    this.hrID = employee?.hrID;
    this.managerID = employee?.managerID;
    this.leadID = employee?.leadID;
    this.isOnboardingRequired = employee?.isOnboardingRequired;
  }
} // TODO temporary form, change it later

type FormInputs = Array<{ placeholder: string; name: keyof EmployeeForm; isDate?: boolean }>;

export const employeeDetailsInputs: FormInputs = [
  { placeholder: 'TEXT_FIRST_NAME', name: 'firstName' },
  { placeholder: 'TEXT_LAST_NAME', name: 'lastName' },
  { placeholder: 'TEXT_DATE_OF_BIRTH', name: 'dateOfBirth', isDate: true },
  { placeholder: 'TEXT_EMAIL_ADDRESS', name: 'email' },
  { placeholder: 'TEXT_PHONE_NUMBER', name: 'phone' },
  { placeholder: 'TEXT_POSITION', name: 'position' },
  { placeholder: 'TEXT_STARTS_ON', name: 'startsOn', isDate: true }
];

export const teamInputs: FormInputs = [
  { placeholder: 'TEXT_HR', name: 'hrID' },
  { placeholder: 'TEXT_MANAGER', name: 'managerID' },
  { placeholder: 'TEXT_LEAD', name: 'leadID' }
];

export const scripts = ['Office Tour - Omsk', 'Office Tour - Krasnodar', 'Work Tools', 'Meet Your Colleagues'];
