export interface Data {
  reports: Report[];
}

export interface Report {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  reports: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 20000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    
  ],
};
