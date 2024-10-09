export class CreateUserInput {
    username!: string;
    email!: string;
    password!: string;
}

export class UpdateUserInput {
    username?: string;
    email?: string;
    password?: string;
}
