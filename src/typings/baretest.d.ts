export declare interface Baretest { 
    (t: string, f: Function): void;
    run(): () => Promise<boolean>;
    skip(): (f: Function) => void;
    before(): (f: Function) => void;
    after(): (f: Function) => void;
    only(): (name: string, f: Function) => void;
}
  