export interface UserProps {
  name: string;
  document: string;
  email: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this._id = id;
    this.props = { ...props };
  }

  public get id(): string {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set document(document: string) {
    this.props.document = document;
  }

  public get document(): string {
    return this.props.document;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }
}
