export class Employee {
  public profile_image: string;
  public details: {
    first_name: string;
    last_name: string;
    date_of_birth: string; //TODO replace with the Date type
    email: string;
    phone_number: string;
    position: string;
    starts_on: string; //TODO replace with the Date type
  };

  public role: string; //TODO replace with the appropriate type
  public team: {
    hr: string;
    manager: string;
    lead: string;
  }; //TODO replace with the appropriate type

  public onboarding: {
    isRequired: boolean;
    onboardingScripts: Array<string>; //TODO replace with the appropriate type
  };
}
