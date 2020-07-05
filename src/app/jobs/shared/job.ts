export interface Job{
  id: string;
  company: string;
  companyURL: string;
  created: Date;
  description: string;
  apply: string;
  location: Array<string>;
  title: string;
  type: string;
}
