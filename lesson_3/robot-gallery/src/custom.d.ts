// 只要import .css文件，都會遵守以下的約定
declare module "*.css" {
    const css : {[key: string]: string};
    export default css;
}