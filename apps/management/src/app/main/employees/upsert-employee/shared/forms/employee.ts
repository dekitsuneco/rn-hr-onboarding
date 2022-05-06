import { useTranslation } from 'utils/i18n';
import * as Yup from 'yup';

const translate = useTranslation('MAIN.EMPLOYEES.UPSERT_EMPLOYEE');
const translateValidation = useTranslation('MAIN.EMPLOYEES.UPSERT_EMPLOYEE.VALIDATION');

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
      firstName: Yup.string().required(translateValidation('TEXT_REQUIRED')),
      lastName: Yup.string().required(translateValidation('TEXT_REQUIRED')),
      email: Yup.string().email(translateValidation('TEXT_EMAIL'))
        .required(translateValidation('TEXT_REQUIRED')),
      phone: Yup.string()
        .max(15, translateValidation('TEXT_MAX_CHAR', { max: 15 }))
        .min(10, translateValidation('TEXT_MIN_CHAR', { min: 10 }))
        .required(translateValidation('TEXT_REQUIRED')),
      position: Yup.string().required(translateValidation('TEXT_REQUIRED')),
      roleID: Yup.number().required(translateValidation('TEXT_REQUIRED')),
      hrID: Yup.number().nullable(),
      managerID: Yup.number().nullable(),
      leadID: Yup.number().nullable(),
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
    this.hrID = null;
    this.managerID = null;
    this.leadID = null;
    this.isOnboardingRequired = true;
  }
} // TODO temporary form, change it later

type FormInputs = Array<{ placeholder: string; name: keyof EmployeeForm }>;

export const employeeDetailsInputs: FormInputs = [
  { placeholder: translate('TEXT_FIRST_NAME'), name: 'firstName' },
  { placeholder: translate('TEXT_LAST_NAME'), name: 'lastName' },
  { placeholder: translate('TEXT_DATE_OF_BIRTH'), name: 'dateOfBirth' },
  { placeholder: translate('TEXT_EMAIL_ADDRESS'), name: 'email' },
  { placeholder: translate('TEXT_PHONE_NUMBER'), name: 'phone' },
  { placeholder: translate('TEXT_POSITION'), name: 'position' },
  { placeholder: translate('TEXT_STARTS_ON'), name: 'startsOn' }
];

export const teamInputs: FormInputs = [
  { placeholder: translate('TEXT_HR'), name: 'hrID' },
  { placeholder: translate('TEXT_MANAGER'), name: 'managerID' },
  { placeholder: translate('TEXT_LEAD'), name: 'leadID' }
];

export const scripts = ['Office Tour - Omsk', 'Office Tour - Krasnodar', 'Work Tools', 'Meet Your Colleagues'];
