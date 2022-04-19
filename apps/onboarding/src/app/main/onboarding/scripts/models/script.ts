import { Task } from './taks';

export class Script {
  public id: string;
  public title: string;
  public tasksTotal: number;
  public completed: number;
  public status: string;
  public logo: string;
  public tasks: Array<Task>;
}
