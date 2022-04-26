export class Employee {
  public profile_image: string;
  public first_name: string;
  public last_name: string;
  public date_of_birth: string; //TODO replace with the Date type
  public email: string;
  public phone_number: string;
  public position: string;
  public starts_on: string; //TODO replace with the Date type
  public role: string; //TODO replace with the appropriate type
  public hr: string; //TODO replace with the appropriate type
  public manager: string; //TODO replace with the appropriate type
  public lead: string; //TODO replace with the appropriate type

  public onboarding_isRequired: boolean;
  public onboardingScripts: Array<string>; //TODO replace with the appropriate type
}
