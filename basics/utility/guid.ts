export class Guid {
    // dont allow instantiation
    private constructor() { }

    static generateGUID(): string {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000000);
        return `${timestamp}-${randomNum}`;
    }
}