export interface IUser
{
  cuenta:string;
  clave:string;
  company: Company;
}


interface Company {
  name: string;
  code: string;
}
