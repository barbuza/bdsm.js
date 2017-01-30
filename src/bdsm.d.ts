declare module '@barbuza/bdsm' {

    export interface IColor {
        r: number;
        g: number;
        b: number;
    }

    export interface IOptions {
        resizeWidth?: number;
        cropHeight?: number;
        borderCropHeight?: number;
    }

    export function findDominantColors(imageFile: string, options?: IOptions): Promise<{ top: IColor, bottom: IColor }>;

}