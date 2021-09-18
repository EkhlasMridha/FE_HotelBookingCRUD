export class AppUtils{
    static isNullOrUndefined(object: any) {
        if (object == null || object == undefined) {
            return true;
        } else {
            return false;
        }
    }
}