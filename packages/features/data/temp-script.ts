import { Task } from './task';

export class TempScript {
  public id: string;
  public title: string;
  public tasksTotal: number;
  public completed: number;
  public status: string;
  public logo: string;
  public tasks: Array<Task>;
} // TODO temporary fake script model
