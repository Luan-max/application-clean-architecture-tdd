export interface TaskProps {
  title: string;
}

export class Task {
  private _id: string;
  private props: TaskProps;

  constructor(props: TaskProps, id?: string) {
    this._id = id;
    this.props = { ...props };
  }

  public get id(): string {
    return this._id;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title(): string {
    return this.props.title;
  }
}
